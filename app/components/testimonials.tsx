import { Quote } from "lucide-react";

const testimonials = [
  {
    content:
      "Working with this team has been an absolute game-changer for our business. Their attention to detail and innovative solutions exceeded our expectations.",
    userimg: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg",
    name: "John Anderson",
  },
  {
    content:
      "The level of professionalism and expertise demonstrated by this company is outstanding. They delivered our project on time and within budget.",
    userimg: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg",
    name: "Sarah Martinez",
  },
  {
    content:
      "I'm thoroughly impressed with the quality of service. Their team went above and beyond to ensure our complete satisfaction with the final product.",
    userimg:
      "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg",
    name: "David Chen",
  },
];

export default function Testimonials() {
  return (
    <div className="py-16 px-4">
      <div className="text-center mb-12">
        <p className="text-primary-600 font-medium mb-2">Testimonials</p>
        <h2 className="heading text-3xl font-bold">What Our Clients Say</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {testimonials.map((testimonial, index) => (
          <div
            key={index}
            className="border border-gray-100 rounded-xl p-6 transition-all duration-300 hover:shadow-md"
          >
            <Quote className="size-16 text-gray-600 mb-4 absolute" />
            <div className="relative z-10 mt-6 pl-6">
              <p className="italic mb-6">"{testimonial.content}"</p>

              <div className="flex items-center gap-3 mt-auto">
                <div className="h-12 w-12 rounded-full overflow-hidden">
                  <img
                    src={testimonial.userimg}
                    alt={`${testimonial.name}'s profile`}
                    className="h-full w-full object-cover"
                  />
                </div>
                <div>
                  <p className="font-medium ">{testimonial.name}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
