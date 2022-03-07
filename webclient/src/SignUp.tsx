import React from 'react'


type User = {
    id: string
    firstName: string
    lastName: string
    avatarURL: string
}

type Props = {
    users: User[]
}

