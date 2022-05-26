//our-domain/news

import Link from "next/link";

function newsPage() {
	return (
		<>
			<h1>News Page</h1>
			<ul>
				<li>
					<Link href="/news/some-news">Some News</Link>
				</li>
				<li>Some more news about news!</li>
			</ul>
		</>
	);
}
export default newsPage;
