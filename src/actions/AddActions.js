import {
    CATEGORY,
    TITLE_CHANGED,
    DESCRIPTION_CHANGED,
  } from '../actions/types';

export const categoryChanged = (text) => {
  return {
    type: CATEGORY,
    payload: text
  };
};

export const titleChanged = (text) => {
    return {
      type: TITLE_CHANGED,
      payload: text
    };
  };

  export const descriptionChanged = (text) => {
    return {
      type: DESCRIPTION_CHANGED,
      payload: text
    };
  };