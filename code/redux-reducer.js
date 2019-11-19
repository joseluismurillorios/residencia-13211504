const defaultState = { isAdmin: false };

export const reducer = (state = defaultState, action) => {
  switch (action.type) {
    case 'common/SET_ADMIN': {
      return { ...state, isAdmin: action.payload };
    }
    default: { return state; }
  }
};