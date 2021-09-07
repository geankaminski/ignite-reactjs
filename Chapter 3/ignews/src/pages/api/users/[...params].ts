import { NextApiRequest, NextApiResponse } from "next"

// eslint-disable-next-line import/no-anonymous-default-export
export default (request: NextApiRequest, response: NextApiResponse) => {
    console.log(request.query)
    
    const users = [
        { id: 1, name: 'Gean'},
        { id: 2, name: 'Pablo'},
        { id: 3, name: 'Kaminski'},
    ]

    return response.json(users)
}