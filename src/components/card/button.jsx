export const Button = ({ variant, children }) => {
  if (variant === "secondary") {
    return (
      <button className="bg-transparent border border-indigo-600 flex items-center gap-2 text bg-indigo-600 p-2 rounded-xl">
        {children}
      </button>
    );
  }
  return <button className="bg-blue-600 flex items-center gap-2 p-2 rounded-xl">{children}</button>;
};
