import { Service, CaseStudy } from "@/types/admin";

// Default Services Data
export const defaultServices: Omit<Service, "id">[] = [
    {
        title: "Facebook Ads Management",
        description: "From campaign structure to creative testing, we manage your entire Facebook advertising funnel.",
        icon: "Facebook",
        features: [
            "Campaign setup & structure",
            "Audience & interest targeting",
            "Pixel & conversion tracking",
            "A/B testing creatives",
            "Daily monitoring & optimization",
            "Monthly performance reporting"
        ]
    },
    {
        title: "Instagram Ads Management",
        description: "We create visually compelling Instagram campaigns that boost engagement and drive conversions.",
        icon: "Instagram",
        features: [
            "Story & Reel ads",
            "Carousel & feed ads",
            "Creative strategy & copy",
            "Audience profiling",
            "Retargeting & lookalike audiences"
        ]
    },
    {
        title: "Ad Creatives & Copywriting",
        description: "Ads that stop the scroll and communicate clear value.",
        icon: "Palette",
        features: [
            "Static graphics & banner ads",
            "Short-form video ad concepts",
            "High-converting ad copy",
            "Offer positioning & messaging"
        ]
    },
    {
        title: "Analytics & Optimization",
        description: "We keep your campaigns lean, efficient, and growth-oriented.",
        icon: "TrendingUp",
        features: [
            "Performance analysis",
            "Budget reallocation",
            "Scaling winning ads",
            "Reducing cost per result"
        ]
    }
];

// Default Case Studies Data
export const defaultCaseStudies: Omit<CaseStudy, "id">[] = [
    {
        clientType: "E-commerce Brand",
        industry: "Fashion & Apparel",
        goal: "Increase online sales and improve ROAS.",
        strategy: "We tested multiple audiences and creatives, set up a retargeting funnel, and optimized based on performance.",
        results: [
            "2.5X ROAS in 30 days",
            "40% drop in cost per purchase",
            "Increased repeat buyers through retargeting"
        ],
        conclusion: "A focused strategy and continuous optimization helped this brand scale profitably."
    },
    {
        clientType: "Local Service Business",
        industry: "Home Services",
        goal: "Generate qualified leads at a lower cost per acquisition.",
        strategy: "We created location-based campaigns with strong call-to-action messaging and optimized for lead quality over quantity.",
        results: [
            "50% reduction in cost per lead",
            "3X increase in qualified bookings",
            "Improved lead-to-customer conversion by 35%"
        ],
        conclusion: "Targeted messaging and continuous A/B testing delivered high-quality leads that converted into paying customers."
    },
    {
        clientType: "SaaS Startup",
        industry: "B2B Software",
        goal: "Drive trial signups and increase brand awareness in target market.",
        strategy: "We developed a multi-stage funnel with educational content, retargeting sequences, and conversion-optimized landing pages.",
        results: [
            "200% increase in trial signups",
            "60% lower cost per acquisition",
            "Built a retargeting audience of 50K+ engaged users"
        ],
        conclusion: "Strategic audience segmentation and compelling ad creatives helped this SaaS company scale their user base efficiently."
    }
];
