export const formatDollars = (price: string | number): string => {
	const amountInUSD = new Intl.NumberFormat("en-us", {
		style: "currency",
		currency: "USD",
	}).format(Number(price) / 100);
	return `${amountInUSD}`;
};
