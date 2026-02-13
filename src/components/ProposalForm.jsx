import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './ProposalForm.css'

const ProposalForm = () => {
    const navigate = useNavigate()
    const [formData, setFormData] = useState({
        email: '',
        yourName: '',
        partnerName: '',
        message: ''
    })
    const [generatedLink, setGeneratedLink] = useState('')
    const [isGenerating, setIsGenerating] = useState(false)

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
        e.preventDefault()

        // Validate form
        if (!formData.yourName || !formData.partnerName || !formData.message) {
            alert('Please fill in all required fields')
            return
        }

        setIsGenerating(true)

        try {
            const response = await fetch('http://localhost:3001/api/proposals', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    partnerName: formData.partnerName,
                    yourName: formData.yourName,
                    message: formData.message
                })
            })

            const data = await response.json()

            if (data.success) {
                setGeneratedLink(data.url)
                alert(`🎉 Your link is generated!\n\n${data.url}\n\nCopy and share it with your partner!`)
            } else {
                alert('Failed to generate link. Please try again.')
            }
        } catch (error) {
            console.error('Error generating link:', error)
            alert('Failed to connect to backend. Make sure the backend server is running.')
        } finally {
            setIsGenerating(false)
        }
    }

    const copyToClipboard = () => {
        navigator.clipboard.writeText(generatedLink)
        alert('Link copied to clipboard! 📋')
    }

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
                                id="yourName"
                                name="yourName"
                                value={formData.yourName}
                                onChange={handleChange}
                                placeholder="Enter your name"
                                required
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="partnerName">Partner Name</label>
                            <input
                                type="text"
                                id="partnerName"
                                name="partnerName"
                                value={formData.partnerName}
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
                            <button
                                type="button"
                                className="btn btn-secondary"
                                onClick={handleGenerateLink}
                                disabled={isGenerating}
                            >
                                {isGenerating ? 'Generating...' : 'Generate Link 🔗'}
                            </button>
                            <button type="submit" className="btn btn-primary">
                                Preview Page
                            </button>
                        </div>

                        {generatedLink && (
                            <div className="generated-link-container">
                                <h3>✨ Your Shareable Link:</h3>
                                <div className="link-display">
                                    <input
                                        type="text"
                                        value={generatedLink}
                                        readOnly
                                        className="link-input"
                                    />
                                    <button
                                        type="button"
                                        className="btn btn-copy"
                                        onClick={copyToClipboard}
                                    >
                                        Copy 📋
                                    </button>
                                </div>
                                <p className="link-instruction">
                                    Share this link with your partner! 💕
                                </p>
                            </div>
                        )}
                    </form>
                </div>
            </div>
        </section>
    )
}

export default ProposalForm
