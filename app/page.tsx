"use client"

import { useState } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import {
  Droplets,
  FileText,
  Filter,
  Gift,
  Shield,
  Star,
  Check,
  Sparkles,
  Calendar,
  ClipboardCheck,
  Waves,
  ChevronRight,
} from "lucide-react"

export default function HomePage() {
  const [formStatus, setFormStatus] = useState<"idle" | "success">("idle")

  const scrollToForm = () => {
    document.getElementById("claim")?.scrollIntoView({ behavior: "smooth" })
  }

  const scrollToIncluded = () => {
    document.getElementById("included")?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-cyan-50/20 to-blue-50/30">
      <header className="border-b border-white/20 bg-white/90 backdrop-blur-md sticky top-0 z-50 shadow-sm">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-20 items-center justify-between">
            <div className="flex items-center gap-3">
              <Image
                src="/images/miraclelogo-p-800-p-500.png"
                alt="MIRACLE POOL CARE"
                width={240}
                height={80}
                className="h-14 w-auto"
              />
            </div>
            <Button
              onClick={scrollToForm}
              className="bg-gradient-to-r from-cyan-500 via-blue-500 to-cyan-500 hover:from-cyan-400 hover:via-blue-400 hover:to-cyan-400 text-white shadow-lg shadow-cyan-500/50 transition-all hover:shadow-cyan-400/60 hover:scale-105 h-11 px-6 text-base font-bold border-0"
            >
              Claim My $1 Month
            </Button>
          </div>
        </div>
      </header>

      <section className="relative overflow-hidden min-h-[90vh] flex items-center">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <Image src="/images/5.jpg" alt="Crystal clear pool water" fill className="object-cover" priority />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900/85 via-slate-900/70 to-slate-900/50"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-slate-900/60"></div>
        </div>

        {/* Decorative Elements */}
        <div className="absolute top-20 right-10 w-72 h-72 bg-cyan-400/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-10 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>

        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
            {/* Left Content */}
            <div className="space-y-8">
              <div className="space-y-6">
                <div className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-cyan-500/20 to-blue-500/20 border border-cyan-400/30 px-4 py-2 backdrop-blur-sm">
                  <Sparkles className="size-4 text-cyan-300" />
                  <span className="text-sm font-semibold text-cyan-100">Limited Time Offer</span>
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
                  Premium weekly pool care + clear weekly reporting
                </p>

                <div className="flex flex-wrap gap-4 text-base text-white/90">
                  <span className="flex items-center gap-2">
                    <div className="flex items-center justify-center size-6 rounded-full bg-cyan-500/20 border border-cyan-400/30">
                      <Check className="size-4 text-cyan-300" />
                    </div>
                    All chemicals included
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
                <Button
                  size="lg"
                  variant="outline"
                  onClick={scrollToIncluded}
                  className="h-14 px-10 text-lg font-semibold border-2 border-white/30 hover:border-white/60 hover:bg-white/10 bg-white/5 text-white backdrop-blur-sm"
                >
                  See what's included
                </Button>
              </div>

              {/* Trust Indicators */}
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
              <div
                id="claim"
                className="rounded-3xl bg-white/95 backdrop-blur-xl border-2 border-white/50 p-6 shadow-2xl"
              >
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
                      <p className="text-base text-slate-600">All chemicals included. Quick response. No contracts.</p>
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
                      className="space-y-3"
                    >
                      <input type="hidden" name="form-name" value="claim-offer" />
                      <p className="hidden">
                        <label>
                          Don't fill this out: <input name="bot-field" />
                        </label>
                      </p>

                      <div>
                        <label htmlFor="fullName" className="block text-xs font-semibold text-slate-700 mb-1">
                          Full Name <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="text"
                          id="fullName"
                          name="fullName"
                          required
                          className="w-full rounded-xl border-2 border-slate-200 px-3 py-2.5 text-sm text-slate-900 placeholder:text-slate-400 focus:border-cyan-500 focus:outline-none focus:ring-2 focus:ring-cyan-500/20 transition-all"
                          placeholder="John Doe"
                        />
                      </div>

                      <div>
                        <label htmlFor="email" className="block text-xs font-semibold text-slate-700 mb-1">
                          Email <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          required
                          className="w-full rounded-xl border-2 border-slate-200 px-3 py-2.5 text-sm text-slate-900 placeholder:text-slate-400 focus:border-cyan-500 focus:outline-none focus:ring-2 focus:ring-cyan-500/20 transition-all"
                          placeholder="john@example.com"
                        />
                      </div>

                      <div>
                        <label htmlFor="phone" className="block text-xs font-semibold text-slate-700 mb-1">
                          Phone
                        </label>
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          className="w-full rounded-xl border-2 border-slate-200 px-3 py-2.5 text-sm text-slate-900 placeholder:text-slate-400 focus:border-cyan-500 focus:outline-none focus:ring-2 focus:ring-cyan-500/20 transition-all"
                          placeholder="(555) 123-4567"
                        />
                      </div>

                      <div>
                        <label htmlFor="address" className="block text-xs font-semibold text-slate-700 mb-1">
                          Service Address <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="text"
                          id="address"
                          name="address"
                          required
                          className="w-full rounded-xl border-2 border-slate-200 px-3 py-2.5 text-sm text-slate-900 placeholder:text-slate-400 focus:border-cyan-500 focus:outline-none focus:ring-2 focus:ring-cyan-500/20 transition-all"
                          placeholder="123 Main St, City, ST 12345"
                        />
                      </div>

                      <div>
                        <label htmlFor="poolType" className="block text-xs font-semibold text-slate-700 mb-1">
                          Pool Type
                        </label>
                        <select
                          id="poolType"
                          name="poolType"
                          className="w-full rounded-xl border-2 border-slate-200 px-3 py-2.5 text-sm text-slate-900 focus:border-cyan-500 focus:outline-none focus:ring-2 focus:ring-cyan-500/20 transition-all"
                        >
                          <option value="">Select pool type</option>
                          <option value="chlorine">Chlorine</option>
                          <option value="salt">Salt</option>
                          <option value="not-sure">Not sure</option>
                        </select>
                      </div>

                      <div>
                        <label htmlFor="notes" className="block text-xs font-semibold text-slate-700 mb-1">
                          Notes
                        </label>
                        <textarea
                          id="notes"
                          name="notes"
                          rows={2}
                          className="w-full rounded-xl border-2 border-slate-200 px-3 py-2.5 text-sm text-slate-900 placeholder:text-slate-400 focus:border-cyan-500 focus:outline-none focus:ring-2 focus:ring-cyan-500/20 transition-all resize-none"
                          placeholder="Any additional details..."
                        />
                      </div>

                      <div className="space-y-2">
                        <p className="text-xs font-semibold text-slate-700">Available Discounts:</p>
                        <div className="grid grid-cols-2 gap-2">
                          {["Senior", "Firefighter", "Police", "Military"].map((type) => (
                            <label key={type} className="flex items-center gap-2 cursor-pointer group">
                              <input
                                type="checkbox"
                                name={`discount-${type.toLowerCase()}`}
                                className="size-4 rounded border-slate-300 text-cyan-600 focus:ring-2 focus:ring-cyan-500/20 transition-all cursor-pointer"
                              />
                              <span className="text-xs text-slate-600 group-hover:text-slate-900">{type}</span>
                            </label>
                          ))}
                        </div>
                      </div>

                      <Button
                        type="submit"
                        size="lg"
                        className="w-full bg-gradient-to-r from-cyan-600 via-blue-600 to-cyan-600 hover:from-cyan-500 hover:via-blue-500 hover:to-cyan-500 text-white shadow-xl shadow-cyan-500/40 transition-all hover:shadow-2xl hover:shadow-cyan-400/50 hover:scale-[1.02] h-12 text-base font-bold mt-4"
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

      <section id="included" className="relative py-24 bg-white overflow-hidden">
        {/* Decorative background elements */}
        <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-slate-50 to-transparent"></div>
        <div className="absolute top-20 right-0 w-96 h-96 bg-cyan-100/30 rounded-full blur-3xl"></div>
        <div className="absolute bottom-40 left-0 w-96 h-96 bg-blue-100/20 rounded-full blur-3xl"></div>

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-5xl md:text-6xl font-bold text-slate-900">What's included</h2>
            <p className="text-xl md:text-2xl text-slate-600 max-w-3xl mx-auto font-light">
              Everything you need for crystal clear water, every single week
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto mb-12">
            {[
              { icon: Droplets, title: "All chemicals included", color: "cyan" },
              { icon: FileText, title: "Free weekly report", color: "blue" },
              { icon: Filter, title: "1st filter clean free", color: "cyan" },
              { icon: Gift, title: "Senior discount", color: "amber" },
              { icon: Shield, title: "Firefighter discount", color: "cyan" },
              { icon: Star, title: "Police discount", color: "blue" },
              { icon: Sparkles, title: "Military discount", color: "amber" },
              { icon: Check, title: "No contracts", color: "cyan" },
            ].map((item, idx) => (
              <div
                key={idx}
                className="group relative rounded-2xl bg-gradient-to-br from-white to-slate-50/50 border-2 border-slate-200/50 p-6 shadow-lg hover:shadow-2xl hover:-translate-y-2 hover:border-cyan-300/50 transition-all duration-300"
              >
                <div className="flex flex-col items-start gap-4">
                  <div
                    className={`inline-flex size-14 items-center justify-center rounded-2xl ${
                      item.color === "amber"
                        ? "bg-gradient-to-br from-amber-100 to-orange-100 text-amber-600"
                        : item.color === "blue"
                          ? "bg-gradient-to-br from-blue-100 to-cyan-100 text-blue-600"
                          : "bg-gradient-to-br from-cyan-100 to-blue-100 text-cyan-600"
                    } group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 shadow-md`}
                  >
                    <item.icon className="size-7" />
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 leading-snug">{item.title}</h3>
                </div>
              </div>
            ))}
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <div className="group relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white hover:shadow-cyan-500/30 transition-all duration-500 hover:scale-[1.02] aspect-square">
              <Image
                src="/images/1.jpg"
                alt="Pool tile mosaic detail"
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </div>
            <div className="group relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white hover:shadow-blue-500/30 transition-all duration-500 hover:scale-[1.02] aspect-square">
              <Image
                src="/images/3.jpg"
                alt="Pool edge detail"
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-gradient-to-br from-slate-50 to-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">Comprehensive Services</h2>
            <p className="text-xl text-slate-600">Professional care for your pool, every week</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-4xl mx-auto">
            {[
              { icon: Waves, text: "Weekly cleaning & skimming" },
              { icon: ClipboardCheck, text: "Water testing & balancing" },
              { icon: Droplets, text: "Chemical service (included)" },
              { icon: Calendar, text: "Brushing/vacuuming as needed" },
              { icon: Filter, text: "Filter cleaning (first one free)" },
              { icon: Shield, text: "Seasonal checks" },
            ].map((service, idx) => (
              <div
                key={idx}
                className="flex items-center gap-4 rounded-xl bg-white border border-slate-200 p-4 shadow-sm hover:shadow-md hover:border-cyan-300 transition-all"
              >
                <div className="inline-flex size-10 items-center justify-center rounded-lg bg-cyan-100 text-cyan-600 shrink-0">
                  <service.icon className="size-5" />
                </div>
                <span className="text-slate-900 font-medium">{service.text}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust Band */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="rounded-3xl bg-gradient-to-br from-cyan-50 to-blue-50 border border-cyan-200 p-8 md:p-12 shadow-xl">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="order-2 lg:order-1">
                <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-slate-200">
                  <Image
                    src="/images/4.jpg"
                    alt="Pool edge detail"
                    width={1080}
                    height={1080}
                    className="w-full h-auto"
                  />
                </div>
              </div>

              <div className="order-1 lg:order-2 space-y-8">
                <h2 className="text-4xl md:text-5xl font-bold text-slate-900">Why Choose Miracle Pool Care</h2>

                <div className="space-y-6">
                  {[
                    { title: "Consistent weekly care", desc: "Same day, same tech, same quality service every week" },
                    {
                      title: "Clear weekly reporting",
                      desc: "Know exactly what we did and how your pool is performing",
                    },
                    { title: "No contracts", desc: "Stay because you love the service, not because you have to" },
                  ].map((item, idx) => (
                    <div key={idx} className="flex gap-4">
                      <div className="inline-flex size-8 items-center justify-center rounded-lg bg-cyan-600 text-white shrink-0">
                        <Check className="size-5" />
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold text-slate-900 mb-1">{item.title}</h3>
                        <p className="text-slate-600">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-gradient-to-br from-slate-50 to-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">How It Works</h2>
            <p className="text-xl text-slate-600">Four simple steps to crystal clear water</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
            {/* Connector line - desktop only */}
            <div className="hidden lg:block absolute top-8 left-0 right-0 h-0.5 bg-gradient-to-r from-cyan-200 via-cyan-300 to-cyan-200 mx-20"></div>

            {[
              { num: "1", title: "Claim offer", desc: "Fill out the form above to get started" },
              { num: "2", title: "We confirm details", desc: "We reach out to confirm your service day" },
              { num: "3", title: "First service", desc: "Water balancing and complete pool service" },
              { num: "4", title: "Ongoing care", desc: "Weekly service with detailed reports" },
            ].map((step, idx) => (
              <div key={idx} className="relative">
                <div className="text-center space-y-4">
                  <div className="inline-flex size-16 items-center justify-center rounded-2xl bg-gradient-to-br from-cyan-600 to-cyan-500 text-white text-2xl font-bold shadow-lg shadow-cyan-500/30 relative z-10">
                    {step.num}
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-xl font-semibold text-slate-900">{step.title}</h3>
                    <p className="text-slate-600">{step.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">What Our Customers Say</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {[
              {
                name: "Sarah M.",
                text: "Best decision we made for our pool. The weekly reports are so helpful and the water is always perfect.",
              },
              {
                name: "James R.",
                text: "No more worrying about chemicals or cleaning. They take care of everything and the communication is great.",
              },
              {
                name: "Linda P.",
                text: "Love that there are no contracts. The service speaks for itself - we wouldn't go anywhere else.",
              },
            ].map((testimonial, idx) => (
              <div
                key={idx}
                className="rounded-2xl bg-gradient-to-br from-slate-50 to-white border border-slate-200 p-6 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
              >
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="size-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-slate-700 mb-4 leading-relaxed">{testimonial.text}</p>
                <p className="font-semibold text-slate-900">— {testimonial.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-20 bg-gradient-to-br from-slate-50 to-white">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">Frequently Asked Questions</h2>
          </div>

          <div className="rounded-2xl bg-white border border-slate-200 p-6 shadow-lg">
            <Accordion type="single" collapsible className="w-full">
              {[
                {
                  q: "What does the $1 first month include?",
                  a: "Your first month includes all our standard weekly services: cleaning, skimming, water testing, chemical balancing, brushing/vacuuming as needed, and your first filter cleaning. All chemicals are included.",
                },
                {
                  q: "How does weekly reporting work?",
                  a: "After each service, you receive a detailed report via email showing what was done, water test results, chemicals added, and any notes about your pool's condition.",
                },
                {
                  q: "Are there really no contracts?",
                  a: "Yes, absolutely no contracts. We believe you should stay because you love our service, not because you're locked into an agreement. You can cancel anytime.",
                },
                {
                  q: "What happens after the first month?",
                  a: "After your $1 first month, the service continues at our regular weekly rate. You'll receive the same great service, weekly reports, and all chemicals included.",
                },
                {
                  q: "Do you service my area?",
                  a: "Fill out the form above with your service address and we'll let you know within 24 hours if we service your area. We're expanding our service area regularly.",
                },
              ].map((faq, idx) => (
                <AccordionItem key={idx} value={`item-${idx}`}>
                  <AccordionTrigger className="text-left font-semibold text-slate-900">{faq.q}</AccordionTrigger>
                  <AccordionContent className="text-slate-600 leading-relaxed">{faq.a}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="rounded-3xl bg-gradient-to-br from-cyan-600 to-cyan-500 p-8 md:p-12 shadow-2xl relative overflow-hidden">
            <div className="relative z-10 text-center space-y-6 max-w-2xl mx-auto">
              <h2 className="text-4xl md:text-5xl font-bold text-white">Ready to claim your $1 first month?</h2>
              <p className="text-xl text-cyan-50">Join our growing family of satisfied pool owners</p>
              <Button
                size="lg"
                onClick={scrollToForm}
                className="bg-white text-cyan-600 hover:bg-cyan-50 shadow-xl hover:shadow-2xl hover:scale-105 transition-all h-12 px-8 text-base font-semibold"
              >
                Claim $1 Offer
                <ChevronRight className="size-5" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-slate-200 bg-slate-50 py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4">
            <div className="flex items-center justify-center">
              <Image
                src="/images/miraclelogo-p-800-p-500.png"
                alt="MIRACLE POOL CARE"
                width={200}
                height={67}
                className="h-12 w-auto"
              />
            </div>
            <p className="text-sm text-slate-600">
              Trusted local pool care • Professional weekly service • No contracts required
            </p>
            <p className="text-xs text-slate-500">© 2025 Miracle Pool Care. Service availability varies by location.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
