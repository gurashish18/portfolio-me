/** @format */
import EmailIcon from "@mui/icons-material/Email";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";

export const sidebar_items = [
	{
		id: 1,
		title: "EMAIL",
		icon: <EmailIcon style={{ fill: "#2196f3" }} fontSize="24px" />,
		description: "gillgurashish171@gmail.com",
	},
	{
		id: 2,
		title: "LOCATION",
		icon: <LocationOnIcon style={{ fill: "#2196f3" }} fontSize="24px" />,
		description: "Gurugram, India",
	},
	{
		id: 3,
		title: "LINKEDIN",
		icon: <LinkedInIcon style={{ fill: "#2196f3" }} fontSize="24px" />,
		description: "view",
	},
	{
		id: 4,
		title: "GITHUB",
		icon: <GitHubIcon style={{ fill: "#2196f3" }} fontSize="24px" />,
		description: "view",
	},
];

export const skills = [
	{
		id: 1,
		name: "C++",
		img: (
			<svg
				xmlns="http://www.w3.org/2000/svg"
				width="2222"
				height="2500"
				preserveAspectRatio="xMinYMin meet"
				viewBox="0 0 256 288"
				id="c"
			>
				<path
					fill="#5C8DBC"
					d="M255.569 84.72c-.002-4.83-1.035-9.098-3.124-12.761-2.052-3.602-5.125-6.621-9.247-9.008-34.025-19.619-68.083-39.178-102.097-58.817-9.17-5.294-18.061-5.101-27.163.269C100.395 12.39 32.59 51.237 12.385 62.94 4.064 67.757.015 75.129.013 84.711 0 124.166.013 163.62 0 203.076c.002 4.724.991 8.909 2.988 12.517 2.053 3.711 5.169 6.813 9.386 9.254 20.206 11.703 88.02 50.547 101.56 58.536 9.106 5.373 17.997 5.565 27.17.269 34.015-19.64 68.075-39.198 102.105-58.817 4.217-2.44 7.333-5.544 9.386-9.252 1.994-3.608 2.985-7.793 2.987-12.518 0 0 0-78.889-.013-118.345"
				></path>
				<path
					fill="#1A4674"
					d="M128.182 143.509L2.988 215.593c2.053 3.711 5.169 6.813 9.386 9.254 20.206 11.703 88.02 50.547 101.56 58.536 9.106 5.373 17.997 5.565 27.17.269 34.015-19.64 68.075-39.198 102.105-58.817 4.217-2.44 7.333-5.544 9.386-9.252l-124.413-72.074"
				></path>
				<path
					fill="#1A4674"
					d="M91.101 164.861c7.285 12.718 20.98 21.296 36.69 21.296 15.807 0 29.58-8.687 36.828-21.541l-36.437-21.107-37.081 21.352"
				></path>
				<path
					fill="#1B598E"
					d="M255.569 84.72c-.002-4.83-1.035-9.098-3.124-12.761l-124.263 71.55 124.413 72.074c1.994-3.608 2.985-7.793 2.987-12.518 0 0 0-78.889-.013-118.345"
				></path>
				<path
					fill="#FFF"
					d="M248.728 148.661h-9.722v9.724h-9.724v-9.724h-9.721v-9.721h9.721v-9.722h9.724v9.722h9.722v9.721M213.253 148.661h-9.721v9.724h-9.722v-9.724h-9.722v-9.721h9.722v-9.722h9.722v9.722h9.721v9.721"
				></path>
				<path
					fill="#FFF"
					d="M164.619 164.616c-7.248 12.854-21.021 21.541-36.828 21.541-15.71 0-29.405-8.578-36.69-21.296a42.062 42.062 0 0 1-5.574-20.968c0-23.341 18.923-42.263 42.264-42.263 15.609 0 29.232 8.471 36.553 21.059l36.941-21.272c-14.683-25.346-42.096-42.398-73.494-42.398-46.876 0-84.875 38-84.875 84.874 0 15.378 4.091 29.799 11.241 42.238 14.646 25.48 42.137 42.637 73.634 42.637 31.555 0 59.089-17.226 73.714-42.781l-36.886-21.371"
				></path>
			</svg>
		),
	},
	{
		id: 2,
		name: "",
	},
];

export const experience = [
	{
		id: 1,
		company: "Incedo Inc.",
		role: "Software Engineer",
		duration: "July 2023 - Present",
		description: [
			{
				id: 1,
				title:
					"Working on SpringBoot Batch processes for estimating IC++ Transactions that a merchant faces in the Cost Engine team.",
			},
		],
	},
	{
		id: 2,
		company: "Incedo Inc.",
		role: "Software Engineer Intern",
		duration: "Jan 2023 - July 2023",
		description: [
			{
				id: 1,
				title:
					"Completed intensive 1.5-month training programs covering .NET, C#, and React, achieving proficiency in these technologies.",
			},
			{
				id: 2,
				title:
					"Collaborated with a 7-member team on a capstone project for a finance company, developing a full-stack application. Utilized repository pattern and clean architecture on the backend, while implementing component-container architecture on the frontend",
			},
			{
				id: 3,
				title:
					"Achieved Microsoft Azure AZ-900 certification, showcasing proficiency in cloud computing and Azure services.",
			},
		],
	},
];

export const education = [
	{
		id: 1,
		school: "Thapar Institute Of Engineering and Technology",
		duration: "2019 - 2023",
		course: "B.E. in Computer Engineering | 8.50 CGPA",
	},
	{
		id: 2,
		school: "Sri Guru Gobind Singh Sr. Sec. School",
		duration: "2017 - 2019",
		course: "Higher Secondary Education | 87.56%",
	},
];
