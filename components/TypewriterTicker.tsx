"use client";

import { useEffect, useRef, useState } from "react";

type TypewriterTickerProps = {
  text: string;
  ariaLabel?: string;
  typingDelay?: number;
  pauseDelay?: number;
  repeat?: boolean;
  viewportClassName?: string;
  textClassName?: string;
  caretClassName?: string;
  caretChar?: string;
};

function joinClasses(...classes: Array<string | undefined>) {
  return classes.filter(Boolean).join(" ");
}

export default function TypewriterTicker({
  text,
  ariaLabel = "Typewriter text",
  typingDelay = 24,
  pauseDelay = 500,
  repeat = true,
  viewportClassName,
  textClassName,
  caretClassName,
  caretChar = "|",
}: TypewriterTickerProps) {
  const [typedLength, setTypedLength] = useState(0);
  const viewportRef = useRef<HTMLDivElement>(null);
  const hasFinished = typedLength >= text.length;

  useEffect(() => {
    if (!repeat && hasFinished) {
      return;
    }

    const timer = setTimeout(() => {
      if (typedLength < text.length) {
        setTypedLength((value) => value + 1);
        return;
      }

      setTypedLength(0);
    }, typedLength < text.length ? typingDelay : pauseDelay);

    return () => clearTimeout(timer);
  }, [hasFinished, pauseDelay, repeat, text.length, typedLength, typingDelay]);

  useEffect(() => {
    const viewport = viewportRef.current;

    if (!viewport) {
      return;
    }

    if (typedLength === 0) {
      viewport.scrollLeft = 0;
      return;
    }

    viewport.scrollLeft = viewport.scrollWidth;
  }, [typedLength]);

  return (
    <div
      ref={viewportRef}
      className={joinClasses("typewriter-viewport", viewportClassName)}
    >
      <p className={joinClasses("typewriter-text", textClassName)} aria-label={ariaLabel}>
        {text.slice(0, typedLength)}
        <span
          className={joinClasses(
            "typewriter-caret",
            !repeat && hasFinished ? "typewriter-caret-hidden" : undefined,
            caretClassName,
          )}
          aria-hidden="true"
        >
          {caretChar}
        </span>
      </p>
    </div>
  );
}
