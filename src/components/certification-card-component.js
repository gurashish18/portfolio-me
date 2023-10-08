/** @format */

import React from "react";
import { Button, Stack, Typography } from "@mui/material";

const CertificationCard = ({ image, title, link }) => {
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
					style={{ height: "280px", width: "100%" }}
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
					}}
				>
					{title}
				</Typography>
				<Button
					href={link}
					target="_blank"
					disableRipple
					sx={{
						backgroundColor: "#2196f3",
						color: "#FFFFFF",
						marginTop: "10px",
						fontSize: { lg: "15px", md: "13px", sm: "12px", xs: "12px" },
					}}
				>
					View
				</Button>
			</Stack>
		</Stack>
	);
};

export default CertificationCard;
