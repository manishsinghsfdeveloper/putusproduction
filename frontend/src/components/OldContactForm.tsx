import { useState } from 'react'
import axios from 'axios'

export default function ContactForm(){
  const [form,setForm] = useState({name:'',email:'',message:''})
  const [status, setStatus] = useState('idle')
  const submit = async (e:any)=>{
    e.preventDefault(); setStatus('sending')
    try{
      // placeholder - backend not deployed
      await axios.post('/contact', form)
      setStatus('sent')
      setForm({name:'',email:'',message:''})
    }catch(e){ setStatus('error') }
  }
  return (
    <form onSubmit={submit} className="card max-w-2xl mx-auto">
      <h3 className="font-display text-2xl font-bold mb-4">Start a project</h3>
      <input required placeholder="Name" className="w-full mb-3 p-3 rounded-lg bg-white/5" value={form.name} onChange={e=>setForm({...form,name:e.target.value})} />
      <input required placeholder="Email" type="email" className="w-full mb-3 p-3 rounded-lg bg-white/5" value={form.email} onChange={e=>setForm({...form,email:e.target.value})} />
      <textarea required placeholder="Message" rows={6} className="w-full mb-3 p-3 rounded-lg bg-white/5" value={form.message} onChange={e=>setForm({...form,message:e.target.value})} />
      <button className="red-btn" disabled={status==='sending'}>{status==='sending'?'Sending…':'Send message'}</button>
      {status==='sent' && <p className="mt-3 text-green-400">Thanks! We'll get back to you.</p>}
      {status==='error' && <p className="mt-3 text-red-400">Something went wrong.</p>}
    </form>
  )
}
