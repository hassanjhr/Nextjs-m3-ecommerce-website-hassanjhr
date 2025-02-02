import { client } from '../../sanity/lib/client'; 
import BlogCard from './blogcard';


interface BlogProps {
  blogs: Array<{
    title: string;
    slug: string;
    excerpt: string;
    coverImage: string;
  }>;
}

const Blog = ({ blogs }: BlogProps) => {
  return (
    <div className="my-12">
      <h2 className="text-3xl font-bold mb-6">Latest Blogs</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {blogs.map((blog) => (
          <BlogCard
            key={blog.slug}
            title={blog.title}
            slug={blog.slug}
            excerpt={blog.excerpt}
            coverImage={blog.coverImage}
          />
        ))}
      </div>
    </div>
  );
};

export const getBlogData = async () => {
  const query = '*[_type == "blog"]{title, slug, excerpt, coverImage}';
  const blogs = await client.fetch(query); 
  return blogs;
};

export default Blog;
