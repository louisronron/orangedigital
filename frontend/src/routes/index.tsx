/**
 * Title: Orange Digital React Challenge Frontend (React)
 * Description: UI for the Orange Digital React challenge created with React
 * Author: Be Pacific Digital Agency
 * Repo: https://github.com/louisronron/orangedigital
 * Date: 07-03-2023
 */
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Gallery from "../pages/gallery";
import Detail from "../pages/detail";
import Error from "../pages/error/Error";

const router = createBrowserRouter([
	{
		path: "/",
		element: <Gallery />,
		errorElement: <Error />,
	},
	{
		path: "detail",
		element: <Detail />,
		errorElement: <Error />,
	},
]);

const Routes = () => {
	return <RouterProvider router={router} />;
};

export default Routes;
