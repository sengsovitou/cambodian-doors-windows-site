import { PrismaClient } from "@prisma/client";
import { PrismaPg } from "@prisma/adapter-pg";

const adapter = new PrismaPg({ connectionString: process.env.DATABASE_URL });
const prisma = new PrismaClient({ adapter });

export default async function Home() {
  const products = await prisma.product.findMany({
    include: { category: true },
  });

  return (
    <main style={{ padding: "2rem" }}>
      <h1>Our Products</h1>
      {products.map((product) => (
        <div key={product.id} style={{ marginBottom: "1rem" }}>
          <h2>{product.name}</h2>
          <p>{product.description}</p>
          <p>Category: {product.category.name}</p>
        </div>
      ))}
    </main>
  );
}
