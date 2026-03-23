import { GoogleGenAI } from "@google/genai";
import fs from "fs";
import path from "path";
import dotenv from "dotenv";

dotenv.config();

const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });

const imagesToGenerate = [
  {
    filename: "hero.jpg",
    prompt: "Macro photography of white expanded polyethylene foam (EPE foam) texture. Showing the closed-cell structure, soft and protective material. Bright, clean, white background.",
    aspectRatio: "16:9"
  },
  {
    filename: "product-espuma.jpg",
    prompt: "Rolls of white expanded polyethylene foam in a warehouse. Clean industrial setting, bright lighting.",
    aspectRatio: "4:3"
  },
  {
    filename: "product-piso.jpg",
    prompt: "Beautiful modern interior design, living room with high quality wood laminate flooring. Sunlight streaming through windows, elegant furniture, photorealistic.",
    aspectRatio: "4:3"
  },
  {
    filename: "product-alfombra.jpg",
    prompt: "Close up of high quality, soft, plush wall-to-wall carpeting in a warm beige color. Cozy bedroom setting, inviting texture, photorealistic.",
    aspectRatio: "4:3"
  },
  {
    filename: "uso-piso.jpg",
    prompt: "Construction close-up showing the installation of wood laminate flooring. A layer of white expanded polyethylene foam underlayment is visible beneath the wooden planks. Professional installation, clear layers.",
    aspectRatio: "4:3"
  },
  {
    filename: "uso-embalaje.jpg",
    prompt: "A cardboard shipping box filled with white expanded polyethylene foam sheets protecting a fragile item. Professional packaging, logistics, clean lighting.",
    aspectRatio: "4:3"
  }
];

async function generateImages() {
  const publicDir = path.join(process.cwd(), "public", "images");
  if (!fs.existsSync(publicDir)) {
    fs.mkdirSync(publicDir, { recursive: true });
  }

  for (const img of imagesToGenerate) {
    console.log(`Generating ${img.filename}...`);
    try {
      const response = await ai.models.generateImages({
        model: 'imagen-4.0-generate-001',
        prompt: img.prompt,
        config: {
          numberOfImages: 1,
          outputMimeType: 'image/jpeg',
          aspectRatio: img.aspectRatio as any,
        }
      });

      const base64EncodeString = response.generatedImages?.[0]?.image?.imageBytes;
      if (base64EncodeString) {
        const buffer = Buffer.from(base64EncodeString, "base64");
        fs.writeFileSync(path.join(publicDir, img.filename), buffer);
        console.log(`Saved ${img.filename}`);
      } else {
        console.error(`No image data returned for ${img.filename}`);
      }
    } catch (error) {
      console.error(`Error generating ${img.filename}:`, error);
    }
  }
}

generateImages();
