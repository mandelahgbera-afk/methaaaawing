"use client"

import { useState, useEffect } from "react"
import { Dashboard } from "@/components/dashboard"

export default function Page() {
  const [blurState, setBlurState] = useState<"light" | "heavy">("light")
  const [showModal, setShowModal] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowModal(true)
      setBlurState("heavy")
    }, 2500)

    return () => clearTimeout(timer)
  }, [])

  useEffect(() => {
    const handleMessage = (event: MessageEvent) => {
      if (event.data === "closeModal") {
        setShowModal(false)
        setBlurState("light")
      }
    }

    window.addEventListener("message", handleMessage)
    return () => window.removeEventListener("message", handleMessage)
  }, [])

  return (
    <div className="relative overflow-hidden bg-black">
      {/* Dashboard with blur state */}
      <Dashboard blurState={blurState} />

      {showModal && (
        <iframe
          src="/modal.html"
          className="fixed inset-0 w-full h-full z-50 border-0"
          title="MWC Modal"
          style={{ background: "transparent" }}
          allowTransparency={true}
        />
      )}
    </div>
  )
}
