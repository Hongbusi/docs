import { Footer as NextraFooter } from 'nextra-theme-docs'

export const Footer = (
  <NextraFooter className="flex-col items-center md:items-start">
    <a
      className="x:focus-visible:nextra-focus flex items-center gap-1"
      target="_blank"
      rel="noreferrer"
      title="Nextra"
      href="https://nextra.site"
    >
      Powered by Nextra
    </a>
    <p className="mt-6 text-xs">
      ©
      {new Date().getFullYear()}
      Hongbusi.
    </p>
  </NextraFooter>
)
