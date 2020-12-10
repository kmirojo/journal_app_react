import React from 'react'
import JournalEntry from './JournalEntry'

const JournaEntries = () => {
    const entries = [1,2,3,4,5]

    const getEntries = () => {
        return entries.map((entry) => (
            <JournalEntry key={entry} />
        ))
    }

    return (
        <div className="journal__entries">
            {getEntries()}
        </div>
    )
}

export default JournaEntries
