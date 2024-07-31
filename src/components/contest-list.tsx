import ContestPreview, {Contest} from "./contest-preview";
import * as React from "react";

interface ContestListProps {
    contests: Contest[];
}

const ContestList: React.FC<ContestListProps> = ({contests}) => {
    return ( <div className="contest-list">
        {contests.map((contest) => {
            return <ContestPreview key={contest.id} contest={contest} />
        })
        }
    </div>
    )
};
export default ContestList;

