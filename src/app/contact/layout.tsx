import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Talk to Our Experts – Enroll in Abhyasa’s VLSI Programs Today",
  description: "Want to know more about our VLSI training? Reach out to the Abhyasa team for free counseling, demo sessions, or batch schedules. Serving students & professionals across Andhra, Telangana, and Karnataka.",
  keywords: [
    "contact abhyasa",
    "VLSI training contact",
    "course inquiries",
    "VLSI education Telangana",
    "VLSI training Andhra Pradesh",
    "VLSI courses Bangalore",
    "placement assistance contact",
    "VLSI career guidance"
  ],
  authors: [{ name: "Abhyasa VLSI Training" }],
  creator: "Abhyasa VLSI Training",
  publisher: "Abhyasa VLSI Training",
  openGraph: {
    title: "Contact Us - Abhyasa VLSI Training",
    description: "Get in touch with Abhyasa for world-class VLSI training programs. Contact our experts for course details and placement assistance.",
    url: "/contact",
    siteName: "Abhyasa VLSI Training",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact Us - Abhyasa VLSI Training",
    description: "Get in touch with Abhyasa for world-class VLSI training programs. Contact our experts for course details and placement assistance.",
    creator: "@abhyasavlsi",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: "your-google-verification-code", // Replace with actual verification code
  },
  alternates: {
    canonical: "/contact",
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section>
      {children}
    </section>
  );
}
