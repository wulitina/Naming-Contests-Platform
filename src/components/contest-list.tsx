import ContestPreview, {Contest} from "./contest-preview";
import * as React from "react";
import {useEffect, useState} from "react";
import {fetchContests} from "../api-client";

interface ContestListProps {
    initialContests: Contest[];
}

const ContestList: React.FC<ContestListProps> = ({initialContests}) => {
   const [ contests,setContests ] = useState(initialContests);
    useEffect(()=>{
        fetchContests().then((contests) => {
                setContests(contests);
            });
        },[]);

    return ( <div className="contest-list">
        {contests.map((contest) => {
            return <ContestPreview key={contest.id} contest={contest} />
        })
        }
    </div>
    )
};
export default ContestList;

