import { fetchContests } from "../api-client";
import ReactDOMServer from "react-dom/server";
import App from "../components/app";

const serverRender = async () => {
    try {
        // Fetch contests data
        const contests = await fetchContests();

        // Render App component to string
        const initialMarkup = ReactDOMServer.renderToString(
            <App initialData={{ contests }} />
        );

        // Return the rendered markup and initial data
        return {
            initialMarkup,
            initialData: { contests },
        };
    } catch (error) {
        console.error("Error during server render:", error);
        // Return a fallback response or rethrow the error
        return {
            initialMarkup: "<div>Error rendering page</div>",
            initialData: { contests: [] },
        };
    }
};

export default serverRender;
