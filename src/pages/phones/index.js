import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { getPhones } from '../../selectors'
import { fetchPhones } from '../../store/actions'

export default () => {

    const dispatch = useDispatch();
    const phones = useSelector(state => getPhones(state))

    console.log('PHONES', phones)

    useEffect(() => {
        dispatch(fetchPhones())
    }, [dispatch])

    return (
        <div>Phones</div>
    )
}