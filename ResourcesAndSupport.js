// ResourcesAndSupport.js
import React from 'react';
import './styles.css';

const ResourcesAndSupport = () => {
    return (
        <div>
            <header>
                <img src="Logo.svg" alt="Crowd Management Platform Logo" />
                <div>
                    <h1>Resources and Support</h1>
                </div>
            </header>
            <main>
                <section className="guidelines">
                    <h2>Guidelines and Best Practices</h2>
                    <p>Offer resources, guides, and best practices for crowd management and event planning.</p>
                    <div className="content">
                        {/* Placeholder content for guidelines and best practices */}
                        <p>This section provides guidelines and best practices for effective crowd management and event planning. Stay tuned for updates!</p>
                    </div>
                </section>
                <section className="faq">
                    <h2>FAQ Section</h2>
                    <p>Address common questions and concerns related to crowd monitoring and management.</p>
                    <div className="content">
                        {/* Placeholder content for FAQ section */}
                        <p>Explore our FAQ section to find answers to commonly asked questions about crowd monitoring and management.</p>
                    </div>
                </section>
                <section className="support-channels">
                    <h2>Support Channels</h2>
                    <p>Provide contact information for customer support or technical assistance.</p>
                    <div className="content">
                        {/* Placeholder content for support channels */}
                        <p>For customer support or technical assistance, please reach out to our support team at support@example.com.</p>
                    </div>
                </section>
                <section className="community-forum">
                    <h2>Community Forum</h2>
                    <p>Foster a community where users can share experiences, tips, and insights related to crowd monitoring and management.</p>
                    <div className="content">
                        {/* Placeholder content for community forum */}
                        <p>Join our community forum to connect with other users, share experiences, and exchange insights on crowd monitoring and management.</p>
                    </div>
                </section>
                <section className="contact-us">
                    <h2>Contact Us</h2>
                    <p>Include a contact form or contact information for reaching out to the platform administrators.</p>
                    <div className="content">
                        {/* Placeholder content for contact us section */}
                        <p>If you have any questions or feedback, please feel free to contact us using the form below:</p>
                        <form id="contact-form">
                            <label htmlFor="name">Name:</label>
                            <input type="text" id="name" name="name" required />
                            <label htmlFor="email">Email:</label>
                            <input type="email" id="email" name="email" required />
                            <label htmlFor="message">Message:</label>
                            <textarea id="message" name="message" rows="4" required></textarea>
                            <button type="submit">Send Message</button>
                        </form>
                    </div>
                </section>
                <section className="incident-report">
                    <h2>Incident Report Page</h2>
                    <p>Provide a platform for users to report incidents related to crowd management.</p>
                    <div className="content">
                        {/* Placeholder content for incident report page */}
                        <p>If you encounter any incidents or issues related to crowd management, please report them using the form below:</p>
                        <form id="incident-report-form">
                            <label htmlFor="incident-type">Incident Type:</label>
                            <select id="incident-type" name="incident-type" required>
                                <option value="" disabled selected>Select an incident type</option>
                                <option value="Crowd Disturbance">Crowd Disturbance</option>
                                <option value="Medical Emergency">Medical Emergency</option>
                                <option value="Security Threat">Security Threat</option>
                                <option value="Other">Other</option>
                            </select>
                            <label htmlFor="description">Description:</label>
                            <textarea id="description" name="description" rows="4" required></textarea>
                            <button type="submit">Submit Report</button>
                        </form>
                    </div>
                </section>
            </main>
            <footer>
                <p>&copy; 2024 Crowd Management Platform</p>
            </footer>
        </div>
    );
};

export default ResourcesAndSupport;
