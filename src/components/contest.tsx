import {useEffect, useState} from "react";
import {fetchContest} from "../api-client";
import Header from "./header";

interface ContestType {
    contestName: string;
    description: string;
}

const Contest = ({initialContest})=>{
    const [contest,setContest]=useState(initialContest)
    useEffect(()=>{
        if (!contest.names){
            fetchContest(contest.id).then((contest)=>{
                setContest(contest)
            })
        }

    },[contest.id ,contest.names])
    return (
        <>
        <Header message={contest?.contestName|| "Loading..."} />
        <div className="contest">
            <div className="title">
                Contest Description
            </div>
            <div className="description">
                {contest?contest.description:"loading..."}
            </div>
        </div>
        </>
    )
};
export default Contest;