type SectionHeadingProps = {
  number: string;
  eyebrow: string;
  title: string;
  accent: string;
  description?: string;
};

export function SectionHeading({ number, eyebrow, title, accent, description }: SectionHeadingProps) {
  return (
    <div className="story-heading">
      <div className="story-heading-meta"><span>{number}</span><span>{eyebrow}</span></div>
      <h2>{title} <em>{accent}</em></h2>
      {description ? <p>{description}</p> : null}
    </div>
  );
}
