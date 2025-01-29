import Link from 'next/link';

const products = [
  {
    id: 1,
    name: 'Wi-Fi 6 Router',
    price: 199.99,
    description: 'High-speed dual-band wireless router',
    image: 'https://dlcdnwebimgs.asus.com/files/media/3483edfa-654a-4737-9f7c-20223af9ab0f/img/Certified-Performance.jpg'
  },
  {
    id: 2,
    name: 'Mesh Network System',
    price: 299.99,
    description: 'Whole-home coverage system',
    image: 'https://cdn.thewirecutter.com/wp-content/media/2021/07/mesh-network-2048px-2632.jpg?auto=webp&quality=75&width=1024'
  },
  {
    id: 3,
    name: 'Gigabit Switch',
    price: 89.99,
    description: '8-port network switch',
    image: 'https://img.drz.lazcdn.com/static/pk/p/318319a5636376121e2abd633fac11a1.jpg_720x720q80.jpg_.webp'
  },
  {
    id: 4,
    name: 'VPN Router',
    price: 149.99,
    description: 'Secure business-grade router',
    image: 'https://media.kasperskydaily.com/wp-content/uploads/sites/92/2023/06/09064452/how-to-use-vpn-on-routers-featured.jpg'
  },
  {
    id: 5,
    name: 'Wireless Access Point',
    price: 129.99,
    description: 'Ceiling-mounted AP',
    image: 'https://cdn.thewirecutter.com/wp-content/media/2024/07/wifirouters-2048px-3572.jpg'
  },
  {
    id: 6,
    name: 'Network Attached Storage',
    price: 399.99,
    description: '4-bay NAS device',
    image: 'https://i.pcmag.com/imagery/roundups/04fhwzcpsDs7u2rUfAgRJ8t-2..v1569470764.jpg'
  },
  {
    id: 7,
    name: 'PoE Injector',
    price: 29.99,
    description: 'Power over Ethernet adapter',
    image: 'https://blog.aeconnect.co.in/wp-content/uploads/2024/02/Poe-Injector.png'
  },
  {
    id: 8,
    name: 'Network Security Camera',
    price: 199.99,
    description: '4K IP camera',
    image: 'https://electrobes.com/wp-content/uploads/2021/01/2mp-WIFI-Outdoor-HD-Wireless-Waterproof-IP-Security-Camera-with-Adapter.jpg'
  },
  {
    id: 9,
    name: 'Modem Router Combo',
    price: 159.99,
    description: 'DOCSIS 3.1 compatible',
    image: 'https://wp.buyrouterswitch.com/wp-content/uploads/2024/09/Modem-Router-Combo-vs-Separate-Which-One-You-Should-Choose.jpg'
  },
  {
    id: 10,
    name: 'Network Extender',
    price: 79.99,
    description: 'Signal booster',
    image: 'https://i.pcmag.com/imagery/reviews/01wD8V96OxrIxkg6yht7IHu-1.fit_lim.size_1050x591.v1569480563.jpg'
  }
];

export default function ProductsPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-8 text-center">
          Networking Products
        </h1>
        
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {products.map((product) => (
            <div key={product.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h2 className="text-xl font-semibold text-gray-900 mb-2">
                  {product.name}
                </h2>
                <p className="text-gray-600 mb-4">{product.description}</p>
                <div className="flex justify-between items-center">
                  <span className="text-2xl font-bold text-blue-600">
                    ${product.price}
                  </span>
                  <Link href="/contact" className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors">
                    Contact Us
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}