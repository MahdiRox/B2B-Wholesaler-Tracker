import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";

export default defineSchema({
  products: defineTable({
    name: v.string(),
    currentStock: v.number(),
    priceDA: v.number(),
    SKU: v.string(),
  }),
  orders: defineTable({
    clientName: v.string(),
    status: v.union(
      v.literal("Pending"),
      v.literal("Validated"),
      v.literal("In Delivery"),
      v.literal("Paid")
    ),
    totalAmountDA: v.number(),
    items: v.array(
      v.object({
        productId: v.id("products"),
        quantity: v.number(),
      })
    ),
  }),
});
