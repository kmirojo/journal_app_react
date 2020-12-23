import { types } from "../types/types";

export const setError = (err) => ({
    type: types.uiSetError,
    payload: err,
});

export const removeError = () => ({
    type: types.uiRemoveError,
});

export const startLoading = (params) => ({
    type: types.uiStartLoading,
});

export const finishLoading = (params) => ({
    type: types.uiFinishLoading,
});
