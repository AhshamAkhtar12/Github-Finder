document.getElementById('searchBtn').addEventListener('click', function() {
    const username = document.getElementById('username').value;
    const url = `https://api.github.com/users/${username}`;

    fetch(url)
        .then(response => {
            if (!response.ok) {
                throw new Error('User not found');
            }
            return response.json();
        })
        .then(data => {
            const userInfo = `
                <h2>${data.login}</h2>
                <img src="${data.avatar_url}" alt="${data.login}" width="100">
                <p><strong>Followers:</strong> ${data.followers}</p>
                <p><strong>Public Repos:</strong> ${data.public_repos}</p>
                <p><strong>Bio:</strong> ${data.bio || 'No bio available.'}</p>
                <a href="${data.html_url}" target="_blank">View Profile</a>
            `;
            document.getElementById('userInfo').innerHTML = userInfo;
        })
        .catch(error => {
            document.getElementById('userInfo').innerHTML = `<p style="color: red;">${error.message}</p>`;
        });
});
