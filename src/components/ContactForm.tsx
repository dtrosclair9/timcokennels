'use client'

import { useState } from 'react'
import { STAGES, SITE } from '@/lib/site'

type FormState = 'idle' | 'loading' | 'success' | 'error'

export default function ContactForm({ defaultService }: { defaultService?: string }) {
  const [status, setStatus] = useState<FormState>('idle')
  const [errorMessage, setErrorMessage] = useState('')

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setStatus('loading')
    setErrorMessage('')

    const form = e.currentTarget
    const data = new FormData(form)

    try {
      const res = await fetch(`https://formspree.io/f/${SITE.formspreeId}`, {
        method: 'POST',
        body: data,
        headers: { Accept: 'application/json' },
      })

      if (res.ok) {
        setStatus('success')
        form.reset()
      } else {
        const json = await res.json()
        setErrorMessage(json?.errors?.[0]?.message ?? 'Something went wrong. Please try again.')
        setStatus('error')
      }
    } catch {
      setErrorMessage('Network error. Please check your connection and try again.')
      setStatus('error')
    }
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-5">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <Field id="name" label="Full Name" required autoComplete="name" placeholder="John Doe" />
        <Field id="phone" label="Phone" type="tel" autoComplete="tel" placeholder={SITE.phoneDisplay} />
      </div>

      <Field id="email" label="Email" type="email" required autoComplete="email" placeholder="you@example.com" />

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <Field id="dog" label="Dog (breed & age)" autoComplete="off" placeholder="Black Lab, 8 months" />
        <div>
          <label htmlFor="program" className="block text-xs font-bold uppercase tracking-mega text-primary mb-2">
            Program Interest
          </label>
          <select
            id="program"
            name="program"
            defaultValue={defaultService ?? ''}
            className="w-full border border-gray-300 px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition bg-white"
          >
            <option value="">Select...</option>
            {STAGES.map((s) => (
              <option key={s.key} value={s.title}>
                {s.title}
              </option>
            ))}
            <option value="Full Program">Full program (obedience → advanced)</option>
            <option value="Not Sure">Not sure yet</option>
          </select>
        </div>
      </div>

      <div>
        <label htmlFor="message" className="block text-xs font-bold uppercase tracking-mega text-primary mb-2">
          Tell us about your dog <span className="text-accent" aria-hidden="true">*</span>
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          className="w-full border border-gray-300 px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition resize-y"
          placeholder="Current age, where they're at on obedience and retrieving, what you want them doing by season, and your timeframe..."
        />
      </div>

      {/* Honeypot — bots fill, humans don't see */}
      <input type="text" name="_gotcha" className="hidden" tabIndex={-1} autoComplete="off" />

      {status === 'error' && (
        <p role="alert" className="text-sm text-red-700 bg-red-50 border border-red-200 px-4 py-3">
          {errorMessage}
        </p>
      )}

      {status === 'success' ? (
        <div role="status" className="bg-primary text-white p-6 text-center">
          <p className="font-display text-2xl uppercase tracking-tight mb-2">Message Sent</p>
          <p className="text-sm text-gray-300">
            Thanks for reaching out. {SITE.ownerShort} will get back to you shortly. For anything urgent call{' '}
            <a href={`tel:${SITE.phoneRaw}`} className="text-accent hover:text-accent-light">
              {SITE.phoneDisplay}
            </a>.
          </p>
        </div>
      ) : (
        <button
          type="submit"
          disabled={status === 'loading'}
          className="w-full btn-accent text-center disabled:opacity-60 disabled:cursor-not-allowed"
        >
          {status === 'loading' ? 'Sending...' : 'Send Message'}
        </button>
      )}
    </form>
  )
}

function Field({
  id,
  label,
  type = 'text',
  required,
  autoComplete,
  placeholder,
}: {
  id: string
  label: string
  type?: string
  required?: boolean
  autoComplete?: string
  placeholder?: string
}) {
  return (
    <div>
      <label htmlFor={id} className="block text-xs font-bold uppercase tracking-mega text-primary mb-2">
        {label}
        {required && <span className="text-accent" aria-hidden="true"> *</span>}
      </label>
      <input
        id={id}
        name={id}
        type={type}
        required={required}
        autoComplete={autoComplete}
        placeholder={placeholder}
        className="w-full border border-gray-300 px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition"
      />
    </div>
  )
}
