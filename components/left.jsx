const Left = () => {
    return (
        <div className="Text-left">
            <h1>Shaping Identities for Those Ready to Rise Above the Noise.</h1>
            <input type="checkbox" id="form-toggle"/>
            <label htmlFor="form-toggle" className="contact-btn">CONTACT ME</label>
            <div className="overlay">
                <div className="contact-card">
                    <label htmlFor="form-toggle" className="close-btn">&times;</label>
                    <form action="https://formspree.io/f/mlgojypb" method="POST">
                        <div className="input-group">
                            <label htmlFor="name">Name</label>
                            <input type="text" id="name" placeholder="Enter your name"/>
                        </div>
                        <div className="input-group">
                            <label htmlFor="email">Email</label>
                            <input type="email" id="email"/>
                        </div>
                        <div className="input-group">
                            <label htmlFor="message">Message</label>
                            <textarea id="message" rows="1"></textarea>
                        </div>
                        <button type="submit" className="submit-btn">SUBMIT</button>
                    </form>
                </div>
            </div>
        </div>
    );
};
export default Left;
