export default function Container({ children, className = "" }) {
  return (
    <div
      className={`
        max-w-7xl
        mx-auto
        px-2
        lg:px-10
        ${className}
      `}
    >
      {children}
    </div>
  );
}
