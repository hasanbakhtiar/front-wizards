import { NextRequest } from "next/server";

export async function GET(request: NextRequest) {
  const products = [
    {
      title: "Wooden Coffee Table",
      price: 120,
      desc: "High-quality oak wood coffee table with a natural finish.",
      status: "available",
    },
    {
      title: "Modern Office Chair",
      price: 85,
      desc: "Ergonomic office chair with adjustable height and back support.",
      status: "available",
    },
    {
      title: "LED Desk Lamp",
      price: 35,
      desc: "Energy-saving LED lamp with flexible neck and touch control.",
      status: "out of stock",
    },
    {
      title: "Wall Art Canvas",
      price: 60,
      desc: "Abstract wall art printed on high-quality canvas material.",
      status: "available",
    },
    {
      title: "Bluetooth Speaker",
      price: 50,
      desc: "Portable speaker with deep bass and 10-hour battery life.",
      status: "available",
    },
  ];
  return new Response(JSON.stringify(products), {
    status: 200,
    headers: { "Content-Type": "application/json" },
  });
}
