import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: [true, "Username is required"],
      lowercase: true,
      index: true,
      minlength: [
        3,
        "Username must be at least 3 characters long",
      ],
      maxlength: [
        30,
        "Username must be at most 30 characters long",
      ],
    },
    email: {
      type: String,
      required: [true, "Email is required"],
      unique: true,
      lowercase: true,
      match: [
        /.+@.+\..+/,
        "Please enter a valid email address",
      ],
    },
    password: {
      type: String,
      required: [true, "Password is required"],
      minlength: [
        8,
        "Password must be at least 8 characters long",
      ],
    },
  },
  { timestamps: true }
);

const reviewSchema = new mongoose.Schema({
  productId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Product",
    required: true,
    index: true,
  },
  name: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  rating: {
    type: Number,
    require: true,
    min: 1,
    max: 5,
  },
  serviceRatings: Map<String, Number>,
  sentiment: {
    type: String,
    enum: ["positive", "neutral", "negative"],
  },
  createdAt: { type: String, default: Date.now },
});
export const categoryServiceMap: Record<string, string[]> =
  {
    restaurant: [
      "Dine-in",
      "Cleanliness",
      "Customer Service",
      "Food Quality",
    ],
    retail: [
      "Customer Support",
      "Product Availability",
      "Billing",
      "Staff Behavior",
    ],
    electronics: [
      "Tech Support",
      "Warranty Service",
      "Product Quality",
    ],
    healthcare: [
      "Staff Friendliness",
      "Cleanliness",
      "Wait Time",
      "Doctor Interaction",
    ],
    education: [
      "Teaching Quality",
      "Infrastructure",
      "Communication",
      "Support Services",
    ],
  };

const productSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
      index: true,
    },
    category: {
      type: String,
      enum: Object.keys(categoryServiceMap),
      required: true,
    },
    name: {
      type: String,
      require: true,
    },
    services: [{ type: String }],
    imageUrl: { type: String },
  },
  { timestamps: true }
);

productSchema.pre("save", function (next) {
  const product = this as any;
  if (!product.services || product.services.length === 0) {
    product.services =
      categoryServiceMap[product.category] || [];
  }
  next();
});

const Product = mongoose.model("Product", productSchema);
const Review = mongoose.model("Review", reviewSchema);
const User = mongoose.model("User", userSchema);

export { Review, Product, User };
