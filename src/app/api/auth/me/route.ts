import { NextRequest, NextResponse } from "next/server";
import { verifySessionToken } from "@/lib/auth";

const JWT_SECRET = process.env.JWT_SECRET;
const COOKIE_NAME = "zp_session";

export async function GET(req: NextRequest) {
  const token = req.cookies.get(COOKIE_NAME)?.value;

  if (!token || !JWT_SECRET) {
    return NextResponse.json({ user: null });
  }

  const user = verifySessionToken(token, JWT_SECRET);
  if (!user) {
    const response = NextResponse.json({ user: null });
    response.cookies.delete(COOKIE_NAME);
    return response;
  }

  return NextResponse.json({
    user: {
      id: user.id,
      first_name: user.first_name,
      last_name: user.last_name,
      username: user.username,
      photo_url: user.photo_url,
    },
  });
}
