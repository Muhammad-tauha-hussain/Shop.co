import Card from "@/components/Card";
import DressStyle from "@/components/DressStyle";
import Header from "@/components/Header";
import NavbarAdds from "@/components/NavbarAdds";
import Testimonials from "@/components/Testimonials";
import { testimonials } from "@/data/data";
export default function Home() {
  const tShirts = [
    {
      id: 1,
      name: "Graphic T-Shirt",
      description: "A stylish graphic t-shirt with modern artwork.",
      price: 19.99,
      size: ["S", "M", "L", "XL"],
      color: ["Black", "White", "Blue"],
      // imageUrl: "https://images.pexels.com/photos/996329/pexels-photo-996329.jpeg?auto=compress&cs=tinysrgb&w=600",
      stock: 50,
      imageUrl: '/headerImg.jpg'
    },
    {
      id: 2,
      name: "Plain Cotton T-Shirt",
      description: "A comfortable and breathable plain cotton t-shirt.",
      price: 14.99,
      size: ["S", "M", "L", "XL", "XXL"],
      color: ["Gray", "White", "Navy"],
      // imageUrl: "https://images.pexels.com/photos/996329/pexels-photo-996329.jpeg?auto=compress&cs=tinysrgb&w=600",
      stock: 75,
      imageUrl: '/headerImg.jpg'
    },
    {
      id: 3,
      name: "Vintage T-Shirt",
      description: "A retro-style t-shirt with a vintage print.",
      price: 22.99,
      size: ["M", "L", "XL"],
      color: ["Red", "Black", "Green"],
      // imageUrl: "https://images.pexels.com/photos/996329/pexels-photo-996329.jpeg?auto=compress&cs=tinysrgb&w=600",
      stock: 30,
      imageUrl: '/headerImg.jpg'
    },
    {
      id: 4,
      name: "Basic V-Neck T-Shirt",
      description: "A simple and elegant v-neck t-shirt, perfect for layering.",
      price: 17.99,
      size: ["S", "M", "L", "XL"],
      color: ["Black", "White", "Charcoal"],
      // imageUrl:"https://images.pexels.com/photos/996329/pexels-photo-996329.jpeg?auto=compress&cs=tinysrgb&w=600",
      stock: 60,
      imageUrl: '/headerImg.jpg'
    },
    {
      id: 5,
      name: "Graphic Band T-Shirt",
      description: "A cool band graphic t-shirt for music lovers.",
      price: 24.99,
      size: ["S", "M", "L"],
      color: ["Black", "White", "Red"],
      // imageUrl: "https://images.pexels.com/photos/996329/pexels-photo-996329.jpeg?auto=compress&cs=tinysrgb&w=600",
      stock: 40,
      imageUrl: '/headerImg.jpg'
    },
  ];
  return (
    <div>
      <Header />
      <NavbarAdds />
      {/* new arrival */}
      <div className="bg-white py-10 px-5 w-[90%] m-auto">
        <h1 className="text-3xl font-bold text-gray-800 mb-8 text-center">New Arrivals</h1>
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {
            tShirts.map((tShirt) => {
              return (
                <Card
                  key={tShirt.id}
                  url={tShirt.imageUrl}
                  headings={tShirt.name}
                  price={tShirt.price}
                />
              );
            })
          }
        </div>
      </div>
      {/* top selling */}
      <div className="bg-white py-10 px-5 w-[90%] m-auto">
        <h1 className="text-3xl font-bold text-gray-800 mb-8 text-center">Top selling</h1>
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {
            tShirts.map((tShirt) => {
              return (
                <Card
                  key={tShirt.id}
                  url={tShirt.imageUrl}
                  headings={tShirt.name}
                  price={tShirt.price}
                />
              );
            })
          }
        </div>
      </div>
      <DressStyle/>

      <div className="flex gap-2 overflow-x-auto my-10">
        {
          testimonials.map((testimonial,index) => (
            <Testimonials key={index} name={testimonial.name} review={testimonial.review.slice(0, 200)}/>
          ))
        }
      </div>
    </div>
  );
}
