const postData = async (url, data) => {
	let res = await fetch(url, {
		method: 'POST',
		body: data
	});
	console.log(url);

	if (!res.ok) {
		throw new Error(`Could not fetch: ${url}, status: ${res.status}`);
	}

	return await res.json();
};

export default postData;