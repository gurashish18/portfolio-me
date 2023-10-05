/** @format */

import { Stack, IconButton, Grid, Typography } from "@mui/material";
import StarIcon from "@mui/icons-material/Star";
import SportsEsportsIcon from "@mui/icons-material/SportsEsports";
import React from "react";
import ExtrasCard from "../components/extra-card-component";

const Extras = () => {
	return (
		<Stack p={4}>
			<Stack>
				<Stack direction={"row"} alignItems={"center"}>
					<IconButton>
						<StarIcon style={{ fill: "#2196f3", fontSize: "32px" }} />
					</IconButton>
					<Typography sx={{ fontSize: "24px", fontWeight: "600" }}>
						Position of Responsibilities
					</Typography>
				</Stack>
				<Stack>
					<Grid container>
						<Grid item xs={12} sm={6} md={6}>
							<ExtrasCard
								image={
									"https://media.licdn.com/dms/image/C560BAQEXWFSkK78KOQ/company-logo_200_200/0/1608223582677?e=1704326400&v=beta&t=-1sgb1f1XV2VfPbV3gTKHRjWmDbDdHcbvdiDT_r3JO0"
								}
								title="Microsoft Learn Student Chapter, TIET"
								description={
									"Worked as a Executive Member from 2019 to 2022. Orgainised tech-focused events, workshops, and hackathons"
								}
							/>
						</Grid>
						<Grid item xs={12} sm={6} md={6}>
							<ExtrasCard
								image={
									"https://truesport.org/wp-content/uploads/soccer-captain-post.jpg"
								}
								title="Sports Captain, School"
								description={
									"Represented my school in various sporting events. Lead the Badminton team of our school."
								}
							/>
						</Grid>
					</Grid>
				</Stack>
			</Stack>
			<Stack marginTop={"40px"}>
				<Stack direction={"row"} alignItems={"center"}>
					<IconButton>
						<SportsEsportsIcon style={{ fill: "#2196f3", fontSize: "32px" }} />
					</IconButton>
					<Typography sx={{ fontSize: "24px", fontWeight: "600" }}>
						My Hobbies
					</Typography>
				</Stack>
				<Stack>
					<Grid container>
						<Grid item xs={12} sm={6} md={6}>
							<ExtrasCard
								image={
									"https://images.unsplash.com/photo-1534438327276-14e5300c3a48?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Z3ltc3xlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80"
								}
								title="GYM"
								description={""}
							/>
						</Grid>
						<Grid item xs={12} sm={6} md={6}>
							<ExtrasCard
								image={
									"https://www.mykhel.com/img/2022/01/cricket-1642491052.jpg"
								}
								title="CRICKET"
								description={""}
							/>
						</Grid>
						<Grid item xs={12} sm={6} md={6}>
							<ExtrasCard
								image={
									"https://img.olympics.com/images/image/private/t_s_pog_staticContent_hero_lg_2x/f_auto/primary/tdslyl0pptzs6vst4uq5"
								}
								title="BADMINTON"
								description={""}
							/>
						</Grid>
						<Grid item xs={12} sm={6} md={6}>
							<ExtrasCard
								image={
									"https://media-cldnry.s-nbcnews.com/image/upload/newscms/2019_41/3044956/191009-cooking-vegetables-al-1422.jpg"
								}
								title="COOKING"
								description={""}
							/>
						</Grid>
						<Grid item xs={12} sm={6} md={6}>
							<ExtrasCard
								image={
									"https://odishabhaskar.in/wp-content/uploads/2022/12/netflix.jpg"
								}
								title="BINGE WATCHING"
								description={""}
							/>
						</Grid>
					</Grid>
				</Stack>
			</Stack>
		</Stack>
	);
};

export default Extras;
