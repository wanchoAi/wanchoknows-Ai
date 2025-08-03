import React, { useState, useEffect } from 'react'
import ChatCanvas from './components/ChatCanvas'
import TeamSelection from './components/TeamSelection'
import MemoryToggle from './components/MemoryToggle'
import AlertBox from './components/AlertBox'
import axios from 'axios'

export default function App() {
  const [team, setTeam] = useState(null)
  const [interest, setInterest] = useState(null)
  const [alerts, setAlerts] = useState([])
  const [memoryOn, setMemoryOn] = useState(false)
  const [messages, setMessages] = useState([])

  // Fetch alerts based on team
  useEffect(() => {
    if (!team) return
    // Placeholder: simulate alert fetching
    setAlerts([
      `Latest trade alert for ${team}`,
      `Injury update for ${team}`,
      `Upcoming game reminder for ${team}`
    ])
  }, [team])

  const sendMessage = async (message) => {
    setMessages((msgs) => [...msgs, { role: 'user', content: message }])
    try {
      const response = await axios.post(
        import.meta.env.VITE_BACKEND_URL + '/chat',
        { message, memoryOn, messages }
      )
      setMessages((msgs) => [...msgs, { role: 'wancho', content: response.data.reply }])
    } catch (error) {
      setMessages((msgs) => [...msgs, { role: 'wancho', content: 'Error fetching response' }])
    }
  }

  return (
    <div className="min-h-screen flex flex-col bg-white text-gray-800">
      <header className="bg-wanchoGreen text-white p-4 text-center text-2xl font-bold">Wanchoknows.ai</header>

      <main className="flex-1 p-4 max-w-3xl mx-auto">
        {!team && <TeamSelection setTeam={setTeam} setInterest={setInterest} />}
        {team && (
          <>
            <AlertBox alerts={alerts} />
            <MemoryToggle memoryOn={memoryOn} setMemoryOn={setMemoryOn} />
            <ChatCanvas messages={messages} sendMessage={sendMessage} />
          </>
        )}
      </main>
    </div>
  )
}
