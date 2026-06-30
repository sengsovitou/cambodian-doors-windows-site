"use server";

import { PrismaClient } from "@prisma/client";
import { PrismaPg } from "@prisma/adapter-pg";
import { redirect } from "next/navigation";
import { put } from "@vercel/blob";

const adapter = new PrismaPg({ connectionString: process.env.DATABASE_URL });
const prisma = new PrismaClient({ adapter });

export async function submitQuoteRequest(formData: FormData) {
  const customerName = formData.get("customerName") as string;
  const phone = formData.get("phone") as string;
  const email = formData.get("email") as string;
  const address = formData.get("address") as string;
  const notes = formData.get("notes") as string;
  const productId = formData.get("productId") as string;
  const width = formData.get("width") as string;
  const height = formData.get("height") as string;
  const frameType = formData.get("frameType") as string;
  const glassType = formData.get("glassType") as string;
  const quantity = formData.get("quantity") as string;
  const photo = formData.get("photo") as File;

  let referenceImages: string[] = [];

  if (photo && photo.size > 0) {
    const blob = await put(`quote-photos/${Date.now()}-${photo.name}`, photo, {
      access: "public",
    });
    referenceImages = [blob.url];
  }

  await prisma.quoteRequest.create({
    data: {
      customerName,
      phone,
      email: email || null,
      address: address || null,
      notes: notes || null,
      referenceImages,
      items: {
        create: [
          {
            productId,
            width: width ? parseFloat(width) : null,
            height: height ? parseFloat(height) : null,
            frameType: frameType || null,
            glassType: glassType || null,
            quantity: quantity ? parseInt(quantity) : 1,
          },
        ],
      },
    },
  });

  redirect("/quote-request/success");
}
