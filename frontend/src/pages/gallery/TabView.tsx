/**
 * Title: Orange Digital React Challenge Frontend (React)
 * Description: UI for the Orange Digital React challenge created with React
 * Author: Be Pacific Digital Agency
 * Repo: https://github.com/louisronron/orangedigital
 * Date: 07-03-2023
 */
import { useState } from "react";
import { Box, Tab } from "@mui/material";
import { TabContext, TabList, TabPanel } from "@mui/lab";

import PhotosList from "../photosList";
import VideosList from "../videosList";

const TabView = () => {
	const [value, setValue] = useState<string>("1");

	const handleChange = (event: React.SyntheticEvent, newValue: string) => {
		setValue(newValue);
	};

	return (
		<Box sx={{ width: "100%" }}>
			<TabContext value={value}>
				<Box sx={{ borderBottom: 1, borderColor: "divider" }}>
					<TabList
						onChange={handleChange}
						centered
						variant="fullWidth"
						aria-label="tab list"
					>
						<Tab label="VIDEOS" value="1" sx={{ fontWeight: "bold" }} />
						<Tab label="PHOTOS" value="2" sx={{ fontWeight: "bold" }} />
					</TabList>
				</Box>
				<TabPanel value="1">
					<VideosList />
				</TabPanel>
				<TabPanel value="2">
					<PhotosList />
				</TabPanel>
			</TabContext>
		</Box>
	);
};

export default TabView;
