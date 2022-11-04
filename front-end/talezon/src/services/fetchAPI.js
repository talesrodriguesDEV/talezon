const fetchAPI = async (params) => {
	const response = await fetch(`https://back-end-production-0be2.up.railway.app/${params}`);
	const data = await response.json();

	return data;
};

export default fetchAPI;
