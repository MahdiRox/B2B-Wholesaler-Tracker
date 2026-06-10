import { query, mutation } from "./_generated/server";
import { v } from "convex/values";

export const listIncoming = query({
  args: {},
  handler: async (ctx) => {
    // Orders sorted by creation time implicitly using order("desc") inside Convex
    return await ctx.db.query("orders").order("desc").collect();
  },
});

export const updateStatus = mutation({
  args: {
    orderId: v.id("orders"),
    newStatus: v.union(
      v.literal("Pending"),
      v.literal("Validated"),
      v.literal("In Delivery"),
      v.literal("Paid")
    ),
  },
  handler: async (ctx, args) => {
    // Atomic status transition ensures strict integrity under concurrent modifications
    await ctx.db.patch(args.orderId, { status: args.newStatus });
  },
});
