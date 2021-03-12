import logo from "./logo.svg";

import "./App.css";
function App() {
  return (
    <div class="all">
      <section class="advert">
        <span>
          <div class="center">
            <img src={logo} className="path App-logo" alt="logo" />
            <h1 class="title">Burger{`(stack_erz )`}</h1>
          </div>
        </span>
      </section>
      <br></br>
      <section class="wrapper">
        <div class="c-two">
          <h1 class="list-name"> ingredients</h1>
        </div>

        <div class="c-two">
          <h1>Burger Stack</h1>
        </div>
      </section>
    </div>
  );
}

export default App;
