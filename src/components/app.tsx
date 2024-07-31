// app.tsx
import React from "react";
import Header from "./header";
import ContestList from "./contest-list";

interface AppProps {
    initialData: {
        contests: Array<{ id: number; categoryName: string; contestName: string }>;
    };
}

const App: React.FC<AppProps> = ({ initialData }) => {
    console.log({ initialData });

    return (
        <div className="container">
            <Header message="Naming Contests" />
            <ContestList initialContests={initialData.contests} />
        </div>
    );
};

export default App;
