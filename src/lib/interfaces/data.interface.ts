export interface DataProps {
  id: number | string;
  title?: string;
  name?: string;
  description?: string;
  active: boolean;
  updatedAt?: string;
  publishedAt?: string;
  removedAt?: string;
  createdAt?: string;
  options?: {
    size: string;
    amount: number;
  };
}
