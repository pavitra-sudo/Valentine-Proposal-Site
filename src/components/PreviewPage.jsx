import { useLocation, useNavigate } from 'react-router-dom'
import './PreviewPage.css'

const PreviewPage = () => {
    const location = useLocation()
    const navigate = useNavigate()
    const formData = location.state || {}

    const handleYes = () => {
        // TODO: Handle "Yes" response
        console.log('User clicked Yes!')
        alert('Yay! 💕')
    }

    const handleNo = () => {
        // TODO: Handle "No" response
        console.log('User clicked No')
        alert('Oh no... 💔')
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
                            {formData.partnerName || 'Ananya'},
                        </h1>
                        <h2 className="preview-question">
                            Will You Be My Valentine? 💝
                        </h2>
                        <p className="preview-signature">
                            ~ Forever Yours, {formData.yourName || 'Rahul'} ~
                        </p>
                    </div>

                    <div className="preview-content card">
                        <div className="preview-message mb-lg">
                            <p className="message-text">
                                {formData.message || 'You are the reason for my smile, the beat of my heart, the love of my life.'}
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

                    <div className="preview-footer text-center mt-lg">
                        <button className="btn btn-secondary" onClick={() => navigate('/create')}>
                            ← Edit Details
                        </button>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default PreviewPage
