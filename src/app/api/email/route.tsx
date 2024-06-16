import { Resend } from "resend";
import { NextRequest, NextResponse } from "next/server";

const resend = new Resend(process.env.API_KEY_RESEND);

export default async function POST(request: NextRequest) {
  const { firstName, lastName, email, message } = await request.json();
  resend.emails.send({
    from: "onboarding@resend.dev",
    to: "abraralrawi997@gmail.com",
    subject: `New message request from <h3 className='underline text-teal-700'> ${firstName}${lastName} </h3>`,
    html: `
      <h1 className='text-2xl font-semibold font-primary'>Welcome,</h1>
      <p>Name : ${firstName} ${lastName} </p>
      <p>Email : ${email} </p>
      <p>Message : ${message} </p>
      `,
  });
  return NextResponse.json({ firstName, lastName, email, message });
}
