import { EmailFormData } from "@/app/components/utils/helpers";
import { sendMail } from "../../components/utils/nodemailer";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest, res: NextResponse) {
  try {
    await sendMail((await req.json()) as EmailFormData);
    return NextResponse.json({ success: true }, { status: 200 });
  } catch (error) {
    console.error("Error sending email:", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
