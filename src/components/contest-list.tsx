import React, { useEffect, useState } from "react";
import ContestPreview, { Contest } from "./contest-preview";
import { fetchContests } from "../api-client";

interface ContestListProps {
    initialContests: Contest[];
    onContestClick: (contestId: number) => void;
}

const ContestList: React.FC<ContestListProps> = ({ initialContests, onContestClick }) => {
    const [contests, setContests] = useState<Contest[]>(initialContests);

    useEffect(() => {
        fetchContests().then((contests) => {
            setContests(contests);
        });
    }, []);

    return (
        <div className="contest-list">
            {contests.map((contest) => (
                <ContestPreview
                    key={contest.id}
                    contest={contest}
                    onClick={() => onContestClick(contest.id)}
                />
            ))}
        </div>
    );
};

export default ContestList;
