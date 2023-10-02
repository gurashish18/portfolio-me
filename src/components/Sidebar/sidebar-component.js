/** @format */

import { Avatar, Divider, IconButton, Stack, Typography } from "@mui/material";
import React from "react";
import { sidebar_items } from "../../data/data";
import SidebarItem from "./sidebar-item-component";
import Me from "../../assets/me.jpeg";

const SideBar = () => {
	return (
		<Stack
			p={2}
			paddingTop={5}
			paddingBottom={5}
			spacing={4}
			sx={{
				backgroundColor: "hsl(240, 2%, 12%)",
				boxShadow: "0 24px 80px hsla(0, 0%, 0%, 0.25)",
				borderRadius: "20px",
				border: "1px solid hsl(0, 0%, 22%)",
				color: "hsl(0, 0%, 98%)",
			}}
		>
			<Stack spacing={2} alignItems={"center"} justifyContent={"center"}>
				<Avatar
					alt="user-avatar"
					src={Me}
					sx={{ height: "250px", width: "250px" }}
				/>
				<Typography sx={{ fontSize: "26px" }}>Gurashish Singh Gill</Typography>
				<Typography sx={{ fontSize: "14px" }}>
					Software Engineer @Incedo Inc.
				</Typography>
			</Stack>
			<Divider variant="fullWidth" sx={{ bgcolor: "hsl(0, 0%, 22%)" }} />
			<Stack spacing={4}>
				{sidebar_items.map((item) => (
					<SidebarItem item={item} />
				))}
			</Stack>
		</Stack>
	);
};

export default SideBar;
