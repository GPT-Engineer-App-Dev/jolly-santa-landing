import { Button } from "@/components/ui/button";

function Index() {
  return (
    <div className="space-y-16">
      {/* Hero Section */}
      <section className="relative flex items-center justify-center h-screen bg-cover bg-center" style={{ backgroundImage: "url('/images/santa-hero.jpg')" }}>
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative z-10 text-center text-white">
          <h1 className="text-5xl font-bold">Welcome to Santa's Wonderland</h1>
          <p className="mt-4 text-xl">Discover the magic of Santa Claus</p>
          <Button variant="primary" className="mt-8" onClick={() => document.getElementById('about').scrollIntoView({ behavior: 'smooth' })}>
            Learn More
          </Button>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="container mx-auto px-4 py-16">
        <h2 className="text-4xl font-bold text-center">About Santa Claus</h2>
        <div className="mt-8 flex flex-col items-center md:flex-row md:space-x-8">
          <img src="/images/santa-about.jpg" alt="Santa Claus" className="w-full max-w-sm rounded-lg shadow-lg" />
          <p className="mt-4 text-lg md:mt-0">
            Santa Claus, also known as Saint Nicholas, Kris Kringle, or simply Santa, is a legendary figure who is said to bring gifts to the homes of well-behaved children on Christmas Eve. His modern image is based on traditions surrounding the historical Saint Nicholas, a 4th-century Greek bishop and gift-giver.
          </p>
        </div>
      </section>

      {/* History Section */}
      <section id="history" className="container mx-auto px-4 py-16 bg-gray-100">
        <h2 className="text-4xl font-bold text-center">The History of Santa Claus</h2>
        <div className="mt-8 space-y-8">
          <div className="flex flex-col items-center md:flex-row md:space-x-8">
            <img src="/images/santa-history-1.jpg" alt="Santa History" className="w-full max-w-sm rounded-lg shadow-lg" />
            <p className="mt-4 text-lg md:mt-0">
              The legend of Santa Claus can be traced back hundreds of years to a monk named St. Nicholas. It is believed that Nicholas was born sometime around 280 A.D. in Patara, near Myra in modern-day Turkey. Much admired for his piety and kindness, St. Nicholas became the subject of many legends.
            </p>
          </div>
          <div className="flex flex-col items-center md:flex-row md:space-x-8">
            <img src="/images/santa-history-2.jpg" alt="Santa History" className="w-full max-w-sm rounded-lg shadow-lg" />
            <p className="mt-4 text-lg md:mt-0">
              Over the course of many years, Nicholas's popularity spread and he became known as the protector of children and sailors. His feast day is celebrated on the anniversary of his death, December 6. This was traditionally considered a lucky day to make large purchases or to get married.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="container mx-auto px-4 py-16">
        <h2 className="text-4xl font-bold text-center">Contact Santa</h2>
        <form className="mt-8 max-w-lg mx-auto space-y-4">
          <div>
            <label htmlFor="name" className="block text-lg font-medium">Name</label>
            <input type="text" id="name" className="w-full mt-1 p-2 border rounded-lg" />
          </div>
          <div>
            <label htmlFor="email" className="block text-lg font-medium">Email</label>
            <input type="email" id="email" className="w-full mt-1 p-2 border rounded-lg" />
          </div>
          <div>
            <label htmlFor="message" className="block text-lg font-medium">Message</label>
            <textarea id="message" className="w-full mt-1 p-2 border rounded-lg" rows="4"></textarea>
          </div>
          <Button type="submit" variant="primary" className="w-full">Submit</Button>
        </form>
      </section>
    </div>
  );
}

export default Index;