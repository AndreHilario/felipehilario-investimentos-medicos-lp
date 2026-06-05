export const CHECKOUT_URL =
  "https://pay.hotmart.com/I105939596X?_gl=1*11w34no*_gcl_aw*R0NMLjE3NzkzODUwOTQuQ2p3S0NBancycnJRQmhCdUVpd0FhckxXSGJVTmQ5Y2pnTERRa2diR3ZfMVpVNWN1SnlCaDhjUkhPaEFEQjJ1Y3ljSFVBbml5X0NHSnN4b0NqYTBRQXZEX0J3RQ..*_gcl_au*MjM0MzAyMDA0LjE3NzQ2MzE5MTMuMTQxNjU2NTA5OS4xNzc5ODI0MTIzLjE3Nzk4MjQxMjI.*FPAU*MjM0MzAyMDA0LjE3NzQ2MzE5MTM.*_ga*NDM3OTA4OTExLjE3MTc2OTgzMjY.*_ga_GQH2V1F11Q*czE3Nzk5MjIzNDAkbzgzJGcxJHQxNzc5OTIyMzcxJGoyOSRsMCRoMTI2ODE5MTEyOQ..&bid=1779922417253";

export function getCheckoutLinkProps() {
  return {
    href: CHECKOUT_URL,
    target: "_blank",
    rel: "noopener noreferrer",
  };
}
