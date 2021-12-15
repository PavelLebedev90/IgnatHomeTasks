import React from 'react'
import {render} from '@testing-library/react'
import {Message} from '../Message'

const messageData = {
    avatar:   'https://sun9-74.userapi.com/Ph-WiuOtF985il9AvN9JqiCWedmHtSGSSTXrSA/ltEB2Z2-YO4.jpg',
    name: 'Pavel ',
    message: 'Learning, learning and learning',
    time: '11:00',
}

test('find text "Pavel"', () => {
    const {getByText} = render((
        <Message
            tasks={messageData}
        />
    ))
    const linkElement = getByText(/Pavel/i)
    expect(linkElement).toBeInTheDocument()
})
test('find text "Learning, learning and learning"', () => {
    const {getByText} = render((
        <Message
            tasks={messageData}
        />
    ))
    const linkElement = getByText(/Learning, learning and learning/i)
    expect(linkElement).toBeInTheDocument()
})
test('find text "11:00"', () => {
    const {getByText} = render((
        <Message
            tasks={messageData}
        />
    ))
    const linkElement = getByText(/11:00/i)
    expect(linkElement).toBeInTheDocument()
})
