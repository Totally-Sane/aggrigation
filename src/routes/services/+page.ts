import type { PageLoad } from './$types';

export const load:PageLoad = (async () => {
    let services
    
    //TODO: Use get request to fetch services from the CDN
    services = [
        {
            name: "Web Development",
            description: "Creating responsive and modern websites using the latest technologies.",
            price: "$500 - $2000",
            link: "/services/web-development"
        },
        {
            name: "SEO Optimization",
            description: "Improving website visibility on search engines to drive organic traffic.",
            price: "$300 - $1500",
            link: "/services/seo-optimization"
        },
        {
            name: "Content Creation",
            description: "Producing high-quality content tailored to your audience's needs.",
            price: "$200 - $1000",
            link: "/services/content-creation"
        },
        {
            name: "Social Media Management",
            description: "Managing and growing your social media presence effectively.",
            price: "$250 - $1200",
            link: "/services/social-media-management"
        },
        {
            name: "Graphic Design",
            description: "Creating visually appealing designs for various platforms.",
            price: "$150 - $800",
            link: "/services/graphic-design"
        }

    ];

    return {
        services,
    };
}) satisfies PageLoad;