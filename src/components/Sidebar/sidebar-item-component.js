/** @format */

import React from "react";
import { Stack, IconButton, Typography } from "@mui/material";

const SidebarItem = ({ item }) => {
	return (
		<Stack
			key={item.id}
			direction={"row"}
			alignItems={"center"}
			spacing={2}
			sx={{ cursor: "pointer" }}
		>
			<Stack>
				<IconButton>{item.icon}</IconButton>
			</Stack>
			<Stack>
				<Typography sx={{ fontSize: "13px", color: "#D6D6D6B2" }}>
					{item.title}
				</Typography>
				<Typography sx={{ fontSize: "14px", fontWeight: 300 }}>
					{item.description}
				</Typography>
			</Stack>
		</Stack>
	);
};

export default SidebarItem;
