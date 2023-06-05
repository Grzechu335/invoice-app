'use client'
import { ClientSafeProvider, signIn } from 'next-auth/react'
import React from 'react'
import CustomButton from '../CustomButton'

type ProviderButtonProps = {
    provider: ClientSafeProvider
}

const ProviderButton: React.FC<ProviderButtonProps> = ({ provider }) => {
    const signInHandle = () => {
        signIn(provider.id, { callbackUrl: '/' })
    }
    return (
        <CustomButton
            variant={2}
            onClick={signInHandle}
        >
            Sign In with {provider.name}
        </CustomButton>
    )
}

export default ProviderButton
