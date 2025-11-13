import nigga from "./assets/nigga.png";
import amine from "./assets/amine.png";
import weeknd from "./assets/weeknd.png";
import viking from "./assets/viking.png";

function Header() {
  return (
    <header>
      <h1>React Essentials</h1>
      <p>learning react!</p>
    </header>
  );
}

function DumbShit({ image, price, features }) {
  return (
    <li>
      <img src={image} />
      <h2>{price}</h2>
      <p>{features}</p>
    </li>
  );
}
function App() {
  return (
    <div>
      <div id="header">
        <Header />
      </div>
      <main>
        <section id="dumbshit">
          <h2>Dumb Shit</h2>
          <ul id="dumbshit-ul">
            <DumbShit
              image={nigga}
              price="$1.69"
              features="Obeys and works for free with less food"
            />

            <DumbShit
              image={amine}
              price="Can't put a price on cuz i'm the best"
              features="G.O.A.T"
            />

            <DumbShit image={weeknd} price="$10M" features="Great songs" />

            <DumbShit
              image={viking}
              price="10k per month"
              features="Protects you or lead u to death with his dumb ideas"
            />
          </ul>
        </section>
      </main>
    </div>
  );
}
export default App;
