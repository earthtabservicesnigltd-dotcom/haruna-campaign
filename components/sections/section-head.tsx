interface SectionHeadProps {
  number: string;
  title: React.ReactNode;
  className?: string;
}

export function SectionHead({ number, title, className = "" }: SectionHeadProps) {
  return (
    <div className={`sec-head rise ${className}`}>
      <span className="num">{number}</span>
      <h2>
        {title}
      </h2>
    </div>
  );
}