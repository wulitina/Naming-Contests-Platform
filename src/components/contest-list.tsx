import React, { useEffect, useState } from "react";
import ContestPreview, { Contest } from "./contest-preview";
import Header from "./header";
import {fetchContestList} from "../api-client";

interface ContestListProps {
    initialContests: Contest[];
    onContestClick: (contestId: number) => void;
}

const ContestList: React.FC<ContestListProps> = ({ initialContests, onContestClick }) => {
    const [contests, setContests] = useState(initialContests??[]);

    useEffect(() => {
            if (!initialContests || !initialContests.length) {
                fetchContestList().then((contests) => {
                    setContests(contests);
                });
            }
            }, [initialContests]);


    return (
        <>
        <Header message="Naming Contests" />
    <div className="contest-list">
            {contests.map((contest) => (
                <ContestPreview
                    key={contest.id}
                    contest={contest}
                    onClick={() => onContestClick(contest.id)}
                />
            ))}
        </div>
        </>
    );
};

export default ContestList;
