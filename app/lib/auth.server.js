/**
 * @param {{ email?: string | null }} session
 */
export function assertAllowedEmail(session) {
  const allowlist = process.env.ALLOWED_EMAILS;
  if (!allowlist?.trim()) return;

  const emails = allowlist.split(",").map((e) => e.trim().toLowerCase());
  const userEmail = session.email?.toLowerCase();
  if (!userEmail || !emails.includes(userEmail)) {
    throw new Response("Forbidden", { status: 403 });
  }
}
