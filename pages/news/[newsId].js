//our-domain/news/something-important

import { useRouter } from "next/router";

function detailsPage() {
	const router = useRouter();

	// console.log(router.query.newsId);
	// console.log(router);
	const newsId = router.query.newsId;
	//we could fetch such data from DB using this ID now.
	return <h1>Details Page</h1>;
}
export default detailsPage;

/**
 * @naming - wrapping filename inside square bracket like this tells react that, this is a dynamic page.
 * @useRouter - used to extract certain parameter values.
 *---- provided by next. NOT react hook.
 *---- userRouter provides: object and data.
 *---- note that, this will render minimum two times, INITIAL rendering: contains no data, SECOND call by the hook contains the data.
 */
