import type { ISP } from '../types';

export const isps: ISP[] = [
  {
    id: 'worldlink',
    name: 'WorldLink',
    logo: 'https://via.placeholder.com/100/1E40AF/FFFFFF?text=WL',
    tagline: 'Nepal\'s Largest Internet Service Provider',
    rating: 4.3,
    totalReviews: 12543,
    businessPlans: true,
    website: 'https://worldlink.com.np',
    features: [
      'Fiber Optic Network',
      'No data caps',
      'Free router',
      '24/7 customer support',
      'FTTH technology'
    ],
    plans: [
      {
        id: 'wl-30mbps',
        name: 'WL Home 30',
        type: 'residential',
        connectionType: 'Fiber',
        speed: 30,
        uploadSpeed: 30,
        price: 999,
        dataCap: null,
        contractLength: 12,
        installationFee: 1000,
        equipmentFee: 0,
        features: ['Free router', 'Unlimited data']
      },
      {
        id: 'wl-60mbps',
        name: 'WL Home 60',
        type: 'residential',
        connectionType: 'Fiber',
        speed: 60,
        uploadSpeed: 60,
        price: 1299,
        dataCap: null,
        contractLength: 12,
        installationFee: 1000,
        equipmentFee: 0,
        features: ['Free router', 'Unlimited data', 'Priority support']
      },
      {
        id: 'wl-100mbps',
        name: 'WL Home 100',
        type: 'residential',
        connectionType: 'Fiber',
        speed: 100,
        uploadSpeed: 100,
        price: 1799,
        dataCap: null,
        contractLength: 12,
        installationFee: 1000,
        equipmentFee: 0,
        features: ['Free router', 'Unlimited data', 'Static IP available']
      },
      {
        id: 'wl-business-100',
        name: 'WL Business 100',
        type: 'business',
        connectionType: 'Fiber',
        speed: 100,
        uploadSpeed: 100,
        price: 2999,
        dataCap: null,
        contractLength: 12,
        installationFee: 2000,
        equipmentFee: 0,
        features: ['Static IP', 'Dedicated support', 'SLA guarantee']
      }
    ],
    coverage: [
      { cityId: 'kathmandu', cityName: 'Kathmandu', coveragePercentage: 95, signalStrength: 'excellent', availableAt: 'Now' },
      { cityId: 'lalitpur', cityName: 'Lalitpur', coveragePercentage: 93, signalStrength: 'excellent', availableAt: 'Now' },
      { cityId: 'bhaktapur', cityName: 'Bhaktapur', coveragePercentage: 88, signalStrength: 'good', availableAt: 'Now' },
      { cityId: 'pokhara', cityName: 'Pokhara', coveragePercentage: 85, signalStrength: 'good', availableAt: 'Now' },
      { cityId: 'bharatpur', cityName: 'Bharatpur', coveragePercentage: 78, signalStrength: 'good', availableAt: 'Now' },
      { cityId: 'butwal', cityName: 'Butwal', coveragePercentage: 72, signalStrength: 'fair', availableAt: 'Now' },
    ],
    specialOffers: [
      {
        id: 'wl-offer-1',
        title: 'First Month Free',
        description: 'Get your first month completely free on annual plans',
        discount: 'NPR 1,799 off',
        validUntil: '2025-03-31',
        terms: 'New customers only. 12-month contract required.'
      }
    ]
  },
  {
    id: 'vianet',
    name: 'Vianet',
    logo: 'https://via.placeholder.com/100/DC2626/FFFFFF?text=VN',
    tagline: 'Premium Internet for Modern Nepal',
    rating: 4.4,
    totalReviews: 9876,
    businessPlans: true,
    website: 'https://vianet.com.np',
    features: [
      'Pure Fiber FTTH',
      'Symmetrical speeds',
      'Free WiFi router',
      'CGNAT-free on request',
      'Low latency gaming'
    ],
    plans: [
      {
        id: 'vn-35mbps',
        name: 'Vianet 35',
        type: 'residential',
        connectionType: 'Fiber',
        speed: 35,
        uploadSpeed: 35,
        price: 1100,
        dataCap: null,
        contractLength: 12,
        installationFee: 1500,
        equipmentFee: 0,
        features: ['Free router', 'Unlimited data']
      },
      {
        id: 'vn-60mbps',
        name: 'Vianet 60',
        type: 'residential',
        connectionType: 'Fiber',
        speed: 60,
        uploadSpeed: 60,
        price: 1400,
        dataCap: null,
        contractLength: 12,
        installationFee: 1500,
        equipmentFee: 0,
        features: ['Free dual-band router', 'Public IPv4']
      },
      {
        id: 'vn-100mbps',
        name: 'Vianet 100',
        type: 'residential',
        connectionType: 'Fiber',
        speed: 100,
        uploadSpeed: 100,
        price: 1850,
        dataCap: null,
        contractLength: 12,
        installationFee: 1500,
        equipmentFee: 0,
        features: ['Premium router', 'Public IPv4', 'Gaming optimized']
      },
      {
        id: 'vn-150mbps',
        name: 'Vianet 150',
        type: 'residential',
        connectionType: 'Fiber',
        speed: 150,
        uploadSpeed: 150,
        price: 2500,
        dataCap: null,
        contractLength: 12,
        installationFee: 1500,
        equipmentFee: 0,
        features: ['Mesh WiFi system', 'Public IPv4', 'Priority routing']
      }
    ],
    coverage: [
      { cityId: 'kathmandu', cityName: 'Kathmandu', coveragePercentage: 92, signalStrength: 'excellent', availableAt: 'Now' },
      { cityId: 'lalitpur', cityName: 'Lalitpur', coveragePercentage: 90, signalStrength: 'excellent', availableAt: 'Now' },
      { cityId: 'bhaktapur', cityName: 'Bhaktapur', coveragePercentage: 82, signalStrength: 'good', availableAt: 'Now' },
      { cityId: 'pokhara', cityName: 'Pokhara', coveragePercentage: 75, signalStrength: 'good', availableAt: 'Now' },
      { cityId: 'biratnagar', cityName: 'Biratnagar', coveragePercentage: 68, signalStrength: 'fair', availableAt: 'Now' },
    ],
    specialOffers: [
      {
        id: 'vn-offer-1',
        title: 'Upgrade Bonus',
        description: 'Free speed upgrade for 3 months on 100 Mbps plan',
        discount: 'Get 150 Mbps speed',
        validUntil: '2025-02-28',
        terms: 'New subscriptions only.'
      }
    ]
  },
  {
    id: 'subisu',
    name: 'Subisu',
    logo: 'https://via.placeholder.com/100/059669/FFFFFF?text=SB',
    tagline: 'Your Digital Partner',
    rating: 4.1,
    totalReviews: 11234,
    businessPlans: true,
    website: 'https://subisu.net.np',
    features: [
      'Hybrid Fiber Coaxial',
      'Cable TV bundling',
      'Wide coverage',
      'Affordable plans',
      'Digital TV included'
    ],
    plans: [
      {
        id: 'sb-25mbps',
        name: 'Subisu 25',
        type: 'residential',
        connectionType: 'Cable',
        speed: 25,
        uploadSpeed: 5,
        price: 799,
        dataCap: null,
        contractLength: 12,
        installationFee: 800,
        equipmentFee: 100,
        features: ['Basic WiFi router', 'Cable TV add-on available']
      },
      {
        id: 'sb-40mbps',
        name: 'Subisu 40',
        type: 'residential',
        connectionType: 'Cable',
        speed: 40,
        uploadSpeed: 8,
        price: 999,
        dataCap: null,
        contractLength: 12,
        installationFee: 800,
        equipmentFee: 100,
        features: ['WiFi router', 'Free cable TV for 3 months']
      },
      {
        id: 'sb-fiber-60',
        name: 'Subisu Fiber 60',
        type: 'residential',
        connectionType: 'Fiber',
        speed: 60,
        uploadSpeed: 60,
        price: 1299,
        dataCap: null,
        contractLength: 12,
        installationFee: 1200,
        equipmentFee: 0,
        features: ['Fiber connection', 'Free router', 'Unlimited data']
      },
      {
        id: 'sb-fiber-100',
        name: 'Subisu Fiber 100',
        type: 'residential',
        connectionType: 'Fiber',
        speed: 100,
        uploadSpeed: 100,
        price: 1699,
        dataCap: null,
        contractLength: 12,
        installationFee: 1200,
        equipmentFee: 0,
        features: ['Pure fiber', 'Premium router', 'IPTV ready']
      }
    ],
    coverage: [
      { cityId: 'kathmandu', cityName: 'Kathmandu', coveragePercentage: 88, signalStrength: 'good', availableAt: 'Now' },
      { cityId: 'lalitpur', cityName: 'Lalitpur', coveragePercentage: 85, signalStrength: 'good', availableAt: 'Now' },
      { cityId: 'bhaktapur', cityName: 'Bhaktapur', coveragePercentage: 80, signalStrength: 'good', availableAt: 'Now' },
      { cityId: 'pokhara', cityName: 'Pokhara', coveragePercentage: 70, signalStrength: 'fair', availableAt: 'Now' },
      { cityId: 'bharatpur', cityName: 'Bharatpur', coveragePercentage: 65, signalStrength: 'fair', availableAt: 'Now' },
      { cityId: 'birgunj', cityName: 'Birgunj', coveragePercentage: 60, signalStrength: 'fair', availableAt: 'Now' },
    ],
    specialOffers: [
      {
        id: 'sb-offer-1',
        title: 'Bundle & Save',
        description: 'Get internet + cable TV together and save NPR 500/month',
        discount: 'NPR 6,000 yearly',
        validUntil: '2025-04-30',
        terms: 'Both services required. Annual payment.'
      }
    ]
  },
  {
    id: 'ntc-fiber',
    name: 'Nepal Telecom Fiber',
    logo: 'https://via.placeholder.com/100/7C3AED/FFFFFF?text=NTC',
    tagline: 'Connecting Nepal, Connecting Lives',
    rating: 3.9,
    totalReviews: 15432,
    businessPlans: true,
    website: 'https://ntc.net.np',
    features: [
      'Government backed',
      'Nationwide coverage',
      'Reliable service',
      'Bundle with phone',
      'Landline included'
    ],
    plans: [
      {
        id: 'ntc-20mbps',
        name: 'NTC Fiber 20',
        type: 'residential',
        connectionType: 'Fiber',
        speed: 20,
        uploadSpeed: 20,
        price: 699,
        dataCap: null,
        contractLength: 12,
        installationFee: 1000,
        equipmentFee: 0,
        features: ['Free landline', 'Basic router']
      },
      {
        id: 'ntc-40mbps',
        name: 'NTC Fiber 40',
        type: 'residential',
        connectionType: 'Fiber',
        speed: 40,
        uploadSpeed: 40,
        price: 999,
        dataCap: null,
        contractLength: 12,
        installationFee: 1000,
        equipmentFee: 0,
        features: ['Free landline', 'WiFi router']
      },
      {
        id: 'ntc-100mbps',
        name: 'NTC Fiber 100',
        type: 'residential',
        connectionType: 'Fiber',
        speed: 100,
        uploadSpeed: 100,
        price: 1599,
        dataCap: null,
        contractLength: 12,
        installationFee: 1000,
        equipmentFee: 0,
        features: ['Free landline', 'Dual-band router', 'Wide coverage']
      }
    ],
    coverage: [
      { cityId: 'kathmandu', cityName: 'Kathmandu', coveragePercentage: 90, signalStrength: 'excellent', availableAt: 'Now' },
      { cityId: 'lalitpur', cityName: 'Lalitpur', coveragePercentage: 88, signalStrength: 'good', availableAt: 'Now' },
      { cityId: 'pokhara', cityName: 'Pokhara', coveragePercentage: 82, signalStrength: 'good', availableAt: 'Now' },
      { cityId: 'biratnagar', cityName: 'Biratnagar', coveragePercentage: 75, signalStrength: 'good', availableAt: 'Now' },
      { cityId: 'bharatpur', cityName: 'Bharatpur', coveragePercentage: 78, signalStrength: 'good', availableAt: 'Now' },
      { cityId: 'birgunj', cityName: 'Birgunj', coveragePercentage: 72, signalStrength: 'fair', availableAt: 'Now' },
      { cityId: 'dharan', cityName: 'Dharan', coveragePercentage: 68, signalStrength: 'fair', availableAt: 'Now' },
      { cityId: 'butwal', cityName: 'Butwal', coveragePercentage: 70, signalStrength: 'fair', availableAt: 'Now' },
    ],
    specialOffers: []
  },
  {
    id: 'classic-tech',
    name: 'Classic Tech',
    logo: 'https://via.placeholder.com/100/EA580C/FFFFFF?text=CT',
    tagline: 'Quality Internet, Quality Life',
    rating: 4.2,
    totalReviews: 7654,
    businessPlans: true,
    website: 'https://classictech.com.np',
    features: [
      'Fiber optic',
      'No FUP limits',
      'Local support',
      'Fast installation',
      'Transparent billing'
    ],
    plans: [
      {
        id: 'ct-30mbps',
        name: 'Classic 30',
        type: 'residential',
        connectionType: 'Fiber',
        speed: 30,
        uploadSpeed: 30,
        price: 950,
        dataCap: null,
        contractLength: 12,
        installationFee: 1000,
        equipmentFee: 0,
        features: ['Free router', 'Unlimited data']
      },
      {
        id: 'ct-50mbps',
        name: 'Classic 50',
        type: 'residential',
        connectionType: 'Fiber',
        speed: 50,
        uploadSpeed: 50,
        price: 1250,
        dataCap: null,
        contractLength: 12,
        installationFee: 1000,
        equipmentFee: 0,
        features: ['Free router', 'Local support', 'Fast activation']
      },
      {
        id: 'ct-80mbps',
        name: 'Classic 80',
        type: 'residential',
        connectionType: 'Fiber',
        speed: 80,
        uploadSpeed: 80,
        price: 1650,
        dataCap: null,
        contractLength: 12,
        installationFee: 1000,
        equipmentFee: 0,
        features: ['Premium router', 'Priority support']
      }
    ],
    coverage: [
      { cityId: 'kathmandu', cityName: 'Kathmandu', coveragePercentage: 85, signalStrength: 'good', availableAt: 'Now' },
      { cityId: 'lalitpur', cityName: 'Lalitpur', coveragePercentage: 80, signalStrength: 'good', availableAt: 'Now' },
      { cityId: 'bhaktapur', cityName: 'Bhaktapur', coveragePercentage: 75, signalStrength: 'fair', availableAt: 'Now' },
      { cityId: 'pokhara', cityName: 'Pokhara', coveragePercentage: 65, signalStrength: 'fair', availableAt: 'Expanding' },
    ],
    specialOffers: [
      {
        id: 'ct-offer-1',
        title: 'Referral Bonus',
        description: 'Refer a friend and both get 1 month free',
        discount: 'Free month',
        validUntil: '2025-12-31',
        terms: 'Unlimited referrals. Both parties must be active subscribers.'
      }
    ]
  },
  {
    id: 'dish-home',
    name: 'Dish Home Fibernet',
    logo: 'https://via.placeholder.com/100/0891B2/FFFFFF?text=DH',
    tagline: 'Experience True Fiber',
    rating: 4.0,
    totalReviews: 6543,
    businessPlans: false,
    website: 'https://dishhome.com.np',
    features: [
      'FTTH technology',
      'No bandwidth throttling',
      'Quick installation',
      'Student discounts',
      'Flexible plans'
    ],
    plans: [
      {
        id: 'dh-25mbps',
        name: 'Fibernet 25',
        type: 'residential',
        connectionType: 'Fiber',
        speed: 25,
        uploadSpeed: 25,
        price: 850,
        dataCap: null,
        contractLength: 12,
        installationFee: 800,
        equipmentFee: 0,
        features: ['Free router', 'Student discount available']
      },
      {
        id: 'dh-50mbps',
        name: 'Fibernet 50',
        type: 'residential',
        connectionType: 'Fiber',
        speed: 50,
        uploadSpeed: 50,
        price: 1150,
        dataCap: null,
        contractLength: 12,
        installationFee: 800,
        equipmentFee: 0,
        features: ['Free router', 'Unlimited data', 'Quick activation']
      },
      {
        id: 'dh-75mbps',
        name: 'Fibernet 75',
        type: 'residential',
        connectionType: 'Fiber',
        speed: 75,
        uploadSpeed: 75,
        price: 1550,
        dataCap: null,
        contractLength: 12,
        installationFee: 800,
        equipmentFee: 0,
        features: ['Premium router', 'No throttling', '24/7 support']
      }
    ],
    coverage: [
      { cityId: 'kathmandu', cityName: 'Kathmandu', coveragePercentage: 78, signalStrength: 'good', availableAt: 'Now' },
      { cityId: 'lalitpur', cityName: 'Lalitpur', coveragePercentage: 72, signalStrength: 'fair', availableAt: 'Now' },
      { cityId: 'bhaktapur', cityName: 'Bhaktapur', coveragePercentage: 65, signalStrength: 'fair', availableAt: 'Now' },
      { cityId: 'pokhara', cityName: 'Pokhara', coveragePercentage: 60, signalStrength: 'fair', availableAt: 'Q1 2025' },
    ],
    specialOffers: [
      {
        id: 'dh-offer-1',
        title: 'Student Special',
        description: '20% discount for students with valid ID',
        discount: '20% off monthly',
        validUntil: '2025-06-30',
        terms: 'Valid student ID required. Academic year only.'
      }
    ]
  },
  {
    id: 'websurfer',
    name: 'Websurfer',
    logo: 'https://via.placeholder.com/100/16A34A/FFFFFF?text=WS',
    tagline: 'Surf Smart, Surf Fast',
    rating: 3.8,
    totalReviews: 5234,
    businessPlans: true,
    website: 'https://websurfer.com.np',
    features: [
      'Affordable pricing',
      'Good customer service',
      'Local presence',
      'Flexible contracts',
      'No hidden charges'
    ],
    plans: [
      {
        id: 'ws-20mbps',
        name: 'Surf 20',
        type: 'residential',
        connectionType: 'Fiber',
        speed: 20,
        uploadSpeed: 20,
        price: 750,
        dataCap: null,
        contractLength: 12,
        installationFee: 800,
        equipmentFee: 50,
        features: ['Basic router', 'Unlimited data']
      },
      {
        id: 'ws-40mbps',
        name: 'Surf 40',
        type: 'residential',
        connectionType: 'Fiber',
        speed: 40,
        uploadSpeed: 40,
        price: 1100,
        dataCap: null,
        contractLength: 12,
        installationFee: 800,
        equipmentFee: 50,
        features: ['WiFi router', 'Local support']
      },
      {
        id: 'ws-60mbps',
        name: 'Surf 60',
        type: 'residential',
        connectionType: 'Fiber',
        speed: 60,
        uploadSpeed: 60,
        price: 1450,
        dataCap: null,
        contractLength: 12,
        installationFee: 800,
        equipmentFee: 50,
        features: ['Dual-band router', 'Priority support']
      }
    ],
    coverage: [
      { cityId: 'kathmandu', cityName: 'Kathmandu', coveragePercentage: 70, signalStrength: 'fair', availableAt: 'Now' },
      { cityId: 'lalitpur', cityName: 'Lalitpur', coveragePercentage: 68, signalStrength: 'fair', availableAt: 'Now' },
      { cityId: 'bharatpur', cityName: 'Bharatpur', coveragePercentage: 55, signalStrength: 'fair', availableAt: 'Now' },
      { cityId: 'hetauda', cityName: 'Hetauda', coveragePercentage: 60, signalStrength: 'fair', availableAt: 'Now' },
    ],
    specialOffers: []
  },
  {
    id: 'techminds',
    name: 'TechMinds',
    logo: 'https://via.placeholder.com/100/6366F1/FFFFFF?text=TM',
    tagline: 'Innovation in Connectivity',
    rating: 4.3,
    totalReviews: 4321,
    businessPlans: true,
    website: 'https://techminds.com.np',
    features: [
      'Latest technology',
      'Gaming optimized',
      'Low latency',
      'Tech support',
      'Modern infrastructure'
    ],
    plans: [
      {
        id: 'tm-40mbps',
        name: 'TechMinds 40',
        type: 'residential',
        connectionType: 'Fiber',
        speed: 40,
        uploadSpeed: 40,
        price: 1099,
        dataCap: null,
        contractLength: 12,
        installationFee: 1200,
        equipmentFee: 0,
        features: ['Gaming router', 'Low latency', 'QoS enabled']
      },
      {
        id: 'tm-70mbps',
        name: 'TechMinds 70',
        type: 'residential',
        connectionType: 'Fiber',
        speed: 70,
        uploadSpeed: 70,
        price: 1499,
        dataCap: null,
        contractLength: 12,
        installationFee: 1200,
        equipmentFee: 0,
        features: ['Premium gaming router', 'DDoS protection', 'Tech support']
      },
      {
        id: 'tm-120mbps',
        name: 'TechMinds 120',
        type: 'residential',
        connectionType: 'Fiber',
        speed: 120,
        uploadSpeed: 120,
        price: 2199,
        dataCap: null,
        contractLength: 12,
        installationFee: 1200,
        equipmentFee: 0,
        features: ['Mesh WiFi', 'Gaming optimized', 'Public IP', 'Priority routing']
      }
    ],
    coverage: [
      { cityId: 'kathmandu', cityName: 'Kathmandu', coveragePercentage: 82, signalStrength: 'good', availableAt: 'Now' },
      { cityId: 'lalitpur', cityName: 'Lalitpur', coveragePercentage: 78, signalStrength: 'good', availableAt: 'Now' },
      { cityId: 'bhaktapur', cityName: 'Bhaktapur', coveragePercentage: 70, signalStrength: 'fair', availableAt: 'Now' },
      { cityId: 'pokhara', cityName: 'Pokhara', coveragePercentage: 62, signalStrength: 'fair', availableAt: 'Expanding' },
    ],
    specialOffers: [
      {
        id: 'tm-offer-1',
        title: 'Gamer Special',
        description: 'Free gaming router upgrade on 120 Mbps plan',
        discount: 'NPR 3,000 value',
        validUntil: '2025-03-31',
        terms: 'Annual subscription required. While stocks last.'
      }
    ]
  },
  {
    id: 'arrownet',
    name: 'Arrownet',
    logo: 'https://via.placeholder.com/100/DB2777/FFFFFF?text=AN',
    tagline: 'Fast. Reliable. Affordable.',
    rating: 3.9,
    totalReviews: 3876,
    businessPlans: false,
    website: 'https://arrownet.com.np',
    features: [
      'Budget-friendly',
      'Quick setup',
      'Community focus',
      'Local technicians',
      'Simple plans'
    ],
    plans: [
      {
        id: 'an-15mbps',
        name: 'Arrow 15',
        type: 'residential',
        connectionType: 'Wireless',
        speed: 15,
        uploadSpeed: 5,
        price: 599,
        dataCap: null,
        contractLength: 6,
        installationFee: 500,
        equipmentFee: 100,
        features: ['Basic WiFi', 'Affordable', 'Quick setup']
      },
      {
        id: 'an-25mbps',
        name: 'Arrow 25',
        type: 'residential',
        connectionType: 'Fiber',
        speed: 25,
        uploadSpeed: 25,
        price: 899,
        dataCap: null,
        contractLength: 12,
        installationFee: 800,
        equipmentFee: 0,
        features: ['Fiber connection', 'Unlimited data']
      },
      {
        id: 'an-50mbps',
        name: 'Arrow 50',
        type: 'residential',
        connectionType: 'Fiber',
        speed: 50,
        uploadSpeed: 50,
        price: 1299,
        dataCap: null,
        contractLength: 12,
        installationFee: 800,
        equipmentFee: 0,
        features: ['Fiber connection', 'WiFi router', 'Good value']
      }
    ],
    coverage: [
      { cityId: 'kathmandu', cityName: 'Kathmandu', coveragePercentage: 65, signalStrength: 'fair', availableAt: 'Now' },
      { cityId: 'lalitpur', cityName: 'Lalitpur', coveragePercentage: 60, signalStrength: 'fair', availableAt: 'Now' },
      { cityId: 'biratnagar', cityName: 'Biratnagar', coveragePercentage: 55, signalStrength: 'fair', availableAt: 'Now' },
      { cityId: 'dharan', cityName: 'Dharan', coveragePercentage: 58, signalStrength: 'fair', availableAt: 'Now' },
    ],
    specialOffers: [
      {
        id: 'an-offer-1',
        title: 'New Area Launch',
        description: 'Free installation in newly covered areas',
        discount: 'NPR 800 off',
        validUntil: '2025-02-28',
        terms: 'Selected areas only. Check availability.'
      }
    ]
  },
  {
    id: 'ncell-wimax',
    name: 'Ncell WiMAX',
    logo: 'https://via.placeholder.com/100/A855F7/FFFFFF?text=NC',
    tagline: 'Wireless Internet Everywhere',
    rating: 3.6,
    totalReviews: 8765,
    businessPlans: false,
    website: 'https://ncell.axiata.com',
    features: [
      'No wiring needed',
      'Quick activation',
      'Portable',
      'Wide coverage',
      'Backup internet'
    ],
    plans: [
      {
        id: 'nc-10mbps',
        name: 'WiMAX 10',
        type: 'residential',
        connectionType: 'Wireless',
        speed: 10,
        uploadSpeed: 3,
        price: 699,
        dataCap: 100,
        contractLength: 0,
        installationFee: 500,
        equipmentFee: 150,
        features: ['Wireless', 'No cables', 'Portable']
      },
      {
        id: 'nc-20mbps',
        name: 'WiMAX 20',
        type: 'residential',
        connectionType: 'Wireless',
        speed: 20,
        uploadSpeed: 5,
        price: 999,
        dataCap: 200,
        contractLength: 0,
        installationFee: 500,
        equipmentFee: 150,
        features: ['Wireless', 'No installation', 'Wide coverage']
      },
      {
        id: 'nc-unlimited',
        name: 'WiMAX Unlimited',
        type: 'residential',
        connectionType: 'Wireless',
        speed: 15,
        uploadSpeed: 4,
        price: 1299,
        dataCap: null,
        contractLength: 0,
        installationFee: 500,
        equipmentFee: 150,
        features: ['Unlimited data', 'Wireless', 'Flexible']
      }
    ],
    coverage: [
      { cityId: 'kathmandu', cityName: 'Kathmandu', coveragePercentage: 85, signalStrength: 'good', availableAt: 'Now' },
      { cityId: 'pokhara', cityName: 'Pokhara', coveragePercentage: 80, signalStrength: 'good', availableAt: 'Now' },
      { cityId: 'biratnagar', cityName: 'Biratnagar', coveragePercentage: 75, signalStrength: 'good', availableAt: 'Now' },
      { cityId: 'bharatpur', cityName: 'Bharatpur', coveragePercentage: 70, signalStrength: 'fair', availableAt: 'Now' },
      { cityId: 'birgunj', cityName: 'Birgunj', coveragePercentage: 72, signalStrength: 'fair', availableAt: 'Now' },
      { cityId: 'butwal', cityName: 'Butwal', coveragePercentage: 68, signalStrength: 'fair', availableAt: 'Now' },
      { cityId: 'dharan', cityName: 'Dharan', coveragePercentage: 73, signalStrength: 'fair', availableAt: 'Now' },
      { cityId: 'nepalgunj', cityName: 'Nepalgunj', coveragePercentage: 65, signalStrength: 'fair', availableAt: 'Now' },
    ],
    specialOffers: []
  }
];
