const Cart = ({ cart, setCart }) => {

    // Remove one item
    const removeItem = (id) => {
        const updated = cart.filter(item => item.id !== id);
        setCart(updated);
    };

    // Clear all items
    const clearCart = () => {
        if (window.confirm("Clear all items?")) {
            setCart([]);
        }
    };

    const updateQuantity = (id, delta) => {
        const updated = cart
            .map(item => {
                if (item.id === id) {
                    const newQuantity = item.quantity + delta;
                    if (newQuantity <= 0) return null;
                    return {
                        ...item,
                        quantity: newQuantity,
                        totalPrice: item.unitPrice * newQuantity
                    };
                }
                return item;
            })
            .filter(item => item !== null);

        setCart(updated);
    };

    const total = cart.reduce((sum, item) => sum + item.totalPrice, 0);

    return (
        <div id="cart">
            <h2>🛒 Your Cart</h2>

            {cart.length === 0 ? (
                <p>Your cart is empty. <a href="/order">Go back to order page</a></p>
            ) : (
                <>
                    <table className="cart-table">
                        <thead>
                            <tr>
                                <th>Qty</th>
                                <th>Item</th>
                                <th>Price</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {cart.map(item => (
                                <tr key={item.id}>
                                    <td>{item.quantity}</td>
                                    <td>{item.name}</td>
                                    <td>${item.totalPrice.toFixed(2)}</td>
                                    <td>
                                        <button onClick={() => updateQuantity(item.id, -1)}>−</button>
                                        <button onClick={() => updateQuantity(item.id, 1)}>+</button>
                                        <button onClick={() => removeItem(item.id)}>X</button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                    <h3>Total: ${total}</h3>
                    <button onClick={clearCart}>🗑️ Clear Cart</button>
                </>
            )}
        </div>
    );
};

export default Cart;
