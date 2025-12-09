// Services Data
const services = [
  {
    id: `${Date.now()}-1`,
    title: "Facebook Ads Management",
    description: "From campaign structure to creative testing, we manage your entire Facebook advertising funnel.",
    icon: "facebook",
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
    id: `${Date.now()}-2`,
    title: "Instagram Ads Management",
    description: "We create visually compelling Instagram campaigns that boost engagement and drive conversions.",
    icon: "instagram",
    features: [
      "Story & Reel ads",
      "Carousel & feed ads",
      "Creative strategy & copy",
      "Audience profiling",
      "Retargeting & lookalike audiences"
    ]
  },
  {
    id: `${Date.now()}-3`,
    title: "Ad Creatives & Copywriting",
    description: "Ads that stop the scroll and communicate clear value.",
    icon: "pen-tool",
    features: [
      "Static graphics & banner ads",
      "Short-form video ad concepts",
      "High-converting ad copy",
      "Offer positioning & messaging"
    ]
  },
  {
    id: `${Date.now()}-4`,
    title: "Analytics & Optimization",
    description: "We keep your campaigns lean, efficient, and growth-oriented.",
    icon: "trending-up",
    features: [
      "Performance analysis",
      "Budget reallocation",
      "Scaling winning ads",
      "Reducing cost per result"
    ]
  }
];

// Case Studies Data
const caseStudies = [
  {
    id: `${Date.now()}-cs1`,
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
    id: `${Date.now()}-cs2`,
    clientType: "SaaS Startup",
    industry: "Technology & Software",
    goal: "Generate qualified leads and reduce cost per acquisition.",
    strategy: "We created targeted campaigns for different user segments, implemented lead magnets, and optimized for conversions.",
    results: [
      "3X increase in qualified leads",
      "50% reduction in cost per lead",
      "25% improvement in lead-to-customer conversion rate"
    ],
    conclusion: "Strategic audience targeting and compelling offers drove significant growth in lead generation."
  },
  {
    id: `${Date.now()}-cs3`,
    clientType: "Local Service Business",
    industry: "Home Services",
    goal: "Increase local awareness and drive more service bookings.",
    strategy: "We focused on local targeting, created location-specific ads, and implemented call tracking for better attribution.",
    results: [
      "200% increase in service inquiries",
      "60% of leads came from Facebook & Instagram ads",
      "4.2X return on ad spend"
    ],
    conclusion: "Hyper-local targeting combined with strong creative messaging delivered exceptional results for this local business."
  }
];

// Save to localStorage
localStorage.setItem('VarniElevate_services', JSON.stringify(services));
localStorage.setItem('VarniElevate_caseStudies', JSON.stringify(caseStudies));

console.log('✅ Services added:', services.length);
console.log('✅ Case studies added:', caseStudies.length);
console.log('Data successfully saved to localStorage!');
