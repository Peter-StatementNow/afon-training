"use server";

import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { GATE_COOKIE, gateToken } from "@/lib/site-gate";

export type GateState = { error: string | null };

export async function unlock(
  _prev: GateState,
  formData: FormData,
): Promise<GateState> {
  const password = process.env.SITE_PASSWORD;
  const attempt = String(formData.get("password") ?? "");
  const next = String(formData.get("next") ?? "/");

  if (!password || attempt !== password) {
    return { error: "That password isn't right. Please check it and try again." };
  }

  (await cookies()).set(GATE_COOKIE, await gateToken(password), {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    path: "/",
    maxAge: 60 * 60 * 24 * 30,
  });

  redirect(next.startsWith("/") && !next.startsWith("//") ? next : "/");
}
