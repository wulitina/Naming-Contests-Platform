import { fetchContest, fetchContestList } from "../api-client";
import ReactDOMServer from "react-dom/server";
import App from "../components/app";

interface InitialData {
    contests: { id: number; categoryName: string; contestName: string }[];
    currentContest?: { id: number; categoryName: string; contestName: string };
}

const serverRender = async (req: any) => {
    try {
        const { contestId } = req.params;
        const initialData: InitialData = contestId
            ? {
                contests: [], // Default empty array for contests
                currentContest: await fetchContest(contestId)
            }
            : {
                contests: await fetchContestList()
            };

        // Render App component to string
        const initialMarkup = ReactDOMServer.renderToString(
            <App initialData={initialData} />
        );

        // Return the rendered markup and initial data
        return {
            initialMarkup,
            initialData
        };
    } catch (error) {
        console.error("Error during server render:", error);
        // Return a fallback response or rethrow the error
        return {
            initialMarkup: "<div>Error rendering page</div>",
            initialData: {
                contests: [] // Ensure this matches the expected type
            }
        };
    }
};

export default serverRender;
