import { useLocation } from 'react-router-dom'
import './NoResponse.css'

const NoResponse = () => {
    const location = useLocation()
    const formData = location.state || {}

    return (
        <section className="no-response section">
            <div className="container">
                <div className="no-wrapper fade-in-up">
                    {/* Rain effect */}
                    <div className="rain-container">
                        <div className="rain rain-1"></div>
                        <div className="rain rain-2"></div>
                        <div className="rain rain-3"></div>
                        <div className="rain rain-4"></div>
                        <div className="rain rain-5"></div>
                        <div className="rain rain-6"></div>
                        <div className="rain rain-7"></div>
                        <div className="rain rain-8"></div>
                        <div className="rain rain-9"></div>
                        <div className="rain rain-10"></div>
                    </div>

                    {/* Falling tears */}
                    <div className="tears-container">
                        <span className="tear tear-1">💧</span>
                        <span className="tear tear-2">💧</span>
                        <span className="tear tear-3">💧</span>
                        <span className="tear tear-4">💧</span>
                        <span className="tear tear-5">💧</span>
                    </div>

                    {/* Dark clouds */}
                    <div className="clouds-container">
                        <div className="cloud cloud-1">☁️</div>
                        <div className="cloud cloud-2">☁️</div>
                        <div className="cloud cloud-3">☁️</div>
                    </div>

                    <div className="no-content text-center">
                        <div className="sad-icon wilting">
                            💔
                        </div>

                        <h1 className="no-title grey-text">
                            {formData.receiver || 'They'} Said No
                        </h1>

                        <div className="broken-heart-visual">
                            <div className="heart-left">💔</div>
                            <div className="heart-crack"></div>
                            <div className="heart-right">💔</div>
                        </div>

                        <div className="no-message card-grey">
                            <p className="message-intro-sad">
                                Sometimes love doesn't go as planned...
                            </p>
                            <p className="message-body-sad">
                                {formData.sender || 'You'}, we know this isn't the answer you hoped for.
                                Remember that rejection is redirection. Your heart is brave for taking the chance,
                                and the right person will see your worth.
                            </p>
                            <div className="sad-quote">
                                "The heart was made to be broken." - Oscar Wilde
                            </div>
                        </div>

                        <div className="wilted-flower">
                            <div className="flower-stem"></div>
                            <div className="flower-petals">🥀</div>
                        </div>

                        <div className="sad-footer">
                            <p className="footer-text-sad">Keep your head up. Better days are coming. 🌧️</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default NoResponse
