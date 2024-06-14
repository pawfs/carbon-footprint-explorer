import { db } from "~/server/db";
import { bookmarks } from "~/server/db/schema";
import { type EmissionFactor } from "~/app/types";


export async function POST(request: Request) {
  const payload = (await request.json()) as EmissionFactor;

  if (!payload) {
    return Response.json({ error: "No payload provided" });
  }

  //console.log(payload);

  // Save the bookmark to the database
  const res = await db.insert(bookmarks).values({
    name: payload.name,
    text: payload,
  });
  console.log(res.rowsAffected>0);
  return Response.json({ success: res.rowsAffected > 0 });
}

// TODO: export async function GET(request: Request) {}

// TODO: export async function DELETE(request: Request) {}