/** @format */

import React from "react";
import { makeStyles } from "@mui/styles";
import Tab from "@mui/material/Tab";

const useStyles = makeStyles((theme) => ({
	defaultTab: {
		"&. MuiTabs-indicator": {
			display: "none",
		},
	},
}));

const CustomTab = ({ label, selected, ...otherProps }) => {
	const classes = useStyles();
	return (
		<Tab
			disableRipple
			className={classes.defaultTab}
			label={label}
			{...otherProps}
			sx={{
				fontSize: "12px",
				color: selected ? "#2196f3" : "#ffffff",
			}}
		/>
	);
};

export default CustomTab;
