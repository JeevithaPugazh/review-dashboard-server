import { Request, Response } from "express";
import {User,Product,Review} from "../models/data-model";


async function seedDatas(
  req: Request,
  res: Response
): Promise<void> {
  try {
    await Review.deleteMany();
    await Product.deleteMany();
    await User.deleteMany();
    const user = await User.create(
      {
        username: "john_doe",
        email: "john@example.com",
        password: "password1",
      });

    const product = await Product.create({
        userId : user._id,
        category : "restaurant",
        name : "ABC Hotel",
        services : ["Dine-in", "Cleanliness", "Customer Service", "Food Quality"],
        imageUrl : "./images/ABCHotel.jpg"
    })  
      
    await Review.create([{
            productId : product._id,
            name:"Amber Smith",
            title:"Excellent food!",
            description:"We dined in the dining room with the seasonal menu. The atmosphere of this restaurant is incredible. Loved the decorations, lighting, and perfect temperature. It’s dinner and a show because watching the perfectly timed execution of courses being served to tables near you at the same exact time is magical. Loved watching the service staff execute to great standards and seeing two people go to a table at a time to clean plates off at the exact same time. Some of the courses weren’t outstanding, but the dessert was by far the best course. The truffles at the end were a sweet touch and we were sent home with a lemon poppy seed muffin to take home!",
            rating: 4.3,
            serviceRatings:{"Dine-in":3.2, "Cleanliness":4, "Customer Service":3.2, "Food Quality":2.5},
            sentiment:"positive",
            createdAt:new Date("11/9/2024")
    },
    {
        productId : product._id,
        name:"Steve Goldberg",
        title:"Very nice food and ambience",
        description:"We had a very important business lunch.The staff was wonderful.One of the staff members noticed that we were both Capricorns born on the same day.The food was great.The atmosphere was warm and inviting.",
        rating: 3.3,
        serviceRatings:{"Dine-in":4.2, "Cleanliness":5, "Customer Service":4.2, "Food Quality":4.5},
        sentiment:"positive",
        createdAt:new Date("17/9/2024")
},
,
    {
        productId : product._id,
        name:"Nadim Kanazi",
        title:"Disapointing food",
        description:"Highly disappointing experience. The food was average at best, and a member of our party received a salad with unwashed lettuce. The staff did not seem to care at all. We didn't receive so much as an apology or even a manager visit to our table in response to the complaint. Overall, not at all a Michelin-star level experience, and definitely not worth $70-100 per person",
        rating: 1,
        serviceRatings:{"Dine-in":1.2, "Cleanliness":3, "Customer Service":2.2, "Food Quality":2.5},
        sentiment:"negative",
        createdAt:new Date("20/10/2024")
}
])
      
    //   ,
    //   {
    //     username: "jane_smith",
    //     email: "jane@example.com",
    //     password: "password2",
    //   },
    //   {
    //     username: "alice_wonder",
    //     email: "alice@example.com",
    //     password: "password3",
    //   },
    // ]);
    res.status(201).redirect("/users");
  } catch (error: any) {
    res.status(400).json({ error: error.message });
  }
}

export default seedDatas