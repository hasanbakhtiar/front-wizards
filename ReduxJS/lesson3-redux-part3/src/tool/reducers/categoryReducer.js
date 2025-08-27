

const initialState = [];

export const categoryReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'CREATE_CATEGORY':
      return [...state, action.CATEGORY];
    case 'UPDATE_CATEGORY':
      return 'CATEGORY was updated';
    case 'DELETE_CATEGORY':
      return 'CATEGORY was deleted';
    default:
      return state;
  }
};
