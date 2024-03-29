import { ClerkProvider } from '@clerk/nextjs';
import { Inter, Montserrat } from 'next/font/google';
import Header from '/components/Header';
import './globals.css';


const inter = Montserrat({ subsets: ['latin'] })

export const metadata = {
  title: 'Destined',
  description: 'From Our House to the UnHoused',
}

export default function RootLayout({ children }) {
  return (
        <ClerkProvider>
          <html lang="en">
            <body className={inter.className}>
              <Header/>
                {children}
            </body>
          </html>
        </ClerkProvider>
       
  )
}
