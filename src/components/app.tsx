import React, {useEffect, useState} from "react";
import Header from "./header";
import ContestList from "./contest-list";
import Contest from "./contest";

interface AppProps {
    initialData: {
        contests: Array<{ id: number; categoryName: string; contestName: string }>;
    };
}

const App: React.FC<AppProps> = ({ initialData }) => {
    const [page, setPage] = useState("contestList");
    const [currentContestId, setCurrentContestId] = useState<number | undefined>(undefined);
    useEffect(()=>{
        window.onpopstate = (event)=>{
            const newPage = event.state?.contestId
            ?"contest"
                :"contestList"
            setPage(newPage);
            setCurrentContestId(event.state?.contestId);
        };
    },[])
    const navigateToContest = (contestId: number) => {
        window.history.pushState(
            {contestId},
            "",
            `/contest/${contestId}`
        );
        setPage("contest");
        setCurrentContestId(contestId);
        console.log("contest id",contestId )

    };

    const pageContent = () => {
        switch (page) {
            case "contestList":
                return (
                    <ContestList
                        initialContests={initialData.contests}
                        onContestClick={navigateToContest}
                    />
                );
            case "contest":
                return <Contest id={currentContestId}/>;
            default:
                return null;
        }
    };

    console.log({ initialData });

    return (
        <div className="container">

            {pageContent()}
        </div>
    );
};

export default App;
