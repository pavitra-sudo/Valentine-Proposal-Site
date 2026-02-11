import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './ProposalForm.css'

const ProposalForm = () => {
    const navigate = useNavigate()
    const [formData, setFormData] = useState({
        email: '',
        sender: '',
        receiver: '',
        message: ''
    })

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }

    const handlePreview = (e) => {
        e.preventDefault()
        // Navigate to preview page with form data
        navigate('/preview', { state: formData })
    }

    const handleGenerateLink = async (e) => {
        e.preventDefault();

        console.log("📩 Form data before sending:", formData);

        try {
            console.log("🚀 Sending request to backend...");

            const response = await fetch("http://localhost:8080/", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    email: formData.email,
                    sender: formData.sender,
                    receiver: formData.receiver,
                    message: formData.message
                }),
            });

            console.log("📡 Raw response:", response);
            console.log("📡 Status:", response.status);

            if (!response.ok) {
                const text = await response.text();
                console.error("❌ Backend error response:", text);
                throw new Error(text);
            }

            const data = await response.json();
            console.log("✅ Parsed JSON:", data);

            alert(`🎉 Your link is generated: ${data.link}`);

        } catch (error) {
            console.error("🔥 Fetch failed:", error);
            alert("❌ Something went wrong!");
        }
    };

    return (
        <section className="proposal-form-section section">
            <div className="container">
                <div className="form-wrapper fade-in-up">
                    <div className="form-header text-center mb-lg">
                        <div className="header-decoration">
                            <span className="heart-left">💕</span>
                            <h1 className="gradient-text">Customize Your Page</h1>
                            <span className="heart-right">💕</span>
                        </div>
                        <p>Fill in the details to create your dream proposal</p>
                    </div>

                    <form className="proposal-form card" onSubmit={handlePreview}>
                        <div className="form-group">
                            <label htmlFor="email">Your Email</label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                placeholder="her/his reply will come on this email"
                                required
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="yourName">Your Name</label>
                            <input
                                type="text"
                                id="sender"
                                name="sender"
                                value={formData.sender}
                                onChange={handleChange}
                                placeholder="Enter your name"
                                required
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="partnerName">Partner Name</label>
                            <input
                                type="text"
                                id="receiver"
                                name="receiver"
                                value={formData.receiver}
                                onChange={handleChange}
                                placeholder="Enter your partner's name"
                                required
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="message">Proposal Message</label>
                            <textarea
                                id="message"
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                                placeholder="You make my heart skip a beat. Will you be mine forever?"
                                rows="6"
                                required
                            />
                        </div>

                        <div className="form-actions">
                            <button type="button" className="btn btn-secondary" onClick={handleGenerateLink}>
                                Generate Link 🔗
                            </button>
                            <button type="submit" className="btn btn-primary">
                                Preview Page
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    )
}

export default ProposalForm
