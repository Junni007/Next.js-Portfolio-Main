export const navLinks = [
	{
		id: "about",
		title: "About",
	},
	{
		id: "work",
		title: "Work",
	},
	{
		id: "contact",
		title: "Contact",
	},
];

const services = [
	{
		title: "Full Stack Web Developer",
		icon: "/web.webp",
	},
	{
		title: "UI Designer",
		icon: "/mobile.webp",
	},
	{
		title: "UX Designer",
		icon: "/backend.webp",
	},
	{
		title: "AI Enthusiast",
		icon: "/creator.webp",
	},
];

const technologies = [
	{
		name: "HTML 5",
		icon: "/tech/html.webp",
	},
	{
		name: "CSS 3",
		icon: "/tech/css.webp",
	},
	{
		name: "JavaScript",
		icon: "/tech/javascript.webp",
	},
	{
		name: "TypeScript",
		icon: "/tech/typescript.webp",
	},
	{
		name: "React JS",
		icon: "/tech/reactjs.webp",
	},
	{
		name: "Next.JS",
		icon: "/tech/nextjs.svg",
	},
	{
		name: "Redux Toolkit",
		icon: "/tech/redux.webp",
	},
	{
		name: "Tailwind CSS",
		icon: "/tech/tailwind.webp",
	},
	{
		name: "Three JS",
		icon: "/tech/threejs.webp",
	},
	{
		name: "git",
		icon: "/tech/git.webp",
	},
	{
		name: "figma",
		icon: "/tech/figma.webp",
	},
	{
		name: "wordpress",
		icon: "/tech/wordpress.webp",
	},
	{
		name: "bootstrap",
		icon: "/tech/bootstrap.webp",
	},
];

const experiences = [
	{
 		title: "Marketing Team Member",
 		company_name: "BIT Placement Club",
 		icon: "/company/1.jpeg",
 		iconBg: "#383E56",
 		date: "Oct 2023 - Present",
 		points: [
 			"Collaborated with a dynamic team to create and implement marketing strategies aimed at increasing awareness of placement events and opportunities.",
 			"Managed and maintained the club’s social media presence, ensuring regular and relevant updates about upcoming events, placements, and workshops.",
			"Worked closely with the communications team to develop promotional works, enhancing internal and external engagement.",
			"Contributed to brainstorming sessions for new marketing initiatives, leading to innovative ideas for improving student participation and engagement.",
 		],
 	},

	];

const testimonials = [
	{
		id: 1,
		testimonial:
			"LinkedIn is a business and employment-focused social media platform that works through websites and mobile apps.",
		name: "Adwiteya Juniwal",
		image: "/socialmedia/linkedin.svg",
		link: "www.linkedin.com/in/junni-adi",
	},
	{
		id: 2,
		testimonial:
			"Also do check out my Github Profile where I have shared all my codes from basic to advanced.",
		name: "Adwiteya Juniwal",
		image: "/tech/github.webp",
		link: "https://github.com/Junni007",
	},
];

const projects = [
	{
		name: "Html pricing table",
		description:
			"HTML Pricing Table is a responsive layout using Flexbox to display pricing tiers. It features clean columns for plan details, prices, and features, ensuring content stays aligned and adapts to various screen sizes for easy comparison.",
		tags: [
			{
				name: "pricing",
				color: "blue-text-gradient",
			},
			{
				name: "flexbox",
				color: "pink-text-gradient",
			},
			{
				name: "Basic",
				color: "orange-text-gradient",
			},
		],
		image: "/projectimg/Html pricing.png",
		source_code_link:
			"https://github.com/Junni007/html-pricing-table-flexbox-",
		netlify_link: "https://junni007.github.io/html-pricing-table-flexbox-/",
	},
	{
		name: "Blog-website",
		description:
			"Blog-website is a Node.js-based platform that fetches and displays articles dynamically using APIs. It features a clean, responsive design, allowing users to browse blog posts efficiently. The backend handles data requests, ensuring seamless content updates and smooth navigation.",
		tags: [
			{
				name: "Node.js",
				color: "blue-text-gradient",
			},
			{
				name: "API",
				color: "orange-text-gradient",
			},
			{
				name: "Freedom",
				color: "green-text-gradient",
			},
		],
		image: "/projectimg/Blog.png",
		source_code_link: "https://github.com/Junni007/Blog-website",
		netlify_link: "",
	},
	{
		name: "Anime-Suite",
		description:
			"Anime-Suite is a Node.js-powered web app that fetches and displays detailed anime information using APIs. It offers a clean, user-friendly interface for browsing anime titles, characters, and episodes, providing real-time updates and smooth navigation for an engaging viewing experience.",
		tags: [
			{
				name: "Anime",
				color: "blue-text-gradient",
			},
			{
				name: "AnimeInfo",
				color: "green-text-gradient",
			},
		],
		image: "/projectimg/Anime.png",
		source_code_link: "https://github.com/Junni007/Anime-Suite",
		netlify_link: "",
	},
	{
		name: "2048 game",
		description:
			"2048 is a simple yet addictive puzzle game built with HTML, CSS, and JavaScript. Players slide and combine tiles to reach the 2048 tile on a 4x4 grid. The game ends when the grid fills up or the target tile is reached. Featuring smooth animations and intuitive controls, it offers a fun challenge for all players.",
		tags: [
			{
				name: "AddictiveGames",
				color: "blue-text-gradient",
			},
			{
				name: "PuzzleGame",
				color: "orange-text-gradient",
			},
			{
				name: "GameDevelopment",
				color: "blue-text-gradient",
			},
		],
		image: "/projectimg/2048.png",
		source_code_link: "https://github.com/Junni007/2048-webGame",
		netlify_link: "https://junni007.github.io/2048-webGame/",
	},
];

export { services, technologies, experiences, testimonials, projects };
