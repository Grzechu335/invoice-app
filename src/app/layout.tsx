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
    other: {
        viewport:
            'width=device-width, initial-scale-1, maximum-scale=1, user-scalable=0',
    },
}

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="en">
            <body
                className={`${leagueSpartan.variable} overflow-x-hidden scrollbar-none`}
            >
                <Providers>
                    <Sidebar />
                    <div className="grid md:grid-cols-12">
                        <div className="md:col-start-3 px-6 md:px-0 md:col-end-11 xl:mt-[77px] md:mt-[140px] mt-[100px] pb-10">
                            {children}
                        </div>
                    </div>
                </Providers>
            </body>
        </html>
    )
}
