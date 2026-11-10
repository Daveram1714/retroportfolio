import { useState, type ReactNode } from "react";
import { Minus, RotateCcw, X } from "lucide-react";

type WindowFrameProps = {
  title: string;
  index?: string;
  children: ReactNode;
  className?: string;
};

export function WindowFrame({ title, index, children, className = "" }: WindowFrameProps) {
  const [minimized, setMinimized] = useState(false);
  const [closed, setClosed] = useState(false);

  if (closed) {
    return (
      <button type="button" className="story-window-restore" onClick={() => setClosed(false)}>
        <RotateCcw size={14} /> RESTORE {title.toUpperCase()}
      </button>
    );
  }

  return (
    <section className={`story-window ${className}`}>
      <div className="story-window-bar">
        <span className="story-window-symbol">✳</span>
        <span className="story-window-title">{title}</span>
        {index ? <span className="story-window-index">{index}</span> : null}
        <div className="story-window-controls">
          <button type="button" aria-label={minimized ? "Restore window" : "Minimize window"} onClick={() => setMinimized((value) => !value)}><Minus size={12} /></button>
          <button type="button" aria-label="Close window" onClick={() => setClosed(true)}><X size={12} /></button>
        </div>
      </div>
      {!minimized ? <div className="story-window-body">{children}</div> : null}
    </section>
  );
}
