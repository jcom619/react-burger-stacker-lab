export default function Ingredient() {
  return <div>hello from Ingredient</div>;
}

// IngredientList.jsx
import Ingredient from "./Ingredient.jsx";

export default function IngredientList() {
  return (
    <div>
      <h1>Ingredient List</h1>
      <Ingredient />
    </div>
  );
}

// BurgerStack.jsx
import Ingredient from "./Ingredient.jsx";

export default function BurgerStack() {
  return (
    <div>
      <h1>Burger Stack</h1>
      <Ingredient />
    </div>
  );
}

// App.js
import BurgerStack from "./components/BurgerStack.jsx";
import IngredientList from "./components/IngredientList.jsx";
import "./App.css";

function App() {
  import ingredient from "";

  return (
    <div className="App">
      <IngredientList />
      <BurgerStack />
    </div>
  );
}

export default App;
