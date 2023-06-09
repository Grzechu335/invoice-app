import ProviderButton from '@/components/atoms/ProviderButton'
import { getProviders } from 'next-auth/react'
import Image from 'next/image'
import LogoImage from 'public/assets/logo.svg'

export const dynamic = 'force-dynamic'

const SignIn = async () => {
    const providers = await getProviders()
    if (providers)
        return (
            <div className="fixed inset-0 flex flex-col items-center justify-center w-screen h-screen bg-color-12 ">
                <div className="grid w-3/4 gap-6 md:w-1/2 place-content-center">
                    <div className="relative w-[80px] h-[80px] mx-auto">
                        <Image
                            src={LogoImage}
                            alt="logo"
                            fill
                        />
                    </div>
                    {Object.values(providers).map((provider) => (
                        <ProviderButton
                            key={provider.id}
                            provider={provider}
                        />
                    ))}
                </div>
            </div>
        )
}

export default SignIn
