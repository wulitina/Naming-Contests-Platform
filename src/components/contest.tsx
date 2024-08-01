import {useEffect, useState} from "react";
import {fetchContest} from "../api-client";
import Header from "./header";

interface ContestType {
    contestName: string;
    description: string;
}

const Contest = ({initialContest,onContestListClick})=>{
    const [contest,setContest]=useState(initialContest)

    useEffect(()=>{
        if (!contest.names){
            fetchContest(contest.id).then((contest)=>{
                setContest(contest)
            })
        }

    },[contest.id ,contest.names]);
    const handleClickContestList = (event:any)=>{
        event.preventDefault();
        onContestListClick();
    }

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
            <div className="title">
                Proposed Names
            </div>
            <div className="body">
                {contest.names?.length >0 ?
                    <div className="list">
                        {contest.names.map((proposedName:any)=>{
                            return (
                                <div key ={proposedName.id}  className="item">
                                    {proposedName.name}
                                </div>
                            )
                        })}


                    </div>
                    : (
                        <div> No names proposed yet</div>
                )}
            </div>



            <a href="/" className="link" onClick={handleClickContestList}>
                Contest Link
            </a>

        </div>
        </>
    )
};
export default Contest;