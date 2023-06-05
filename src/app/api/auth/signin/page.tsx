import ProviderButton from '@/components/atoms/ProviderButton'
import { NextPage } from 'next'
import { getProviders } from 'next-auth/react'
import React from 'react'
import LogoImage from 'public/assets/logo.svg'
import Image from 'next/image'

// @ts-expect-error
const SignIn: NextPage = async () => {
    const providers = await getProviders()
    if (providers)
        return (
            <div className="fixed top-0 bottom-0 left-0 right-0 flex flex-col items-center justify-center w-screen h-screen">
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
