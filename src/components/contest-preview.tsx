import React from "react";

// Define an interface for the contest object
export interface Contest {
    id: number;
    categoryName: string;
    contestName: string;
}

interface ContestPreviewProps {
    contest: Contest;
    onClick: (id: number) => void;
}

const ContestPreview: React.FC<ContestPreviewProps> = ({ contest, onClick }) => {
    const handleClick = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        event.preventDefault();
        onClick(contest.id); // Pass contest.id to the onClick handler
    };

    return (
        <div className="contest-preview" onClick={handleClick}>
            <div className="category">{contest.categoryName}</div>
            <div className="contest">{contest.contestName}</div>
        </div>
    );
};

export default ContestPreview;
