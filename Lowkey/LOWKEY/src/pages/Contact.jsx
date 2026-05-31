import { useState } from 'react';
import { FaPaperPlane, FaEnvelope, FaPhone, FaMapMarkerAlt, FaTwitter, FaInstagram, FaFacebook } from 'react-icons/fa';
import { SiSoundcloud } from 'react-icons/si';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setSubmitted(true);
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: '',
    });
    setTimeout(() => setSubmitted(false), 5000);
  };

  const socialLinks = [
    { icon: FaTwitter, href: '#', label: 'Twitter', color: 'hover:text-blue-400' },
    { icon: FaInstagram, href: '#', label: 'Instagram', color: 'hover:text-pink-400' },
    { icon: FaFacebook, href: '#', label: 'Facebook', color: 'hover:text-blue-600' },
    { icon: SiSoundcloud, href: '#', label: 'SoundCloud', color: 'hover:text-orange-400' },
  ];

  const contactInfo = [
    {
      icon: FaMapMarkerAlt,
      title: 'Location',
      value: 'Lebanon, Beirut',
      details: 'Inspired by late-night studio sessions and lounge culture',
    },
    {
      icon: FaEnvelope,
      title: 'Email',
      value: 'marounissa09@gmail.com',
      details: 'Reach out for collaborations, feedback, and track requests',
    },
    {
      icon: FaPhone,
      title: 'Support',
      value: '71723543',
      details: 'Available Monday to Friday, 10am-6pm PT',
    },
  ];

  return (
    <div className="pb-40">
      <section className="relative overflow-hidden bg-[#090806] text-white">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,168,70,0.16),transparent_20%),radial-gradient(circle_at_bottom_right,rgba(255,142,45,0.1),transparent_18%)]" />
        <div className="absolute inset-0 bg-black/75" />
        <div className="container-safe relative z-10 py-24 text-center">
          <p className="text-sm uppercase tracking-[0.35em] text-[#bda26e]">Contact</p>
          <h1 className="mt-4 text-5xl font-serif font-semibold leading-tight tracking-[-0.04em] sm:text-6xl">
            Connect with the LOWKEY lounge.
          </h1>
          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-[#c7b79a]">
            Send us a message for track suggestions, feedback, or anything music-related. We’re here to keep the experience warm and curated.
          </p>
        </div>
      </section>

      <section className="py-20 bg-[#0f0d0a]">
        <div className="container-safe">
          <div className="grid gap-8 lg:grid-cols-3">
            {contactInfo.map((info, index) => {
              const IconComponent = info.icon;
              return (
                <div key={index} className="glass-panel p-8 border border-[#4a3a26] transition duration-300 hover:border-[#d4b57c]">
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[#1a140d]/90 text-[#d2b36e] text-2xl mb-5">
                    <IconComponent />
                  </div>
                  <h3 className="text-2xl font-serif font-semibold text-white mb-3">{info.title}</h3>
                  <p className="text-[#c7b79a] font-medium mb-2">{info.value}</p>
                  <p className="text-[#c7b79a]">{info.details}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container-safe max-w-3xl mx-auto">
          <form onSubmit={handleSubmit} className="glass-panel border border-[#4a3a26] p-8">
            {submitted && (
              <div className="mb-6 rounded-3xl border border-[#7dcf8f]/30 bg-[#152113]/90 p-4 text-[#b9d8b5]">
                Thank you for your message — we’ll be in touch soon.
              </div>
            )}
            <div className="grid gap-6">
              <div className="grid gap-6 md:grid-cols-2">
                <label className="space-y-2 text-sm text-[#d4bf91]">
                  Name
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="Your name"
                    className="w-full rounded-3xl border border-[#3d3221] bg-[#120f0d] px-4 py-3 text-white placeholder-[#8f7e63] outline-none focus:border-[#d4b57c]"
                  />
                </label>
                <label className="space-y-2 text-sm text-[#d4bf91]">
                  Email
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="your@email.com"
                    className="w-full rounded-3xl border border-[#3d3221] bg-[#120f0d] px-4 py-3 text-white placeholder-[#8f7e63] outline-none focus:border-[#d4b57c]"
                  />
                </label>
              </div>
              <label className="space-y-2 text-sm text-[#d4bf91]">
                Subject
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  placeholder="Subject"
                  className="w-full rounded-3xl border border-[#3d3221] bg-[#120f0d] px-4 py-3 text-white placeholder-[#8f7e63] outline-none focus:border-[#d4b57c]"
                />
              </label>
              <label className="space-y-2 text-sm text-[#d4bf91]">
                Message
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="6"
                  placeholder="Your message..."
                  className="w-full rounded-[1.5rem] border border-[#3d3221] bg-[#120f0d] px-4 py-3 text-white placeholder-[#8f7e63] outline-none focus:border-[#d4b57c] resize-none"
                />
              </label>
              <button type="submit" className="btn-primary w-full">Send Message</button>
            </div>
          </form>
        </div>
      </section>

      <section className="py-20 bg-[#0d0b09]">
        <div className="container-safe text-center">
          <h2 className="text-4xl font-serif font-semibold text-white mb-4">Stay connected</h2>
          <p className="mx-auto max-w-2xl text-[#c7b79a] mb-8">
            Follow LOWKEY for exclusive updates, releases, and studio mood notes.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            {socialLinks.map((link, index) => {
              const IconComponent = link.icon;
              return (
                <a
                  key={index}
                  href={link.href}
                  aria-label={link.label}
                  className={`inline-flex h-12 w-12 items-center justify-center rounded-full border border-[#4a3a26] bg-[#120f0d] text-[#c7b79a] transition ${link.color}`}
                >
                  <IconComponent size={18} />
                </a>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}
