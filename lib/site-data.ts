import type { Metadata } from "next";

export const site = {
  "repo": "sg-local-area-guide",
  "name": "Singapore Local Area Guide",
  "shortName": "SG Area Guide",
  "accent": "area",
  "tagline": "Area notes for Singapore local community planning.",
  "description": "A Singapore local area guide with practical notes for Orchard, Marina Bay, Tanjong Pagar, Chinatown, and Bugis plus official contact reminders.",
  "heroEyebrow": "Singapore area guide",
  "heroTitle": "Plan by area, then verify the official channel.",
  "heroDescription": "Compare Singapore districts by transport, timing, and contact verification reminders before using any local community or booking platform.",
  "primaryCta": "Check Official Links",
  "secondaryCta": "Read Area FAQ",
  "sections": {
    "highlightsEyebrow": "Local context",
    "highlightsTitle": "Practical area planning signals.",
    "stepsEyebrow": "Planning flow",
    "stepsTitle": "Use area context without skipping verification.",
    "contextEyebrow": "Featured areas",
    "contextTitle": "Common Singapore districts."
  },
  "highlights": [
    {
      "title": "Transport access",
      "body": "MRT access and central road routes can make timing easier to understand before contacting support."
    },
    {
      "title": "Hotel zones",
      "body": "Different districts have different hotel density, business hours, and wayfinding patterns."
    },
    {
      "title": "Official source check",
      "body": "Area planning is useful, but official contact verification should still come first."
    }
  ],
  "steps": [
    "Choose the district that matches your transport route and schedule.",
    "Review practical notes for timing, landmarks, and communication clarity.",
    "Use the official group, channel, or website to confirm current instructions."
  ],
  "contextCards": [
    {
      "title": "Orchard",
      "body": "Central retail corridor with premium hotels, MRT access, and high foot traffic."
    },
    {
      "title": "Marina Bay",
      "body": "Useful for business travel, event venues, waterfront landmarks, and clear public routes."
    },
    {
      "title": "Chinatown & Bugis",
      "body": "Dense central areas with strong transport connections, food streets, and varied hotel options."
    }
  ],
  "contactNotes": [
    "Area information is only planning context. Current instructions should come from official contact.",
    "Confirm timing, location expectations, and support process before making decisions.",
    "When a district has many similar venues, use written references to avoid confusion."
  ],
  "faqs": [
    {
      "question": "Which Singapore area is easiest for planning?",
      "answer": "Orchard, Marina Bay, Bugis, Chinatown, and Tanjong Pagar are common central areas with strong transport access."
    },
    {
      "question": "Does area choice change price?",
      "answer": "It can affect logistics and current quotes. Confirm pricing through the official platform or verified contact."
    },
    {
      "question": "Is this an official booking platform?",
      "answer": "No. This is a local area information guide with links to official contact channels."
    },
    {
      "question": "What should I verify before continuing?",
      "answer": "Verify the official Telegram handle, channel notice, website link, current terms, and any support instructions."
    }
  ],
  "url": "https://yihuber.github.io/sg-local-area-guide",
  "telegramGroup": "https://t.me/tianyaogruop",
  "telegramChannel": "https://t.me/tianyaoclub",
  "officialWebsite": "https://tianyaoclub.com/"
} as const;

export const navItems = [
  { href: "/", label: "Home" },
  { href: "/contact", label: "Official Contact" },
  { href: "/faq", label: "FAQ" }
] as const;

export const contactLinks = [
  {
    label: "Join Official Group",
    href: site.telegramGroup,
    description: "Telegram group for community-level updates and public notices."
  },
  {
    label: "Follow Official Channel",
    href: site.telegramChannel,
    description: "Telegram channel for broadcast updates, pinned notices, and link checks."
  },
  {
    label: "Visit Official Website",
    href: site.officialWebsite,
    description: "Official website for the current public reference point."
  }
] as const;

export const routes = ["/", "/contact/", "/faq/"] as const;

export function absoluteUrl(path = "/") {
  const cleanPath = path === "/" ? "/" : path.endsWith("/") ? path : `${path}/`;
  return `${site.url}${cleanPath}`;
}

export function pageMetadata({
  title,
  description,
  path = "/"
}: {
  title: string;
  description: string;
  path?: string;
}): Metadata {
  const url = absoluteUrl(path);

  return {
    title,
    description,
    alternates: {
      canonical: url
    },
    openGraph: {
      title,
      description,
      url,
      siteName: site.name,
      locale: "en_SG",
      type: "website"
    },
    twitter: {
      card: "summary_large_image",
      title,
      description
    }
  };
}

export function faqJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: site.faqs.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer
      }
    }))
  };
}
