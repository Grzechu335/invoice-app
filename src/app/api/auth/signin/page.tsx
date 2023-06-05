import ProviderButton from '@/components/atoms/ProviderButton'
import { NextPage } from 'next'
import { getProviders } from 'next-auth/react'
import React from 'react'

// @ts-expect-error
const SignIn: NextPage = async () => {
    const providers = await getProviders()
    if (providers)
        return (
            <div>
                {Object.values(providers).map((provider) => (
                    <ProviderButton
                        key={provider.id}
                        provider={provider}
                    />
                ))}
            </div>
        )
}

export default SignIn
