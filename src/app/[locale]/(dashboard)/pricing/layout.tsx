// import type { Metadata } from "next";

interface LayoutProps {
  children: React.ReactNode;
}

// export const metadata: Metadata = {
//   title: {
//     default: "TypeScript Next.js Stripe Example",
//     template: "%s | Next.js + TypeScript Example",
//   },
//   twitter: {
//     card: "summary_large_image",
//     description:
//       "Full-stack TypeScript example using Next.js, react-stripe-js, and stripe-node.",
//     images: [
//       {
//         url: "https://nextjs-typescript-react-stripe-js.vercel.app/social_card.png",
//       },
//     ],
//     site: "@StripeDev",
//     title: "TypeScript Next.js Stripe Example",
//   },
// };

export default function RootLayout({ children }: LayoutProps) {
  return <>{children}</>;
}
