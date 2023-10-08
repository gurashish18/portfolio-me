/** @format */

import React from "react";
import { Stack, Grid } from "@mui/material";
import { certifications } from "../data/data";
import CertificationCard from "../components/certification-card-component";

const Certifications = () => {
	return (
		<Stack p={4}>
			<Stack>
				<Grid container spacing={2}>
					{certifications.map((certification) => (
						<Grid item lg={6} md={6} sm={12} xs={12}>
							<CertificationCard
								image={certification.image}
								title={certification.title}
								link={certification.link}
							/>
						</Grid>
					))}
				</Grid>
			</Stack>
		</Stack>
	);
};

export default Certifications;
