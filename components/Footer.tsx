export default function Footer() {
  return (
    <footer
      className="w-full mt-auto"
      style={{ borderTop: '1px solid rgba(229,220,196,0.12)' }}
    >
      <div
        className="
          mx-auto max-w-page
          px-6 md:px-10
          py-6
          flex items-center justify-between
          flex-wrap gap-3
        "
      >
        <span
          className="font-inter font-medium text-[10px] tracking-label uppercase"
          style={{ opacity: 0.55 }}
        >
          Lembert Studio · Berneck
        </span>
        <span
          className="font-fraunces italic text-[11px]"
          style={{ opacity: 0.55 }}
        >
          Est. 2026 · between the Alpstein and the Bodensee
        </span>
      </div>
    </footer>
  )
}
