import {fetchContests} from "../api-client";
import ReactDomServer from "react-dom/server"
import App from "../components/app"
const serverRender = async () => {
    // fetch
    const contests = await fetchContests();
    const initialMarkup = ReactDomServer.renderToString(
        <App initialData={{contests}} />
    );
    return {initialMarkup};
};
export default serverRender;