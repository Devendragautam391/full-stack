const Left = () => {
    return (
        <div className="Text-left">
            <h1>Shaping Identities for Those Ready to Rise Above the Noise.</h1>
            <input type="checkbox" id="form-toggle"/>
            <label htmlFor="form-toggle" className="contact-btn">CONTACT ME</label>
            <div className="overlay">
                <div className="contact-card">
                    <label htmlFor="form-toggle" className="close">&times;</label>
                    <form action="https://formspree.io/f/mlgojypb" method="POST">
                        <div className="input-group">
                            <label htmlFor="firstName">First Name:</label>
                            <input name="firstName" id="firstName"
                                   type="text" autoComplete="given-name"/>

                        </div>
                        <div className="input-group">
                            <label htmlFor="email">Email:</label>
                            <input name="email" id="email"
                                   type="email" autoComplete="off"/>
                        </div>
                        <div className="input-group">
                            <label htmlFor="message">Message</label>
                            <input name="message" id="message" type="text" autoComplete="off"/>
                        </div>
                        <button type="submit" className="submit-btn">SUBMIT</button>
                    </form>
                </div>
            </div>
        </div>
    );
};
export default Left;
