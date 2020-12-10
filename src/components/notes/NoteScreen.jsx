import React from "react";
import NotesAppBar from "./NotesAppBar";

const NoteScreen = () => {
    return (
        <div className="notes__main-content">
            <NotesAppBar />

            <div className="notes__content">
                <input
                    type="text"
                    placeholder="Some awesom title"
                    className="notes__title-input"
                    autoComplete="off"
                />

                <textarea
                    placeholder="What happened today?"
                    className="notes__textarea"
                ></textarea>

                <div className="notes__image">
                    <img
                        src="https://picsum.photos/seed/picsum/700/500"
                        alt="An image"
                    />
                </div>
            </div>
        </div>
    );
};

export default NoteScreen;
