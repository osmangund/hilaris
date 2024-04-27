import localFont from "next/font/local"

export const ClashDisplay = localFont({
  src: [
    {
      path: "../../public/fonts/ClashDisplay/ClashDisplay-Medium.otf",
      weight: "500",
      style: "normal",
    },
    {
      path: "../../public/fonts/ClashDisplay/ClashDisplay-Bold.otf",
      weight: "800",
      style: "normal",
    },
    {
      path: "../../public/fonts/ClashDisplay/ClashDisplay-Semibold.otf",
      weight: "700",
      style: "normal",
    },
    {
      path: "../../public/fonts/ClashDisplay/ClashDisplay-Regular.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../public/fonts/ClashDisplay/ClashDisplay-Light.otf",
      weight: "300",
      style: "normal",
    },
    {
      path: "../../public/fonts/ClashDisplay/ClashDisplay-Extralight.otf",
      weight: "200",
      style: "normal",
    },
  ],
  variable: "--font-clashdisplay",
})
