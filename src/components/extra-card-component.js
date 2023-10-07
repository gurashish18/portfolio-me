/** @format */

import React from "react";
import { Stack, Typography } from "@mui/material";

const ExtrasCard = ({ image, title, description }) => {
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
					style={{
						height: "280px",
						width: "100%",
					}}
				/>
			</Stack>
			<Stack>
				<Typography
					sx={{
						marginBottom: "7px",
						color: "hsl(0, 0%, 98%)",
						fontSize: {
							lg: "18px",
							md: "16px",
							sm: "15px",
							xs: "15px",
						},
						fontWeight: 600,
						textAlign: "justify",
					}}
				>
					{title}
				</Typography>
				<Typography
					sx={{
						color: "hsl(0, 0%, 84%)",
						lineHeight: 1.6,
						fontSize: { lg: "15px", md: "13px", sm: "12px", xs: "12px" },
						fontWeight: 300,
						textAlign: "justify",
					}}
				>
					{description}
				</Typography>
			</Stack>
		</Stack>
	);
};

export default ExtrasCard;
