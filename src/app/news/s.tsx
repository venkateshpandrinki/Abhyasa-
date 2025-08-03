import { FC } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Navbar from '@/components/Navbar';

// Mock data - in a real app, this would come from a CMS or API
const newsItems = [
  {
    id: 1,
    title: "New Python Fundamentals Course Launch",
    date: "April 20, 2025",
    description: "We're excited to announce our new Python Fundamentals course, designed for beginners looking to build a strong programming foundation.",
    image: "/images/news/python-course.jpg",
    category: "Course Launch",
    link: "/courses/python-fundamentals"
  },
  {
    id: 2,
    title: "Upcoming Webinar: Machine Learning Career Paths",
    date: "May 5, 2025",
    description: "Join our expert panel to discover various career paths in Machine Learning and how to prepare for them.",
    image: "/images/news/ml-webinar.jpg",
    category: "Webinar",
    link: "/webinars/machine-learning-careers"
  },
  {
    id: 3,
    title: "New Batch: Advanced Data Science Starting June",
    date: "June 1, 2025",
    description: "Our popular Advanced Data Science course is starting a new batch in June. Limited seats available!",
    image: "/images/news/data-science.jpg",
    category: "New Batch",
    link: "/courses/advanced-data-science"
  },
  {
    id: 4,
    title: "Webinar Recording: Web Development Trends 2025",
    date: "April 15, 2025",
    description: "Watch the recording of our recent webinar covering the latest trends in web development for 2025.",
    image: "/images/news/webdev-trends.jpg",
    category: "Webinar Recording",
    link: "/webinars/webdev-trends-2025"
  },
  {
    id: 5,
    title: "Summer Bootcamp: Full-Stack Development",
    date: "July 10, 2025",
    description: "Intensive 8-week bootcamp to master full-stack development with React, Node.js, and MongoDB.",
    image: "/images/news/summer-bootcamp.jpg",
    category: "Bootcamp",
    link: "/bootcamps/full-stack-summer"
  }
];

interface NewsPageProps {}

const NewsPage: FC<NewsPageProps> = () => {
  return (
    <>
      <div className="bg-gradient-to-br from-black via-gray-900 to-gray-800 min-h-screen">
      <Navbar/>
        <div className="container mx-auto px-4 py-12">
          <div className="mb-12 text-center">
            <h1 className="text-4xl font-bold text-white mb-4">Latest Updates</h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Stay informed about our newest courses, upcoming webinars, and other important announcements.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {newsItems.map((item) => (
              <div key={item.id} className="bg-gray-800 border border-gray-700 rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:shadow-xl hover:-translate-y-1">
                <div className="relative h-52 w-full">
                  <div className="absolute top-0 right-0 bg-blue-600 text-white py-1 px-3 rounded-bl-lg z-10">
                    {item.category}
                  </div>
                  <div className="w-full h-full bg-gray-700 relative">
                    {/* In a real app, use real images with proper optimization */}
                    <div className="w-full h-full bg-gradient-to-r from-gray-700 to-gray-600 flex items-center justify-center">
                      <span className="text-gray-300 font-medium">{item.category} Image</span>
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <div className="text-sm text-gray-400 mb-2">{item.date}</div>
                  <h3 className="text-xl font-semibold text-white mb-3">{item.title}</h3>
                  <p className="text-gray-300 mb-4">{item.description}</p>
                  <Link href={item.link}>
                    <span className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded transition-colors duration-300">
                      Learn More
                    </span>
                  </Link>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-16 rounded-xl p-8 text-center bg-gray-800 border border-gray-700 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-900/10 to-purple-900/10 opacity-50"></div>
            <div className="relative z-10">
              <h2 className="text-2xl font-bold text-white mb-4">Never Miss an Update</h2>
              <p className="text-gray-300 mb-6">Subscribe to our newsletter to get notified about upcoming events and courses.</p>
              <div className="max-w-md mx-auto flex flex-col sm:flex-row gap-2">
                <input 
                  type="email" 
                  placeholder="Your email address" 
                  className="flex-grow px-4 py-2 rounded-lg bg-gray-700 border border-gray-600 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500" 
                />
                <button className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-6 rounded-lg transition-colors duration-300">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default NewsPage;