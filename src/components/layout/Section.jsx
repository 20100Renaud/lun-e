export default function Section({ children, id, className = "" }) {
  return (
    <section
      id={id}
      className={`
        relative
        min-h-screen
        flex
        items-center
        pt-24
        overflow-hidden
        ${className}
      `}
    >
      {children}
    </section>
  );
}
