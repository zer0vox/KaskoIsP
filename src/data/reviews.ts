import type { Review } from '../types';

export const reviews: Review[] = [
  // WorldLink reviews
  {
    id: 'rev-1',
    ispId: 'worldlink',
    userName: 'Rajesh Thapa',
    userLocation: 'Kathmandu',
    rating: 5,
    date: '2024-12-01',
    title: 'Excellent fiber service',
    comment: 'Been using WorldLink 60 Mbps for 8 months now. Speed is consistent throughout the day, even during peak hours. Customer support is responsive. Installation was professional and quick.',
    helpful: 34,
    notHelpful: 2,
    verified: true
  },
  {
    id: 'rev-2',
    ispId: 'worldlink',
    userName: 'Srijana Sharma',
    userLocation: 'Lalitpur',
    rating: 4,
    date: '2024-11-25',
    title: 'Good for work from home',
    comment: 'Using the 100 Mbps plan. Perfect for video calls and large file uploads. Occasionally have minor issues but support team resolves them quickly. Overall satisfied.',
    helpful: 28,
    notHelpful: 3,
    verified: true
  },
  {
    id: 'rev-3',
    ispId: 'worldlink',
    userName: 'Prakash Adhikari',
    userLocation: 'Pokhara',
    rating: 3,
    date: '2024-11-18',
    title: 'Average experience',
    comment: 'Service is okay but had 2-3 outages in the past 6 months. Each time took several hours to restore. Speed is good when working though.',
    helpful: 19,
    notHelpful: 8,
    verified: true
  },

  // Vianet reviews
  {
    id: 'rev-4',
    ispId: 'vianet',
    userName: 'Aayush Shrestha',
    userLocation: 'Kathmandu',
    rating: 5,
    date: '2024-12-05',
    title: 'Best for gaming',
    comment: 'Vianet 100 Mbps is amazing for gaming. Low ping, no packet loss, and they give public IPv4. Been using for over a year with zero complaints.',
    helpful: 45,
    notHelpful: 1,
    verified: true
  },
  {
    id: 'rev-5',
    ispId: 'vianet',
    userName: 'Samita Rai',
    userLocation: 'Lalitpur',
    rating: 5,
    date: '2024-11-29',
    title: 'Premium service quality',
    comment: 'Upgraded from cable to Vianet fiber. The difference is night and day! Upload speeds are fantastic for my YouTube channel. Tech support is knowledgeable.',
    helpful: 38,
    notHelpful: 2,
    verified: true
  },
  {
    id: 'rev-6',
    ispId: 'vianet',
    userName: 'Bibek Karki',
    userLocation: 'Bhaktapur',
    rating: 4,
    date: '2024-11-20',
    title: 'Great speeds, minor issues',
    comment: 'Vianet 60 plan works well. Occasional router restarts needed but overall reliable. Worth the price for symmetric upload/download.',
    helpful: 22,
    notHelpful: 5,
    verified: true
  },

  // Subisu reviews
  {
    id: 'rev-7',
    ispId: 'subisu',
    userName: 'Anita Gurung',
    userLocation: 'Kathmandu',
    rating: 4,
    date: '2024-12-02',
    title: 'Good bundle offer',
    comment: 'Using Subisu internet + cable TV bundle. Saves money and service is reliable. Fiber 60 plan handles all our streaming needs.',
    helpful: 31,
    notHelpful: 4,
    verified: true
  },
  {
    id: 'rev-8',
    ispId: 'subisu',
    userName: 'Ramesh Tamang',
    userLocation: 'Lalitpur',
    rating: 3,
    date: '2024-11-26',
    title: 'Decent but not great',
    comment: 'Cable internet works fine for basic use. Speed drops during evening hours sometimes. Customer service could be better.',
    helpful: 18,
    notHelpful: 7,
    verified: true
  },
  {
    id: 'rev-9',
    ispId: 'subisu',
    userName: 'Deepa Bhandari',
    userLocation: 'Pokhara',
    rating: 4,
    date: '2024-11-15',
    title: 'Affordable option',
    comment: 'Good value for money. The 40 Mbps plan is enough for my family. Installation was quick and painless.',
    helpful: 25,
    notHelpful: 3,
    verified: true
  },

  // NTC Fiber reviews
  {
    id: 'rev-10',
    ispId: 'ntc-fiber',
    userName: 'Suresh Basnet',
    userLocation: 'Bharatpur',
    rating: 4,
    date: '2024-12-01',
    title: 'Reliable government service',
    comment: 'NTC fiber is solid. Not the fastest but very reliable. Free landline is useful. Coverage in my area is excellent.',
    helpful: 29,
    notHelpful: 5,
    verified: true
  },
  {
    id: 'rev-11',
    ispId: 'ntc-fiber',
    userName: 'Kopila Dhital',
    userLocation: 'Biratnagar',
    rating: 3,
    date: '2024-11-22',
    title: 'Okay service',
    comment: 'Gets the job done. Speed is consistent but not very fast. Support is slow to respond. Good for basic internet needs.',
    helpful: 16,
    notHelpful: 9,
    verified: true
  },
  {
    id: 'rev-12',
    ispId: 'ntc-fiber',
    userName: 'Mohan Regmi',
    userLocation: 'Butwal',
    rating: 4,
    date: '2024-11-18',
    title: 'Good coverage',
    comment: 'NTC is available everywhere which is great. 40 Mbps plan works well for remote work. Billing is transparent.',
    helpful: 21,
    notHelpful: 4,
    verified: true
  },

  // Classic Tech reviews
  {
    id: 'rev-13',
    ispId: 'classic-tech',
    userName: 'Bishnu Parajuli',
    userLocation: 'Kathmandu',
    rating: 5,
    date: '2024-11-30',
    title: 'Excellent local ISP',
    comment: 'Classic Tech has been amazing. Local support team is very helpful and responsive. Fiber 50 plan is perfect for my needs.',
    helpful: 27,
    notHelpful: 2,
    verified: true
  },
  {
    id: 'rev-14',
    ispId: 'classic-tech',
    userName: 'Kabita Bhattarai',
    userLocation: 'Lalitpur',
    rating: 4,
    date: '2024-11-24',
    title: 'Fast installation',
    comment: 'Got connected within 2 days of applying. Speed is good, no complaints so far. Customer care responds quickly.',
    helpful: 23,
    notHelpful: 3,
    verified: true
  },

  // Dish Home reviews
  {
    id: 'rev-15',
    ispId: 'dish-home',
    userName: 'Nischal Pokharel',
    userLocation: 'Kathmandu',
    rating: 4,
    date: '2024-12-03',
    title: 'Student-friendly',
    comment: 'Got 20% student discount which is great. 50 Mbps is enough for online classes and gaming. Stable connection.',
    helpful: 32,
    notHelpful: 4,
    verified: true
  },
  {
    id: 'rev-16',
    ispId: 'dish-home',
    userName: 'Pramila Chaudhary',
    userLocation: 'Lalitpur',
    rating: 4,
    date: '2024-11-27',
    title: 'Smooth experience',
    comment: 'Fibernet 25 works well for streaming and browsing. Installation was quick. Good value for the price.',
    helpful: 19,
    notHelpful: 2,
    verified: true
  },

  // Websurfer reviews
  {
    id: 'rev-17',
    ispId: 'websurfer',
    userName: 'Raju Maharjan',
    userLocation: 'Bhaktapur',
    rating: 3,
    date: '2024-11-29',
    title: 'Budget option',
    comment: 'Cheap internet that works. Not the fastest but good for basic needs. Local technicians are helpful.',
    helpful: 15,
    notHelpful: 7,
    verified: true
  },
  {
    id: 'rev-18',
    ispId: 'websurfer',
    userName: 'Sabita Lama',
    userLocation: 'Kathmandu',
    rating: 4,
    date: '2024-11-21',
    title: 'Good for small office',
    comment: 'Using 40 Mbps for our small office. Reliable during work hours. Price is reasonable.',
    helpful: 20,
    notHelpful: 3,
    verified: true
  },

  // TechMinds reviews
  {
    id: 'rev-19',
    ispId: 'techminds',
    userName: 'Sandesh Rana',
    userLocation: 'Kathmandu',
    rating: 5,
    date: '2024-12-04',
    title: 'Perfect for gamers',
    comment: 'TechMinds 120 Mbps is a beast! Low latency, public IP, and gaming router included. Best ISP for esports players.',
    helpful: 41,
    notHelpful: 2,
    verified: true
  },
  {
    id: 'rev-20',
    ispId: 'techminds',
    userName: 'Kritika Karmacharya',
    userLocation: 'Lalitpur',
    rating: 5,
    date: '2024-11-26',
    title: 'Tech-savvy support',
    comment: 'Support team actually understands technical issues. They helped me set up port forwarding for my home server. Very impressed.',
    helpful: 35,
    notHelpful: 1,
    verified: true
  },

  // Arrownet reviews
  {
    id: 'rev-21',
    ispId: 'arrownet',
    userName: 'Dinesh Thakur',
    userLocation: 'Dharan',
    rating: 4,
    date: '2024-11-28',
    title: 'Good local provider',
    comment: 'Arrownet covers our area well. 25 Mbps fiber is sufficient for family use. Affordable and reliable.',
    helpful: 17,
    notHelpful: 4,
    verified: true
  },
  {
    id: 'rev-22',
    ispId: 'arrownet',
    userName: 'Sushma Ghimire',
    userLocation: 'Biratnagar',
    rating: 3,
    date: '2024-11-20',
    title: 'Basic service',
    comment: 'Works for basic internet. Not fancy but gets the job done. Customer service is friendly.',
    helpful: 12,
    notHelpful: 5,
    verified: true
  },

  // Ncell WiMAX reviews
  {
    id: 'rev-23',
    ispId: 'ncell-wimax',
    userName: 'Umesh Adhikari',
    userLocation: 'Nepalgunj',
    rating: 3,
    date: '2024-11-25',
    title: 'Good backup option',
    comment: 'Use WiMAX as backup internet. Works well in areas without fiber. Speed is decent for wireless.',
    helpful: 24,
    notHelpful: 6,
    verified: true
  },
  {
    id: 'rev-24',
    ispId: 'ncell-wimax',
    userName: 'Mina Chettri',
    userLocation: 'Pokhara',
    rating: 4,
    date: '2024-11-19',
    title: 'No installation hassle',
    comment: 'Love that there is no wiring needed. Portable and easy to set up. Good coverage in Pokhara.',
    helpful: 28,
    notHelpful: 4,
    verified: true
  },

  // Additional reviews for variety
  {
    id: 'rev-25',
    ispId: 'worldlink',
    userName: 'Nabin Khatri',
    userLocation: 'Bharatpur',
    rating: 4,
    date: '2024-11-15',
    title: 'Solid performance',
    comment: 'WorldLink 30 is good for streaming Netflix and YouTube. Rarely buffers. Customer service could improve.',
    helpful: 22,
    notHelpful: 5,
    verified: true
  },
  {
    id: 'rev-26',
    ispId: 'vianet',
    userName: 'Urmila Magar',
    userLocation: 'Kathmandu',
    rating: 5,
    date: '2024-11-10',
    title: 'Best upload speeds',
    comment: 'As a content creator, I need good upload. Vianet delivers! 60/60 Mbps is perfect for my YouTube uploads.',
    helpful: 39,
    notHelpful: 2,
    verified: true
  },
  {
    id: 'rev-27',
    ispId: 'subisu',
    userName: 'Ganesh Paudel',
    userLocation: 'Birgunj',
    rating: 4,
    date: '2024-11-08',
    title: 'Reliable in Birgunj',
    comment: 'Good coverage in Birgunj area. Fiber 60 handles our family internet needs well. No major issues.',
    helpful: 16,
    notHelpful: 3,
    verified: true
  },
  {
    id: 'rev-28',
    ispId: 'ntc-fiber',
    userName: 'Laxmi Koirala',
    userLocation: 'Hetauda',
    rating: 4,
    date: '2024-11-05',
    title: 'Trustworthy service',
    comment: 'NTC is reliable as always. 40 Mbps is sufficient for work from home. Billing is straightforward.',
    helpful: 19,
    notHelpful: 4,
    verified: true
  },
  {
    id: 'rev-29',
    ispId: 'techminds',
    userName: 'Roshan Joshi',
    userLocation: 'Kathmandu',
    rating: 5,
    date: '2024-11-02',
    title: 'Gaming paradise',
    comment: 'TechMinds 70 with gaming router is perfect. Valorant, PUBG, everything runs smoothly. No lag!',
    helpful: 44,
    notHelpful: 1,
    verified: true
  },
  {
    id: 'rev-30',
    ispId: 'dish-home',
    userName: 'Pratiksha Dahal',
    userLocation: 'Lalitpur',
    rating: 4,
    date: '2024-10-28',
    title: 'Great for students',
    comment: 'Student discount made this affordable. 25 Mbps is enough for online classes and assignments. Happy with the service.',
    helpful: 27,
    notHelpful: 3,
    verified: true
  }
];
