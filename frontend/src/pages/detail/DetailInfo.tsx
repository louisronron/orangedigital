/**
 * Title: Orange Digital React Challenge Frontend (React)
 * Description: UI for the Orange Digital React challenge created with React
 * Author: Be Pacific Digital Agency
 * Repo: https://github.com/louisronron/orangedigital
 * Date: 07-03-2023
 */
import { useEffect, useState } from "react";
import {
	Box,
	Card,
	CardActionArea,
	CardContent,
	CardMedia,
	Grid,
	Typography,
} from "@mui/material";

import ChatBubbleIcon from "@mui/icons-material/ChatBubble";
import FavoriteIcon from "@mui/icons-material/Favorite";

// variable declarations for type
import { Detail, Picture } from "../../assets/interface";
import { fetchData } from "../../api";

const DetailInfo = (value: Picture) => {
	const [data, setData] = useState<Detail>();

	useEffect(() => {
		const getData = async () => {
			const result = await fetchData("/api/detail");
			setData(result);
		};
		getData();
	}, []);

	return (
		<Box sx={{ flexGrow: 1 }}>
			<Card sx={{ borderRadius: 0 }}>
				<CardActionArea disabled>
					<CardMedia
						component="img"
						height="400"
						image={
							value.image_url
								? value.image_url
								: "https://cdn.pixabay.com/photo/2015/12/01/20/28/road-1072823_960_720.jpg"
						}
						alt="image"
					/>

					<CardContent
						sx={{
							height: 1,
							position: "absolute",
							width: 1,
							bottom: 0,
							color: "white",
							backgroundColor: "rgba(123, 93, 191, 0.5)",
						}}
					>
						<Box
							sx={{
								position: "absolute",
								bottom: 5,
								pb: 3,
							}}
						>
							<Typography variant="h5" component="p" sx={{ mb: 2 }}>
								{data?.subtitle}
							</Typography>
							<Grid container alignItems="center">
								<Grid item xs={7}>
									<Typography variant="body2" component="p">
										By: {data?.by} At: {data?.at}
									</Typography>
									<Typography variant="body2" component="p">
										On: {data?.on}
									</Typography>
								</Grid>
								<Grid item xs={5}>
									<Typography
										variant="body2"
										component="p"
										sx={{ textAlign: "right" }}
									>
										<FavoriteIcon sx={{ mr: 1 }} fontSize="inherit" />
										{data?.like_count}
										<ChatBubbleIcon sx={{ ml: 2, mr: 1 }} fontSize="inherit" />
										{data?.comment_count}
									</Typography>
								</Grid>
							</Grid>
						</Box>
					</CardContent>
				</CardActionArea>
			</Card>
		</Box>
	);
};

export default DetailInfo;
