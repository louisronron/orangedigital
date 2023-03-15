/**
 * Title: Orange Digital React Challenge Frontend (React)
 * Description: UI for the Orange Digital React challenge created with React
 * Author: Be Pacific Digital Agency
 * Repo: https://github.com/louisronron/orangedigital
 * Date: 07-03-2023
 */
import { Link } from "react-router-dom";
import {
	Box,
	Card,
	CardActionArea,
	CardContent,
	CardMedia,
} from "@mui/material";

import PlayCircleOutlineIcon from "@mui/icons-material/PlayCircleOutline";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";

import { Picture } from "../../assets/interface";

const Video = (data: Picture) => {
	return (
		<Card sx={{ width: 330, borderRadius: 0 }}>
			<Link to={"/detail"} state={data}>
				<CardActionArea>
					<CardMedia component="img" src={data.image_url} alt="Video" />
					<CardContent
						sx={{
							position: "absolute",
							height: 1,
							width: 1,
							bottom: 0,
						}}
					>
						<Box
							sx={{
								display: "flex",
								flexDirection: "row",
								height: 1,
								width: 1,
								justifyContent: "center",
								alignItems: "center",
								color: "rgba(255,255,255, 0.5)",
							}}
						>
							<PlayCircleOutlineIcon sx={{ fontSize: 100 }} />
						</Box>
						<Box
							sx={{
								position: "absolute",
								display: "flex",
								flexDirection: "row",
								width: 0.95,
								justifyContent: "flex-end",
								alignItems: "flex-end",
								pb: 1,
								pr: 1,
								bottom: 0,
								color: "rgba(255,255,255, 0.5)",
							}}
						>
							<ThumbUpIcon fontSize="large" />
						</Box>
					</CardContent>
				</CardActionArea>
			</Link>
		</Card>
	);
};

export default Video;
