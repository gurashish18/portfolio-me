/** @format */

import { Typography, Stack, IconButton } from "@mui/material";
import WorkIcon from "@mui/icons-material/Work";
import MenuBookIcon from "@mui/icons-material/MenuBook";
import React from "react";
import { education, experience } from "../data/data";
import Timeline from "@mui/lab/Timeline";
import TimelineItem, { timelineItemClasses } from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineDot from "@mui/lab/TimelineDot";

const Resume = () => {
	return (
		<Stack p={4}>
			<Stack>
				<Stack
					direction={"row"}
					alignItems={"center"}
					justifyContent={{
						lg: "start",
						md: "start",
						sm: "center",
						xs: "center",
					}}
				>
					<IconButton>
						<WorkIcon
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
					</IconButton>
					<Typography
						sx={{
							fontSize: { lg: "24px", md: "22px", sm: "20px", xs: "20px" },
							fontWeight: "600",
						}}
					>
						Experience
					</Typography>
				</Stack>
				<Stack marginTop={2} marginLeft={{ lg: 7, md: 5, sm: 2, xs: 1 }}>
					<Timeline
						sx={{
							[`& .${timelineItemClasses.root}:before`]: {
								flex: 0,
								padding: 0,
							},
						}}
					>
						{experience.map((item) => (
							<TimelineItem>
								<TimelineSeparator>
									<TimelineDot />
									<TimelineConnector />
								</TimelineSeparator>
								<TimelineContent>
									<Stack key={item.id}>
										<Typography
											sx={{
												fontSize: {
													lg: "20px",
													md: "18px",
													sm: "15px",
													xs: "14px",
												},
												fontWeight: 600,
												lineHeight: 1.3,
												marginBottom: "7px",
											}}
										>
											{item.company}
										</Typography>
										<Typography
											sx={{
												fontSize: {
													lg: "15px",
													md: "13px",
													sm: "12px",
													xs: "12px",
												},
												color: "#2196f3",
												fontWeight: 400,
												lineHeight: 1.6,
											}}
										>
											{item.role} | {item.duration}
										</Typography>
										<Stack>
											<ul>
												{item.description.map((des) => (
													<li>
														<Typography
															sx={{
																fontSize: {
																	lg: "15px",
																	md: "13px",
																	sm: "12px",
																	xs: "12px",
																},
															}}
															key={des.id}
															textAlign="justify"
														>
															{des.title}
														</Typography>
													</li>
												))}
											</ul>
										</Stack>
									</Stack>
								</TimelineContent>
							</TimelineItem>
						))}
					</Timeline>
				</Stack>
			</Stack>
			<Stack marginTop={5}>
				<Stack
					direction={"row"}
					alignItems={"center"}
					justifyContent={{
						lg: "start",
						md: "start",
						sm: "center",
						xs: "center",
					}}
				>
					<IconButton>
						<MenuBookIcon
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
					</IconButton>
					<Typography
						sx={{
							fontSize: { lg: "24px", md: "22px", sm: "20px", xs: "20px" },
							fontWeight: "600",
						}}
					>
						Education
					</Typography>
				</Stack>
				<Stack
					spacing={4}
					marginTop={2}
					marginLeft={{ lg: 7, md: 5, sm: 2, xs: 1 }}
				>
					<Timeline
						sx={{
							[`& .${timelineItemClasses.root}:before`]: {
								flex: 0,
								padding: 0,
							},
						}}
					>
						{education.map((item) => (
							<TimelineItem>
								<TimelineSeparator>
									<TimelineDot />
									<TimelineConnector />
								</TimelineSeparator>
								<TimelineContent>
									<Stack key={item.id}>
										<Typography
											sx={{
												fontSize: {
													lg: "20px",
													md: "18px",
													sm: "15px",
													xs: "14px",
												},
												fontWeight: 600,
												lineHeight: 1.3,
												marginBottom: "7px",
											}}
										>
											{item.school}
										</Typography>
										<Typography
											sx={{
												fontSize: {
													lg: "15px",
													md: "13px",
													sm: "12px",
													xs: "12px",
												},
												color: "#2196f3",
												fontWeight: 400,
												lineHeight: 1.6,
											}}
										>
											{item.duration}
										</Typography>
										<Typography
											sx={{
												color: "hsl(0, 0%, 84%)",
												lineHeight: 1.6,
												fontWeight: 300,
												fontSize: {
													lg: "15px",
													md: "13px",
													sm: "12px",
													xs: "12px",
												},
											}}
										>
											{item.course}
										</Typography>
									</Stack>
								</TimelineContent>
							</TimelineItem>
						))}
					</Timeline>
				</Stack>
			</Stack>
		</Stack>
	);
};

export default Resume;
