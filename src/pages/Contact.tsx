import emailjs from '@emailjs/browser'
import { motion } from 'framer-motion'
import { useRef, useState } from 'react'
import { HeaderNav } from '../components/HeaderNav'
import { WordsPullUpMultiStyle } from '../components/WordsPullUpMultiStyle'

export function Contact() {
  const formRef = useRef<HTMLFormElement | null>(null)

  const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID
  const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID
  const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')

  const [loading, setLoading] = useState(false)
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle')

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    if (!formRef.current) return

    if (!serviceId || !templateId || !publicKey) {
      setStatus('error')
      return
    }

    setLoading(true)
    setStatus('idle')

    try {
      await emailjs.sendForm(
        serviceId,
        templateId,
        formRef.current,
        { publicKey },
      )
      console.log("dsdsdsd", serviceId, templateId, publicKey)
      setName('')
      setEmail('')
      setMessage('')
      formRef.current.reset()
      setStatus('success')
    } catch {
      setStatus('error')
    } finally {
      setLoading(false)
    }
  }

  return (
    <main className="relative min-h-screen bg-black px-4 pb-20 pt-28 md:px-6 md:pb-28">
      <HeaderNav className="fixed left-1/2 top-0 z-50 -translate-x-1/2" />

      <div className="mx-auto max-w-6xl">
        <div className="text-center">
          <div className="text-2xl font-normal text-[#E1E0CC] sm:text-3xl md:text-4xl lg:text-5xl">
            <WordsPullUpMultiStyle
              className="justify-center"
              segments={[{ text: 'Contact', className: '' }]}
            />
          </div>
          <div className="mt-2 text-2xl font-normal text-gray-500 sm:text-3xl md:text-4xl lg:text-5xl">
            <WordsPullUpMultiStyle
              className="justify-center"
              segments={[{ text: "Let’s build something clean and fast.", className: '' }]}
            />
          </div>
        </div>

        <section className="mx-auto mt-12 max-w-3xl rounded-2xl bg-gradient-to-b from-[#0f0f0f] to-[#1a1a1a] p-6 md:rounded-3xl md:p-8">
          <form ref={formRef} onSubmit={handleSubmit} className="space-y-4">
            <div className="grid gap-4 md:grid-cols-2">
              <label className="block">
                <span className="mb-2 block text-xs text-gray-500">Name</span>
                <input
                  name="name"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Your name"
                  className="w-full rounded-lg border border-white/10 bg-[#101010] px-4 py-3 text-sm text-[#E1E0CC] placeholder:text-gray-500 outline-none transition-colors focus:border-primary"
                />
              </label>

              <label className="block">
                <span className="mb-2 block text-xs text-gray-500">Email</span>
                <input
                  name="email"
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="you@domain.com"
                  className="w-full rounded-lg border border-white/10 bg-[#101010] px-4 py-3 text-sm text-[#E1E0CC] placeholder:text-gray-500 outline-none transition-colors focus:border-primary"
                />
              </label>
            </div>

            <label className="block">
              <span className="mb-2 block text-xs text-gray-500">Message</span>
              <textarea
                name="message"
                required
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Tell me what you want to build..."
                rows={6}
                className="w-full resize-none rounded-lg border border-white/10 bg-[#101010] px-4 py-3 text-sm leading-relaxed text-[#E1E0CC] placeholder:text-gray-500 outline-none transition-colors focus:border-primary"
              />
            </label>

            <div className="flex flex-col items-center gap-3 pt-2">
              <button
                type="submit"
                disabled={loading}
                className="inline-flex items-center justify-center rounded-full bg-primary px-6 py-3 text-sm font-medium text-black transition-opacity disabled:opacity-60"
              >
                {loading ? 'Sending...' : 'Send message'}
              </button>

              {status === 'success' ? (
                <motion.p
                  initial={{ opacity: 0, y: 6 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                  className="text-sm text-primary/70"
                >
                  Message sent successfully.
                </motion.p>
              ) : null}

              {status === 'error' ? (
                <motion.p
                  initial={{ opacity: 0, y: 6 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                  className="text-sm text-red-200/80"
                >
                  Something went wrong. Please try again.
                </motion.p>
              ) : null}
            </div>
          </form>
        </section>
      </div>
    </main>
  )
}

