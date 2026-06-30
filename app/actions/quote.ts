"use server";

import { PrismaClient } from "@prisma/client";
import { PrismaPg } from "@prisma/adapter-pg";
import { redirect } from "next/navigation";

const adapter = new PrismaPg({ connectionString: process.env.DATABASE_URL });
const prisma = new PrismaClient({ adapter });

export async function submitQuoteRequest(formData: FormData) {
  const customerName = formData.get("customerName") as string;
  const phone = formData.get("phone") as string;
  const email = formData.get("email") as string;
  const address = formData.get("address") as string;
  const notes = formData.get("notes") as string;
  const productId = formData.get("productId") as string;

  await prisma.quoteRequest.create({
    data: {
      customerName,
      phone,
      email: email || null,
      address: address || null,
      notes: notes || null,
      items: {
        create: [
          {
            productId,
            quantity: 1,
          },
        ],
      },
    },
  });

  redirect("/quote-request/success");
}
