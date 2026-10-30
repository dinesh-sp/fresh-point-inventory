export interface Imaterial {
  product_typ_id: string;
  batch_ids: string[];
  code: string;
  name: string;
}

export interface IActions {
  _handleClose: () => void;
}
