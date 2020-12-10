import React from 'react'

const JournalEntry = () => {
    return (
        <div className="journal__entry pointer">
            <div className="journal__entry-picture"></div>
            <div className="journal__entry-body">
                <p className="journal__entry-title">
                    Un ittulo
                </p>
                <p className="journal__entry-content">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deleniti voluptatum temporibus delectus, repellendus, modi tenetur tempore quisquam nisi, placeat explicabo enim voluptatem vero voluptatibus excepturi animi quidem. Consectetur, itaque at?
                </p>
            </div>
            <div className="journal__entry-date-box">
                <span>Mondy</span>
                <h4>28</h4>
            </div>
        </div>
    )
}

export default JournalEntry
