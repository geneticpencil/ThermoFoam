import { GoogleGenAI } from "@google/genai";
import fs from "fs";
import path from "path";
import dotenv from "dotenv";

dotenv.config();

const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });

const imagesToGenerate = [
  {
    filename: "hero.jpg",
    prompt: "Professional product photography of a large roll of white expanded polyethylene foam (EPE foam) used for packaging and flooring underlayment. Clean industrial background, bright studio lighting, high resolution.",
    aspectRatio: "16:9"
  },
  {
    filename: "product-espuma.jpg",
    prompt: "Macro photography of white expanded polyethylene foam (EPE foam) texture. Showing the closed-cell structure, soft and protective material. Bright, clean, white background.",
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
      const response = await ai.models.generateContent({
        model: 'gemini-3.1-flash-image-preview',
        contents: {
          parts: [{ text: img.prompt }],
        },
        config: {
          imageConfig: {
            aspectRatio: img.aspectRatio as any,
          }
        }
      });

      const part = response.candidates?.[0]?.content?.parts?.find(p => p.inlineData);
      if (part && part.inlineData) {
        const buffer = Buffer.from(part.inlineData.data, "base64");
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
