import "./Examples.css";
export default function TabButton({ children, onClick }) {
  return (
    <li id="TabButton-li">
      <button id="TabButton-Button" onClick={onClick}>
        {children}
      </button>
    </li>
  );
}
