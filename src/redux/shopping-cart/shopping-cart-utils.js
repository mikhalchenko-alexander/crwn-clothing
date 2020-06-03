export const addCartItem = (currentItems, itemToAdd) => {
  const existingItem = currentItems.find(item => item.id === itemToAdd.id);
  if (existingItem) {
    return currentItems.map(item => item.id === itemToAdd.id ? { ...item, quantity: item.quantity + 1 } : item);
  } else {
    return [...currentItems, { ...itemToAdd, quantity: 1 }];
  }
};

export const clearCartItem = (currentItems, itemToRemoveId) => {
  return currentItems.filter(item => item.id !== itemToRemoveId);
};
