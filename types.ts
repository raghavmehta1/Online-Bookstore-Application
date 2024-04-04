
export interface Book {
  id: number;
  title: string;
  author: string;
  description: string;
  price: number;
  categoryId: number;
}

export interface Category {
  id: number;
  name: string;
}

export interface Order {
  id: number;
  customerName: string;
  customerEmail: string;
  items: OrderItem[];
  totalAmount: number;
  createdAt: Date;
}

export interface OrderItem {
  bookId: number;
  quantity: number;
  price: number;
}
