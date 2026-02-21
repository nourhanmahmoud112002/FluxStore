export interface IBaseState {
  loaders: Record<string, boolean>;
  errors: Record<string, string | null>;
}

export const handlePending = (state: any, action: any) => {
  const key = action.type.split('/')[1];
  if (state.loaders && key in state.loaders) {
    state.loaders[key] = true;
  }
  if (state.errors && key in state.errors) {
    state.errors[key] = null;
  }
};

export const handleRejected = (state: any, action: any) => {
  const key = action.type.split('/')[1];
  if (state.loaders && key in state.loaders) {
    state.loaders[key] = false;
  }
  if (state.errors && key in state.errors) {
    state.errors[key] = action.error?.message || `${key} failed`;
  }
};

export const handleFulfilled = (state: any, action: any) => {
  const key = action.type.split('/')[1];
  if (state.loaders && key in state.loaders) {
    state.loaders[key] = false;
  }
};

