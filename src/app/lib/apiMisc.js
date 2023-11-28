export const isRequestEmpty = (req) => {
	if (!req.body || Object.keys(req.body).length === 0) {
		return true;
	}

	return false;
};
