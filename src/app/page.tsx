export default function Home() {
  return (
    <main className="min-h-screen bg-rose-50 text-gray-800">

      {/* Navbar */}
      <nav className="flex items-center justify-between px-6 md:px-16 py-5 bg-white shadow-sm">
        <h1 className="text-2xl md:text-3xl font-bold text-pink-700">
          Areeba&apos;s Flora 🌸
        </h1>

        <div className="hidden md:flex gap-8 font-medium">
          <a href="#home" className="hover:text-pink-600 transition">
            Home
          </a>
          <a href="#flowers" className="hover:text-pink-600 transition">
            Flowers
          </a>
          <a href="#about" className="hover:text-pink-600 transition">
            About
          </a>
          <a href="#contact" className="hover:text-pink-600 transition">
            Contact
          </a>
        </div>
      </nav>

      {/* Hero Section */}
      <section
        id="home"
        className="grid md:grid-cols-2 items-center gap-10 px-6 md:px-16 py-16"
      >
        <div>
          <p className="text-pink-600 font-semibold text-lg mb-3">
            Fresh Flowers • Beautiful Moments
          </p>

          <h2 className="text-4xl md:text-6xl font-bold leading-tight text-gray-900">
            Flowers That Make
            <span className="text-pink-600"> Every Moment Special</span>
          </h2>

          <p className="mt-6 text-lg text-gray-600 leading-relaxed">
            Welcome to Areeba&apos;s Flora, where every flower is carefully
            selected to bring beauty, happiness, and love to your special
            moments.
          </p>

          <div className="flex gap-4 mt-8">
            <a
              href="#flowers"
              className="bg-pink-600 text-white px-7 py-3 rounded-full
              font-semibold hover:bg-pink-700 transition shadow-lg"
            >
              Explore Flowers
            </a>

            <a
              href="#contact"
              className="border border-pink-600 text-pink-600 px-7 py-3
              rounded-full font-semibold hover:bg-pink-100 transition"
            >
              Contact Us
            </a>
          </div>
        </div>

        <div className="flex justify-center">
          <img
            src="https://images.unsplash.com/photo-1490750967868-88aa4486c946?w=1000&q=85"
            alt="Beautiful flowers"
            className="w-full max-w-lg h-[480px] object-cover rounded-[40px] shadow-2xl"
          />
        </div>
      </section>

      {/* Features */}
      <section className="grid md:grid-cols-3 gap-6 px-6 md:px-16 py-12 bg-white">

        <div className="text-center p-8 rounded-3xl bg-pink-50">
          <div className="text-4xl mb-4">🌷</div>
          <h3 className="text-xl font-bold">Fresh Flowers</h3>
          <p className="mt-3 text-gray-600">
            Beautiful and fresh flowers selected with love and care.
          </p>
        </div>

        <div className="text-center p-8 rounded-3xl bg-pink-50">
          <div className="text-4xl mb-4">💐</div>
          <h3 className="text-xl font-bold">Beautiful Bouquets</h3>
          <p className="mt-3 text-gray-600">
            Elegant bouquets designed to make your special moments memorable.
          </p>
        </div>

        <div className="text-center p-8 rounded-3xl bg-pink-50">
          <div className="text-4xl mb-4">❤️</div>
          <h3 className="text-xl font-bold">Made With Love</h3>
          <p className="mt-3 text-gray-600">
            Every arrangement is created with creativity, passion, and love.
          </p>
        </div>

      </section>

      {/* Flowers Section */}
      <section id="flowers" className="px-6 md:px-16 py-16">

        <div className="text-center mb-12">
          <p className="text-pink-600 font-semibold">
            Our Collection
          </p>

          <h2 className="text-3xl md:text-4xl font-bold mt-2">
            Beautiful Flowers For Every Occasion
          </h2>

          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
            From romantic roses to cheerful sunflowers, find the perfect
            flowers to express your feelings.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">

          {/* Rose */}
          <div className="bg-white rounded-3xl overflow-hidden shadow-lg hover:-translate-y-2 transition duration-300">
            <img
              src="https://images.unsplash.com/photo-1496062031456-07b8f162a322?w=800&q=85"
              alt="Red roses"
              className="w-full h-72 object-cover"
            />

            <div className="p-6">
              <h3 className="text-2xl font-bold">Romantic Roses 🌹</h3>
              <p className="text-gray-600 mt-2">
                Perfect for expressing love, appreciation, and beautiful
                feelings.
              </p>
            </div>
          </div>

          {/* Sunflowers */}
          <div className="bg-white rounded-3xl overflow-hidden shadow-lg hover:-translate-y-2 transition duration-300">
            <img
              src="https://images.unsplash.com/photo-1597848212624-a19eb35e2651?w=800&q=85"
              alt="Sunflowers"
              className="w-full h-72 object-cover"
            />

            <div className="p-6">
              <h3 className="text-2xl font-bold">Happy Sunflowers 🌻</h3>
              <p className="text-gray-600 mt-2">
                Bright and cheerful flowers that bring sunshine to every day.
              </p>
            </div>
          </div>

          {/* Bouquet */}
          <div className="bg-white rounded-3xl overflow-hidden shadow-lg hover:-translate-y-2 transition duration-300">
            <img
              src="https://images.unsplash.com/photo-1523438885200-e635ba2c371e?w=800&q=85"
              alt="Flower bouquet"
              className="w-full h-72 object-cover"
            />

            <div className="p-6">
              <h3 className="text-2xl font-bold">Elegant Bouquets 💐</h3>
              <p className="text-gray-600 mt-2">
                Carefully arranged bouquets for birthdays, celebrations, and
                special moments.
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* About Section */}
      <section
        id="about"
        className="bg-pink-600 text-white px-6 md:px-16 py-16 text-center"
      >
        <h2 className="text-3xl md:text-4xl font-bold">
          Why Choose Areeba&apos;s Flora?
        </h2>

        <p className="max-w-3xl mx-auto mt-6 text-lg leading-relaxed">
          At Areeba&apos;s Flora, we believe flowers can say what words cannot.
          We create beautiful floral arrangements with fresh flowers,
          thoughtful designs, and lots of love.
        </p>

        <div className="grid md:grid-cols-3 gap-8 mt-10 max-w-4xl mx-auto">

          <div>
            <h3 className="text-xl font-bold">🌸 Freshness</h3>
            <p className="mt-2 text-pink-100">
              Fresh flowers chosen for lasting beauty.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-bold">✨ Creativity</h3>
            <p className="mt-2 text-pink-100">
              Unique designs made for every occasion.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-bold">💕 Happiness</h3>
            <p className="mt-2 text-pink-100">
              Flowers that make people smile.
            </p>
          </div>

        </div>
      </section>

      {/* Contact */}
      <section
        id="contact"
        className="px-6 md:px-16 py-16 text-center bg-rose-50"
      >
        <h2 className="text-3xl md:text-4xl font-bold">
          Let&apos;s Make Someone&apos;s Day Beautiful 🌷
        </h2>

        <p className="mt-4 text-gray-600 text-lg">
          Contact Areeba&apos;s Flora for beautiful bouquets and floral
          arrangements.
        </p>

        <button
          className="mt-7 bg-pink-600 text-white px-8 py-3 rounded-full
          font-semibold hover:bg-pink-700 transition shadow-lg"
        >
          Order Your Flowers
        </button>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white text-center py-6">
        <p>
          © 2026 Areeba&apos;s Flora. Made with 🌸 and ❤️
        </p>
      </footer>

    </main>
  );
}