import { client } from "@/sanity/lib/client";
import Image from "next/image";
import { PortableTextBlock } from "sanity";
import { PortableText } from "@portabletext/react";
import { urlForImage } from "@/sanity/lib/image";
import { notFound } from "next/navigation";

// ✅ Define BlogPostProps (No need for PageProps)
interface BlogPostProps {
  params: { slug: string };
}

// ✅ Define Blog Interface
export interface Blog {
  title: string;
  excerpt: string;
  coverImage: {
    _type: string;
    asset: { _ref: string; _type: string };
  };
  slug: { current: string; _type: string };
  body: PortableTextBlock[];
}

export default async function BlogPost({ params }: BlogPostProps) {
  const { slug } = params;

  const data: Blog | null = await client.fetch(
    `*[_type == "blog" && slug.current == $slug][0] {
      title,
      excerpt,
      coverImage,
      body,
      slug
    }`,
    { slug }
  );

  if (!data) return notFound();

  const imageUrl = data.coverImage ? urlForImage(data.coverImage).url() : null;

  return (
    <div className="flex flex-col items-center my-10 max-w-5xl m-auto px-4">
      {imageUrl && (
        <Image
          className="rounded-lg object-cover max-h-96 w-full"
          src={imageUrl}
          alt={data.title}
          height={500}
          width={1000}
        />
      )}
      <div className="my-10 text-center">
        <h2 className="text-3xl font-bold">{data.title}</h2>
        <p className="text-lg mt-4 text-gray-600">{data.excerpt}</p>
      </div>
      <div className="prose prose-lg my-10">
        <PortableText value={data.body} />
      </div>
    </div>
  );
}

// ✅ Generate Static Params for SSG
export async function generateStaticParams() {
  const slugs = await client.fetch(`*[_type == "blog"].slug.current`);
  return slugs.map((slug: string) => ({ slug }));
}


