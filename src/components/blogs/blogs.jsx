import { BlogCard } from "./bolgCard";
import image1 from "../assets/blogs-img/blog-img-1.png";
import image2 from "../assets/blogs-img/blog-img-2.png";
import image3 from "../assets/blogs-img/blog-img-3.png";
import image4 from "../assets/blogs-img/blog-img-4.png";
import image5 from "../assets/blogs-img/blog-img-5.png";
import image6 from "../assets/blogs-img/blog-img-6.png";

const BlogData = [
  {
    id: 1,
    image: image1,
    title: "Small Business and Startup",
    description:
      "Like to know the secrets of transforming a 2-14 team into a 3x Super Bowl winning Dynasty?",
    name: "Prabhash Mishra",
    date: "1 Jan 2023",
    tags: [
      {
        id: 1,
        color: "",
        name: "Tax & audit",
      },
      {
        id: 2,
        color: "",
        name: "Managenent",
      },
    ],
  },
  {
    id: 2,
    image: image2,
    title: "Scale-Up Company Offer",
    description:
      "Mental models are simple expressions of complex processes or relationships.",
    name: "Mahesh Kumar ",
    date: "1 Jan 2023",
    tags: [
      {
        id: 1,
        color: "",
        name: "Tax",
      },
      {
        id: 2,
        color: "",
        name: "Reaserch",
      },
      {
        id: 3,
        color: "",
        name: "compliance",
      },
    ],
  },
  {
    id: 3,
    image: image3,
    title: "Growing Business Package",
    description:
      "Introduction to Wireframing and its Principles. Learn from the best in the industry.",
    name: "Rakhi Verma ",
    date: "1 Jan 2023",
    tags: [
      {
        id: 1,
        color: "",
        name: "Audit",
      },
      {
        id: 2,
        color: "",
        name: "Money Back",
      },
    ],
  },
  {
    id: 4,
    image: image4,
    title: "Scale-Up Company Offer",
    description:
      "Collaboration can make our teams stronger, and our individual designs better.",
    name: "Karan Kumar",
    date: "1 Jan 2023",
    tags: [
      {
        id: 1,
        color: "",
        name: "Money",
      },
      {
        id: 2,
        color: "",
        name: "Managenent",
      },
    ],
  },
  {
    id: 5,
    image: image5,
    title: "Scale-Up Company Offer",
    description:
      "Like to know the secrets of transforming a 2-14 team into a 3x Super Bowl winning Dynasty?",
    name: "Richa Singh ",
    date: "1 Jan 2023",
    tags: [
      {
        id: 1,
        color: "",
        name: "Tax & audit",
      },
      {
        id: 2,
        color: "",
        name: "Managenent",
      },
    ],
  },
  {
    id: 6,
    image: image6,
    title: "Small Business and Startup",
    description:
      "Like to know the secrets of transforming a 2-14 team into a 3x Super Bowl winning Dynasty?",
    name: "Prabhash Mishra",
    date: "1 Jan 2023",
    tags: [
      {
        id: 1,
        color: "",
        name: "Tax & audit",
      },
      {
        id: 2,
        color: "",
        name: "Managenent",
      },
    ],
  },
];

export const Blogs = () => {
  return (
    <>
      <div className="container justify-center items-center  px-4 py-8 md:py-16">
        <div className="text-center">
          <p className="text-[#EB8D15]">EXPLORE OUR BLOG</p>
          <h2 className="text-2xl md:text-4xl font-bold">
            Accelerate Digital Transformation
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mx-2 md:mx-12 px-4 py-8 md:py-16">
          {BlogData.map((data) => (
            <div key={data.id} className="m-auto h-full">
              <BlogCard data={data} />
            </div>
          ))}
        </div>
        <div className="flex items-center justify-center">
          <button
            type="button"
            className="py-2 px-4  bg-[#1C4670]  text-white transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg "
          >
            Show More Blogs
          </button>
        </div>
      </div>
    </>
  );
};
