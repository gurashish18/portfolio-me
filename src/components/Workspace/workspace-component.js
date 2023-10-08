/** @format */

import React from "react";
import Tabs from "@mui/material/Tabs";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { Stack } from "@mui/material";
import CustomTab from "../CustomTab/custom-tab-component";
import AboutMe from "../../pages/about";
import Projects from "../../pages/project";
import Resume from "../../pages/resume";
import Extras from "../../pages/extra";
import Certifications from "../../pages/certification";

const Workspace = () => {
	const [value, setValue] = React.useState("1");

	const handleChange = (event, newValue) => {
		setValue(newValue);
	};

	const underlineStyle = {};

	const displayTitle = () => {
		if (value === "1") {
			return "About Me";
		} else if (value === "2") {
			return "Resume";
		} else if (value === "3") {
			return "Projects";
		} else if (value === "4") {
			return "Certifications";
		} else if (value === "5") {
			return "Extra";
		} else {
			return "Contact";
		}
	};

	return (
		<Stack
			width="100%"
			alignItems={"center"}
			paddingBottom={5}
			sx={{
				backgroundColor: "hsl(240, 2%, 12%)",
				boxShadow: "0 24px 80px hsla(0, 0%, 0%, 0.25)",
				borderRadius: "20px",
				border: "1px solid hsl(0, 0%, 22%)",
				color: "hsl(0, 0%, 98%)",
			}}
		>
			<Stack
				direction={{
					lg: "row",
					md: "column-reverse",
					sm: "column-reverse",
					xs: "column-reverse",
				}}
				width={"100%"}
			>
				<Stack p={2} width={"100%"} sx={{ flex: 0.2 }} alignItems={"center"}>
					<Typography
						sx={{
							fontSize: { lg: "32px", md: "30px", sm: "26px", xs: "24px" },
							fontWeight: "600",
							...underlineStyle,
						}}
					>
						{displayTitle()}
					</Typography>
				</Stack>
				<Stack
					p={2}
					width={"100%"}
					sx={{
						flex: 0.8,
						backgroundColor: "#2B2B2CBF",
						borderBottomLeftRadius: "20px",
					}}
				>
					<Box sx={{ width: "100%" }}>
						<Tabs
							width="100%"
							value={value}
							onChange={handleChange}
							aria-label="tab"
							variant="scrollable"
							scrollButtons
							allowScrollButtonsMobile
						>
							<CustomTab
								label={"About Me"}
								selected={value === "1"}
								value="1"
							/>
							<CustomTab label={"Resume"} selected={value === "2"} value="2" />
							<CustomTab
								label={"Projects"}
								selected={value === "3"}
								value="3"
							/>
							<CustomTab
								label={"Certifications"}
								selected={value === "4"}
								value="4"
							/>
							<CustomTab label={"Extra"} selected={value === "5"} value="5" />
						</Tabs>
					</Box>
				</Stack>
			</Stack>
			{value === "1" && <AboutMe />}
			{value === "2" && <Resume />}
			{value === "3" && <Projects />}
			{value === "4" && <Certifications />}
			{value === "5" && <Extras />}
		</Stack>
	);
};

export default Workspace;
