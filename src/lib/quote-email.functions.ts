import { createServerFn } from "@tanstack/react-start";
import { sendEmail } from "./email.server";
import { QuoteRequestEmailTemplate, type QuoteEmailData, type GarmentItem } from "./template";

const BUSINESS_EMAIL = "salesweaverbirdkenya@gmail.com";

export const sendQuoteRequest = createServerFn({
  method: "POST",
})
  .validator((data: QuoteEmailData) => {
    if (
      !data.reference?.trim() ||
      !data.orgName?.trim() ||
      !data.contact?.trim() ||
      !data.phone?.trim() ||
      !data.email?.trim() ||
      !data.town?.trim()
    ) {
      throw new Error("Please complete all required fields.");
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
      throw new Error("Please provide a valid email address.");
    }

    if (!Array.isArray(data.garments) || data.garments.length === 0) {
      throw new Error("Please add at least one garment.");
    }

    for (const garment of data.garments as GarmentItem[]) {
      if (!garment.type?.trim() || !Number.isInteger(garment.quantity) || garment.quantity < 1) {
        throw new Error("Please check your garment quantities.");
      }
    }

    if (!Array.isArray(data.branding)) {
      throw new Error("Invalid branding information.");
    }

    return data;
  })
  .handler(async ({ data }) => {
    try {
      const html = QuoteRequestEmailTemplate(data);

      const result = await sendEmail({
        to: BUSINESS_EMAIL,
        cc: ["sales@weaverbirdkenya.com", "info@weaverbirdkenya.com"],
        replyTo: {
          name: data.contact,
          address: data.email,
        },
        subject: `New Quote Request | ${data.reference} | ${data.orgName}`,
        html,
      });

      console.log("Quote email sent:", result.messageId);

      return {
        success: true,
        reference: data.reference,
      };
    } catch (error) {
      console.error("Quote email failed:", error);
      throw new Error("We could not submit your quote request. Please try again.");
    }
  });
