import Router from 'next/router'
import { useEffect } from 'react';
import Landing from './landing';

const MyCustom404Page = (): JSX.Element => {
    useEffect(() => {
        Router.push('/') 
    }, [])

    return <Landing />
}

export default MyCustom404Page
