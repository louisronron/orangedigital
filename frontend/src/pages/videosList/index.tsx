/**
 * Title: Orange Digital React Challenge Frontend (React)
 * Description: UI for the Orange Digital React challenge created with React
 * Author: Be Pacific Digital Agency
 * Repo: https://github.com/louisronron/orangedigital
 * Date: 07-03-2023
 */
import { useEffect, useState } from "react";
import { Grid } from "@mui/material";

import Video from "./Video";

// variable declarations for types
import { Picture } from "../../assets/interface";

import { fetchData } from "../../api";

const VideosList = () => {
	const [data, setData] = useState<Picture[]>([]);

	useEffect(() => {
		const getData = async () => {
			const result = await fetchData("/api/gallery");
			setData(result.pictures);
		};
		getData();
	}, []);
	return (
		<Grid container spacing={2}>
			{data.map((data: Picture) => (
				<Grid item key={data.id}>
					<Video {...data} />
				</Grid>
			))}
		</Grid>
	);
};

export default VideosList;
