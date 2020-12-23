import React from "react";
import Sidebar from "./Sidebar";
import NothingSelected from "./NothingSelected";
import NoteScreen from "../notes/NoteScreen";
import { useSelector } from "react-redux";

const JournalScreen = () => {
    const { active } = useSelector((state) => state.notes);

    const handleScreen = () => {
        return active ? <NoteScreen /> : <NothingSelected />;
    };

    return (
        <div className="journal__main-content">
            <Sidebar />

            <main>
                {handleScreen()}
            </main>
        </div>
    );
};

export default JournalScreen;
