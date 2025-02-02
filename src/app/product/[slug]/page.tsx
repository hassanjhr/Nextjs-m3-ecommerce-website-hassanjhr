import { client } from "@/utils/sanity";
import { Product } from "../../../../types/product";
import { groq } from "next-sanity";
import Image from "next/image";
import { urlForImage } from "@/sanity/lib/image";
import AddToCartButton from "@/app/components/AddToCartSection";
import AddToWishlistButton from "@/app/components/wishList";
import Link from "next/link";

interface ProductPageProps {
  params: Promise<{ slug: string }>;
}

async function getProduct(slug: string): Promise<Product> {
  return client.fetch(
    groq`*[_type == "product" && slug.current == $slug][0] {
        _id,
        name,
        _type,
        image,
        price,
        description,
        discountPercentage,
        stockLevel,
        category,
        tags,
      }`,
    { slug }
  );
}

export default async function ProductPage({ params }: ProductPageProps) {
  const { slug } = await params;
  const product = await getProduct(slug);

  return (
    <section className="text-gray-600 body-font overflow-hidden">
      <div className="container px-5 py-24 mx-auto">
        <div className="lg:w-4/5 mx-auto flex flex-wrap">
          {product.image && (
            <div className="lg:w-1/2 w-full lg:h-auto h-64 object-contain object-center rounded mb-8 lg:mb-0">
              <Image
                alt={product.name}
                className="w-full h-full object-contain object-center rounded"
                src={urlForImage(product.image).url()}
                width={500}
                height={500}
              />
            </div>
          )}
          <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
            <h2 className="text-sm title-font text-gray-500 tracking-widest">
              BRAND NAME
            </h2>
            <h1 className="text-gray-900 text-3xl title-font font-medium mb-1">
              {product.name}
            </h1>
            <p className="leading-relaxed mb-4 mt-2">{product.description}</p>
            <div className="flex mt-6 items-center pb-5 border-b-2 border-gray-100 mb-5">
              
            </div>
            <div className="flex mt-2 mb-2">
              <span className="mr-3 text-lg font-medium text-gray-600">
                Discount: {product.discountPercentage ? `${product.discountPercentage}%` : "N/A"}
              </span>
              <span className="mr-3 text-lg font-medium text-gray-600">
                Stock Level: {product.stockLevel ? product.stockLevel : "Out of Stock"}
              </span>
            </div>
            <div className="mb-4">
              <span className="mr-3 text-sm text-gray-500">Category: {product.category}</span>
            </div>
            <div className="mb-4">
              <span className="mr-3 text-sm text-gray-500">Tags: {product.tags?.join(", ")}</span>
            </div>
            <div className="flex flex-col md:flex-row">
              <span className="title-font font-medium text-2xl text-gray-900 mr-4 mt-5">
                {product.price ? `$${product.price}` : "Price Unavailable"}
              </span>
             
              <span className=" "><AddToWishlistButton product={product}  /></span>


            </div>
              <span className="mr-2 mt-1 "> <AddToCartButton product={product} /> </span>            
               <Link href = "/cart" className="mt-1"> <span ><button
    className='bg-gradient-to-r from-black to-[#FB2E86] text-white text-base font-semibold py-2 px-4 rounded-lg shadow-md hover:shadow-lg hover:scale-110 transition-transform duration-300 ease-in-out mt-4'>
      Proceed to Cart
    </button></span></Link>
            
          </div>
          
        </div>
      </div>
    </section>
  );
}















































// import { client } from "@/utils/sanity";
// import { Product } from "../../../../types/product";
// import { groq } from "next-sanity";
// import Image from "next/image";
// import { urlForImage } from "@/sanity/lib/image";

// interface ProductPageProps {
//     params : Promise<{slug: string}>
// }
// async function getProduct(slug : string) : Promise<Product> {
//     return client.fetch(
//         groq`[_type == "product" && slug.current == $slug][0] {
//         _id,
//         name,
//         price,
//         description,
//         discountPercentage,
//         "imageUrl": coalesce(image.asset->url, "/placeholder-image.png"),
//         stockLevel,
//         category,
//         tags,
//         } `, {slug}
//     )
// }

// export default async function ProductPage({params} : ProductPageProps) {
//     const {slug} = await params;

//     const product = await getProduct(slug);


//     return (
//         <div className="max-w-7xl mx-auto px-4">
//             <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
//                 <div className="aspect-square">

//                     {product.image &&(
//                         <Image 
//                         src={urlForImage(product.image).url()}
//                         alt={product.name}
//                         width={500}
//                         height={500}
//                         className="rounded-lg shadow-md" 
//                         />
//                     )}

//                 </div>

//                 <div className="flex flex-col gap-8">
//                     <h1 className="text-4xl font-bold">{product.name}</h1>

//                     <p className="text-2xl font-sans">
//                         {product.price}

//                     </p>

//                 </div>


//             </div>
            
//         </div>
//     )

    
// }







// // app/product/[slug]/page.tsx
// import React from "react";
// import { useParams } from "next/navigation"; // Use `useParams` instead of `useRouter`
// import Image from "next/image";

// interface Product {
//   _id: string;
//   name: string;
//   price: number;
//   description: string;
//   discountPercentage?: number;
//   imageUrl: string;
//   stockLevel: number;
//   category: string;
// }

// const fetchProduct = async (slug: string): Promise<Product | null> => {
//   const query = encodeURIComponent(
//     `*[_type == "product" && _id == "${slug}"][0]{
//       _id,
//       name,
//       price,
//       description,
//       discountPercentage,
//       "imageUrl": coalesce(image.asset->url, ""),
//       stockLevel,
//       category
//     }`
//   );
//   const url = `https://your-sanity-api-endpoint/query?query=${query}`;
//   const res = await fetch(url);
//   const data = await res.json();
//   return data.result || null;
// };

// const ProductPage = async () => {
//   const params = useParams(); // Use `useParams` to get the slug from the URL
//   const { slug } = params;

//   if (!slug) return <div>Loading...</div>;

//   const product = await fetchProduct(slug as string);

//   if (!product) return <div>Product not found</div>;

//   return (
//     <section className="text-gray-600 body-font overflow-hidden">
//       <div className="container px-5 py-24 mx-auto">
//         <div className="lg:w-4/5 mx-auto flex flex-wrap">
//           <Image
//             alt={product.name}
//             className="lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded"
//             src={product.imageUrl || "/placeholder.png"}
//             width={400}
//             height={400}
//           />
//           <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
//             <h2 className="text-sm title-font text-gray-500 tracking-widest">
//               {product.category.toUpperCase()}
//             </h2>
//             <h1 className="text-gray-900 text-3xl title-font font-medium mb-1">
//               {product.name}
//             </h1>
//             <p className="leading-relaxed">{product.description}</p>
//             <div className="flex mt-6 items-center pb-5 border-b-2 border-gray-100 mb-5">
//               <span className="mr-3">Stock Level: {product.stockLevel}</span>
//             </div>
//             <div className="flex">
//               <span className="title-font font-medium text-2xl text-gray-900">
//                 ${product.price.toFixed(2)}
//               </span>
//               <button className="flex ml-auto text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded">
//                 Add to Cart
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default ProductPage;
