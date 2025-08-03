import React from 'react'

export default function AlertBox({ alerts }) {
  if (!alerts.length) return null
  return (
    <div className="bg-yellow-100 border border-yellow-400 text-yellow-800 px-4 py-3 rounded mb-4" role="alert">
      <strong className="font-bold">Alerts:</strong>
      <ul className="list-disc ml-6">
        {alerts.map((alert, idx) => (
          <li key={idx}>{alert}</li>
        ))}
      </ul>
    </div>
  )
}
