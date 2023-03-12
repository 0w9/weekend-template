/*
  This is an example of a serverless function. It can be used for anything, for example
  generating AI responses.

  It shows how to integrate the request body but also how to use the posthog tracking library.
  You can modify the events in /lib/tracking/posthog.js and then import them in your pages
*/

import { NextApiRequest, NextApiResponse } from 'next'
import { newUser } from '../../lib/tracking/posthog'
import NextCors from 'nextjs-cors';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {

  // Handle CORS errors
  await NextCors(req, res, {
    methods: ['GET', 'HEAD', 'PUT', 'PATCH', 'POST', 'DELETE'],
    origin: '*',
    optionsSuccessStatus: 200, 
  });

  // Get the details of the request's JSON body
  const { username, email, password } = req.body

  // Track the event
  await newUser(username, email, password)

  // Some more logic here

  // Return the response
  res.status(200).json({
    message: 'User created',
    userDetails:
      {
        username,
        email,
        password
      }
  })
}