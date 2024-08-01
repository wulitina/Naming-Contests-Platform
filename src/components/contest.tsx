import {useEffect, useState} from "react";
import {fetchContest, fetchContests} from "../api-client";
import Header from "./header";

interface ContestType {
    contestName: string;
    description: string;
}

const Contest = ({id})=>{
    const [contest,setContest]=useState<ContestType | null>(null)
    useEffect(()=>{
        fetchContest(id).then((contest)=>{
            setContest(contest)
        })
    },[id])
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