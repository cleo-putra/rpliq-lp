import { Rum_Raisin } from "next/font/google";
import { NextResponse, NextRequest } from "next/server";
const nodemailer = require("nodemailer");

// Handles POST requests to /api

export async function POST(request) {
  const username = process.env.MY_EMAIL;
  const password = process.env.MY_PASSWORD;
  const myEmail = process.env.MY_EMAIL;

  const formData = await request.formData();
  const firstname = formData.get("firstname");
  const lastname = formData.get("lastname");
  const topic = formData.get("topic");
  const phone = formData.get("phone");
  const email = formData.get("email");
  const message = formData.get("message");

  // create transporter object
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: username,
      pass: password,
    },
  });

  try {
    const mail = await transporter.sendMail({
      from: username,
      to: myEmail,
      replyTo: email,
      subject: `RPLiQ New Leads ${email}`,
      html: `
            <p>Name: ${firstname} ${lastname}  </p>
            <p>Email: ${email} </p>
            <p>Topic: ${topic} </p>
            <p>Phone: ${phone} </p>
            <p>Message: ${message} </p>
            `,
    });

    return NextResponse.json({ message: "Success: email was sent" });
  } catch (error) {
    console.log(error);
    NextResponse.status(500).json({ message: "COULD NOT SEND MESSAGE" });
  }
}