import { Request, Response } from "express";
import {
  User,
  Product,
  Review,
} from "../models/data-model";

async function seedDatas(
  req: Request,
  res: Response
): Promise<void> {
  try {
    await Review.deleteMany();
    await Product.deleteMany();
    await User.deleteMany();
    console.log("After delete");
    const user1 = await User.create({
      username: "john_doe",
      email: "john@example.com",
      password: "password1",
    });

    const ABCHotel = await Product.create({
      userId: user1._id,
      category: "restaurant",
      name: "ABC Hotel",
      description: "ABC Hotel",
      location: "Cary, North Carolina",
      services: [
        "Dine-in",
        "Cleanliness",
        "Customer Service",
        "Food Quality",
      ],
    });

    await Review.create([
      {
        productId: ABCHotel._id,
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
        productId: ABCHotel._id,
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
        productId: ABCHotel._id,
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
        productId: ABCHotel._id,
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
        productId: ABCHotel._id,
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
        productId: ABCHotel._id,
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
        productId: ABCHotel._id,
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
        productId: ABCHotel._id,
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
        productId: ABCHotel._id,
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
    ]);

    const OSWatch = await Product.create({
      userId: user1._id,
      category: "electronics",
      name: "Omega Seamaster Watch",
      description: "Omega Seamaster Watch",
      location: "Raleigh, North Carolina",

      services: [
        "Design",
        "Durability",
        "Customer Service",
        "Value for Money",
      ],
    });

    await Review.create([
      {
        productId: OSWatch._id,
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
        productId: OSWatch._id,
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
        productId: OSWatch._id,
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
        productId: OSWatch._id,
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
        productId: OSWatch._id,
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
        productId: OSWatch._id,
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
        productId: OSWatch._id,
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
        productId: OSWatch._id,
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
    ]);

    res.status(201).redirect("/api/user");
  } catch (error: any) {
    res.status(400).json({ error: error.message });
  }
}

export default seedDatas;
