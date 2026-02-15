// Location Data for SEO Landing Pages
// This file contains information for each city/location we serve

export interface LocationData {
    city: string;
    slug: string;
    postalCode: string;
    region: string;
    description: string;
    landmarks: string[];
    services: string[];
    testimonial?: {
        text: string;
        author: string;
        service: string;
    };
    mapUrl: string;
}

export const locations: LocationData[] = [
    {
        city: 'Alexandra Hills',
        slug: 'alexandra-hills',
        postalCode: '4161',
        region: 'Queensland',
        description:
            'Professional landscaping and garden maintenance in Alexandra Hills. We specialize in garden design, retaining walls, and regular lawn care for Alexandra Hills residents.',
        landmarks: [
            'Alexandra Hills Shopping Centre',
            'Windemere Road Park',
            'Alexandra Hills State High School',
            'ScribBLY Gum Conservation Area',
        ],
        services: [
            'Garden Design',
            'Retaining Walls',
            'Lawn Mowing',
            'Hedge Trimming',
            'Mulching',
            'Garden Clean-ups',
        ],
        testimonial: {
            text: 'Tyrone transformed our garden in Alexandra Hills. The new layout and plants look amazing!',
            author: 'Lachlan M.',
            service: 'Garden Design',
        },
        mapUrl:
            'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14151.4!2d153.218!3d-27.525!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6b91436449175d4b%3A0x502a35af3de7fb0!2sAlexandra%20Hills%20QLD%204161%2C%20Australia!5e0!3m2!1sen!2sau!4v1707923456789',
    },
    {
        city: 'Redland Bay',
        slug: 'redland-bay',
        postalCode: '4165',
        region: 'Queensland',
        description:
            'Expert landscaping services in Redland Bay. From coastal garden designs to durable hardscaping and regular maintenance for Redland Bay properties.',
        landmarks: [
            'Redland Bay Golf Club',
            'Sel Outridge Park',
            'Redland Bay Marina',
            'Deadmans Lookout',
        ],
        services: [
            'Hardscaping',
            'Coastal Gardens',
            'Lawn Maintenance',
            'Paving',
            'Outdoor Living Areas',
        ],
        testimonial: {
            text: 'Top quality work on our paving in Redland Bay. Highly recommended for any landscaping needs!',
            author: 'Sarah W.',
            service: 'Hardscaping',
        },
        mapUrl:
            'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14144.4!2d153.3!3d-27.6!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6b9140445ecce4cf%3A0x502a35af3de9ae0!2sRedland%20Bay%20QLD%204165%2C%20Australia!5e0!3m2!1sen!2sau!4v1707923456789',
    },
    {
        city: 'Cleveland',
        slug: 'cleveland',
        postalCode: '4163',
        region: 'Queensland',
        description:
            'Premium garden care and landscaping in Cleveland. We provide high-quality maintenance and design to keep Cleveland homes looking their best.',
        landmarks: [
            'Old Cleveland Lighthouse',
            'Raby Bay Harbour',
            'Cleveland Point',
            'Redland Art Gallery',
        ],
        services: [
            'Garden Maintenance',
            'Softscaping',
            'Lawn Restoration',
            'Hedge Sculpting',
        ],
        mapUrl:
            'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14151.7!2d153.26!3d-27.52!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6b9142f9b844f2fb%3A0x502a35af3de8d00!2sCleveland%20QLD%204163%2C%20Australia!5e0!3m2!1sen!2sau!4v1707923456789',
    },
    {
        city: 'Victoria Point',
        slug: 'victoria-point',
        postalCode: '4165',
        region: 'Queensland',
        description:
            'Reliable landscaping solutions for Victoria Point. Specializing in family-friendly gardens and low-maintenance outdoor spaces.',
        landmarks: [
            'Victoria Point Shopping Centre',
            'Coochiemudlo Island Ferry',
            'Thompson Beach',
        ],
        services: [
            'Lawn Care',
            'Garden Paths',
            'Planting Schemes',
            'Automatic Irrigation',
        ],
        mapUrl:
            'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14146.4!2d153.30!3d-27.58!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6b91409f9f9f9f9f%3A0x502a35af3de9b10!2sVictoria%20Point%20QLD%204165%2C%20Australia!5e0!3m2!1sen!2sau!4v1707923456789',
    },
    {
        city: 'Capalaba',
        slug: 'capalaba',
        postalCode: '4157',
        region: 'Queensland',
        description:
            'Landscaping excellence in Capalaba. From garden clean-ups to full landscape design and construction.',
        landmarks: [
            'Capalaba Central',
            'IndigiScapes Centre',
            'Capalaba Regional Park',
        ],
        services: [
            'Total Garden Cleanup',
            'Landscape Construction',
            'Turf Laying',
            'Retaining Walls',
        ],
        mapUrl:
            'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14154.4!2d153.12!3d-27.51!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6b91448f1f9f9f9f%3A0x502a35af3de78d0!2sCapalaba%20QLD%204157%2C%20Australia!5e0!3m2!1sen!2sau!4v1707923456789',
    },
];

// Helper function to get location by slug
export const getLocationBySlug = (slug: string): LocationData | undefined => {
    return locations.find((loc) => loc.slug === slug);
};

// Helper function to get all location slugs (for routing)
export const getLocationSlugs = (): string[] => {
    return locations.map((loc) => loc.slug);
};
