import { query, mutation } from "./_generated/server";
import { v } from "convex/values";

export const list = query({
  args: {},
  handler: async (ctx) => {
    return await ctx.db.query("products").collect();
  },
});

export const updateStock = mutation({
  args: { productId: v.id("products"), newStock: v.number() },
  handler: async (ctx, args) => {
    // Basic atomic stock update
    await ctx.db.patch(args.productId, { currentStock: args.newStock });
  },
});
