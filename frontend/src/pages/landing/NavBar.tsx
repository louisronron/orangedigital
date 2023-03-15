/**
 * Title: Orange Digital React Challenge Frontend (React)
 * Description: UI for the Orange Digital React challenge created with React
 * Author: Be Pacific Digital Agency
 * Repo: https://github.com/louisronron/orangedigital
 * Date: 07-03-2023
 */
import { useState } from "react";
import {
	AppBar,
	Box,
	IconButton,
	Toolbar,
	Tooltip,
	Typography,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import MenuIcon from "@mui/icons-material/Menu";
import MoreIcon from "@mui/icons-material/MoreVert";

import DrawerMenu from "./DrawMenu";

// variable declarations for type
interface variableDeclaration {
	title: string;
}

const StyledToolbar = styled(Toolbar)(({ theme }) => ({
	alignItems: "flex-start",
	paddingTop: theme.spacing(2),
	paddingBottom: theme.spacing(2),
}));

const NavBar = ({ title }: variableDeclaration) => {
	const [open, setOpen] = useState<any>(false);

	const appBarColor = title === "DETAIL PAGE" ? "transparent" : "#7b5dbf";
	const appBarPosition = title === "DETAIL PAGE" ? "absolute" : "static";
	const appBarElavation = title === "DETAIL PAGE" ? 0 : 4;

	// Draw Functions
	const handleDrawerOpen = () => {
		setOpen(true);
	};

	const handleDrawerClose = () => {
		setOpen(false);
	};

	return (
		<Box sx={{ flexGrow: 1 }}>
			<AppBar
				sx={{ zIndex: 99, backgroundColor: appBarColor }}
				position={appBarPosition}
				elevation={appBarElavation}
			>
				<StyledToolbar>
					<IconButton
						size="large"
						edge="start"
						aria-label="open drawer"
						sx={{
							color: "white",
						}}
						onClick={handleDrawerOpen}
					>
						<MenuIcon />
					</IconButton>
					<Typography
						sx={{ flexGrow: 1, alignSelf: "center" }}
						variant="h6"
						noWrap
						component="div"
						align="center"
						color="white"
						fontWeight="bold"
					>
						{title}
					</Typography>
					<Tooltip title="Does Nothing">
						<IconButton
							sx={{ color: "white" }}
							size="large"
							aria-label="display more actions"
							edge="end"
							color="inherit"
						>
							<MoreIcon />
						</IconButton>
					</Tooltip>
				</StyledToolbar>
			</AppBar>
			<DrawerMenu open={open} onClose={handleDrawerClose} />
		</Box>
	);
};

export default NavBar;
