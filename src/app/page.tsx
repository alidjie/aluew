"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { FaFacebook, FaLinkedin, FaWhatsapp, FaWeixin } from "react-icons/fa";
import Image from "next/image"; // 添加Image组件

const newsItems = [
  "New Magnetic Filter product launched – June 2025",
  "Taizhou Youjiu passed ISO audit – May 2025",
  "Electric Motorcycle OEM project awarded – April 2025",
];

const products = [
  {
    title: "Magnetic Materials",
    spec: "Strong NdFeB, Ferrite, Custom Shapes",
    image: "/products/magnetic.jpg",
    href: "/products/magnetic-materials",
  },
  {
    title: "Magnetic Filters",
    spec: "Pipeline, HVAC, Oil Filtration Types",
    image: "/products/filter.jpg",
    href: "/products/magnetic-filters",
  },
  {
    title: "Enameled Wire",
    spec: "Aluminum/Copper, 0.1–3.5mm, IEC Std.",
    image: "/products/wire.jpg",
    href: "/products/enamelled-wire",
  },
  {
    title: "Electric Motorcycle",
    spec: "48–72V, Lithium Battery, OEM Available",
    image: "/products/motor.jpg",
    href: "/products/electric-motorcycle",
  },
  {
    title: "Agricultural Machinery",
    spec: "Harvester, Tiller, Irrigation Equipment",
    image: "/products/agriculture.jpg",
    href: "/products/agricultural-machinery",
  },
];

const blogPosts = [
  {
    id: 1,
    title: "Industry Trends in Magnetic Materials 2025",
    excerpt: "Explore the latest innovations and market trends in magnetic materials for various industries.",
    href: "/blog/industry-trends-magnetic-materials-2025",
  },
  {
    id: 2,
    title: "How to Choose the Right Electric Motorcycle",
    excerpt: "A buyer's guide to selecting electric motorcycles that fit your business needs and local regulations.",
    href: "/blog/choose-electric-motorcycle",
  },
  {
    id: 3,
    title: "Benefits of OEM Services in Industrial Exports",
    excerpt: "Understand how OEM customization can boost your brand and market competitiveness.",
    href: "/blog/oem-services-benefits",
  },
];

