"use client"

import type React from "react"

import { useState } from "react"
import { Navigation } from "@/components/navigation"

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
    setFormData({ name: "", email: "", message: "" })
    setTimeout(() => setSubmitted(false), 5000)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <>
      <Navigation />
      <main className="min-h-screen bg-background">
        <div className="max-w-3xl mx-auto px-4 py-20">
          <h1 className="text-4xl font-bold mb-8">
            <span className="glow-green">$ get in touch</span>
          </h1>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <p className="text-muted-foreground leading-relaxed">
                Have a project in mind? Want to collaborate? Just say hi? Fill out the form or reach out directly.
              </p>

              <div className="space-y-4">
                <div>
                  <h3 className="font-mono text-accent-green mb-2">Email</h3>
                  <a
                    href="mailto:uryux777@gmail.com"
                    className="text-muted-foreground hover:text-accent-cyan transition-colors"
                  >
                    uryux777@gmail.com
                  </a>
                </div>

                <div>
                  <h3 className="font-mono text-accent-green mb-2">Social</h3>
                  <div className="space-y-1">
                    <a
                      href="https://twitter.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block text-muted-foreground hover:text-accent-cyan transition-colors"
                    >
                      Twitter
                    </a>
                    <a
                      href="https://github.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block text-muted-foreground hover:text-accent-cyan transition-colors"
                    >
                      GitHub
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              {submitted && (
                <div
                  className="p-4 bg-accent-green/10 rounded text-accent-green text-sm font-mono"
                  style={{ border: "1px solid rgb(0 255 159)" }}
                >
                  Thanks! I'll get back to you soon.
                </div>
              )}

              <div>
                <label className="block text-sm font-mono text-accent-cyan mb-2">Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 bg-card rounded focus:outline-none focus:ring-1 transition-colors text-foreground placeholder-muted"
                  style={{
                    border: "1px solid rgb(30 35 53)",
                    focusBorderColor: "rgb(0 255 159)",
                    focusRingColor: "rgb(0 255 159 / 0.5)",
                  }}
                  placeholder="Your name"
                />
              </div>

              <div>
                <label className="block text-sm font-mono text-accent-cyan mb-2">Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 bg-card rounded focus:outline-none focus:ring-1 transition-colors text-foreground placeholder-muted"
                  style={{ border: "1px solid rgb(30 35 53)" }}
                  placeholder="your@email.com"
                />
              </div>

              <div>
                <label className="block text-sm font-mono text-accent-cyan mb-2">Message</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-2 bg-card rounded focus:outline-none focus:ring-1 transition-colors text-foreground placeholder-muted resize-none"
                  style={{ border: "1px solid rgb(30 35 53)" }}
                  placeholder="Your message..."
                />
              </div>

              <button
                type="submit"
                className="w-full px-4 py-2 font-mono font-semibold rounded border-glow-green hover:bg-accent-green hover:text-background transition-all duration-300"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </main>
    </>
  )
}
