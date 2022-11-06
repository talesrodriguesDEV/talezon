// https://back-end-production-0be2.up.railway.app/

const fetchAPI = async (params) => {
	const response = await fetch(
		`http://localhost:3000/${params}`,
		{
			headers: {
				'Accept': 'application/json',
				'Content-Type': 'application/json',
			},
		},
	);
	
	const data = await response.json();

	return data;
};

export default fetchAPI;
