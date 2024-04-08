import { Link, useRouteError } from "react-router-dom";

export default function ErrorPage() {
    const error = useRouteError();
    console.error(error);

    return (
        <div id="error-page">
            <section className="flex items-center  p-20 ">
                <div className="container flex flex-col items-center  px-5 mx-auto my-8">
                    <div className="max-w-md text-center">
                        <h2 className="mb-8 font-extrabold text-9xl dark:text-gray-400">
                            <span className="text-green-400">404</span>
                        </h2>
                        <p className="text-2xl font-semibold md:text-3xl">{error.statusText || error.message}</p>
                        <p className="mt-4 mb-8 dark:text-gray-600">But dont worry, you can find plenty of other things on our homepage.</p>
                        <Link to='/'><a className="px-7 py-4 font-semibold bg-green-500 dark:text-gray-50">Back to Homepage</a></Link>
                    </div>
                </div>
            </section>






            <p>
                <i></i>
            </p>
        </div>
    );
}