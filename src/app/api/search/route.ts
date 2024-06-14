import { env } from "process";

import { EmissionFactorSearchResult } from "~/app/types";

type Payload = {
  query: string;
};

export async function POST(request: Request) {
  const payload = await request.json() as Payload;

  if (!payload?.query) {
    //return new Response("Query is required", { status: 400 });
    return Response.json({ error: "No query provided" });
  }

  const response = await fetch(
    `https://api.climatiq.io/data/v1/search?query=${payload.query}&data_version=12.12`,
    {
      method: "GET",
      headers: {
        Authorization: `Bearer ${env.CLIMATIQ_API_KEY}`,
      },
    }
  );

  const data = (await response.json()) as EmissionFactorSearchResult;

  console.log(data);

  if (!data) {
    return Response.json({ error: "No results found" });
  }

  return Response.json(data);

}