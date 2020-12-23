import React, { useEffect, useRef } from "react";
import NotesAppBar from "./NotesAppBar";
import { useSelector, useDispatch } from "react-redux";
import { useForm } from "../../hooks/useForm";
import { activeNote, startDeleting } from "../../actions/notes";

const NoteScreen = () => {
    const dispatch = useDispatch();

    const { active: selectedNote } = useSelector((state) => state.notes);

    const [formValues, handleInputChange, reset] = useForm(selectedNote);

    const { body, title } = formValues;

    const activeId = useRef(selectedNote.id);

    useEffect(() => {
        if (selectedNote.id !== activeId.current) {
            reset(selectedNote);
            activeId.current = selectedNote.id;
        }
    }, [selectedNote, reset]);

    useEffect(() => {
        dispatch(activeNote(formValues.id, { ...formValues }));
    }, [formValues, dispatch]);

    const getImage = () => {
        if (selectedNote.url) {
            return (
                <div className="notes__image">
                    <img src={`${selectedNote.url}`} alt="An image" />
                </div>
            );
        }
    };

    const handleDelete = () => {
        dispatch(startDeleting(activeId.current));
    };

    return (
        <div className="notes__main-content">
            <NotesAppBar />

            <div className="notes__content">
                <input
                    type="text"
                    placeholder="Some awesom title"
                    className="notes__title-input"
                    autoComplete="off"
                    value={title}
                    onChange={handleInputChange}
                    name="title"
                />

                <textarea
                    placeholder="What happened today?"
                    className="notes__textarea"
                    value={body}
                    onChange={handleInputChange}
                    name="body"
                ></textarea>

                {getImage()}
            </div>

            <button className="btn btn-danger" onClick={handleDelete}>
                Delete
            </button>
        </div>
    );
};

export default NoteScreen;
