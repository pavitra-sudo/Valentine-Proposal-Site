import { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import './PreviewPage.css'

const ProposalPage = () => {
    const { proposalId } = useParams()
    const navigate = useNavigate()
    const [proposal, setProposal] = useState(null)
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)
    const [hasResponded, setHasResponded] = useState(false)

    useEffect(() => {
        fetchProposal()
    }, [proposalId])

    const fetchProposal = async () => {
        try {
            // Backend is at http://localhost:8080/:code
            const response = await fetch(`http://localhost:8080/${proposalId}`)
            const jsonData = await response.json()

            if (jsonData.data) {
                // Backend returns { data: { sender:..., receiver:..., ... } }
                setProposal(jsonData.data)

                // Note: Backend doesn't store responses, so we can't check if already responded
            } else {
                setError('Proposal not found')
            }
        } catch (err) {
            console.error('Error fetching proposal:', err)
            setError('Failed to load proposal. Make sure the backend server as http://localhost:8080 is running.')
        } finally {
            setLoading(false)
        }
    }

    const handleResponse = (response) => {
        // Backend doesn't support saving responses, so just navigate locally
        navigate(`/response/${response}`, {
            state: {
                receiver: proposal.receiver,
                sender: proposal.sender,
                message: proposal.message
            }
        })
    }

    const handleYes = () => handleResponse('yes')
    const handleNo = () => handleResponse('no')

    if (loading) {
        return (
            <section className="preview-page section">
                <div className="container">
                    <div className="preview-wrapper fade-in-up">
                        <div className="loading-message text-center">
                            <h2>Loading your proposal... 💕</h2>
                        </div>
                    </div>
                </div>
            </section>
        )
    }

    if (error) {
        return (
            <section className="preview-page section">
                <div className="container">
                    <div className="preview-wrapper fade-in-up">
                        <div className="error-message text-center">
                            <h2>😔 {error}</h2>
                            <p>Please check the link and try again.</p>
                        </div>
                    </div>
                </div>
            </section>
        )
    }

    if (hasResponded) {
        return (
            <section className="preview-page section">
                <div className="container">
                    <div className="preview-wrapper fade-in-up">
                        <div className="already-responded text-center">
                            <h2>This proposal has already been answered 💝</h2>
                            <p>Redirecting to the response page...</p>
                        </div>
                    </div>
                </div>
            </section>
        )
    }

    return (
        <section className="preview-page section">
            <div className="container">
                <div className="preview-wrapper fade-in-up">
                    <div className="preview-header text-center mb-lg">
                        <div className="preview-hearts-top">
                            <span className="heart-float">💕</span>
                            <span className="heart-float">❤️</span>
                            <span className="heart-float">💕</span>
                        </div>
                        <h1 className="preview-name gradient-text">
                            {proposal.receiver},
                        </h1>
                        <h2 className="preview-question">
                            Will You Be My Valentine? 💝
                        </h2>
                        <p className="preview-signature">
                            ~ Forever Yours, {proposal.sender} ~
                        </p>
                    </div>

                    <div className="preview-content card">
                        <div className="preview-message mb-lg">
                            <p className="message-text">
                                {proposal.message}
                            </p>
                        </div>

                        <div className="preview-actions">
                            <button className="btn btn-yes" onClick={handleYes}>
                                Yes ❤️
                            </button>
                            <button className="btn btn-no" onClick={handleNo}>
                                No 💔
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ProposalPage
