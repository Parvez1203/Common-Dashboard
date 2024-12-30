import './globals.css'

export const metadata = {
  title: 'Project Setup',
  description: 'Description for your project',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}