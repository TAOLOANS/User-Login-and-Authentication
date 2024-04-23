// Example frontend code for user login and authentication
async function login(email, password) {
    try {
        const response = await fetch('https://taoloans.com/api/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                email: email,
                password: password,
            }),
        });
        const data = await response.json();
        // Handle login response
        return data;
    } catch (error) {
        console.error('Error logging in:', error);
        return null;
    }
}
