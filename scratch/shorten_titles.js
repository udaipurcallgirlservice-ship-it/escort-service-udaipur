import fs from 'fs';

const filePath = 'src/data/blogPosts.ts';
let content = fs.readFileSync(filePath, 'utf8');

const replacements = [
  [
    'Choosing Your Ideal Call Girl in Udaipur: A Discerning Gentleman\'s Guide',
    'Choosing Your Ideal Call Girl in Udaipur'
  ],
  [
    'The Ultimate Guide to Incall vs. Outcall Escort Services in Udaipur',
    'Incall vs Outcall Escort Services in Udaipur'
  ],
  [
    'Maximizing Your Escort Experience: Communication and Etiquette with Udaipur Call Girls',
    'Maximizing Your Escort Experience in Udaipur'
  ],
  [
    'Unveiling the Best Escort Service in Udaipur: What to Expect',
    'Best Escort Service in Udaipur: What to Expect'
  ],
  [
    'The Gentleman’s Guide to Booking Premium Udaipur Call Girls Safely',
    'Book Premium Udaipur Call Girls Safely'
  ],
  [
    'Why Choosing Independent Escorts in Udaipur Offers the Best Experience',
    'Independent Escorts in Udaipur: Best Experience'
  ],
  [
    'Top 5 Luxury Experiences to Enjoy with a VIP Escort in Udaipur',
    'Top 5 VIP Escort Experiences in Udaipur'
  ],
  [
    'Discretion and Privacy: The Cornerstones of Elite Escort Service Udaipur',
    'Discretion & Privacy: Escort Service Udaipur'
  ],
  [
    'A Guide to Rajasthani Hospitality: Dining with Elite Call Girls in Udaipur',
    'Dining with Elite Call Girls in Udaipur'
  ],
  [
    'Incall vs Outcall: Customizing Your Udaipur Escort Service Experience',
    'Customizing Your Udaipur Escort Experience'
  ],
  [
    'Dating Etiquette: Tips for Your First Time Booking an Escort in Udaipur',
    'Dating Etiquette: Booking an Escort in Udaipur'
  ],
  [
    'The Rise of Premium Russian Escorts in Udaipur: A Global Companionship Trend',
    'Premium Russian Escorts in Udaipur'
  ],
  [
    'Housewife Call Girls in Udaipur: Why Mature Companionship is Gaining Popularity',
    'Housewife Call Girls in Udaipur'
  ]
];

replacements.forEach(([oldTitle, newTitle]) => {
  content = content.replace(oldTitle, newTitle);
});

fs.writeFileSync(filePath, content, 'utf8');
console.log("Successfully shortened all blog post titles!");
