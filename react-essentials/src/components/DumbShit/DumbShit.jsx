import "./DumbShit.css";
export default function DumbShit({ image, price, features }) {
  return (
    <li>
      <img src={image} />
      <h2>{price}</h2>
      <p>{features}</p>
    </li>
  );
}
