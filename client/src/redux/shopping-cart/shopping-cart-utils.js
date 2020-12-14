function changeQuantity(items, itemToUpdateId, amount) {
  return items.map(item => item.id === itemToUpdateId ? { ...item, quantity: item.quantity + amount } : item);
}

export const addCartItem = (currentItems, itemToAdd) => {
  const existingItem = currentItems.find(item => item.id === itemToAdd.id);
  if (existingItem) {
    return changeQuantity(currentItems, itemToAdd.id, +1);
  } else {
    return [...currentItems, { ...itemToAdd, quantity: 1 }];
  }
};

export const removeCartItem = (currentItems, itemToRemoveId) => {
  const existingItem = currentItems.find(item => item.id === itemToRemoveId);
  if (!existingItem) {
    return currentItems;
  }

  if (existingItem.quantity === 1) {
    return clearCartItem(currentItems, itemToRemoveId);
  } else {
    return changeQuantity(currentItems, itemToRemoveId, -1);
  }
};

export const clearCartItem = (currentItems, itemToRemoveId) => {
  return currentItems.filter(item => item.id !== itemToRemoveId);
};
