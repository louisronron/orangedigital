/**
 * Title: Orange Digital React Challenge Frontend (React)
 * Description: UI for the Orange Digital React challenge created with React
 * Author: Be Pacific Digital Agency
 * Repo: https://github.com/louisronron/orangedigital
 * Date: 07-03-2023
 */
import { Card, CardActionArea, CardMedia } from "@mui/material";
import { Link } from "react-router-dom";

import { Picture } from "../../assets/interface";

const Photo = (data: Picture) => {
	return (
		<Card sx={{ width: 330, borderRadius: 0 }}>
			<Link to={"/detail"} state={data}>
				<CardActionArea>
					<CardMedia component="img" src={data.image_url} alt="Picture" />
				</CardActionArea>
			</Link>
		</Card>
	);
};

export default Photo;
