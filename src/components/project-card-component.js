/** @format */

import { Button, Stack, Typography } from "@mui/material";
import React from "react";

const ProjectCard = ({ image, title, link, domain }) => {
	return (
		<Stack
			gap={2}
			p={2}
			sx={{
				borderRadius: "20px",
				cursor: "pointer",
				background:
					"linear-gradient( to bottom right, hsla(240, 1%, 18%, 0.251) 0%, hsla(240, 2%, 11%, 0) 100% ), hsl(240, 2%, 13%)",
			}}
			minHeight={"140px"}
		>
			<Stack>
				<img
					src={image}
					alt={title}
					style={{ height: "100%", width: "100%" }}
				/>
			</Stack>
			<Stack>
				<Typography
					sx={{
						marginBottom: "7px",
						color: "hsl(0, 0%, 98%)",
						fontSize: "18px",
						fontWeight: 600,
					}}
				>
					{title}
				</Typography>
				<Typography
					sx={{
						color: "hsl(0, 0%, 84%)",
						lineHeight: 1.6,
						fontSize: "15px",
						fontWeight: 300,
					}}
				>
					{domain}
				</Typography>
				<Button
					href={link}
					target="_blank"
					disableRipple
					sx={{
						backgroundColor: "#2196f3",
						color: "#FFFFFF",
						marginTop: "10px",
					}}
				>
					View
				</Button>
			</Stack>
		</Stack>
	);
};

export default ProjectCard;
