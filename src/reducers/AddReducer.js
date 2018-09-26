import {
    CATEGORY,
    TITLE_CHANGED,
    DESCRIPTION_CHANGED,
  } from '../actions/types';
  
  const INITIAL_STATE = {
    category: '',
    title: '',
    description: '',
  
  };
  
  export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
      case CATEGORY:
        return { ...state, category: action.payload };
      case TITLE_CHANGED:
        return { ...state, title: action.payload };
      case DESCRIPTION_CHANGED:
        return { ...state, description: action.payload };
      default:
        return state;
    }
  };