/** @format */

import { Stack } from "@mui/material";
import "./App.css";
import SideBar from "./components/Sidebar/sidebar-component";
import Workspace from "./components/Workspace/workspace-component";

function App() {
	return (
		<Stack
			width={"100%"}
			p={4}
			paddingTop={8}
			paddingBottom={8}
			sx={{ backgroundColor: "#101010" }}
			alignItems={"center"}
		>
			<Stack
				width={"80%"}
				direction={"row"}
				gap={2}
				sx={{ minHeight: "100vh" }}
			>
				<Stack sx={{ flex: 0.2, position: "sticky" }}>
					<SideBar />
				</Stack>
				<Stack sx={{ flex: 0.8 }}>
					<Workspace />
				</Stack>
			</Stack>
		</Stack>
	);
}

export default App;
