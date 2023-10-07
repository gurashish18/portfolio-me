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
					height="250px"
					sx={{
						height: { lg: "250px", md: "200px", sm: "150px", xs: "120px" },
						width: { lg: "250px", md: "200px", sm: "150px", xs: "120px" },
					}}
				/>
				<Typography
					sx={{ fontSize: { lg: "26px", md: "24px", sm: "20px", xs: "17px" } }}
				>
					Gurashish Singh Gill
				</Typography>
				<Stack>
					<Typography
						sx={{
							fontSize: { lg: "15px", md: "13px", sm: "12px", xs: "12px" },
							fontWeight: 600,
							textAlign: "center",
						}}
					>
						Software Engineer @Incedo Inc.
					</Typography>
				</Stack>
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
