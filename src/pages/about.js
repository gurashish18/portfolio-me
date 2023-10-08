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
		<Stack p={{ lg: 4, md: 4, sm: 2, xs: 1 }}>
			<Stack spacing={4}>
				<Typography
					sx={{
						fontSize: { lg: "15px", md: "13px", sm: "12px", xs: "12px" },
						color: "hsl(0, 0%, 84%)",
						fontWeight: 300,
						lineHeight: "1.6",
						textAlign: "justify",
					}}
				>
					I am a proficient and motivated Software Engineer with a solid
					foundation in Computer Science. I earned my degree from Thapar
					Institute of Engineering and Technology with a CGPA of 8.50.
					Throughout my academic journey, I gained a deep understanding of
					software development principles, which I have continued to enhance
					during my tenure at Incedo Inc.
				</Typography>
				<Typography
					sx={{
						fontSize: { lg: "15px", md: "13px", sm: "12px", xs: "12px" },
						color: "hsl(0, 0%, 84%)",
						fontWeight: 300,
						lineHeight: "1.6",
						textAlign: "justify",
					}}
				>
					Throughout my academic journey, my passion for research-driven
					exploration became more evident. I am currently actively pursuing
					research-based master's opportunities in computer science to further
					expand my expertise and make meaningful contributions to the latest
					developments in the field. With my robust technical skills,
					collaborative approach, and unwavering commitment to excellence, I am
					confident in my ability to make significant contributions to the
					success of any software development team.
				</Typography>
			</Stack>
			<Stack marginTop={"40px"} spacing={4}>
				<Typography
					sx={{
						fontSize: { lg: "32px", md: "30px", sm: "26px", xs: "24px" },
						fontWeight: "600",
						textAlign: { lg: "start", md: "start", sm: "center", xs: "center" },
					}}
				>
					My Interests
				</Typography>
				<Stack>
					<Grid container spacing={2}>
						<Grid item xs={12} sm={12} md={12} lg={6}>
							<InterestCard
								icon={
									<LightbulbIcon
										style={{
											fill: "#2196f3",
											fontSize: {
												lg: "28px",
												md: "26px",
												sm: "22px",
												xs: "20px",
											},
										}}
									/>
								}
								title="Machine Learning"
								description="Applied machine learning techniques extensively in personal projects and research, demonstrating a strong passion for practical and innovative applications."
							/>
						</Grid>
						<Grid item xs={12} sm={12} md={12} lg={6}>
							<InterestCard
								icon={
									<LanguageIcon
										style={{
											fill: "#2196f3",
											fontSize: {
												lg: "28px",
												md: "26px",
												sm: "22px",
												xs: "20px",
											},
										}}
									/>
								}
								title="Web Development"
								description={
									"Extensively developed web applications using React.js, applying this expertise effectively in the industry."
								}
							/>
						</Grid>
						<Grid item xs={12} sm={12} md={12} lg={6}>
							<InterestCard
								icon={
									<MobileFriendlyIcon
										style={{
											fill: "#2196f3",
											fontSize: {
												lg: "28px",
												md: "26px",
												sm: "22px",
												xs: "20px",
											},
										}}
									/>
								}
								title="Mobile Development"
								description="Developed various Mobile Applications using React Native for a E-commerce company."
							/>
						</Grid>
					</Grid>
				</Stack>
			</Stack>
			<Stack marginTop={"40px"} spacing={4}>
				<Typography
					sx={{
						fontSize: { lg: "32px", md: "30px", sm: "26px", xs: "24px" },
						fontWeight: "600",
						textAlign: { lg: "start", md: "start", sm: "center", xs: "center" },
					}}
				>
					My Skills
				</Typography>
				<Stack>
					<Grid container gap={4} justifyContent={"center"}>
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
