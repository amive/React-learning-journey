import { useState } from "react";
import nigga from "./assets/images/nigga.png";
import mohamed from "./assets/images/mohamed.png";
import amine from "./assets/images/amine.png";
import weeknd from "./assets/images/weeknd.png";
import viking from "./assets/images/viking.png";
import niggaExample from "./assets/images/niggaExample.png";
import mohamedExample from "./assets/images/mohamedExample.png";
import amineExample from "./assets/images/amineExample.png";
import weekndExample from "./assets/images/weekndExample.png";
import vikingExample from "./assets/images/vikingExample.png";
import ClickAButton from "./assets/images/ClickAButton.png";
import Header from "./components/Header/Header.jsx";
import DumbShit from "./components/DumbShit/DumbShit.jsx";
import TabButton from "./components/Examples/TabButton.jsx";

function App() {
  const [selectedExample, setSelectedExample] = useState(ClickAButton);

  function clickHandler(selectedButton) {
    setSelectedExample(selectedButton);
    // console.log(selectedExample);
  }
  return (
    <div>
      <div id="header">
        <Header />
      </div>
      <main>
        <section id="dumbshit">
          <h2 id="DumbShit-h2">Dumb Shit</h2>
          <ul id="dumbshit-ul">
            <DumbShit
              image={nigga}
              price="$1.69"
              features="Obeys and works for free with less food"
            />
            <DumbShit
              image={mohamed}
              price="shomil"
              features="حانت لحظتك عطوة"
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
        <section>
          <h2 id="Examples-h2">Examples</h2>
          <menu id="Examples-menu">
            <TabButton onClick={() => clickHandler(niggaExample)}>
              Nigga
            </TabButton>
            <TabButton onClick={() => clickHandler(mohamedExample)}>
              Mohamed
            </TabButton>
            <TabButton onClick={() => clickHandler(amineExample)}>
              Amine
            </TabButton>
            <TabButton onClick={() => clickHandler(weekndExample)}>
              Weeknd
            </TabButton>
            <TabButton onClick={() => clickHandler(vikingExample)}>
              Viking
            </TabButton>
          </menu>
        </section>
        <section>
          <img src={selectedExample}></img>
        </section>
      </main>
    </div>
  );
}
export default App;
