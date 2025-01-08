import Img1 from "../components/images/hero-img.jpg";
function Services() {
  const services = [
    {
      title: "Bathroom Remodeling",
      description: "Lorem ipsum",
      image: Img1,
    },
    {
      title: "Kitchen Remodeling",
      description: "Lorem ipsum",
      image: Img1,
    },
    {
      title: "Window and Door Replacement",
      description: "Lorem ipsum",
      image: Img1,
    },
  ];

  return (
    <div className="container mx-auto px-0 py-20">
      <div className="flex justify-between items-center mb-16">
        <h2 className="text-6xl font-semibold">Our Services</h2>
        <button className="text-lg px-6 py-2 bg-[#262626] text-white rounded-full hover:bg-[#414d43]">
          Our Cases
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <div key={index} className="group relative">
            <div className="relative overflow-hidden rounded-lg">
              <img
                src={service.image}
                alt={service.title}
                className="w-full h-[400px] object-cover"
              />
              {index === 0 && (
                <div className="absolute bottom-8 left-8">
                  <div className="bg-white/80 rounded-full w-24 h-24 flex items-center justify-center group-hover:bg-[#262626] transition-colors duration-300">
                    <span className="text-md text-[#262626] group-hover:text-white">
                      VIEW PORTFOLIO
                    </span>
                  </div>
                </div>
              )}
            </div>
            <div className="mt-4">
              <h3 className="text-xl ">{service.title}</h3>
              <p className="text-lg text-[#ACA296]">{service.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Services;
