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
            const response = await fetch(`http://localhost:3001/api/proposals/${proposalId}`)
            const data = await response.json()

            if (data.success) {
                setProposal(data.proposal)
                // Check if already responded
                if (data.proposal.response) {
                    setHasResponded(true)
                    // Redirect to appropriate response page
                    setTimeout(() => {
                        navigate(`/response/${data.proposal.response}`, {
                            state: {
                                partnerName: data.proposal.partnerName,
                                yourName: data.proposal.yourName,
                                message: data.proposal.message
                            }
                        })
                    }, 2000)
                }
            } else {
                setError('Proposal not found')
            }
        } catch (err) {
            console.error('Error fetching proposal:', err)
            setError('Failed to load proposal. Make sure the backend server is running.')
        } finally {
            setLoading(false)
        }
    }

    const handleResponse = async (response) => {
        try {
            const res = await fetch(`http://localhost:3001/api/proposals/${proposalId}/response`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ response })
            })

            const data = await res.json()

            if (data.success) {
                // Navigate to response page
                navigate(`/response/${response}`, {
                    state: {
                        partnerName: proposal.partnerName,
                        yourName: proposal.yourName,
                        message: proposal.message
                    }
                })
            } else {
                alert(data.error || 'Failed to submit response')
            }
        } catch (err) {
            console.error('Error submitting response:', err)
            alert('Failed to submit response. Please try again.')
        }
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
                            {proposal.partnerName},
                        </h1>
                        <h2 className="preview-question">
                            Will You Be My Valentine? 💝
                        </h2>
                        <p className="preview-signature">
                            ~ Forever Yours, {proposal.yourName} ~
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
