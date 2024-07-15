import { images } from '../../constants/images';

const NotFoundPage = () => {
    return (
        <div className=" bg-gray-100 min-h-screen flex items-center justify-center">
            <div className=" max-w-md text-center space-y-8">
                <h1 className="text-4xl font-bold text-red-500">404</h1>
                <h2 className="text-2xl font-semibold">Oops! We can't seem to find that page.</h2>
                <p className="text-gray-600">
                    The page you requested is either unavailable or has moved to a new location. Don't worry, you can:
                </p>
                <ul className=" list-none space-y-2 mx-auto px-4">
                    <li>
                        <a href="/" className="text-blue-500 hover:underline">Go back to the homepage</a>
                    </li>
                    <li>
                        <a href="/login" className="text-blue-500 hover:underline">Goto Login Screen</a>
                    </li>

                </ul>
                <img
                    className=" mx-auto"
                    src={images.notFound} 
                    alt="Lost Astronaut"
                />
            </div>
        </div>
    );
};

export default NotFoundPage;
