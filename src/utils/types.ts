export type ProductsResponse = {
	data: Product[];
	meta: ProductsMeta;
};

export type Product = {
	id: number;
	attributes: {
		id: number;
		company: string;
		createdAt: string;
		description: string;
		image: string;
		price: string;
		shipping: boolean;
		title: string;
		colors: string[];
	};
};

export type ProductsMeta = {
	categories: string[];
	companies: string[];
	pagination: Pagination;
};

export type Pagination = {
	page: number;
	pageCount: number;
	pageSize: number;
	total: number;
};

export type Params = {
	search?: string;
	category?: string;
	company?: string;
	order?: string;
	price?: string;
	shipping?: string;
	page?: number;
};

export type ProductResponseWithParams = ProductsResponse & { params: Params };

export type SingleProductResponse = {
	data: Product;
	meta: object;
};

export type CartItem = {
	cartId: string;
	productId: number;
	image: string;
	price: string;
	amount: number;
	productColor: string;
	company: string;
};

export type CartState = {
	cartItems: CartItem[];
	numItemsInCart: number;
	cartTotal: number;
	shipping: number;
	tax: number;
	orderTotal: number;
};

export type Checkout = {
	name: string;
	address: string;
	chargeTotal: number;
	orderTotal: string;
	cartItems: CartItem[];
	numItemsInCart: number;
};

export type Order = {
	id: number;
	attributes: {
		address: string;
		cartItems: CartItem[];
		createdAt: string;
		name: string;
		numItemsInCart: number;
		orderTotal: string;
		updatedAt: string;
	};
};

export type OrdersMeta = {
	pagination: Pagination;
};

export type OrdersResponse = {
	data: Order[];
	meta: OrdersMeta;
};
