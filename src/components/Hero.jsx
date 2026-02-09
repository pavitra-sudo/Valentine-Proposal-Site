import { useNavigate } from 'react-router-dom'
import './Hero.css'

const Hero = () => {
    const navigate = useNavigate()

    return (
        <section className="hero section">
            <div className="container">
                <div className="hero-content text-center fade-in-up">
                    <div className="hero-icon mb-md">
                        <span className="heart-icon pulse">💕</span>
                    </div>
                    <h1 className="hero-title mb-md">
                        Create Your<br />
                        <span className="gradient-text">Dream Proposal Page</span>
                    </h1>
                    <p className="hero-subtitle mb-lg">
                        Make a special page to confess your love!<br />
                        <span className="tagline">❤️ Make Your Love Story Unforgettable ❤️</span>
                    </p>
                    <div className="hero-buttons">
                        <button className="btn btn-primary" onClick={() => navigate('/create')}>
                            Get Started
                        </button>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Hero
