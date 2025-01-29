// app/blog/page.js
export default function BlogPage() {
    const blogs = [
      {
        id: 1,
        title: "The Future of Wi-Fi 7: What to Expect",
        date: "March 15, 2024",
        image: "https://img.mwrf.com/files/base/ebm/mwrf/image/2020/07/WiFi_promo.5f060d116d796.png?auto=format,compress&fit=crop&q=45&h=356&height=356&w=640&width=640",
        excerpt: "Explore the upcoming features of Wi-Fi 7 technology and how it will revolutionize wireless connectivity with speeds up to 46Gbps...",
      },
      {
        id: 2,
        title: "5 Essential Network Security Practices for Businesses",
        date: "March 10, 2024",
        image: "https://media.licdn.com/dms/image/v2/D4D12AQFxpnrFHNzJnw/article-cover_image-shrink_600_2000/article-cover_image-shrink_600_2000/0/1689836109092?e=2147483647&v=beta&t=8sEclslC87pYl8q51e87njq54UoRapnQKeOCQyUYTdw",
        excerpt: "Learn critical security measures every organization should implement to protect their network infrastructure...",
      },
      {
        id: 3,
        title: "Mesh Networking vs Traditional Routers: Which is Better?",
        date: "March 5, 2024",
        image: "https://cdn.appuals.com/wp-content/uploads/2020/10/Paul-Bunyan-Technologies.jpg.webp",
        excerpt: "Compare mesh network systems with conventional routers to determine the best solution for your home or office...",
      },
      {
        id: 4,
        title: "Understanding SD-WAN: Benefits for Modern Enterprises",
        date: "February 28, 2024",
        image: "https://www.strongdm.com/hubfs/sd-wan.png",
        excerpt: "Discover how Software-Defined Wide Area Networking is transforming enterprise connectivity...",
      },
      {
        id: 5,
        title: "Top Network Monitoring Tools for 2024",
        date: "February 20, 2024",
        image: "https://www.extnoc.com/learn/wp-content/uploads/2022/05/Open-Source-Network-Monitoring-Tools.jpg",
        excerpt: "Review of the best network monitoring solutions to keep your infrastructure running smoothly...",
      },
      {
        id: 6,
        title: "The Rise of 5G in Enterprise Networking",
        date: "February 15, 2024",
        image: "https://www.thefastmode.com/media/k2/items/src/bb7fef2446256a2f1068d53fa04dd275.jpg?t=20220823_015100",
        excerpt: "How 5G technology is enabling new possibilities for business networks and IoT deployments...",
      }
    ];
  
    return (
      <div className="min-h-screen bg-gray-50 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Latest Networking Insights
          </h1>
  
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogs.map((blog) => (
              <article key={blog.id} className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <img
                  src={blog.image}
                  alt={blog.title}
                  className="w-full h-48 object-cover rounded-t-lg"
                />
                <div className="p-6">
                  <p className="text-sm text-gray-500 mb-2">{blog.date}</p>
                  <h2 className="text-xl font-bold text-gray-900 mb-3">
                    {blog.title}
                  </h2>
                  <p className="text-gray-600 mb-4">{blog.excerpt}</p>
                  <button className="text-blue-600 hover:text-blue-700 font-medium">
                    Read More →
                  </button>
                </div>
              </article>
            ))}
          </div>
  
          <div className="mt-12 text-center">
            <p className="text-gray-600">Showing 6 of 6 articles</p>
          </div>
        </div>
      </div>
    );
  }