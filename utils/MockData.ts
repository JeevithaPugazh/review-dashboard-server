const reviews: { [key: string]: Array<any> } = {
  restaurant: [
    {
      name: "Amber Smith",
      title: "Excellent food!",
      description:
        "We dined in the dining room with the seasonal menu. The atmosphere of this restaurant is incredible. Loved the decorations, lighting, and perfect temperature. It’s dinner and a show because watching the perfectly timed execution of courses being served to tables near you at the same exact time is magical. Loved watching the service staff execute to great standards and seeing two people go to a table at a time to clean plates off at the exact same time. Some of the courses weren’t outstanding, but the dessert was by far the best course. The truffles at the end were a sweet touch and we were sent home with a lemon poppy seed muffin to take home!",
      rating: 4.3,
      serviceRatings: {
        "Dine-in": 3.2,
        Cleanliness: 4,
        "Customer Service": 3.2,
        "Food Quality": 2.5,
      },
      sentiment: "positive",
      createdAt: new Date("11/9/2024"),
    },
    {
      name: "Steve Goldberg",
      title: "Very nice food and ambience",
      description:
        "We had a very important business lunch.The staff was wonderful.One of the staff members noticed that we were both Capricorns born on the same day.The food was great.The atmosphere was warm and inviting.",
      rating: 3.3,
      serviceRatings: {
        "Dine-in": 4.2,
        Cleanliness: 5,
        "Customer Service": 4.2,
        "Food Quality": 4.5,
      },
      sentiment: "positive",
      createdAt: new Date("1/3/2024"),
    },
    ,
    {
      name: "Marcus Thompson",
      title: "Flavors That Wow and Service That Shines",
      description:
        "Perfect place to celebrate your birthday! The waiter was wonderful, so attentive, funny, and amiable. The food was marvelous. The red and yellow beets paired perfectly with greens and Roquefort cream. The escargot was tasty, and the leftover sauce was divine with bread. I highly recommend the crispy duck, which took me back to Paris, and la vie en rose cocktails. The scallops were perfectly tender over squash puree and tasty lentils. Pair the mousse with the raspberry sauce, but it's so decadent, you'll want to share it with at least three people. Love the gold flakes on the raspberries. It helps to have a cute waiter sing Happy Birthday to you as well.",
      rating: 5,
      serviceRatings: {
        "Dine-in": 4.3,
        Cleanliness: 4.5,
        "Customer Service": 5,
        "Food Quality": 5,
      },
      sentiment: "positive",
      createdAt: new Date("5/5/2024"),
    },
    {
      name: "Amber Smith",
      title: "The food was below expectations!",
      description:
        "The food was below expectations. The pasta was overcooked, and the service was quite slow. However, the ambiance was nice and the staff was polite.",
      rating: 2.3,
      serviceRatings: {
        "Dine-in": 3.2,
        Cleanliness: 2,
        "Customer Service": 3.2,
        "Food Quality": 2.5,
      },
      sentiment: "negative",
      createdAt: new Date("1/7/2024"),
    },
    {
      name: "Danielle",
      title: "Very disappointing",
      description:
        "Very disappointing experience. The restaurant was dirty, food was cold, and we had to wait 45 minutes just to get our order taken. Would not recommend.",
      rating: 1,
      serviceRatings: {
        "Dine-in": 3.2,
        Cleanliness: 1,
        "Customer Service": 3.2,
        "Food Quality": 2.5,
      },
      sentiment: "negative",
      createdAt: new Date("8/3/2024"),
    },
    {
      name: "Olivia Nguyen",
      title: "A Hidden Gem Worth Every Bite",
      description:
        "Plain tasting tartare with bread that was laying around for a long time in the kitchen, when you bite the bread you experience the pain in your teeth. Wine was funky and had cork bits on the bottom.16$ wine, 28$ tartare. Find a better place if you’re looking for quality appetizers.",
      rating: 1,
      serviceRatings: {
        "Dine-in": 1.5,
        Cleanliness: 1,
        "Customer Service": 1,
        "Food Quality": 1,
      },
      sentiment: "negative",
      createdAt: new Date("2/10/2024"),
    },
    {
      name: "Priya Desai",
      title: "Incredible Food, Warm Atmosphere",
      description:
        "Plain tasting tartare with bread that was laying around for a long time in the kitchen, when you bite the bread you experience the pain in your teeth. Wine was funky and had cork bits on the bottom.16$ wine, 28$ tartare. Find a better place if you’re looking for quality appetizers.",
      rating: 1,
      serviceRatings: {
        "Dine-in": 1.5,
        Cleanliness: 1,
        "Customer Service": 1,
        "Food Quality": 1,
      },
      sentiment: "negative",
      createdAt: new Date("4/11/2024"),
    },
    {
      name: "Leo Moreno",
      title: "Flavors That Wow and Service That Shines",
      description:
        "Perfect place to celebrate your birthday! The waiter was wonderful, so attentive, funny, and amiable. The food was marvelous. The red and yellow beets paired perfectly with greens and Roquefort cream. The escargot was tasty, and the leftover sauce was divine with bread. I highly recommend the crispy duck, which took me back to Paris, and la vie en rose cocktails. The scallops were perfectly tender over squash puree and tasty lentils. Pair the mousse with the raspberry sauce, but it's so decadent, you'll want to share it with at least three people. Love the gold flakes on the raspberries. It helps to have a cute waiter sing Happy Birthday to you as well.",
      rating: 5,
      serviceRatings: {
        "Dine-in": 4.3,
        Cleanliness: 4.5,
        "Customer Service": 5,
        "Food Quality": 5,
      },
      sentiment: "positive",
      createdAt: new Date("6/5/2024"),
    },
    {
      name: "Carlos Bennett",
      title: "Absolutely Delightful Dining Experience!",
      description:
        "Perfect place to celebrate your birthday! The waiter was wonderful, so attentive, funny, and amiable. The food was marvelous. The red and yellow beets paired perfectly with greens and Roquefort cream. The escargot was tasty, and the leftover sauce was divine with bread. I highly recommend the crispy duck, which took me back to Paris, and la vie en rose cocktails. The scallops were perfectly tender over squash puree and tasty lentils. Pair the mousse with the raspberry sauce, but it's so decadent, you'll want to share it with at least three people. Love the gold flakes on the raspberries. It helps to have a cute waiter sing Happy Birthday to you as well.",
      rating: 5,
      serviceRatings: {
        "Dine-in": 4.3,
        Cleanliness: 4.5,
        "Customer Service": 5,
        "Food Quality": 5,
      },
      sentiment: "positive",
      createdAt: new Date("7/5/2024"),
    },
  ],
  electronics: [
    {
      name: "Daniel Craig",
      title: "Luxury and performance!",
      description:
        "The Omega Seamaster combines style with functionality. Love the build quality and design.",
      rating: 4.8,
      serviceRatings: {
        Design: 5,
        Durability: 4.7,
        "Customer Service": 4.6,
        "Value for Money": 4.2,
      },
      sentiment: "positive",
      createdAt: new Date("10/7/2024"),
    },
    {
      name: "Rachel Kim",
      title: "Looks great but heavy",
      description:
        "The design is stunning but the watch feels a bit heavy on the wrist after long use.",
      rating: 3.9,
      serviceRatings: {
        Design: 4.5,
        Durability: 4.3,
        "Customer Service": 3.8,
        "Value for Money": 3.5,
      },
      sentiment: "neutral",
      createdAt: new Date("10/4/2024"),
    },
    {
      name: "Mark Johnson",
      title: "Excellent craftsmanship",
      description:
        "Premium quality. Every detail screams luxury. Would definitely recommend it to watch enthusiasts.",
      rating: 4.6,
      serviceRatings: {
        Design: 4.8,
        Durability: 4.9,
        "Customer Service": 4.2,
        "Value for Money": 4.0,
      },
      sentiment: "positive",
      createdAt: new Date("11/1/24"),
    },
    {
      name: "Ethan Blake",
      title: "Disappointed with the battery life",
      description:
        "For such a premium watch, the battery didn’t even last a year. Expected much better from Omega.",
      rating: 2.0,
      serviceRatings: {
        Design: 4.0,
        Durability: 2.1,
        "Customer Service": 1.5,
        "Value for Money": 1.8,
      },
      sentiment: "negative",
      createdAt: new Date("3/5/2025"),
    },
    {
      name: "Julia Thompson",
      title: "Not worth the hype",
      description:
        "Looks nice but feels cheap. The strap broke within 2 months and customer support was not helpful.",
      rating: 2.5,
      serviceRatings: {
        Design: 3.0,
        Durability: 1.0,
        "Customer Service": 1.2,
        "Value for Money": 2.0,
      },
      sentiment: "negative",
      createdAt: new Date("9/8/2024"),
    },
    {
      name: "Leo Martinez",
      title: "Stylish and functional!",
      description:
        "Loving the look and features. Battery life could be better, but overall a solid buy.",
      rating: 4.4,
      serviceRatings: {
        Design: 4.7,
        Durability: 4.2,
        "Customer Service": 4.5,
        "Value for Money": 4.0,
      },
      sentiment: "positive",
      createdAt: new Date("11/15/2024"),
    },
    {
      name: "Samantha Lee",
      title: "Exceeded my expectations",
      description:
        "I was hesitant at first, but this watch won me over. Lightweight, responsive, and elegant.",
      rating: 4.8,
      serviceRatings: {
        Design: 5.0,
        Durability: 4.6,
        "Customer Service": 4.9,
        "Value for Money": 4.7,
      },
      sentiment: "positive",
      createdAt: new Date("12/3/2024"),
    },
    {
      name: "Daniel Chen",
      title: "Good features, average comfort",
      description:
        "The features are top-notch, but the strap irritated my skin after a few hours.",
      rating: 3.6,
      serviceRatings: {
        Design: 4.0,
        Durability: 4.1,
        "Customer Service": 3.6,
        "Value for Money": 3.3,
      },
      sentiment: "neutral",
      createdAt: new Date("01/20/2025"),
    },
  ],
  healthcare: [
    {
  name: "Daniel Carter",
  title: "Accurate and Fast Reading!",
  description:
    "I purchased this digital thermometer for my kids. It gives a quick reading in under 5 seconds and has a flexible tip that's comfortable for them. The backlight makes it easy to use at night. The build feels sturdy. However, I did notice the battery cover can be a bit tricky to remove. Still, very reliable!",
  rating: 4.6,
  serviceRatings: {
    "Staff Friendliness": 4.8,
    Cleanliness: 4.5,
    "Wait Time": 3.8,
    "Doctor Interaction": 4.9,
  },
  sentiment: "positive",
  createdAt: new Date("02/22/2025"),
},
{
  name: "Maya Patel",
  title: "Great Pediatric Care",
  description:
    "Took my daughter here for a fever. The pediatrician was gentle, listened carefully, and explained things in a way that made me feel at ease. Nurses were warm and patient. The waiting area had toys and was very clean.",
  rating: 4.8,
  serviceRatings: {
    "Staff Friendliness": 5.0,
    Cleanliness: 4.9,
    "Wait Time": 4.2,
    "Doctor Interaction": 4.9,
  },
  sentiment: "positive",
  createdAt: new Date("03/01/2025"),
},
{
  name: "George L.",
  title: "Long Wait, but Good Doctors",
  description:
    "The appointment started almost 45 minutes late, which was frustrating. But once I was seen, the doctor was thorough and professional. They need to improve scheduling, but medical care was excellent.",
  rating: 3.7,
  serviceRatings: {
    "Staff Friendliness": 4.0,
    Cleanliness: 4.3,
    "Wait Time": 2.5,
    "Doctor Interaction": 4.8,
  },
  sentiment: "neutral",
  createdAt: new Date("03/14/2025"),
},
{
  name: "Lisa Monroe",
  title: "Unpleasant ER Experience",
  description:
    "Went to the ER with severe stomach pain. Had to wait over 2 hours, and the staff seemed overwhelmed. The nurse was rude and dismissive. The doctor finally arrived and was decent, but I wouldn’t return here for emergencies.",
  rating: 2.3,
  serviceRatings: {
    "Staff Friendliness": 1.5,
    Cleanliness: 3.2,
    "Wait Time": 1.0,
    "Doctor Interaction": 3.5,
  },
  sentiment: "negative",
  createdAt: new Date("03/22/2025"),
},
{
  name: "Natalie Kim",
  title: "Excellent Maternity Care",
  description:
    "Delivered my baby here and had an amazing experience. The OB-GYN team was supportive and knowledgeable, and postnatal care was exceptional. They even provided lactation support and newborn essentials. Highly recommend!",
  rating: 5.0,
  serviceRatings: {
    "Staff Friendliness": 5.0,
    Cleanliness: 5.0,
    "Wait Time": 4.8,
    "Doctor Interaction": 5.0,
  },
  sentiment: "positive",
  createdAt: new Date("04/05/2025"),
}
  ],
  education: [
    
      {
  name: "Emily Johnson",
  title: "Fantastic teachers and curriculum",
  description:
    "Riverside has exceeded our expectations. The teachers are dedicated and create an engaging learning environment. My son looks forward to going to school every day. The classrooms are well-equipped and clean. Communication through the parent portal is also very efficient.",
  rating: 4.8,
  serviceRatings: {
    "Teaching Quality": 5.0,
    "Infrastructure": 4.5,
    "Communication": 4.8,
    "Support Services": 4.7,
  },
  sentiment: "positive",
  createdAt: new Date("01/10/2025"),
},
{
  name: "Kunal Desai",
  title: "Good academics, could improve communication",
  description:
    "We are happy with the academic performance and the commitment of the teachers. The science labs are top-notch. However, the school sometimes fails to inform parents about last-minute changes in schedule or events. With better communication, this would be a 5-star school.",
  rating: 4.2,
  serviceRatings: {
    "Teaching Quality": 4.7,
    "Infrastructure": 4.6,
    "Communication": 3.5,
    "Support Services": 4.1,
  },
  sentiment: "positive",
  createdAt: new Date("01/18/2025"),
},
{
  name: "Tanya Lee",
  title: "Mixed feelings",
  description:
    "The school looks great on paper and has impressive infrastructure, but our experience was inconsistent. Some teachers are excellent, while others lack classroom control. The administration is responsive but takes time to act. It's not bad, but not amazing either.",
  rating: 3.6,
  serviceRatings: {
    "Teaching Quality": 3.2,
    "Infrastructure": 4.5,
    "Communication": 3.0,
    "Support Services": 3.8,
  },
  sentiment: "neutral",
  createdAt: new Date("02/02/2025"),
},
{
  name: "Michael Grant",
  title: "Very disappointed",
  description:
    "We enrolled our daughter based on good reviews but had a poor experience. Teachers seemed overworked and unmotivated. Facilities look modern but aren’t well maintained. Communication was delayed and unclear. We eventually transferred to another school.",
  rating: 2.1,
  serviceRatings: {
    "Teaching Quality": 2.0,
    "Infrastructure": 2.5,
    "Communication": 1.8,
    "Support Services": 2.0,
  },
  sentiment: "negative",
  createdAt: new Date("02/18/2025"),
},
   {
  name: "Sara Malik",
  title: "Wonderful support for special needs",
  description:
    "Riverside has done a great job supporting my son, who has learning challenges. The special educators and support staff are kind, qualified, and always available. The regular teachers collaborate well with the special education team. Truly inclusive and respectful learning space.",
  rating: 4.9,
  serviceRatings: {
    "Teaching Quality": 4.8,
    "Infrastructure": 4.6,
    "Communication": 4.9,
    "Support Services": 5.0,
  },
  sentiment: "positive",
  createdAt: new Date("03/01/2025"),
}
  ],
  retail: [
    {
  name: "Jessica Ramos",
  title: "Great shopping experience!",
  description:
    "Bought a wireless headset from TechNova. The staff helped me choose the right model for my needs. Checkout was smooth, and they even helped me register for a warranty. A very pleasant in-store experience.",
  rating: 4.7,
  serviceRatings: {
    "Customer Support": 4.8,
    "Product Availability": 4.6,
    "Billing": 4.9,
    "Staff Behavior": 5.0,
  },
  sentiment: "positive",
  createdAt: new Date("01/15/2025"),
},
{
  name: "Amit Kapoor",
  title: "Good variety, average service",
  description:
    "Found exactly the gaming laptop I wanted, but it took a while for someone to assist me. Checkout took longer than expected, though the pricing and selection were excellent.",
  rating: 3.9,
  serviceRatings: {
    "Customer Support": 3.2,
    "Product Availability": 4.7,
    "Billing": 3.5,
    "Staff Behavior": 4.0,
  },
  sentiment: "neutral",
  createdAt: new Date("01/22/2025"),
},
{
  name: "Linda Green",
  title: "Billing issues and unhelpful support",
  description:
    "Ordered a smartwatch online, but was double-charged. Reaching customer support was a nightmare—long hold times and no clear resolution. Product itself was fine once I finally got it.",
  rating: 2.4,
  serviceRatings: {
    "Customer Support": 1.5,
    "Product Availability": 4.0,
    "Billing": 1.0,
    "Staff Behavior": 3.0,
  },
  sentiment: "negative",
  createdAt: new Date("02/03/2025"),
},
{
  name: "Carlos Mendes",
  title: "Superb staff and smooth purchase",
  description:
    "Purchased a smart refrigerator during their weekend sale. The staff was very courteous and explained all the features well. They even arranged a quick delivery. Billing was accurate and transparent.",
  rating: 5.0,
  serviceRatings: {
    "Customer Support": 5.0,
    "Product Availability": 4.9,
    "Billing": 5.0,
    "Staff Behavior": 5.0,
  },
  sentiment: "positive",
  createdAt: new Date("02/10/2025"),
},
{
  name: "Nina Chow",
  title: "Decent store, poor communication",
  description:
    "The store had good deals on kitchen appliances, but there was a lot of confusion with a return I made. Staff seemed unsure about return policies, and I had to make multiple visits to get my refund.",
  rating: 3.2,
  serviceRatings: {
    "Customer Support": 2.5,
    "Product Availability": 4.2,
    "Billing": 3.0,
    "Staff Behavior": 3.0,
  },
  sentiment: "neutral",
  createdAt: new Date("02/18/2025"),
}
  ]
};

export const getReviewMockData = (
  productType: string,
  productId: any
) => {
  return reviews[productType]
    ? reviews[productType].map((review) => {
        return {
          ...review,
          productId,
        };
      })
    : null;
};
