// Helper to access nested objects from strings
export const leaf = (obj, path) => {
	path = path.split(".");
	let res = obj;
	for (let i = 0; i < path.length; i++) {
		res = res[path[i]];
	}
	return res;
};
