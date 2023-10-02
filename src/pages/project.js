/** @format */

import { Grid, Stack } from "@mui/material";
import React from "react";
import ProjectCard from "../components/project-card-component";
import easyBuyandSellImage from "../assets/easybuyandsell.png";
import chatAppImage from "../assets/chatapp.jpeg";
import stockPriceImage from "../assets/stockprice.png";
import healthImage from "../assets/healthDashboard.jpeg";
import bwork from "../assets/bwork.jpeg";
import news from "../assets/news.jpeg";

const Projects = () => {
	return (
		<Stack>
			<Stack>
				<Grid container spacing={2}>
					<Grid item xs={12} sm={6}>
						<ProjectCard
							image={easyBuyandSellImage}
							title="EasyBuyandSell"
							domain="Web Development"
						/>
					</Grid>
					<Grid item xs={12} sm={6}>
						<ProjectCard
							image={chatAppImage}
							title="Chat Application"
							domain="Web Development"
						/>
					</Grid>
					<Grid item xs={12} sm={6}>
						<ProjectCard
							image={stockPriceImage}
							title="Stock Price Predictor"
							domain="Machine Learning"
						/>
					</Grid>
					<Grid item xs={12} sm={6}>
						<ProjectCard
							image={healthImage}
							title="Body Dashboard and Disease Predictor"
							domain="Machine Learning"
						/>
					</Grid>
					<Grid item xs={12} sm={6}>
						<ProjectCard
							image={bwork}
							title="BWork"
							domain="Mobile Development"
						/>
					</Grid>
					<Grid item xs={12} sm={6}>
						<ProjectCard
							image={news}
							title="Day Start News"
							domain="Mobile Development"
						/>
					</Grid>
				</Grid>
			</Stack>
		</Stack>
	);
};

export default Projects;
