// src/app/about/page.tsx
"use client";

import Link from "next/link";
import Image from "next/image";
import { FaFacebook, FaLinkedin, FaWhatsapp, FaWeixin } from "react-icons/fa";

export default function AboutPage() {
  // 团队数据
  const teamMembers = [
    { name: "张明", role: "创始人 & CEO", bio: "20年磁性材料行业经验，曾主导多项国际专利研发" },
    { name: "李华", role: "运营总监", bio: "供应链管理专家，精通国际物流及质量控制体系" },
    { name: "王磊", role: "技术总监", bio: "机电工程博士，主导电动摩托车动力系统研发" },
  ];

  // 里程碑数据
  const milestones = [
    { year: "2010", title: "公司成立", desc: "专注于磁性材料出口业务" },
    { year: "2015", title: "产品线扩展", desc: "新增磁力过滤器与漆包线产品" },
    { year: "2020", title: "生产基地建成", desc: "江苏泰州建立20000㎡生产基地" },
    { year: "2023", title: "新能源布局", desc: "推出电动摩托车整机OEM服务" },
  ];

  return (
    <main className="min-h-screen bg-[#f9f9fb] text-gray-800">
      {/* 导航栏 - 与首页完全一致 */}
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
          <li className="relative">
            <Link href="/about" className="text-blue-300 font-bold">About Us</Link>
          </li>
          <li className="relative">
            <Link href="/products">Products</Link>
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

      {/* 页面标题横幅 */}
      <section className="bg-[#1e3a8a] py-16 text-center text-white">
        <div className="max-w-4xl mx-auto px-4">
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">Our Story & Values</h1>
          <p className="text-xl mb-6 max-w-2xl mx-auto">
            Connecting global industries with premium Chinese manufacturing since 2010
          </p>
        </div>
      </section>

      {/* 公司简介区块 */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-12 items-center">
            <div className="md:w-1/2">
              <Image 
                src="/about/factory.jpg" 
                alt="Our Factory" 
                width={600} 
                height={400}
                className="rounded-lg shadow-lg"
              />
            </div>
            <div className="md:w-1/2">
              <h2 className="text-3xl font-bold mb-6 text-[#1e3a8a]">Who We Are</h2>
              <p className="text-lg mb-4">
                Founded in 2010, Taizhou Youjiu Trading is a leading export partner specializing in industrial solutions. 
                From our headquarters in Jiangsu, China, we serve clients across 30+ countries worldwide.
              </p>
              <p className="text-lg mb-4">
                Our core competence lies in integrating China&apos;s manufacturing capabilities with international quality standards. 
                With over 200 suppliers in our network, we ensure reliable supply chains for businesses of all sizes.
              </p>
              <div className="grid grid-cols-2 gap-4 mt-8">
                <div className="bg-[#f0f4f8] p-4 rounded">
                  <h3 className="font-bold text-lg">200+</h3>
                  <p>Verified Suppliers</p>
                </div>
                <div className="bg-[#f0f4f8] p-4 rounded">
                  <h3 className="font-bold text-lg">30+</h3>
                  <p>Countries Served</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 使命与价值观 */}
      <section className="py-20 bg-[#f0f4f8]">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-16 text-[#1e3a8a]">Our Mission & Values</h2>
          
          <div className="grid md:grid-cols-3 gap-8 text-left">
            <div className="bg-white p-6 rounded-lg shadow hover:shadow-md transition">
              <div className="bg-[#1e3a8a] w-12 h-12 rounded-full flex items-center justify-center text-white mb-4">
                1
              </div>
              <h3 className="text-xl font-bold mb-2">Quality First</h3>
              <p>Implementing 3-stage quality control for all products, ensuring ISO-compliant manufacturing standards.</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow hover:shadow-md transition">
              <div className="bg-[#1e3a8a] w-12 h-12 rounded-full flex items-center justify-center text-white mb-4">
                2
              </div>
              <h3 className="text-xl font-bold mb-2">Sustainable Growth</h3>
              <p>Prioritizing eco-friendly materials and processes, with 40% of products now using recycled components.</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow hover:shadow-md transition">
              <div className="bg-[#1e3a8a] w-12 h-12 rounded-full flex items-center justify-center text-white mb-4">
                3
              </div>
              <h3 className="text-xl font-bold mb-2">Global Partnership</h3>
              <p>Building long-term relationships through transparent communication and flexible OEM solutions.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 团队介绍 */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-16 text-center text-[#1e3a8a]">Leadership Team</h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <div key={index} className="text-center">
                <div className="bg-gray-200 border-2 border-dashed rounded-xl w-48 h-48 mx-auto mb-6" />
                <h3 className="text-2xl font-bold">{member.name}</h3>
                <p className="text-lg text-[#1e3a8a] mb-2">{member.role}</p>
                <p className="text-gray-600">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 时间线 */}
      <section className="py-20 bg-[#f0f4f8]">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-16 text-center text-[#1e3a8a]">Our Journey</h2>
          
          <div className="relative">
            {/* 时间线轴线 */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-[#1e3a8a]"></div>
            
            {milestones.map((milestone, index) => (
              <div 
                key={index} 
                className={`mb-16 flex ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'} items-center`}
              >
                <div className="w-1/2 pr-8">
                  <div className="bg-white p-6 rounded-lg shadow">
                    <span className="text-2xl font-bold text-[#1e3a8a]">{milestone.year}</span>
                    <h3 className="text-xl font-bold mt-2">{milestone.title}</h3>
                    <p>{milestone.desc}</p>
                  </div>
                </div>
                <div className="w-10 h-10 rounded-full bg-[#1e3a8a] border-4 border-white relative z-10"></div>
                <div className="w-1/2"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 客户评价 - 与首页一致 */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl font-bold mb-8">What Our Clients Say</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-left">
            <div className="p-4 bg-gray-50 rounded shadow">
              <p className="italic mb-2">&quot;Their magnetic filters increased our production line efficiency by 18%. Reliable quality and on-time delivery.&quot;</p>
              <p className="text-sm text-gray-600">— John M., USA Industrial Solutions</p>
            </div>
            <div className="p-4 bg-gray-50 rounded shadow">
              <p className="italic mb-2">&quot;The electric motorcycle OEM project was delivered with perfect customization to our specifications.&quot;</p>
              <p className="text-sm text-gray-600">— Carlos L., Chile Mobility Inc</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="text-center bg-[#1e3a8a] py-16 text-white">
        <h2 className="text-3xl font-bold mb-4">Become Our Partner</h2>
        <p className="mb-6">Interested in reliable industrial sourcing? Let&apos;s discuss how we can support your business.</p>
        <Link href="/inquiry" className="bg-[#38bdf8] text-[#1e3a8a] font-semibold px-6 py-3 rounded hover:bg-cyan-300">
          Contact Our Team
        </Link>
      </section>

      {/* 页脚 */}
      <footer className="mt-24 p-6 text-center text-sm text-gray-500 border-t">
        © 2025 Taizhou Youjiu Trading Co., Ltd. All rights reserved.
      </footer>
    </main>
  );
}