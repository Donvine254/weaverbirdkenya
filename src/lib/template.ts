export type GarmentItem = {
  type: string;
  quantity: number;
  notes?: string;
  description?: string;
};

export type QuoteEmailData = {
  reference: string;
  orgName: string;
  orgType: string;
  contact: string;
  phone: string;
  email: string;
  pobox?: string;
  town: string;
  neededBy?: string;
  garments: GarmentItem[];
  branding: string[];
  brandingDetails?: string;
  remarks?: string;
};
const LOGO_URL =
  "https://res.cloudinary.com/dipkbpinx/image/upload/v1794649752/weaverbird/Client%20Logos/cf9ktihaemtrygufhxjj.png";

const escapeHtml = (value: string = "") =>
  value.replace(
    /[&<>"']/g,
    (char) =>
      ({
        "&": "&amp;",
        "<": "&lt;",
        ">": "&gt;",
        '"': "&quot;",
        "'": "&#39;",
      })[char] as string,
  );

const formatValue = (value?: string) => (value?.trim() ? escapeHtml(value) : "Not provided");

export const QuoteRequestEmailTemplate = (data: QuoteEmailData) => {
  const garmentRows = data.garments
    .map(
      (garment, index) => `
        <tr style="background-color: ${index % 2 === 0 ? "#ffffff" : "#f7f9f7"};">
          <td style="padding:14px 12px;border-bottom:1px solid #e8ece9;">
            <strong style="color:#243b32;">
              ${escapeHtml(garment.type)}
            </strong>
          </td>
          <td style="padding:14px 12px;text-align:center;border-bottom:1px solid #e8ece9;font-weight:600;color:#173d32;">
            ${garment.quantity}
          </td>
          <td style="padding:14px 12px;border-bottom:1px solid #e8ece9;color:#64748b;">
            ${formatValue(garment.notes)}
          </td>
        </tr>
      `,
    )
    .join("");

  const brandingTags = data.branding.length
    ? data.branding
        .map(
          (item) => `
            <span style="display:inline-block;background:#edf3ef;color:#174b38;padding:7px 12px;border-radius:5px;font-size:12px;font-weight:600;margin:3px;">
              ${escapeHtml(item)}
            </span>
          `,
        )
        .join("")
    : '<span style="color:#64748b;">Not specified</span>';

  return `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>New Quote Request - Weaverbird</title>
</head>

<body style="margin:0;padding:0;background-color:#f1f4f2;font-family:Arial,Helvetica,sans-serif;color:#334155;">

  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="background-color:#f1f4f2;padding:30px 12px;">
    <tr>
      <td align="center">

        <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="max-width:650px;background-color:#ffffff;border-radius:10px;overflow:hidden;">

          <!-- HEADER -->
          <tr>
            <td align="center" style="background-color:#123d32;padding:30px 20px;">
              <img
                src="${LOGO_URL}"
                alt="Weaverbird Garments"
                width="155"
                style="display:block;width:155px;max-width:100%;height:auto;margin:0 auto 15px;"
              />

              <p style="margin:0;color:#dce9df;font-size:11px;letter-spacing:2px;font-weight:bold;">
              WEAVERBIRD  GARMENTS MANUFACTURERS LTD.
              </p>

              <div style="margin-top:20px;">
                <span style="background-color:#ffffff;color:#174b38;padding:8px 15px;border-radius:30px;font-size:11px;font-weight:bold;letter-spacing:1px;">
                  NEW QUOTATION REQUEST
                </span>
              </div>
            </td>
          </tr>

          <!-- INTRO -->
          <tr>
            <td style="padding:30px 30px 15px;">
              <p style="margin:0 0 8px;color:#84918a;font-size:11px;font-weight:bold;letter-spacing:1.5px;">
                INCOMING CUSTOMER ENQUIRY
              </p>

              <h1 style="margin:0 0 12px;color:#173d32;font-size:24px;">
                A new quote request has arrived.
              </h1>

              <p style="margin:0;color:#64748b;font-size:14px;line-height:1.7;">
                A customer has submitted a quotation request through the Weaverbird website. Review the details below and prepare a costed quotation.
              </p>
            </td>
          </tr>

          <!-- REFERENCE CARD -->
          <tr>
            <td style="padding:10px 30px 25px;">
              <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background-color:#f3f6f3;border-left:4px solid #7c2538;border-radius:5px;">
                <tr>
                  <td style="padding:18px 20px;">
                    <p style="margin:0 0 5px;color:#64748b;font-size:10px;font-weight:bold;letter-spacing:1.5px;">
                      QUOTATION REFERENCE
                    </p>
                    <p style="margin:0;color:#173d32;font-size:20px;font-weight:bold;">
                      ${escapeHtml(data.reference)}
                    </p>
                    <p style="margin:7px 0 0;color:#7c2538;font-size:11px;font-weight:bold;">
                      STATUS: AWAITING QUOTATION
                    </p>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- CUSTOMER DETAILS -->
          <tr>
            <td style="padding:0 30px 25px;">
              <h2 style="margin:0 0 15px;color:#173d32;font-size:16px;border-bottom:2px solid #7c2538;padding-bottom:10px;">
                01. Customer & Organisation Details
              </h2>

              <table role="presentation" width="100%" cellpadding="0" cellspacing="0">
                ${[
                  ["Organisation", data.orgName],
                  ["Organisation Type", data.orgType],
                  ["Contact Person", data.contact],
                  ["Phone Number", data.phone],
                  ["Email Address", data.email],
                  ["P.O. Box", data.pobox],
                  ["Delivery Location", data.town],
                  ["Required By", data.neededBy],
                ]
                  .map(
                    ([label, value]) => `
                      <tr>
                        <td width="40%" style="padding:9px 5px;border-bottom:1px solid #edf0ed;color:#84918a;font-size:12px;">
                          ${label}
                        </td>
                        <td style="padding:9px 5px;border-bottom:1px solid #edf0ed;color:#334155;font-size:13px;font-weight:600;">
                          ${formatValue(value)}
                        </td>
                      </tr>
                    `,
                  )
                  .join("")}
              </table>
            </td>
          </tr>

          <!-- GARMENTS -->
          <tr>
            <td style="padding:0 30px 25px;">
              <h2 style="margin:0 0 15px;color:#173d32;font-size:16px;border-bottom:2px solid #7c2538;padding-bottom:10px;">
                02. Garments Required
              </h2>

              <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="border:1px solid #e8ece9;border-collapse:collapse;">
                <thead>
                  <tr style="background-color:#173d32;">
                    <th align="left" style="padding:12px;color:#ffffff;font-size:11px;">GARMENT</th>
                    <th align="center" style="padding:12px;color:#ffffff;font-size:11px;">QTY</th>
                    <th align="left" style="padding:12px;color:#ffffff;font-size:11px;">SIZE / NOTES</th>
                  </tr>
                </thead>
                <tbody>
                  ${garmentRows}
                </tbody>
              </table>

              <p style="margin:10px 0 0;color:#64748b;font-size:11px;">
                Total garment types: ${data.garments.length}
              </p>
            </td>
          </tr>

          <!-- BRANDING -->
          <tr>
            <td style="padding:0 30px 25px;">
              <h2 style="margin:0 0 15px;color:#173d32;font-size:16px;border-bottom:2px solid #7c2538;padding-bottom:10px;">
                03. Branding & Customisation
              </h2>

              <div style="margin-bottom:12px;">
                ${brandingTags}
              </div>

              <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background-color:#f7f9f7;border-radius:6px;">
                <tr>
                  <td style="padding:15px;">
                    <p style="margin:0 0 6px;color:#84918a;font-size:10px;font-weight:bold;letter-spacing:1px;">
                      BRANDING DETAILS
                    </p>
                    <p style="margin:0;color:#334155;font-size:13px;line-height:1.6;">
                      ${formatValue(data.brandingDetails)}
                    </p>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- REMARKS -->
          <tr>
            <td style="padding:0 30px 30px;">
              <h2 style="margin:0 0 15px;color:#173d32;font-size:16px;border-bottom:2px solid #7c2538;padding-bottom:10px;">
                04. Additional Requirements
              </h2>

              <div style="background-color:#fffaf2;border:1px solid #eee5d5;border-radius:6px;padding:16px;">
                <p style="margin:0;color:#475569;font-size:13px;line-height:1.7;white-space:pre-line;">
                  ${formatValue(data.remarks)}
                </p>
              </div>
            </td>
          </tr>

          <!-- ACTION -->
          <tr>
            <td style="padding:0 30px 30px;">
              <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background-color:#123d32;border-radius:7px;">
                <tr>
                  <td style="padding:20px;">
                    <p style="margin:0 0 7px;color:#ffffff;font-size:15px;font-weight:bold;">
                      Action Required
                    </p>
                    <p style="margin:0;color:#dce9df;font-size:12px;line-height:1.7;">
                      Review the customer's requirements, calculate production costs and prepare a detailed quotation for submission.
                    </p>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- FOOTER -->
          <tr>
            <td align="center" style="background-color:#f3f6f3;border-top:1px solid #e5ebe6;padding:25px 20px;">
              <p style="margin:0 0 7px;color:#173d32;font-size:14px;font-weight:bold;">
                WEAVERBIRD GARMENTS MANUFACTURERS LTD.
              </p>

              <p style="margin:0 0 12px;color:#64748b;font-size:11px;">
                Quality Garments. Trusted Craftsmanship.
              </p>

              <p style="margin:0;color:#64748b;font-size:11px;line-height:1.8;">
                <a href="https://weaverbirdkenya.com" style="color:#7c2538;text-decoration:none;">
                  www.weaverbirdkenya.com
                </a>
                <br/>
                +254 722 264 464
              </p>

              <p style="margin:18px 0 0;color:#9aa49e;font-size:10px;">
                This is an automatically generated internal notification.
                <br/>
                © ${new Date().getFullYear()} Weaverbird Garments Manufacturers Ltd.
              </p>
            </td>
          </tr>

        </table>

      </td>
    </tr>
  </table>

</body>
</html>
`;
};
