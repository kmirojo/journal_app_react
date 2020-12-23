import React from "react";
import JournalEntry from "./JournalEntry";
import { useSelector } from "react-redux";

const JournaEntries = () => {
    const { notes } = useSelector((state) => state.notes);

    const getEntries = () => {
        return notes.map((note) => {
            return <JournalEntry key={note.id} {...note} />;
        });
    };

    return <div className="journal__entries">{getEntries()}</div>;
};

export default JournaEntries;
