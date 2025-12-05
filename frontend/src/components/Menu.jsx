const Menu = () => {
  // 🧋 Define all options in one place
  const options = {
    tea: ["Jasmine Green Tea", "Black Tea", "Thai Tea", "Jasmine", "Oolong", "Chai", ],
    fruit: ["Strawberry","Lemon","Wintermelon","Peach", "Lychee","Passionfruit","Mango",
              "Coconut","Watermelon",],
    topping: ["Mango Pudding","Coconut Jelly","Tapioca Pearl","Herbal Jelly","Lychee Jelly",
              "Mango Jelly","Matcha Jelly","Milk Foam","Red Bean",],
    classics: ["Classic Milk Tea","Thai Milk Tea","Matcha Latte","Matcha Green Tea",],
  };

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
          {Object.entries(options).map(([category, items]) => (
            <div className="card" key={category}>
              <h3>
                {category.charAt(0).toUpperCase() + category.slice(1)}{" "}
                {category === "classics" ? "$5" : ""}
              </h3>
              <ul>
                {items.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Menu;
