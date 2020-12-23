import React from "react";
import { startSaveNote, startUploading } from "../../actions/notes";
import { useDispatch, useSelector } from "react-redux";

const NotesAppBar = () => {
    const dispatch = useDispatch();
    const { active } = useSelector((state) => state.notes);

    const handleSave = () => {
        dispatch(startSaveNote(active));
    };

    const handlePictureClick = () => {
        console.log("Picture");
    };

    const handleFileChange = (ev) => {
        const file = ev.target.files[0];

        if (file) {
            dispatch(startUploading(file));
        }
    };

    return (
        <div className="notes__appbar">
            <span>28 de agosto 2020</span>

            <div>
                <label className="btn" onClick={handlePictureClick}>
                    Picture
                    <input
                        type="file"
                        style={{ display: "none" }}
                        onChange={handleFileChange}
                    />
                </label>
                <button className="btn" onClick={handleSave}>
                    Save
                </button>
            </div>
        </div>
    );
};

export default NotesAppBar;
