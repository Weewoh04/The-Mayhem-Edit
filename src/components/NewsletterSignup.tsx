export function NewsletterSignup() {
  return (
    <section className="bg-blush px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-3xl text-center">
        <h2 className="font-serif text-4xl font-semibold text-charcoal">Get the Weekly Edit</h2>
        <p className="mt-3 text-charcoal/75">New gift ideas, outfit formulas, and Amazon finds delivered without the endless scrolling.</p>
        {/* TODO: Connect this form to Kit, Mailchimp, Beehiiv, or another email provider. */}
        <form className="mt-8 grid gap-3 sm:grid-cols-[1fr_auto]">
          <label className="sr-only" htmlFor="newsletter-email">Email address</label>
          <input id="newsletter-email" name="email" type="email" placeholder="you@example.com" className="border border-line bg-paper px-4 py-3 text-charcoal focus:outline-none focus:ring-2 focus:ring-rose" />
          <button type="button" className="bg-charcoal px-6 py-3 text-sm font-bold text-paper hover:bg-rose focus:outline-none focus:ring-2 focus:ring-rose">Subscribe</button>
        </form>
        <p className="mt-3 text-xs text-charcoal/60">No spam. Unsubscribe anytime.</p>
      </div>
    </section>
  );
}
