import * as React from "react"
// Define an interface for the contest object
export interface Contest {
    id: number;
    categoryName: string;
    contestName: string;
}

const ContestPreview: React.FC<{ contest: Contest }> = ({ contest }) => {
    return (
        <div className="contest-preview">
            <div className="category">{contest.categoryName}</div>
            <div className="contest">{contest.contestName}</div>
        </div>
    );
};

export default ContestPreview;