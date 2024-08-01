import {useEffect, useState} from "react";
import {addNewNameToContest, fetchContest} from "../api-client";
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

    const handleNewNameSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        const form = event.target as HTMLFormElement;
        const newName = form.elements.namedItem("newName") as HTMLInputElement;
        //newName.value
        const updatedContest = await addNewNameToContest({
            contestId: contest.id,
            newNameValue: newName.value,
        });
        console.log(updatedContest);
        //setContest(updatedContest);

    };
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
            <div className="title">Propose a New Name</div>
            <div className="body">
                <form onSubmit={handleNewNameSubmit}>
                    <input
                        type="text"
                        name="newName"
                        placeholder="New Name Here.."
                        />
                    <button type="submit">Submit</button>
                </form>
            </div>



            <a href="/" className="link" onClick={handleClickContestList}>
                Contest Link
            </a>

        </div>
        </>
    )
};
export default Contest;