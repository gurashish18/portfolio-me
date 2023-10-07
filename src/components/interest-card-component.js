/** @format */

import { IconButton, Stack, Typography } from "@mui/material";
import React from "react";

const InterestCard = ({ icon, title, description }) => {
	return (
		<Stack
			direction={"row"}
			gap={2}
			p={{ lg: 2, md: 2, sm: 1, xs: 1 }}
			sx={{
				borderRadius: "20px",
				background:
					"linear-gradient( to bottom right, hsla(240, 1%, 18%, 0.251) 0%, hsla(240, 2%, 11%, 0) 100% ), hsl(240, 2%, 13%)",
			}}
			minHeight={{ lg: "140px", md: "130px", sm: "120px", xs: "100px" }}
		>
			<Stack>
				<IconButton>{icon}</IconButton>
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
				<Typography
					sx={{
						color: "hsl(0, 0%, 84%)",
						lineHeight: 1.6,
						fontSize: { lg: "15px", md: "13px", sm: "12px", xs: "12px" },
						fontWeight: 300,
					}}
				>
					{description}
				</Typography>
			</Stack>
		</Stack>
	);
};

export default InterestCard;
