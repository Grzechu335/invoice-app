import Providers from '@/providers/Providers'
import Sidebar from '../components/organisms/Sidebar'
import './globals.css'
import { League_Spartan } from 'next/font/google'

const leagueSpartan = League_Spartan({
    weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
    subsets: ['latin'],
    variable: '--font-league',
})

export const metadata = {
    title: 'Invoice App',
    description: 'Invoice Web App by Grzegorz Skrabucha',
}

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="en">
            <body className={leagueSpartan.variable}>
                <Providers>
                    <Sidebar />
                    {children}
                </Providers>
            </body>
        </html>
    )
}
