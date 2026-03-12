
export interface LabelData {
  id: string;
  productName: string;
  ingredients: string;
  useByDate: string;
  allergens: string[];
  createdAt?: string;
  barcode?: string;
  template?: 'classic' | 'modern' | 'minimal' | 'bold' | 'elegant';
}
