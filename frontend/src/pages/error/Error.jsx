/**
 * Title: Orange Digital React Challenge Frontend (React)
 * Description: UI for the Orange Digital React challenge created with React
 * Author: Be Pacific Digital Agency
 * Repo: https://github.com/louisronron/orangedigital
 * Date: 07-03-2023
 */
import { useRouteError } from "react-router-dom";
import { Box, Typography } from "@mui/material";

const Error = () => {
	const error = useRouteError();

	return (
		<Box
			display="flex"
			alignItems="center"
			justifyContent="center"
			height="100vh"
		>
			<Box textAlign="center">
				<Typography variant="h1">Oops!</Typography>
				<Typography variant="body1">
					Sorry, an unexpected error has occurred.
				</Typography>
				<Typography variant="body1" fontStyle="italic" color="red">
					{error.statusText || error.message}
				</Typography>
			</Box>
		</Box>
	);
};

export default Error;
