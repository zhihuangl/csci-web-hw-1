import { fetchMenu } from "../services/order";
import { useEffect, useState } from "react";

const Menu = () => {
  const [menu, setMenu] = useState(null);
  
  useEffect(() => {
  async function loadMenu() {
    const data = await fetchMenu();
    setMenu(data);
  }
  loadMenu();
}, []);

  return (
    <>
      <div id="menu">
        <h1>PEARL & LEAF</h1>
        <p className="menu-info">
          Choose a Tea, Topping & Fruit for $6
          <br />
          Extra Topping/Fruit for $0.50
        </p>

        <div className="menu-grid">
          {
            menu && (
              <>
                <div className="card">
                  <h3>Classics $5</h3>
                  <ul>
                    {menu["classicDrinks"].map((drink, index) => (
                      <li key={index}>{drink.name}</li>
                    ))}
                  </ul>
                </div>
                <div className="card">
                  <h3>Tea</h3>
                  <ul>
                    {menu["customOptions"].tea.map((tea, index) => (
                      <li key={index}>{tea}</li>
                    ))}
                  </ul>
                </div>
                <div className="card">
                  <h3>Fruits</h3>
                  <ul>
                    {menu["customOptions"].fruit.map((fruit, index) => (
                      <li key={index}>{fruit}</li>
                    ))}
                  </ul>
                </div>
                <div className="card">
                  <h3>Toppings</h3>
                  <ul> 
                    {menu["customOptions"].toppings.map((topping, index) => (
                      <li key={index}>{topping}</li>
                    ))}
                  </ul>
                </div>
              </>
            )
          }
        </div>
      </div>
    </>
  );
};

export default Menu;
