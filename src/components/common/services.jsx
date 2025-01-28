import vector1 from "../assets/services/Vector-1.png";
import Vector2 from "../assets/services/Vector-2.png";
import Vector3 from "../assets/services/vector-3.png";
import Vector4 from "../assets/services/vector-4.png";
import Vector5 from "../assets/services/Vector-5.png";
import Vector6 from "../assets/services/Vector-6.png";

export const Services = () => {
  const services = [
    {
      icon: vector1,
      title: "Web Solutions",
      description:
        "Build web-based solutions that enhance customer experience.",
    },
    {
      icon: Vector2,
      title: "Data-Driven Decisions",
      description:
        "Make data-driven decisions and utilize technology to reach business goals.",
    },
    {
      icon: Vector3,
      title: "Customer Relationships",
      description:
        "Foster customer relationships by effectively serving your market.",
    },
    {
      icon: Vector4,
      title: "Product Design",
      description:
        "Turn your ideas into modern products with our design experts.",
    },
    {
      icon: Vector5,
      title: "Global Expansion",
      description: "Expand your business across the globe with minimal effort.",
    },
    {
      icon: Vector6,
      title: "Creative Design",
      description:
        "Steering user behaviors with creative design, data insights & technology.",
    },
  ];
  return (
    <div>
      <section className="bg-[#E5E2DF] py-16 px-8 ">
        <div className="container  text-center px-4 md:px-0 ">
          <p className="text-sm text-orange-500 font-semibold uppercase mb-2">
            Welcome to RegisterKaro.in
          </p>
          <h2 className="text-3xl font-bold mb-8">Explore Our Services</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  mx-0 md:mx-12 lg:mx-24">
            {services.map((service, index) => (
              <div key={index} className="p-6 bg-inherit ">
                <img
                  src={service.icon}
                  alt={service.title}
                  className="mx-auto mb-4 w-12 h-12"
                />
                <h3 className="text-lg font-semibold mb-2">{service.title}</h3>
                <p className="text-gray-400 mb-4">{service.description}</p>
                <a
                  href="./"
                  className=" hover:underline flex items-center justify-center gap-2"
                >
                  Learn More{" "}
                  <span className="material-icons">arrow_forward</span>
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};
