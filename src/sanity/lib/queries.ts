import { groq } from "next-sanity";

export const allProducts = groq`*[_type == "product"]`;
export const three = groq`*[_type == "product"][3..5]`;
export const six = groq`*[_type == "product"][12..17]`;
export const two = groq`*[_type == "product"][0..1]`;
export const fourTrending = groq`*[_type == "product"][6..9]`;
export const lastFour = groq`*[_type == "product"][18..21]`;




