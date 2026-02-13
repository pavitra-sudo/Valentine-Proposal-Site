import { useLocation } from 'react-router-dom'
import './YesResponse.css'

const YesResponse = () => {
    const location = useLocation()
    const formData = location.state || {}

    return (
        <section className="yes-response section">
            <div className="container">
                <div className="yes-wrapper fade-in-up">
                    {/* Floating hearts animation */}
                    <div className="hearts-container">
                        <span className="heart heart-1">💕</span>
                        <span className="heart heart-2">❤️</span>
                        <span className="heart heart-3">💖</span>
                        <span className="heart heart-4">💗</span>
                        <span className="heart heart-5">💕</span>
                        <span className="heart heart-6">❤️</span>
                        <span className="heart heart-7">💖</span>
                        <span className="heart heart-8">💗</span>
                    </div>

                    {/* Confetti elements */}
                    <div className="confetti-container">
                        <div className="confetti confetti-1"></div>
                        <div className="confetti confetti-2"></div>
                        <div className="confetti confetti-3"></div>
                        <div className="confetti confetti-4"></div>
                        <div className="confetti confetti-5"></div>
                        <div className="confetti confetti-6"></div>
                        <div className="confetti confetti-7"></div>
                        <div className="confetti confetti-8"></div>
                        <div className="confetti confetti-9"></div>
                        <div className="confetti confetti-10"></div>
                    </div>

                    <div className="yes-content text-center">
                        <div className="celebration-icon pulse">
                            🎉
                        </div>

                        <h1 className="yes-title gradient-text-vibrant">
                            {formData.receiver || 'They'} Said Yes!
                        </h1>

                        <div className="yes-hearts">
                            <span className="big-heart pulse-heart">💕</span>
                        </div>

                        <div className="yes-message card-vibrant">
                            <p className="message-intro">
                                Congratulations, {formData.sender || 'You'}! 🎊
                            </p>
                            <p className="message-body">
                                Your Valentine said YES! This is the beginning of something beautiful.
                                May your love story be filled with endless joy, laughter, and unforgettable moments together.
                            </p>
                            <div className="love-quote">
                                "Love is not just looking at each other, it's looking in the same direction." 💑
                            </div>
                        </div>

                        <div className="celebration-footer">
                            <div className="sparkle sparkle-1">✨</div>
                            <div className="sparkle sparkle-2">✨</div>
                            <div className="sparkle sparkle-3">✨</div>
                            <p className="footer-text">Happy Valentine's Day! 💝</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default YesResponse
