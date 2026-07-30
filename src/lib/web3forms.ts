/**
 * Web3Forms delivery for the site's contact and partner forms.
 *
 * The access key is public by design — it lives in the client and only names
 * the inbox a submission is delivered to. It is not a secret.
 */
const ACCESS_KEY = '63727f54-3364-4a69-b17d-402963e9bb84';

export type SubmitResult = { ok: true } | { ok: false; error: string };

/**
 * Posts `fields` to Web3Forms. Never throws — a network failure comes back as
 * `ok: false` with a message the form can show the visitor.
 *
 * Pass `botcheck: true` straight through from the honeypot input; Web3Forms
 * drops anything that arrives with it set.
 */
export async function submitToWeb3Forms(
	fields: Record<string, string | boolean>
): Promise<SubmitResult> {
	try {
		const res = await fetch('https://api.web3forms.com/submit', {
			method: 'POST',
			headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
			body: JSON.stringify({ access_key: ACCESS_KEY, from_name: 'OJO website', ...fields })
		});
		const data = await res.json();

		if (res.ok && data.success) return { ok: true };
		return { ok: false, error: data.message || 'We could not send that. Please try again.' };
	} catch {
		return { ok: false, error: 'Could not reach our server. Check your connection and try again.' };
	}
}
