/** @format */

import { Stack } from "@mui/material";
import "./App.css";
import SideBar from "./components/Sidebar/sidebar-component";
import Workspace from "./components/Workspace/workspace-component";

function App() {
	return (
		<Stack
			width={"100%"}
			p={{ lg: 4, md: 4, sm: 2, xs: 1 }}
			paddingTop={8}
			paddingBottom={8}
			sx={{ backgroundColor: "#101010" }}
			alignItems={"center"}
		>
			<Stack
				gap={2}
				width={{ lg: "80%", md: "80%", sm: "90%", xs: "100%" }}
				minHeight={"100vh"}
				direction={{ md: "row", xs: "column" }}
			>
				<Stack sx={{ flex: { md: 0.2, sm: 1 } }}>
					<SideBar />
				</Stack>
				<Stack sx={{ flex: { md: 0.8, sm: 1 } }}>
					<Workspace />
				</Stack>
			</Stack>
		</Stack>
	);
}

export default App;
