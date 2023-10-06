/** @format */

import React from "react";
import { Stack, IconButton, Typography, Link } from "@mui/material";

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
				<Typography sx={{ fontSize: "15px", color: "#D6D6D6B2" }}>
					{item.title}
				</Typography>
				{item.clickable ? (
					<Link
						href={item.link}
						sx={{ fontSize: "15px", fontWeight: 300, textDecoration: "none" }}
					>
						{item.description}
					</Link>
				) : (
					<Typography sx={{ fontSize: "15px", fontWeight: 300 }}>
						{item.description}
					</Typography>
				)}
			</Stack>
		</Stack>
	);
};

export default SidebarItem;
