// app/services/page.js

import Link from 'next/link';
export default function ServicesPage() {
    const services = [
      {
        title: "Enterprise Network Solutions",
        description: "We design and implement robust enterprise-grade networking infrastructures tailored to your business needs. Our solutions include secure VPN setups, multi-site connectivity, and cloud integration. Whether you need a complete network overhaul or specific performance optimizations, our certified engineers ensure minimal downtime and maximum reliability.",
        image: "https://www.ineteng.com/hs-fs/hubfs/Website%20Images/Stock%20Images/Website_Enterprise%20Network%20Overview.png?width=1600&height=900&name=Website_Enterprise%20Network%20Overview.png"
      },
      {
        title: "Wireless Network Installation",
        description: "Professional installation of high-speed Wi-Fi 6/6E networks for homes and businesses. Our services include site surveys, access point placement, and mesh network configuration. We optimize for coverage and speed, eliminating dead zones while ensuring compatibility with all your devices. Includes ongoing maintenance and performance monitoring packages.",
        image: "https://www.bridgecable.com/wp-content/uploads/2024/11/pexels-field-engineer-442150-scaled-2.jpg"
      },
      {
        title: "Network Security Services",
        description: "Comprehensive security solutions including firewall configuration, intrusion detection systems, and regular vulnerability assessments. We implement enterprise-grade encryption, secure remote access solutions, and real-time threat monitoring. Our team stays ahead of emerging threats with continuous security updates and employee training programs.",
        image: "https://suntechnologies.com/wp-content/uploads/2021/03/Network-security-support.jpg"
      },
      {
        title: "Cloud Networking Solutions",
        description: "Hybrid and multi-cloud networking solutions that seamlessly integrate your on-premises infrastructure with cloud providers. We specialize in AWS, Azure, and Google Cloud Platform implementations, including SD-WAN configurations, cloud VPNs, and optimized content delivery networks. Our solutions ensure low-latency access and cost-effective bandwidth management.",
        image: "https://www.stratusinfosystems.com/wp-content/uploads/2022/05/iStock-1318623693.jpg"
      }
    ];
  
    return (
      <div className="min-h-screen bg-gray-50 py-12 ">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Our Networking Services
          </h1>
  
          <div className="space-y-16 ">
            {services.map((service, index) => (
              <div 
                key={index}
                className="flex flex-col md:flex-row items-center gap-8 even:md:flex-row-reverse"
              >
                {/* Image Section */}
                <div className="w-full md:w-1/3">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="rounded-lg shadow-xl h-full w-full object-cover aspect-video md:aspect-square"
                  />
                </div>
  
                {/* Content Section */}
                <div className="w-full md:w-1/2 space-y-4">
                  <h2 className="text-2xl font-bold text-gray-900">
                    {service.title}
                  </h2>
                  <p className="text-gray-600 leading-relaxed">
                    {service.description}
                  </p>
                  <button className="mt-4 px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors">
                    Learn More
                  </button>
                </div>
              </div>
            ))}
          </div>
  
          {/* CTA Section */}
          <div className="mt-16 bg-blue-900 text-white rounded-xl p-8 text-center">
            <h2 className="text-2xl font-bold mb-4">Ready to Upgrade Your Network?</h2>
            <p className="mb-6">Schedule a free consultation with our experts</p>
            <Link href="/contact" className="px-8 py-3 bg-white text-blue-900 rounded-md hover:bg-blue-50 transition-colors">
              Contact Us
              </Link>
          </div>
        </div>
      </div>
    );
  }