"use client";

import { createContext, useCallback, useContext, useEffect, useMemo, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { MessageCircle, Minus, Sparkles } from "lucide-react";
import { Mascot } from "page-mascot";

export type AvatarMood = "idle" | "greeting" | "curious" | "attentive" | "encouraging" | "concerned" | "thinking" | "celebrating" | "goodbye";

type AvatarEvent = { mood: AvatarMood; message: string; duration?: number };
type AvatarAssistantContextValue = { showHint: (event: AvatarEvent, target?: HTMLElement | null) => void; returnToIdle: (delay?: number) => void };
type AvatarMotion = { x: number; y: number; lean: number; gazeX: number; gazeY: number };
type AvatarDock = { left: number; top: number; below: boolean };

const restingMotion: AvatarMotion = { x: 0, y: 0, lean: 0, gazeX: 0, gazeY: 0 };

const idleMessage = "I’m here if you need a little guidance.";
const moodPriority: Record<AvatarMood, number> = {
  idle: 0,
  greeting: 1,
  curious: 1,
  attentive: 1,
  encouraging: 2,
  thinking: 2,
  concerned: 3,
  celebrating: 3,
  goodbye: 3,
};
const AvatarAssistantContext = createContext<AvatarAssistantContextValue | null>(null);

export function AvatarAssistantProvider({ children }: { children: React.ReactNode }) {
  const [event, setEvent] = useState<AvatarEvent>({ mood: "greeting", message: "Namaste! Take a look around—I’ll point out the good bits." });
  const [minimized, setMinimized] = useState(false);
  const [avatarMotion, setAvatarMotion] = useState<AvatarMotion>(restingMotion);
  const [dock, setDock] = useState<AvatarDock | null>(null);
  const timerRef = useRef<number | null>(null);
  const lockUntilRef = useRef(0);
  const activeTargetRef = useRef<HTMLElement | null>(null);
  const activeMoodRef = useRef<AvatarMood>("greeting");
  const frameRef = useRef<number | null>(null);
  const reducedMotionRef = useRef(false);

  useEffect(() => {
    const timer = window.setTimeout(() => setMinimized(sessionStorage.getItem("apna-avatar-minimized") === "true"), 0);
    return () => window.clearTimeout(timer);
  }, []);

  const motionForTarget = useCallback((target: HTMLElement): AvatarMotion => {
    const rect = target.getBoundingClientRect();
    const targetX = rect.left + rect.width / 2;
    const targetY = rect.top + rect.height / 2;
    const directionX = Math.max(-1, Math.min(1, (targetX - window.innerWidth / 2) / (window.innerWidth / 2)));
    const directionY = Math.max(-1, Math.min(1, (targetY - window.innerHeight / 2) / (window.innerHeight / 2)));
    return {
      x: directionX * 10,
      y: directionY * 4,
      lean: directionX * 7,
      gazeX: directionX * 3.5,
      gazeY: directionY * 2.5,
    };
  }, []);

  const dockForTarget = useCallback((target: HTMLElement): AvatarDock | null => {
    const rect = target.getBoundingClientRect();
    if (rect.bottom < 0 || rect.top > window.innerHeight) return null;

    const assistantWidth = window.innerWidth < 640 ? Math.min(205, window.innerWidth - 105) : 220;
    const estimatedHeight = window.innerWidth < 640 ? 170 : 185;
    const margin = 12;
    const left = Math.max(margin, Math.min(window.innerWidth - assistantWidth - margin, rect.right - assistantWidth));
    const hasRoomAbove = rect.top >= estimatedHeight + margin;
    const top = hasRoomAbove
      ? rect.top - estimatedHeight + 40
      : Math.min(window.innerHeight - estimatedHeight - margin, rect.bottom + margin);

    return { left, top: Math.max(margin, top), below: !hasRoomAbove };
  }, []);

  useEffect(() => {
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    const syncMotionPreference = () => {
      reducedMotionRef.current = media.matches;
      if (media.matches) setAvatarMotion(restingMotion);
    };
    syncMotionPreference();

    const handlePointerMove = (pointer: PointerEvent) => {
      if (reducedMotionRef.current || window.innerWidth < 768 || !["idle", "greeting"].includes(activeMoodRef.current)) return;
      const avatarX = window.innerWidth - 62;
      const avatarY = window.innerHeight - 62;
      const deltaX = pointer.clientX - avatarX;
      const deltaY = pointer.clientY - avatarY;
      if (Math.hypot(deltaX, deltaY) > 520 || frameRef.current) return;
      frameRef.current = window.requestAnimationFrame(() => {
        const gazeX = Math.max(-3.5, Math.min(3.5, deltaX / 85));
        const gazeY = Math.max(-2.5, Math.min(2.5, deltaY / 85));
        setAvatarMotion({ x: gazeX * .65, y: gazeY * .4, lean: gazeX * 1.25, gazeX, gazeY });
        frameRef.current = null;
      });
    };

    const updateAnchoredPosition = () => {
      const target = activeTargetRef.current;
      if (!reducedMotionRef.current) setAvatarMotion(target?.isConnected ? motionForTarget(target) : restingMotion);
      setDock(target?.isConnected ? dockForTarget(target) : null);
    };

    media.addEventListener("change", syncMotionPreference);
    window.addEventListener("pointermove", handlePointerMove, { passive: true });
    window.addEventListener("resize", updateAnchoredPosition, { passive: true });
    window.addEventListener("scroll", updateAnchoredPosition, { passive: true });
    return () => {
      media.removeEventListener("change", syncMotionPreference);
      window.removeEventListener("pointermove", handlePointerMove);
      window.removeEventListener("resize", updateAnchoredPosition);
      window.removeEventListener("scroll", updateAnchoredPosition);
      if (frameRef.current) window.cancelAnimationFrame(frameRef.current);
    };
  }, [dockForTarget, motionForTarget]);

  const clearTimer = useCallback(() => {
    if (timerRef.current) window.clearTimeout(timerRef.current);
    timerRef.current = null;
  }, []);

  useEffect(() => clearTimer, [clearTimer]);

  const showHint = useCallback((next: AvatarEvent, target?: HTMLElement | null) => {
    const priority = moodPriority[next.mood];
    if (Date.now() < lockUntilRef.current && priority < 3) return;
    clearTimer();
    activeMoodRef.current = next.mood;
    activeTargetRef.current = target ?? null;
    setEvent(next);
    if (!reducedMotionRef.current) setAvatarMotion(target ? motionForTarget(target) : restingMotion);
    setDock(target ? dockForTarget(target) : null);
    if (priority === 3) lockUntilRef.current = Date.now() + (next.duration ?? 3200);
    if (next.duration) {
      timerRef.current = window.setTimeout(() => {
        activeMoodRef.current = "idle";
        activeTargetRef.current = null;
        setAvatarMotion(restingMotion);
        setDock(null);
        setEvent({ mood: "idle", message: idleMessage });
      }, next.duration);
    }
  }, [clearTimer, dockForTarget, motionForTarget]);

  const returnToIdle = useCallback((delay = 900) => {
    clearTimer();
    const lockRemaining = Math.max(0, lockUntilRef.current - Date.now());
    timerRef.current = window.setTimeout(() => {
      activeMoodRef.current = "idle";
      activeTargetRef.current = null;
      setAvatarMotion(restingMotion);
      setDock(null);
      setEvent({ mood: "idle", message: idleMessage });
    }, lockRemaining + delay);
  }, [clearTimer]);

  const toggleMinimized = () => {
    const next = !minimized;
    setMinimized(next);
    sessionStorage.setItem("apna-avatar-minimized", String(next));
    if (next) showHint({ mood: "goodbye", message: "I’ll stay out of the way." });
  };

  const value = useMemo(() => ({ showHint, returnToIdle }), [returnToIdle, showHint]);

  return (
    <AvatarAssistantContext.Provider value={value}>
      {children}
      <div
        className={`avatar-assistant ${minimized ? "is-minimized" : ""} ${dock ? "is-anchored" : ""} ${dock?.below ? "is-below" : ""}`}
        aria-live="polite"
        style={dock ? { left: dock.left, top: dock.top, right: "auto", bottom: "auto" } : undefined}
      >
        <AnimatePresence mode="wait">
          {!minimized && (
            <motion.div key={event.message} initial={{ opacity: 0, y: 8, scale: 0.96 }} animate={{ opacity: 1, y: 0, scale: 1 }} exit={{ opacity: 0, y: 4, scale: 0.98 }} className="avatar-assistant-bubble">
              <span className="avatar-assistant-kicker"><Sparkles size={11} /> Apna guide</span>
              <p>{event.message}</p>
              <button type="button" onClick={toggleMinimized} aria-label="Minimize avatar assistant" className="avatar-assistant-minimize"><Minus size={15} /></button>
            </motion.div>
          )}
        </AnimatePresence>
        <div
          onClick={() => minimized && toggleMinimized()}
          className="avatar-assistant-character"
          title={minimized ? "Open Apna guide" : undefined}
          style={{ transform: `translate3d(${avatarMotion.x}px, ${avatarMotion.y}px, 0) rotate(${avatarMotion.lean}deg)` }}
        >
          <Mascot
            directions="/mascots/abhay-directions.webp"
            reactions="/mascots/abhay-reactions.webp"
            size={minimized ? 84 : dock ? 96 : 118}
            label={minimized ? "Abhay guide to open the assistant" : `Abhay guide, currently ${event.mood}`}
            className={`avatar-assistant-mascot mood-${event.mood}`}
          />
          {minimized && <span className="avatar-assistant-open"><MessageCircle size={14} /></span>}
        </div>
      </div>
    </AvatarAssistantContext.Provider>
  );
}

export function useAvatarAssistant() {
  const context = useContext(AvatarAssistantContext);
  if (!context) throw new Error("useAvatarAssistant must be used inside AvatarAssistantProvider");
  return context;
}
