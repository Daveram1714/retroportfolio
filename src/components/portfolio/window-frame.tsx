import type { ReactNode } from "react";
import { Minus, X } from "lucide-react";

type WindowFrameProps = {
  title: string;
  index?: string;
  children: ReactNode;
  className?: string;
  onClose?: () => void;
};

export function WindowFrame({
  title,
  index,
  children,
  className = "",
  onClose,
}: WindowFrameProps) {
  return (
    <section className={`story-window ${className}`}>
      <div className="story-window-bar">
        <span className="story-window-symbol">✳</span>
        <span className="story-window-title">{title}</span>
        {index ? <span className="story-window-index">{index}</span> : null}
        <div className="story-window-controls">
          <button type="button" aria-label="Minimize window" onClick={onClose}><Minus size={12} /></button>
          <button type="button" aria-label="Close window" onClick={onClose}><X size={12} /></button>
        </div>
      </div>
      <div className="story-window-body">{children}</div>
    </section>
  );
}
