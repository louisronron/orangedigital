/**
 * Title: Orange Digital React Challenge Frontend (React)
 * Description: UI for the Orange Digital React challenge created with React
 * Author: Be Pacific Digital Agency
 * Repo: https://github.com/louisronron/orangedigital
 * Date: 07-03-2023
 */
const BASE_URL = "http://localhost:4000";

export const fetchData = async (endpoint: string): Promise<any> => {
	const response = await fetch(BASE_URL + endpoint);
	const data = await response.json();
	return data;
};
