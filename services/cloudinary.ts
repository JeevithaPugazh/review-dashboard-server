// cloudinary.ts
import { v2 as cloudinary } from 'cloudinary';
import { UploadApiResponse} from 'cloudinary';

// Set up configuration
cloudinary.config({
  cloud_name: process.env.CLOUD_NAME!,
  api_key: process.env.API_KEY!,
  api_secret: process.env.API_SECRET!,
});

// Upload function with proper typing
export const uploadToCloudinary = async (
  path: string,
  folder: string
): Promise<{ url: string; public_id: string } | undefined> => {
  try {
    const data: UploadApiResponse = await cloudinary.uploader.upload(path, { folder });
    return { url: data.secure_url, public_id: data.public_id };
  } catch (error: any) {
    console.error("Cloudinary upload error:", error);
  }
};

// Remove function with proper typing
export const removeFromCloudinary = async (public_id: string): Promise<void> => {
  try {
    const result = await cloudinary.uploader.destroy(public_id);
    console.log("Cloudinary deletion result:", result);
  } catch (error: any) {
    console.error("Cloudinary deletion error:", error);
  }
};
