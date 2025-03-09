* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    font-family: Arial, sans-serif;
    line-height: 1.6;
}

nav {
    background: #003366;
    color: white;
    padding: 1rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.nav-links {
    display: flex;
    list-style: none;
}

.nav-links li {
    margin-left: 2rem;
}

.nav-links a {
    color: white;
    text-decoration: none;
}

.hero {
    background: linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)),
                url('images/campus.jpg');
    height: 80vh;
    background-size: cover;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    color: white;
}

.about-content {
    display: flex;
    align-items: center;
    padding: 2rem;
    gap: 2rem;
}

.about-content img {
    width: 50%;
    border-radius: 10px;
}

.course-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 2rem;
    padding: 2rem;
}

.course-card {
    background: #f4f4f4;
    padding: 1.5rem;
    border-radius: 10px;
    text-align: center;
}

.contact {
    padding: 2rem;
    background: #f4f4f4;
}

form {
    max-width: 600px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    gap: 1rem;
}

input, textarea {
    padding: 0.5rem;
    border: 1px solid #ddd;
    border-radius: 5px;
}

button {
    background: #003366;
    color: white;
    padding: 0.5rem;
    border: none;
    border-radius: 5px;
    cursor: pointer;
}

footer {
    background: #003366;
    color: white;
    text-align: center;
    padding: 1rem;
}

@media (max-width: 768px) {
    .nav-links {
        display: none;
    }
    
    .about-content {
        flex-direction: column;
    }
    
    .about-content img {
        width: 100%;
    }
}
