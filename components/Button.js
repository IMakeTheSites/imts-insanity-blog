function Button({ children, type, onClick, disabled }) {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className="bg-light-green text-gray-100 rounded px-4 py-2 my-2 hover:bg-green-700"
    >
      {children}
    </button>
  );
}

export default Button;
