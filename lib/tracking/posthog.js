import posthog from 'posthog-js';

export async function newUser(
    username,
    email,
    password
) {
    posthog.capture(
        'newUser',
        {
            username,
            email,
            password
        }
    );

}