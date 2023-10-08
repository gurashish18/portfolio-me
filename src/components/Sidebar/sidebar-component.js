/** @format */

import { Avatar, Divider, Stack, Typography, IconButton } from "@mui/material";
import React, { useState } from "react";
import { sidebar_items } from "../../data/data";
import SidebarItem from "./sidebar-item-component";
import Me from "../../assets/me.jpeg";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";

const SideBar = () => {
	const [showDetails, setShowDetails] = useState(false);

	const handleClick = () => {
		setShowDetails(!showDetails);
	};
	return (
		<Stack>
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
					position: "relative",
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
						sx={{
							fontSize: { lg: "26px", md: "24px", sm: "20px", xs: "17px" },
						}}
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
				<Divider
					variant="fullWidth"
					sx={{
						bgcolor: "hsl(0, 0%, 22%)",
						display: {
							lg: "block",
							md: "block",
							sm: showDetails ? "block" : "none",
							xs: showDetails ? "block" : "none",
						},
					}}
				/>
				<Stack
					spacing={4}
					sx={{
						display: {
							lg: "block",
							md: "block",
							sm: showDetails ? "block" : "none",
							xs: showDetails ? "block" : "none",
						},
					}}
				>
					{sidebar_items.map((item) => (
						<SidebarItem item={item} />
					))}
				</Stack>
			</Stack>
			<Stack
				sx={{
					position: "absolute",
					left: "88%",
					backgroundColor: "hsl(240, 2%, 12%)",
					boxShadow: "0 24px 80px hsla(0, 0%, 0%, 0.25)",
					border: "1px solid hsl(0, 0%, 22%)",
					color: "hsl(0, 0%, 98%)",
					borderTopLeftRadius: "10px",
					borderBottomLeftRadius: "10px",
					borderTopRightRadius: "20px",
				}}
			>
				<IconButton
					disableRipple={true}
					sx={{
						display: {
							lg: "none",
							md: "none",
							sm: "block",
							xs: "block",
						},
					}}
					onClick={handleClick}
				>
					<ArrowDownwardIcon
						style={{
							fill: "#2196f3",
							fontSize: { lg: "28px", md: "26px", sm: "22px", xs: "20px" },
						}}
					/>
				</IconButton>
			</Stack>
		</Stack>
	);
};

export default SideBar;
