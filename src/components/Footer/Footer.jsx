import './footer.css';
export function Footer() {
    return (
        <footer className="footer-container">
            <div className="footer-column">
                <h3>About Us</h3>
                <p>Learn more.</p>
            </div>
            <div className="footer-column">
                <h3>Services</h3>
                <p>Discover services.</p>
            </div>
            <div className="footer-column">
                <h3>Contact</h3>
                <p>Get in touch.</p>
            </div>
        </footer>
    )
}