type ContactPayload = {
  name?: unknown;
  email?: unknown;
  message?: unknown;
};

export async function POST(request: Request) {
  let payload: ContactPayload;

  try {
    payload = await request.json() as ContactPayload;
  } catch {
    return Response.json({ error: "Request body must be valid JSON." }, { status: 400 });
  }

  if (
    typeof payload.name !== "string" ||
    typeof payload.email !== "string" ||
    typeof payload.message !== "string" ||
    !payload.name.trim() ||
    !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(payload.email) ||
    !payload.message.trim()
  ) {
    return Response.json({ error: "Provide a name, valid email address, and message." }, { status: 400 });
  }

  return Response.json(
    { error: "Contact delivery is not configured. Please email hello@example.com directly." },
    { status: 503 },
  );
}
