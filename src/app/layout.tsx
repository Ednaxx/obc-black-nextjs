import 'bootstrap/dist/css/bootstrap.min.css'
import Provider from './provider'
import Header from './Header'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'BLACK-NextJS',
  description: 'Explore our products!'
}

export default function RootLayout( { children }: { children: React.ReactNode } ) {
    return (
      <html lang="en">
        <body>
            <Provider>
              <Header />
              {children}
            </Provider>
        </body>
      </html>
    )
  }