/**
 * Contact form delivery.
 *
 * The access key is public by design — it identifies the destination mailbox
 * without revealing it, so the address never appears in the page or the repo.
 * Override per-environment with NEXT_PUBLIC_CONTACT_KEY if it is ever rotated.
 */
export const CONTACT_ENDPOINT = "https://api.web3forms.com/submit";
export const CONTACT_ACCESS_KEY =
  process.env.NEXT_PUBLIC_CONTACT_KEY ?? "188c9c6f-b9d4-4714-9b65-ab2693723082";
