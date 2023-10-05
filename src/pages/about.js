/** @format */

import React from "react";
import { Grid, Stack, Typography } from "@mui/material";
import InterestCard from "../components/interest-card-component";
import LanguageIcon from "@mui/icons-material/Language";
import MobileFriendlyIcon from "@mui/icons-material/MobileFriendly";
import LightbulbIcon from "@mui/icons-material/Lightbulb";
import { skills } from "../data/data";

const AboutMe = () => {
	return (
		<Stack p={4}>
			<Stack spacing={4}>
				<Typography
					sx={{
						fontSize: "15px",
						color: "hsl(0, 0%, 84%)",
						fontWeight: 300,
						lineHeight: "1.6",
					}}
				>
					I am a highly skilled and motivated Software Engineer with a strong
					background in Computer Science. I completed my education at Thapar
					Institute of Engineering and Technology, where I graduated with a CGPA
					of 8.50. Throughout my academic journey, I developed a comprehensive
					understanding of software development principles, which I have further
					refined through my professional experiences with Incedo Inc.
				</Typography>
				<Typography
					sx={{
						fontSize: "15px",
						color: "hsl(0, 0%, 84%)",
						fontWeight: 300,
						lineHeight: "1.6",
					}}
				>
					Outside of my professional life, I have a variety of interests. I
					enjoy playing cricket, watching F1 races, going on treks, and working
					out at the gym. Additionally, I have actively participated in
					extracurricular activities during my college days, serving as the Vice
					Lead Ambassador of TICC and taking on the role of Placement
					Coordinator. These experiences have further enhanced my leadership and
					organizational abilities.
				</Typography>
				<Typography
					sx={{
						fontSize: "15px",
						color: "hsl(0, 0%, 84%)",
						fontWeight: 300,
						lineHeight: "1.6",
					}}
				>
					As a Software Engineer, I am passionate about creating innovative
					solutions and pushing the boundaries of technology. I am constantly
					seeking opportunities to expand my knowledge and stay up-to-date with
					the latest advancements in the field. With my strong technical skills,
					collaborative mindset, and dedication to excellence, I am confident in
					my ability to contribute to the success of any software development
					team.
				</Typography>
			</Stack>
			<Stack marginTop={"40px"} spacing={4}>
				<Typography sx={{ fontSize: "28px", fontWeight: "600" }}>
					My Interests
				</Typography>
				<Stack>
					<Grid container spacing={2}>
						<Grid item xs={12} sm={6}>
							<InterestCard
								icon={
									<LanguageIcon style={{ fill: "#2196f3", fontSize: "32px" }} />
								}
								title="Web Development"
								description={
									"Built websites during my internship at Apple and Yash Technologies using HTML, CSS, Knockout JS, Oracle Jet and SpringBoot."
								}
							/>
						</Grid>
						<Grid item xs={12} sm={6}>
							<InterestCard
								icon={
									<MobileFriendlyIcon
										style={{ fill: "#2196f3", fontSize: "32px" }}
									/>
								}
								title="Mobile Development"
								description="Developed Flutter application during internship at Licious for migrating Swift and Kotlin codebase."
							/>
						</Grid>
						<Grid item xs={12} sm={6}>
							<InterestCard
								icon={
									<LightbulbIcon
										style={{ fill: "#2196f3", fontSize: "32px" }}
									/>
								}
								title="Machine Learning"
								description="Developed Flutter application during internship at Licious for migrating Swift and Kotlin codebase."
							/>
						</Grid>
					</Grid>
				</Stack>
			</Stack>
			<Stack marginTop={"40px"} spacing={4}>
				<Typography sx={{ fontSize: "28px", fontWeight: "600" }}>
					My Skills
				</Typography>
				<Stack>
					<Grid container gap={4}>
						{skills.map((skill) => (
							<Grid item xs={6} sm={4} md={2} key={skill.id}>
								{
									<img
										alt={skill.name}
										src={skill.img}
										height="120px"
										width={"100%"}
									/>
								}
								<Typography
									marginTop={1}
									sx={{
										color: "hsl(0, 0%, 84%)",
										lineHeight: 1.6,
										fontWeight: 300,
										textAlign: "center",
									}}
								>
									{skill.name}
								</Typography>
							</Grid>
						))}
					</Grid>
				</Stack>
			</Stack>
		</Stack>
	);
};

export default AboutMe;
