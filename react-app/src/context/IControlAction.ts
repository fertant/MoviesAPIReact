export interface IControlActionPayload {
  modalType: boolean,
}

export interface IFilterActionPayload {
  filterType: string,
}

export interface IControlAction {
  type: string,
  payload: any,
}
