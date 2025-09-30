const Menu = () => {
  return (
    <>
      <div id="menu">
        <h1>PEARL & LEAF</h1>
        <p class="menu-info">
          Choose a Tea, Topping & Fruit for $6
          <br />
          Extra Topping/Fruit for $0.50
        </p>

        <div class="menu-grid">
          <div class="card">
            <h3>Teas</h3>
            <ul>
              <li>Jasmine Green Tea</li>
              <li>Black Tea</li>
              <li>Thai Tea</li>
              <li>Jasmine</li>
              <li>Oolong</li>
              <li>Chai</li>
            </ul>
          </div>

          <div class="card">
            <h3>Fruits</h3>
            <ul>
              <li>Strawberry</li>
              <li>Lemon</li>
              <li>Wintermelon</li>
              <li>Peach</li>
              <li>Lychee</li>
              <li>Passionfruit</li>
              <li>Mango</li>
              <li>Coconut</li>
              <li>Watermelon</li>
            </ul>
          </div>

          <div class="card">
            <h3>Toppings</h3>
            <ul>
              <li>Mango Pudding</li>
              <li>Coconut Jelly</li>
              <li>Tapioca Pearl</li>
              <li>Herbal Jelly</li>
              <li>Lychee Jelly</li>
              <li>Mango Jelly</li>
              <li>Matcha Jelly</li>
              <li>Milk Foam</li>
              <li>Red Bean</li>
            </ul>
          </div>
        </div>

        <div class="classics">
          <h2>Classics $5</h2>
          <ul>
            <li>Classic Milk Tea</li>
            <li>Thai Milk Tea</li>
            <li>Matcha Latte</li>
            <li>Matcha Green Tea</li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Menu;
