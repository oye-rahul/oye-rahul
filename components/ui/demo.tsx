"use client"

import { ShinyButton } from "@/components/ui/shiny-button"
import { Mail, Instagram, Linkedin, Globe } from "lucide-react"

export default function DemoOne() {
  const links = [
    {
      label: "Mail",
      href: "mailto:malvi.rahul.2005@gmail.com",
      icon: Mail,
      highlight: "#3b82f6", // Sapphire Blue
    },
    {
      label: "Instagram",
      href: "https://instagram.com/oye_rahul",
      icon: Instagram,
      highlight: "#ec4899", // Magenta Pink
    },
    {
      label: "LinkedIn",
      href: "https://linkedin.com/in/oye-rahul",
      icon: Linkedin,
      highlight: "#0284c7", // Cobalt Cyan
    },
    {
      label: "Portfolio",
      href: "https://github.com/oye-rahul",
      icon: Globe,
      highlight: "#10b981", // Emerald Green
    },
  ]

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-[#05070c] p-6 gap-6">
      <div className="text-center mb-4">
        <h1 className="text-3xl font-bold tracking-tight text-white mb-2">Connect with Rahul Malvi</h1>
        <p className="text-slate-400 text-sm uppercase tracking-wider">Choose an option below</p>
      </div>

      <div className="flex flex-col items-center gap-5 w-full max-w-sm">
        {links.map((link) => {
          const Icon = link.icon
          return (
            <ShinyButton
              key={link.label}
              onClick={() => window.open(link.href, "_blank")}
              className="w-full !py-6 !px-8 !text-2xl justify-center"
            >
              <span className="flex items-center justify-center gap-4 w-full">
                <Icon className="w-8 h-8 flex-shrink-0" />
                <span className="font-semibold tracking-wide">{link.label}</span>
              </span>
            </ShinyButton>
          )
        })}
      </div>
    </div>
  )
}
