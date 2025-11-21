import { NextResponse } from "next/server";

let users = [{ id: 1, username: "erwin", password: "123456" }];

// GET → Ambil semua user
export async function GET() {
  return NextResponse.json({
    success: true,
    data: users,
  });
}

// POST → Tambah user baru (register)
export async function POST(req) {
  const body = await req.json();

  const newUser = {
    id: users.length + 1,
    username: body.username,
    password: body.password,
  };

  users.push(newUser);

  return NextResponse.json({
    success: true,
    data: newUser,
  });
}
