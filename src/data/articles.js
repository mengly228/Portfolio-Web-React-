import React from "react";

function article_1() {
	return {
		date: "10 Feb 2024 - 9 Set 2024",
		title: "Coding Teacher (Online)",
		description:
			"An online coding instructor teaching programming fundamentals and practical development skills. Experienced in guiding students through real-world projects, explaining complex concepts clearly, and helping learners build confidence in web and software development.",
		keywords: [
			"Coding Education",
			"mengly",
			"Mengly",
			"Mengly Cheat",
		],
		style: `
				.article-content {
					display: flex;
					flex-direction: column;
					align-items: center;
				}

				.randImage {
					align-self: center;
					outline: 2px solid red;
				}
				`,
		body: (
			<React.Fragment>
				<div className="article-content">
					<div className="paragraph"></div>
					<img
						src="https://www.shutterstock.com/image-photo/teacher-giving-computer-science-lecture-600nw-2102457313.jpg"
						alt="random"
						className="randImage"
					/>
				</div>
			</React.Fragment>
		),
	};
}

function article_2() {
	return {
		date: "13 Apr 2024 - Present",
		title: "Web & App Developer (Freelance)",
		description:
			"A freelance developer specializing in building responsive websites and mobile applications. Experienced in transforming client requirements into functional, user-friendly solutions using modern technologies, with a focus on performance, scalability, and clean design.",
		style: ``,
		keywords: [
			"Website and Mobile App Development",
			"mengly",
			"Mengly",
			"Mengly Cheat",
		],
		style: `
				.article-content {
					display: flex;
					flex-direction: column;
					align-items: center;
				}

				.randImage {
					align-self: center;
					outline: 2px solid red;
				}
				`,
		body: (
			<React.Fragment>
				<div className="article-content">
					<div className="paragraph"></div>
					<img
						src="https://images.stockcake.com/public/9/1/8/9188a8e9-4bdf-4210-b046-fb70b2b029fd_large/coding-at-night-stockcake.jpg"
						alt="random"
						className="randImage"
					/>
				</div>
			</React.Fragment>
		),
	};
}

const myArticles = [article_1, article_2];

export default myArticles;
