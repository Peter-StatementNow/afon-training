"use client";

import { useActionState } from "react";
import { unlock, type GateState } from "./actions";

const initial: GateState = { error: null };

export default function GateForm({ next }: { next: string }) {
  const [state, action, pending] = useActionState(unlock, initial);

  return (
    <form action={action} className="gate-form">
      <input type="hidden" name="next" value={next} />
      <label htmlFor="password">Password</label>
      <input
        id="password"
        name="password"
        type="password"
        autoComplete="current-password"
        required
        aria-invalid={state.error ? true : undefined}
        aria-describedby={state.error ? "password-error" : undefined}
      />
      {state.error && (
        <p id="password-error" className="gate-error" role="alert">
          {state.error}
        </p>
      )}
      <button className="btn btn-primary" type="submit" disabled={pending}>
        {pending ? "Checking…" : "View the site"}
      </button>
    </form>
  );
}