export default function HomePage() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [currentNews, setCurrentNews] = useState(0); // 添加状态声明
 
  // Inquiry form state
  const [inquiry, setInquiry] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
  });
  const [formStatus, setFormStatus] = useState("");

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentNews((i) => (i + 1) % newsItems.length);
    }, 3500);
    return () => clearInterval(interval);
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setInquiry((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inquiry.name || !inquiry.email || !inquiry.message) {
      setFormStatus("Please fill in all required fields.");
      return;
    }
    setFormStatus("Sending...");
    setTimeout(() => {
      setFormStatus("Thank you for your inquiry! We will contact you soon.");
      setInquiry({ name: "", email: "", company: "", message: "" });
    }, 1500);
  };

  return (
    <main className="min-h-screen bg-[#f9f9fb] text-gray-800">
      {/* 导航栏 */}
      <nav className="flex flex-col sm:flex-row justify-between items-center px-6 py-4 shadow bg-[#1e3a8a] text-white">
        <div className="flex items-center space-x-3 mb-3 sm:mb-0">
          <Image 
            src="/logo.png" 
            alt="Logo" 
            width={40} 
            height={40} 
            className="h-10 w-10"
          />
          <span className="text-xl font-bold">Taizhou Youjiu Trading Co., Ltd.</span>
        </div>

        <ul className="flex space-x-4 text-lg font-semibold flex-wrap justify-center">
          <li><Link href="/">Home</Link></li>
          <li><Link href="/about">About Us</Link></li>
          <li className="relative">
            <button onClick={() => setMenuOpen(!menuOpen)} className="focus:outline-none">
              Products ▼
            </button>
            {menuOpen && (
              <ul className="absolute top-full mt-2 left-0 w-56 bg-white text-black shadow-lg rounded p-2 z-50 space-y-1">
                {products.map((p, idx) => (
                  <li key={idx}>
                    <Link href={p.href} className="block px-3 py-1 hover:bg-gray-100">{p.title}</Link>
                  </li>
                ))}
              </ul>
            )}
          </li>
          <li><Link href="/inquiry">Inquiry</Link></li>
          <li><Link href="/blog">Blog</Link></li>
          <li><Link href="/contact">Contact</Link></li>
        </ul>

        <div className="flex space-x-4 text-xl mt-3 sm:mt-0">
          <a href="#" className="hover:text-cyan-300"><FaLinkedin /></a>
          <a href="#" className="hover:text-cyan-300"><FaFacebook /></a>
          <a href="#" className="hover:text-cyan-300"><FaWhatsapp /></a>
          <a href="#" className="hover:text-cyan-300"><FaWeixin /></a>
        </div>
      </nav>

      {/* Hero 区块 */}
      <section className="text-center py-20 bg-white">
        <h1 className="text-4xl sm:text-5xl font-bold mb-4 text-[#1e3a8a]">
          Reliable Global Export Partner for Industry Solutions
        </h1>
        <p className="text-lg mb-6 text-gray-600 max-w-2xl mx-auto">
          We export magnetic materials, industrial filters, enameled wire, electric motorcycles, and agricultural machinery — providing integrated B2B solutions.
        </p>
        <Link href="/products" className="bg-[#1e3a8a] text-white px-6 py-3 rounded hover:bg-blue-900">
          Explore Products
        </Link>
      </section>

      {/* 新闻轮播 */}
      <div className="bg-[#1e3a8a] text-white py-2 text-center">
        <p>{newsItems[currentNews]}</p>
      </div>

      {/* 产品展示卡片（1x3 + 1x2） */}
      <section className="py-16 bg-[#f0f4f8]">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-2xl font-bold text-center mb-10 text-[#1e3a8a]">Featured Products</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {products.map((p, idx) => (
              <div key={idx} className="bg-white rounded shadow hover:shadow-lg transition">
                <Link href={p.href}>
                  <Image 
                    src={p.image} 
                    alt={p.title} 
                    width={400} 
                    height={192} 
                    className="w-full h-48 object-cover rounded-t"
                  />
                </Link>
                <div className="p-4">
                  <h3 className="text-lg font-bold mb-2">{p.title}</h3>
                  <p className="text-sm text-gray-600 mb-3">{p.spec}</p>
                  <Link href="/inquiry" className="inline-block px-4 py-2 bg-[#1e3a8a] text-white rounded hover:bg-blue-800 text-sm">
                    Send Inquiry
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 图文产品介绍模块 */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 space-y-12">
          {products.map((p, idx) => (
            <div
              key={idx}
              className={`flex flex-col md:flex-row items-center gap-6 ${
                idx % 2 === 1 ? "md:flex-row-reverse" : ""
              }`}
            >
              <Image 
                src={p.image} 
                alt={p.title} 
                width={400} 
                height={300} 
                className="w-full md:w-1/3 rounded shadow"
              />
              <div className="md:w-2/3">
                <h3 className="text-xl font-bold text-[#1e3a8a] mb-2">{p.title}</h3>
                <p className="text-gray-600 mb-4">{p.spec}</p>
                <ul className="list-disc list-inside text-gray-600 space-y-1 mb-4">
                  <li>High quality materials</li>
                  <li>Competitive pricing</li>
                  <li>OEM support available</li>
                  <li>Stable supply and fast delivery</li>
                </ul>
                <Link href={p.href} className="text-[#1e3a8a] underline font-medium mr-4">View Details</Link>
                <Link href="/inquiry" className="inline-block px-4 py-2 bg-[#1e3a8a] text-white rounded hover:bg-blue-800 text-sm">
                  Send Inquiry
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 公司视频介绍 */}
      <section className="py-20 bg-[#f9f9fb]">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold mb-6 text-[#1e3a8a]">Company Intro Video</h2>
          <div className="aspect-video max-w-full rounded shadow overflow-hidden mx-auto">
            <iframe
              src="https://www.youtube.com/embed/YOUR_VIDEO_ID"
              title="Company Intro"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope;"
              className="w-full h-full"
            />
          </div>
        </div>
      </section>

      {/* 客户评价 */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl font-bold mb-8">What Our Clients Say</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-left">
            <div className="p-4 bg-gray-50 rounded shadow">
              <p className="italic mb-2">&quot;Excellent service and on-time delivery for our wholesale orders.&quot;</p>
              <p className="text-sm text-gray-600">— John M., USA</p>
            </div>
            <div className="p-4 bg-gray-50 rounded shadow">
              <p className="italic mb-2">&quot;Stable quality and competitive pricing helped us grow our market.&quot;</p>
              <p className="text-sm text-gray-600">— Carlos L., Chile</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-[#f0f4f8]">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-2xl font-bold mb-8 text-center text-[#1e3a8a]">Frequently Asked Questions</h2>
          <div className="space-y-6">
            <div>
              <h3 className="font-semibold">Q: Do you offer OEM branding?</h3>
              <p className="text-gray-600">Yes, we support full OEM packaging and labeling, with low MOQ.</p>
            </div>
            <div>
              <h3 className="font-semibold">Q: What&apos;s your delivery time?</h3>
              <p className="text-gray-600">Normally 15–25 days depending on the order volume and product type.</p>
            </div>
            <div>
              <h3 className="font-semibold">Q: Can I get samples before placing a bulk order?</h3>
              <p className="text-gray-600">Yes, samples are available. Please contact us with your requirements.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Blog 文章预览 */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-2xl font-bold mb-10 text-[#1e3a8a]">Latest Blog Posts</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <div key={post.id} className="border rounded shadow hover:shadow-lg p-4 transition">
                <h3 className="text-lg font-semibold mb-2">{post.title}</h3>
                <p className="text-gray-700 mb-4">{post.excerpt}</p>
                <Link href={post.href} className="text-[#1e3a8a] underline font-medium">
                  Read More
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Inquiry 表单 */}
      <section className="py-20 bg-[#f0f4f8]">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-2xl font-bold mb-8 text-center text-[#1e3a8a]">Send Us an Inquiry</h2>
          <form onSubmit={handleSubmit} className="space-y-6 bg-white p-8 rounded shadow">
            <div>
              <label htmlFor="name" className="block font-semibold mb-1">Name *</label>
              <input
                type="text"
                id="name"
                name="name"
                value={inquiry.name}
                onChange={handleInputChange}
                className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#1e3a8a]"
                required
              />
            </div>
            <div>
              <label htmlFor="email" className="block font-semibold mb-1">Email *</label>
              <input
                type="email"
                id="email"
                name="email"
                value={inquiry.email}
                onChange={handleInputChange}
                className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#1e3a8a]"
                required
              />
            </div>
            <div>
              <label htmlFor="company" className="block font-semibold mb-1">Company</label>
              <input
                type="text"
                id="company"
                name="company"
                value={inquiry.company}
                onChange={handleInputChange}
                className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#1e3a8a]"
              />
            </div>
            <div>
              <label htmlFor="message" className="block font-semibold mb-1">Message *</label>
              <textarea
                id="message"
                name="message"
                rows={5}
                value={inquiry.message}
                onChange={handleInputChange}
                className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#1e3a8a]"
                required
              />
            </div>
            {formStatus && (
              <p className="text-center text-sm text-[#1e3a8a]">{formStatus}</p>
            )}
            <div className="text-center">
              <button
                type="submit"
                className="bg-[#1e3a8a] text-white px-6 py-3 rounded hover:bg-blue-900 font-semibold"
              >
                Submit Inquiry
              </button>
            </div>
          </form>
        </div>
      </section>

      {/* CTA */}
      <section className="text-center bg-[#1e3a8a] py-16 text-white">
        <h2 className="text-3xl font-bold mb-4">Looking for a Dependable Export Partner?</h2>
        <p className="mb-6">Let&apos;s connect to explore tailored sourcing, private label, or regional partnership opportunities.</p>
        <Link href="/inquiry" className="bg-[#38bdf8] text-[#1e3a8a] font-semibold px-6 py-3 rounded hover:bg-cyan-300">
          Send Inquiry
        </Link>
      </section>

      {/* 页脚 */}
      <footer className="mt-24 p-6 text-center text-sm text-gray-500 border-t">
        © 2025 Taizhou Youjiu Trading Co., Ltd. All rights reserved.
      </footer>
    </main>
  );
}