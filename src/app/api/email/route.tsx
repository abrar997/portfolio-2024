import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_KEY);

export async function POST(request: NextRequest) {
  try {
    const data = await request.json();
    await resend.emails.send({
      from: "Customer <abrarcustomer@resend.dev>",
      to: ["abraralrawi997@gmail.com"],
      subject: "New customer Request from  -- " + data.name + "--",
      html: `
        <p>Name: ${data.name}</p>
        <p>Phone: ${data.phone}</p>
        <p>Email: ${data.email}</p>
        <p>Message: ${data.message}</p>
      `,
    });

    return NextResponse.json({ message: "Message sent successfully", data });
  } catch (error) {
    console.error("Error sending email:", error);
    return NextResponse.json({ error: "Error sending email" }, { status: 500 });
  }
}
