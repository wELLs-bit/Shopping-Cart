// Get all necessary elements
const plusBtns = document.querySelectorAll('.btn-plus');
const minusBtns = document.querySelectorAll('.btn-minus');
const deleteBtns = document.querySelectorAll('.btn-delete');
const likeBtns = document.querySelectorAll('.btn-like');

// Function to update total
function updateTotal() {
  let total = 0;
  const items = document.querySelectorAll('.cart-item');
  
  items.forEach(item => {
    const price = parseFloat(item.querySelector('.item-price').textContent);
    const qty = parseInt(item.querySelector('.item-qty').textContent);
    total += price * qty;
  });

  document.querySelector('#total-price').textContent = `$${total.toFixed(2)}`;
}

// Increment quantity
plusBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    const qtyElem = btn.parentElement.querySelector('.item-qty');
    qtyElem.textContent = parseInt(qtyElem.textContent) + 1;
    updateTotal();
  });
});

// Decrement quantity
minusBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    const qtyElem = btn.parentElement.querySelector('.item-qty');
    if (parseInt(qtyElem.textContent) > 1) {
      qtyElem.textContent = parseInt(qtyElem.textContent) - 1;
      updateTotal();
    }
  });
});

// Delete item
deleteBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    const item = btn.closest('.cart-item');
    item.remove();
    updateTotal();
  });
});

// Like item
likeBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    btn.classList.toggle('liked');
  });
});

// Initial total update
updateTotal();
