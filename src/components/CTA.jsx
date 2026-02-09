import './CTA.css'

const CTA = () => {
    return (
        <section className="cta section">
            <div className="container">
                <div className="cta-content card text-center fade-in-up">
                    <div className="cta-hearts">
                        <span>💕</span>
                        <span>💖</span>
                        <span>💕</span>
                    </div>
                    <h2 className="mb-md">Ready to Create Your Love Story?</h2>
                    <p className="cta-text mb-lg">
                        Don't wait for the perfect moment—create it! Start building your dream proposal page today and make a memory that will last forever.
                    </p>
                    <div className="cta-buttons">
                        <button className="btn btn-primary pulse">
                            ✨ Start Creating Now
                        </button>
                    </div>
                    <p className="cta-note">No credit card required • Free to start</p>
                </div>
            </div>
        </section>
    )
}

export default CTA
