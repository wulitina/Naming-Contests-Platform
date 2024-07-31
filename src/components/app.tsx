import React, { useState } from "react";
import Header from "./header";
import ContestList from "./contest-list";

interface AppProps {
    initialData: {
        contests: Array<{ id: number; categoryName: string; contestName: string }>;
    };
}

const App: React.FC<AppProps> = ({ initialData }) => {
    const [page, setPage] = useState("contestList");

    const navigateToContest = (contestId: number) => {
        setPage("contest");
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
                return "...";
            default:
                return null;
        }
    };

    console.log({ initialData });

    return (
        <div className="container">
            <Header message="Naming Contests" />
            {pageContent()}
        </div>
    );
};

export default App;
