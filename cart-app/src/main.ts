
let cartCount = 0;

export const mountCart = (el: HTMLElement) => {
  const render = () => {
    el.innerHTML = `
    <div style="padding: 1rem; border:2px;  border-radius: 8px; background: #f0fdf4; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1); color: # 166534; font-family: sans-serif;">
    <h2>Cart</h2>
    <p>Total items: <strong>${cartCount}</strong> </p>  
    <button id="clear-cart" style="margin-top: 10px; padding: 8px 16px; cursor: pointer; background: #c52222ff; color: white; border: none; border-radius: 4px;">Sepeti Temizle</button>
    </div>
    `;

    document.getElementById('clear-cart')?.addEventListener('click', () => {
      cartCount = 0;
      console.log('clear cart');
      render();
    });
  };

  render();
};

const devRoot = document.querySelector<HTMLDivElement>('#cart-dev-root');
if (devRoot) {
  mountCart(devRoot);
};