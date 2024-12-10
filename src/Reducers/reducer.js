import { actions } from '../Actions/actions';

export const reducer = (state, action) => {
  switch (action.type) {
    case actions.CHANGE_TITLE: {
      return { ...state, title: action.payload };
    }
  }
  return { ...state };
};
