import ContactForm from '../components/ContactForm'
export default function Contact(){
  return (
    <section className="section" id="contact">
      <div className="container max-w-3xl">
        <h1 className="font-display text-4xl font-bold">Contact</h1>
        <p className="mt-2 text-white/80">Start a conversation — we’d love to hear about your project.</p>
        <div className="mt-6">
          <ContactForm />
        </div>
      </div>
    </section>
  )
}
