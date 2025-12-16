"use client"

import { useState } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Check, ChevronRight, Sparkles } from "lucide-react"

export default function HomePage() {
  const [formStatus, setFormStatus] = useState<"idle" | "success">("idle")

  const scrollToForm = () => {
    document.getElementById("claim")?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-cyan-50/20 to-blue-50/30">
      <section className="relative overflow-hidden min-h-[90vh] flex items-center">
        <div className="absolute -top-10 left-1/2 -translate-x-1/2 z-20">
          <div className="w-[230px] h-[106px] rounded-t-none rounded-b-[999px] bg-white/95 backdrop-blur-md shadow-xl ring-1 ring-white/60 overflow-hidden">
            <div className="h-full flex items-end justify-center pb-5 px-5 translate-y-[15px]">
              <Image
                src="/images/miraclelogo-p-800-p-500.png"
                alt="MIRACLE POOL CARE"
                width={290}
                height={96}
                className="h-14 w-auto"
                priority
              />
            </div>
          </div>
        </div>

        <div className="absolute inset-0 z-0">
          <Image src="/images/5.jpg" alt="Crystal clear pool water" fill className="object-cover" priority />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900/85 via-slate-900/70 to-slate-900/50"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-slate-900/60"></div>
        </div>

        <div className="absolute top-20 right-10 w-72 h-72 bg-cyan-400/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-10 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>

        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
            <div className="space-y-8">
              <div className="space-y-6">
                <div className="inline-flex items-center gap-2.5 rounded-full bg-gradient-to-r from-cyan-500/20 to-blue-500/20 border border-cyan-400/30 px-5 py-2.5 backdrop-blur-sm">
                  <Sparkles className="size-5 text-cyan-300" />
                  <span className="text-base font-bold text-cyan-100">Limited Time Offer</span>
                </div>

                <h1 className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-white tracking-tight leading-[1.05] text-balance">
                  Get your first month for{" "}
                  <span className="relative inline-block">
                    <span className="relative z-10 text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-orange-300 to-amber-400">
                      $1
                    </span>
                    <span className="absolute -inset-2 bg-gradient-to-r from-amber-400/30 to-orange-400/30 blur-xl"></span>
                  </span>
                </h1>

                <p className="text-xl md:text-2xl lg:text-3xl text-cyan-100 leading-relaxed font-light">
                  Premium weekly pool care + weekly reporting
                </p>

                <div className="flex flex-wrap gap-4 text-base text-white/90">
                  <span className="flex items-center gap-2">
                    <div className="flex items-center justify-center size-6 rounded-full bg-cyan-500/20 border border-cyan-400/30">
                      <Check className="size-4 text-cyan-300" />
                    </div>
                    Basic chemicals included
                  </span>
                  <span className="flex items-center gap-2">
                    <div className="flex items-center justify-center size-6 rounded-full bg-cyan-500/20 border border-cyan-400/30">
                      <Check className="size-4 text-cyan-300" />
                    </div>
                    No contracts
                  </span>
                  <span className="flex items-center gap-2">
                    <div className="flex items-center justify-center size-6 rounded-full bg-cyan-500/20 border border-cyan-400/30">
                      <Check className="size-4 text-cyan-300" />
                    </div>
                    Free weekly reports
                  </span>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  size="lg"
                  onClick={scrollToForm}
                  className="bg-gradient-to-r from-cyan-500 via-blue-500 to-cyan-500 hover:from-cyan-400 hover:via-blue-400 hover:to-cyan-400 text-white shadow-2xl shadow-cyan-500/50 transition-all hover:shadow-cyan-400/60 hover:scale-105 h-14 px-10 text-lg font-bold border-0"
                >
                  Claim $1 Offer
                  <ChevronRight className="size-6" />
                </Button>
              </div>

              <div className="flex flex-wrap gap-8 pt-6 text-sm text-white/80">
                <span className="flex items-center gap-2">
                  <div className="size-2 rounded-full bg-cyan-400 shadow-lg shadow-cyan-400/50"></div>
                  Fast response
                </span>
                <span className="flex items-center gap-2">
                  <div className="size-2 rounded-full bg-cyan-400 shadow-lg shadow-cyan-400/50"></div>
                  Clear reporting
                </span>
                <span className="flex items-center gap-2">
                  <div className="size-2 rounded-full bg-cyan-400 shadow-lg shadow-cyan-400/50"></div>
                  Professional service
                </span>
              </div>
            </div>

            <div className="lg:ml-auto max-w-xl w-full">
              <div id="claim" className="rounded-3xl bg-white/95 backdrop-blur-xl border-2 border-white/50 p-6 shadow-2xl">
                {formStatus === "success" ? (
                  <div className="text-center py-6 space-y-3">
                    <div className="inline-flex items-center justify-center size-16 rounded-full bg-gradient-to-br from-cyan-100 to-blue-100 mb-2">
                      <Check className="size-8 text-cyan-600" />
                    </div>
                    <h3 className="text-2xl font-bold text-slate-900">We received your request!</h3>
                    <p className="text-base text-slate-600">
                      We'll reach out within 24 hours to confirm your details and schedule your first service.
                    </p>
                  </div>
                ) : (
                  <>
                    <div className="mb-6 space-y-2">
                      <h2 className="text-2xl lg:text-3xl font-bold text-slate-900">Claim your $1 first month</h2>
                      <p className="text-base text-slate-600">Basic chemicals included. Quick response. No contracts.</p>
                    </div>

                    <form
                      name="claim-offer"
                      method="POST"
                      action="/__forms.html"
                      onSubmit={(e) => {
                        e.preventDefault()
                        const form = e.currentTarget

                        fetch("/__forms.html", {
                          method: "POST",
                          headers: { "Content-Type": "application/x-www-form-urlencoded" },
                          body: new URLSearchParams(new FormData(form) as any).toString(),
                        })
                          .then(() => setFormStatus("success"))
                          .catch((error) => alert(error))
                      }}
                      className="space-y-4"
                    >
                      <input type="hidden" name="form-name" value="claim-offer" />
                      <p className="hidden">
                        <label>
                          Don't fill this out: <input name="bot-field" />
                        </label>
                      </p>

                      <div>
                        <label htmlFor="fullName" className="block text-sm font-semibold text-slate-700 mb-1">
                          Full Name <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="text"
                          id="fullName"
                          name="fullName"
                          required
                          className="w-full rounded-xl border-2 border-slate-200 px-3 py-2.5 text-base text-slate-900 placeholder:text-slate-400 focus:border-cyan-500 focus:outline-none focus:ring-2 focus:ring-cyan-500/20 transition-all"
                          placeholder="John Doe"
                        />
                      </div>

                      <div>
                        <label htmlFor="email" className="block text-sm font-semibold text-slate-700 mb-1">
                          Email <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          required
                          className="w-full rounded-xl border-2 border-slate-200 px-3 py-2.5 text-base text-slate-900 placeholder:text-slate-400 focus:border-cyan-500 focus:outline-none focus:ring-2 focus:ring-cyan-500/20 transition-all"
                          placeholder="john@example.com"
                        />
                      </div>

                      <div>
                        <label htmlFor="phone" className="block text-sm font-semibold text-slate-700 mb-1">
                          Phone
                        </label>
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          className="w-full rounded-xl border-2 border-slate-200 px-3 py-2.5 text-base text-slate-900 placeholder:text-slate-400 focus:border-cyan-500 focus:outline-none focus:ring-2 focus:ring-cyan-500/20 transition-all"
                          placeholder="(555) 123-4567"
                        />
                      </div>

                      <div>
                        <label htmlFor="address" className="block text-sm font-semibold text-slate-700 mb-1">
                          Service Address <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="text"
                          id="address"
                          name="address"
                          required
                          className="w-full rounded-xl border-2 border-slate-200 px-3 py-2.5 text-base text-slate-900 placeholder:text-slate-400 focus:border-cyan-500 focus:outline-none focus:ring-2 focus:ring-cyan-500/20 transition-all"
                          placeholder="123 Main St, City, ST 12345"
                        />
                      </div>

                      <div>
                        <label htmlFor="poolType" className="block text-sm font-semibold text-slate-700 mb-1">
                          Pool Type
                        </label>
                        <select
                          id="poolType"
                          name="poolType"
                          className="w-full rounded-xl border-2 border-slate-200 px-3 py-2.5 text-base text-slate-900 focus:border-cyan-500 focus:outline-none focus:ring-2 focus:ring-cyan-500/20 transition-all"
                        >
                          <option value="">Select pool type</option>
                          <option value="chlorine">Chlorine</option>
                          <option value="salt">Salt</option>
                          <option value="not-sure">Not sure</option>
                        </select>
                      </div>

                      <Button
                        type="submit"
                        size="lg"
                        className="w-full bg-gradient-to-r from-cyan-600 via-blue-600 to-cyan-600 hover:from-cyan-500 hover:via-blue-500 hover:to-cyan-500 text-white shadow-xl shadow-cyan-500/40 transition-all hover:shadow-2xl hover:shadow-cyan-400/50 hover:scale-[1.02] h-14 text-lg font-bold mt-4"
                      >
                        Claim $1 Offer
                        <ChevronRight className="size-5" />
                      </Button>
                    </form>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
