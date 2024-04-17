type ConstructURLParams = {
	pageNumber: number;
	search: string;
	path: string;
};

export const constructURL = ({
	pageNumber,
	search,
	path,
}: ConstructURLParams): string => {
	const searchParams = new URLSearchParams(search);
	searchParams.set("page", pageNumber.toString());
	return `${path}?${searchParams.toString()}`;
};

type ConstructSubParams = {
	currentPage: number;
	pageCount: number;
	search: string;
	path: string;
};

export const constructSubParams = ({
	currentPage,
	pageCount,
	search,
	path,
}: ConstructSubParams): { prevURL: string; nextURL: string } => {
	// set previous page
	let prevPage = currentPage - 1;
	if (prevPage < 1) prevPage = pageCount;
	const prevURL = constructURL({
		pageNumber: prevPage,
		search,
		path,
	});

	// set next page
	let nextPage = currentPage + 1;
	if (nextPage > pageCount) nextPage = 1;
	const nextURL = constructURL({
		pageNumber: nextPage,
		search,
		path,
	});

	// return page values
	return { prevURL, nextURL };
};
