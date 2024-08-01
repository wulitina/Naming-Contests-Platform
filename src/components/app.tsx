import React, {useEffect, useState} from "react";
import Header from "./header";
import ContestList from "./contest-list";
import Contest from "./contest";

interface ContestType {
    id: number;
    categoryName: string;
    contestName: string;
}

interface AppProps {
    initialData: {
        contests: ContestType[];
        currentContest?: ContestType;
    };
}

const App: React.FC<AppProps> = ({ initialData }) => {
    const [page, setPage] = useState<"contestList"|"contest">(initialData.currentContest?"contest":"contestList");
    const [currentContest, setCurrentContest] = useState<object | undefined>(initialData.currentContest);
    useEffect(()=>{
        window.onpopstate = (event)=>{
            const newPage = event.state?.contestId
            ?"contest"
                :"contestList"
            setPage(newPage);
            setCurrentContest({id:event.state?.contestId});
        };
    },[])
    const navigateToContest = (contestId: number) => {
        window.history.pushState(
            {contestId},
            "",
            `/contest/${contestId}`
        );
        setPage("contest");
        setCurrentContest({id:contestId});
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
                return <Contest initialContest={currentContest}/>;
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
