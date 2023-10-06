/** @format */
import EmailIcon from "@mui/icons-material/Email";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import CodeIcon from "@mui/icons-material/Code";

export const sidebar_items = [
	{
		id: 1,
		title: "EMAIL",
		icon: <EmailIcon style={{ fill: "#2196f3", fontSize: "28px" }} />,
		description: "gillgurashish171@gmail.com",
		clickable: true,
		link: "mailto:gillgurashish171@gmail.com",
	},
	{
		id: 2,
		title: "PHONE",
		icon: <LocalPhoneIcon style={{ fill: "#2196f3", fontSize: "28px" }} />,
		description: "+91-9729756418",
		clickable: false,
		link: "#",
	},
	{
		id: 3,
		title: "LOCATION",
		icon: <LocationOnIcon style={{ fill: "#2196f3", fontSize: "28px" }} />,
		description: "Gurugram, India",
		clickable: false,
		link: "#",
	},
	{
		id: 4,
		title: "LINKEDIN",
		icon: <LinkedInIcon style={{ fill: "#2196f3", fontSize: "28px" }} />,
		description: "view",
		clickable: true,
		link: "https://www.linkedin.com/in/gurashish-singh-gill",
	},
	{
		id: 5,
		title: "GITHUB",
		icon: <GitHubIcon style={{ fill: "#2196f3", fontSize: "28px" }} />,
		description: "view",
		clickable: true,
		link: "https://github.com/gurashish18",
	},
	{
		id: 6,
		title: "LEETCODE",
		icon: <CodeIcon style={{ fill: "#2196f3", fontSize: "28px" }} />,
		description: "view",
		clickable: true,
		link: "https://leetcode.com/gurashish_gill/",
	},
];

export const skills = [
	{
		id: 1,
		name: "C++",
		img: "https://skillicons.dev/icons?i=cpp",
	},
	{
		id: 2,
		name: "Python",
		img: "https://skillicons.dev/icons?i=py",
	},
	{
		id: 3,
		name: "C#",
		img: "https://skillicons.dev/icons?i=cs",
	},
	{
		id: 4,
		name: "HTML",
		img: "https://skillicons.dev/icons?i=html",
	},
	{
		id: 5,
		name: "CSS",
		img: "https://skillicons.dev/icons?i=css",
	},
	{
		id: 6,
		name: "JavaScript",
		img: "https://skillicons.dev/icons?i=js",
	},
	{
		id: 7,
		name: "React",
		img: "https://skillicons.dev/icons?i=react",
	},
	{
		id: 8,
		name: "RxJS",
		img: "https://skillicons.dev/icons?i=reactivex",
	},
	{
		id: 7,
		name: "Nodejs",
		img: "https://skillicons.dev/icons?i=nodejs",
	},
	{
		id: 8,
		name: "Express",
		img: "https://skillicons.dev/icons?i=express",
	},
	{
		id: 9,
		name: "MongoDB",
		img: "https://skillicons.dev/icons?i=mongodb",
	},
	{
		id: 10,
		name: "Git",
		img: "https://skillicons.dev/icons?i=git",
	},
	{
		id: 11,
		name: "Postman",
		img: "https://skillicons.dev/icons?i=postman",
	},
	{
		id: 10,
		name: "Azure",
		img: "https://skillicons.dev/icons?i=azure",
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
	{
		id: 3,
		school: "St. Joseph School",
		duration: "2005 - 2017",
		course: "Primary and Secondary Education | 10.00 CGPA",
	},
];
