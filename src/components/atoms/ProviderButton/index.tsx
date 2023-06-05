'use client'
import { ClientSafeProvider, signIn } from 'next-auth/react'
import React from 'react'

type ProviderButtonProps = {
    provider: ClientSafeProvider
}

const ProviderButton: React.FC<ProviderButtonProps> = ({ provider }) => {
    return (
        <div key={provider.name}>
            <button onClick={() => signIn(provider.id, { callbackUrl: '/' })}>
                Sign in with {provider.name}
            </button>
        </div>
    )
}

export default ProviderButton
