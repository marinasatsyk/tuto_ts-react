// import * as React from 'react';
import { FC } from 'react'

interface Props {
    name: string;
    age: number;
    email?: string
    // getName: (name: string) => string
}

// export function Person({name, age, email}: Props) {
export const Person: FC<Props> = ({ name, age, email }) => {
    return (
        <>
            <div>
                {name}
            </div>
            <div>
                {age}
            </div>
            <div>
                {email}
            </div>
        </>
    );
}
