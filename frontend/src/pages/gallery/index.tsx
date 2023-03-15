/**
 * Title: Orange Digital React Challenge Frontend (React)
 * Description: UI for the Orange Digital React challenge created with React
 * Author: Be Pacific Digital Agency
 * Repo: https://github.com/louisronron/orangedigital
 * Date: 07-03-2023
 */
import { useEffect, useState } from "react";
import { Box } from "@mui/material";

import TabView from "./TabView";
import NavBar from "../landing/NavBar";

import { fetchData } from "../../api";

interface variableDeclaration {
	title: string;
}

const Gallery = () => {
	const [data, setData] = useState<variableDeclaration>();

	useEffect(() => {
		const getData = async () => {
			const result = await fetchData("/api/gallery");
			setData(result);
		};
		getData();
	}, []);

	if (data) {
		const { title } = data;
		return (
			<Box sx={{ flexGrow: 1 }}>
				<NavBar title={title} />
				<TabView />
			</Box>
		);
	} else {
		return <></>;
	}
};

export default Gallery;
