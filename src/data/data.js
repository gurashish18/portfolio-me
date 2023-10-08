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
		icon: (
			<EmailIcon
				style={{
					fill: "#2196f3",
					fontSize: { lg: "28px", md: "26px", sm: "22px", xs: "20px" },
				}}
			/>
		),
		description: "gurashishgill171@gmail.com",
		clickable: true,
		link: "mailto:gurashishgill171@gmail.com",
	},
	{
		id: 2,
		title: "PHONE",
		icon: (
			<LocalPhoneIcon
				style={{
					fill: "#2196f3",
					fontSize: { lg: "28px", md: "26px", sm: "22px", xs: "20px" },
				}}
			/>
		),
		description: "+91-9729756418",
		clickable: false,
		link: "#",
	},
	{
		id: 3,
		title: "LOCATION",
		icon: (
			<LocationOnIcon
				style={{
					fill: "#2196f3",
					fontSize: { lg: "28px", md: "26px", sm: "22px", xs: "20px" },
				}}
			/>
		),
		description: "Gurugram, India",
		clickable: false,
		link: "#",
	},
	{
		id: 4,
		title: "LINKEDIN",
		icon: (
			<LinkedInIcon
				style={{
					fill: "#2196f3",
					fontSize: { lg: "28px", md: "26px", sm: "22px", xs: "20px" },
				}}
			/>
		),
		description: "view",
		clickable: true,
		link: "https://www.linkedin.com/in/gurashish-singh-gill",
	},
	{
		id: 5,
		title: "GITHUB",
		icon: (
			<GitHubIcon
				style={{
					fill: "#2196f3",
					fontSize: { lg: "28px", md: "26px", sm: "22px", xs: "20px" },
				}}
			/>
		),
		description: "view",
		clickable: true,
		link: "https://github.com/gurashish18",
	},
	{
		id: 6,
		title: "LEETCODE",
		icon: (
			<CodeIcon
				style={{
					fill: "#2196f3",
					fontSize: { lg: "28px", md: "26px", sm: "22px", xs: "20px" },
				}}
			/>
		),
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
					"Proficient in React and RxJS, specializing in frontend development for financial applications.",
			},
			{
				id: 2,
				title:
					"Demonstrated expertise in debugging, ensuring rapid issue resolution and an uninterrupted user experience.",
			},
			{
				id: 3,
				title:
					"Optimized web application performance, resulting in a 20% improvement in load times and enhanced rendering efficiency.",
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

export const certifications = [
	{
		id: 1,
		title: "Incedo Internship : Jan 2023 - July 2023",
		image: "https://www.incedoinc.com/wp-content/uploads/incedo-logo.png",
		link: "https://drive.google.com/file/d/1Tzfyvlz9D71HU-fzzLcGpiF1D_JKeVPw/view?usp=sharing",
	},
	{
		id: 2,
		title: "Microsoft Azure AZ-900 : Certificate for Completion",
		image:
			"https://blogs.sap.com/wp-content/uploads/2021/05/azure-fundamentals-600x600-1.png",
		link: "https://drive.google.com/file/d/1Y7KHyvN34d2KWf5qHFoP0p5Z18bFY6O6/view?usp=sharing",
	},
	{
		id: 3,
		title:
			"Early Prediction of Breast Cancer using Multilevel Ensemble Model : Certificate of Presentation",
		image:
			"https://zenkit.com/wp-content/uploads/2021/05/Smart-Note-Taking-for-Research-Paper-Writing.jpg",
		link: "https://drive.google.com/file/d/1QFa8e4I0mSYb7IHVhvwQZ7465QlQHPev/view?usp=sharing",
	},
];
