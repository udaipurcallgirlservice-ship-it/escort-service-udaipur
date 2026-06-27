import { createWebsiteSchema, createProfessionalServiceSchema, createReviewSchema, createAggregateRatingSchema } from './schemas';

export const getHomePageSchemas = (siteUrl, pageDescription, keywords, imageUrl) => {
    return [
        createWebsiteSchema(siteUrl, "Find elite companions and unforgettable experiences with the leading Udaipur escort services. Safe, discreet, and professional."),
        createProfessionalServiceSchema(
            siteUrl, 
            "The premier provider of Udaipur escort services, offering genuine, verified, and high-class companions for discerning gentlemen. 100% discretion and satisfaction guaranteed.", 
            keywords, 
            imageUrl, 
            "Udaipur Escort Services",
            "+918000253680"
        ),
        createAggregateRatingSchema({
            itemReviewedName: "Udaipur Escort Services",
            ratingValue: "4.9",
            ratingCount: "258",
            reviewCount: "192"
        })
    ];
};