
const initialState = [];

export const productReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'CREATE_PRODUCT':
      return [...state, action.product];
    case 'UPDATE_PRODUCT':
      return 'product was updated';
    case 'DELETE_PRODUCT':
      return 'product was deleted';
    default:
      return state;
  }
};
