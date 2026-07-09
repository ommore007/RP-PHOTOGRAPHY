import './App.css'
import Gallery from './components/Gallery'
import Services from './components/Services'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Contact from './components/Contact'
import Footer from './components/Footer'
import { useState } from "react"

function App() {const [name, setName] = useState("")
const [phone, setPhone] = useState("")
const [date, setDate] = useState("")
const [message, setMessage] = useState("")
  return (

    <div className="container">

      {/* Navbar */}
      <Navbar />



      {/* Hero */}
      <Hero />


      {/* Gallery Component */}
      <Gallery />



      {/* Services */}
      <Services />



      {/* Reviews */}
      <section className="reviews">

        <h2>Client Reviews</h2>


        <div className="review-box">


          <div>
            ⭐⭐⭐⭐⭐

            <p>
              "Beautiful wedding photography.
              Every moment was captured perfectly."
            </p>

            <h4>
              - Happy Client
            </h4>

          </div>




          <div>
            ⭐⭐⭐⭐⭐

            <p>
              "Professional team and amazing
              quality of photos."
            </p>

            <h4>
              - Wedding Couple
            </h4>

          </div>




          <div>
            ⭐⭐⭐⭐⭐

            <p>
              "Best photography experience.
              Highly recommended."
            </p>

            <h4>
              - Customer
            </h4>

          </div>


        </div>

      </section>




      {/* About */}
      <About />



      {/* Contact */}
      <Contact />
       
<form
  className="contact-form"
  onSubmit={(e) => {
    e.preventDefault()

    const text = `Hello Rajesh Pawar,

Name: ${name}
Phone: ${phone}
Event Date: ${date}

Message:
${message}`

    window.open(
      `https://wa.me/919579834649?text=${encodeURIComponent(text)}`,
      "_blank"
    )
  }}
>
  <input
    type="text"
    placeholder="Your Name"
    value={name}
    onChange={(e) => setName(e.target.value)}
  />

  <input
    type="tel"
    placeholder="Mobile Number"
    value={phone}
    onChange={(e) => setPhone(e.target.value)}
  />

  <input
  type="date"
  value={date}
  onChange={(e) => setDate(e.target.value)}
/>
  <textarea
    placeholder="Tell us about your event..."
    rows="5"
    value={message}
    onChange={(e) => setMessage(e.target.value)}
  > 
  </textarea>

  <button type="submit">
    Send Inquiry
  </button>

</form>

      {/* Footer */}
      <Footer />
    </div>
  )
}


export default App