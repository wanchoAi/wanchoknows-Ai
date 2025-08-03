import React, { useState } from 'react'

const sports = {
  Basketball: ['Lakers', 'Warriors', 'Nets'],
  Football: ['Patriots', 'Cowboys', 'Packers'],
  Baseball: ['Yankees', 'Dodgers', 'Cubs']
}

export default function TeamSelection({ setTeam, setInterest }) {
  const [selectedInterest, setSelectedInterest] = useState(null)
  const [selectedSport, setSelectedSport] = useState(null)

  return (
    <div>
      <h2 className="text-xl font-semibold mb-2">Select Your Interest</h2>
      <div className="flex gap-4 mb-4">
        {['Sports', 'Music', 'General'].map((interest) => (
          <button
            key={interest}
            onClick={() => {
              setSelectedInterest(interest)
              setInterest(interest)
              setSelectedSport(null)
              setTeam(null)
            }}
            className={`px-4 py-2 rounded ${
              selectedInterest === interest ? 'bg-wanchoGold text-black' : 'bg-gray-200'
            }`}
          >
            {interest}
          </button>
        ))}
      </div>

      {selectedInterest === 'Sports' && (
        <>
          <h3 className="text-lg font-semibold mb-2">Select a Sport</h3>
          <div className="flex gap-4 mb-4">
            {Object.keys(sports).map((sport) => (
              <button
                key={sport}
                onClick={() => setSelectedSport(sport)}
                className={`px-3 py-1 rounded ${
                  selectedSport === sport ? 'bg-wanchoGold text-black' : 'bg-gray-200'
                }`}
              >
                {sport}
              </button>
            ))}
          </div>

          {selectedSport && (
            <>
              <h4 className="mb-2">Select a Team</h4>
              <div className="flex gap-4 flex-wrap">
                {sports[selectedSport].map((team) => (
                  <button
                    key={team}
                    onClick={() => setTeam(team)}
                    className="bg-wanchoGreen text-white px-3 py-1 rounded"
                  >
                    {team}
                  </button>
                ))}
              </div>
            </>
          )}
        </>
      )}

      {selectedInterest && selectedInterest !== 'Sports' && (
        <p className="italic">Team selection skipped for this interest.</p>
      )}
    </div>
  )
}
