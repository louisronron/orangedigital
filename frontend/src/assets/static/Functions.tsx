/**
 * Title: Orange Digital React Challenge Frontend (React)
 * Description: UI for the Orange Digital React challenge created with React
 * Author: Be Pacific Digital Agency
 * Repo: https://github.com/louisronron/orangedigital
 * Date: 07-03-2023
 */
export const TimeFrame = (time: string) => {
	const then = new Date(time);
	const now = new Date();
	const seconds = Math.floor((now.getTime() - then.getTime()) / 1000);
	let finalTime = "";

	if (seconds < 60) {
		finalTime = `${seconds} seconds ago`;
	} else if (seconds < 3600) {
		const minutes = Math.floor(seconds / 60);
		finalTime = `${minutes} minutes ago`;
	} else if (seconds < 86400) {
		const hours = Math.floor(seconds / 3600);
		finalTime = `${hours} hours ago`;
	} else {
		const days = Math.floor(seconds / 86400);
		finalTime = `${days} days ago`;
	}

	return finalTime;
};
