/**
 * Title: Orange Digital React Challenge Frontend (React)
 * Description: UI for the Orange Digital React challenge created with React
 * Author: Be Pacific Digital Agency
 * Repo: https://github.com/louisronron/orangedigital
 * Date: 07-03-2023
 */
import { Grid, Typography } from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ChatBubbleIcon from "@mui/icons-material/ChatBubble";
import WatchLaterIcon from "@mui/icons-material/WatchLater";
import { grey } from "@mui/material/colors";

import { TimeFrame } from "../../assets/static/Functions";

const Comment = ({
	profilePic,
	name,
	comment,
	time,
	commentCount,
	likes,
}: any) => {
	const newColor = grey[700];
	return (
		<Grid
			container
			direction="row"
			justifyContent="center"
			sx={{
				px: 3,
				py: 1,
				width: 1,
				borderBottom: 1,
				borderColor: newColor,
			}}
		>
			<Grid item>
				<img src={profilePic} alt="Profile Pic" height="80px" />
			</Grid>
			<Grid item xs>
				<Grid
					container
					direction="column"
					justifyContent="space-between"
					alignItems="flex-start"
					sx={{ px: 1, height: 1 }}
				>
					<Grid item>
						<Typography
							sx={{ color: newColor }}
							variant="body1"
							fontWeight="bold"
						>
							{name}
						</Typography>
					</Grid>
					<Grid item>
						<Typography sx={{ color: newColor }} variant="body2">
							{comment}
						</Typography>
					</Grid>
					<Grid item container alignItems="center" spacing={1}>
						<Grid item>
							<WatchLaterIcon sx={{ color: newColor, fontSize: "0.7em" }} />
						</Grid>
						<Grid item>
							<Typography
								sx={{ color: newColor, fontSize: "0.55em" }}
								paddingRight={3}
								variant="overline"
							>
								{TimeFrame(time)}
							</Typography>
						</Grid>
						<Grid item>
							<FavoriteIcon sx={{ color: newColor, fontSize: "0.7em" }} />
						</Grid>
						<Grid item>
							<Typography
								sx={{ color: newColor, fontSize: "0.55em" }}
								variant="overline"
							>
								{likes}
							</Typography>
						</Grid>
						<Grid item>
							<ChatBubbleIcon sx={{ color: newColor, fontSize: "0.7em" }} />
						</Grid>
						<Grid item>
							<Typography
								sx={{ color: newColor, fontSize: "0.55em" }}
								variant="overline"
							>
								{commentCount}
							</Typography>
						</Grid>
					</Grid>
				</Grid>
			</Grid>
		</Grid>
	);
};

export default Comment;
