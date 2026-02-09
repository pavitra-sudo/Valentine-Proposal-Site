import './Features.css'

const Features = () => {
    const features = [
        {
            icon: '💝',
            title: 'Beautiful Templates',
            description: 'Choose from stunning, romantic templates designed to make hearts flutter'
        },
        {
            icon: '🎵',
            title: 'Add Music',
            description: 'Set the mood with your special song playing in the background'
        },
        {
            icon: '📸',
            title: 'Photo Galleries',
            description: 'Share your precious memories with beautiful photo displays'
        },
        {
            icon: '✨',
            title: 'Customizable',
            description: 'Personalize every detail to match your unique love story'
        },
        {
            icon: '🔗',
            title: 'Easy Sharing',
            description: 'Get a unique link to share your proposal page instantly'
        },
        {
            icon: '💌',
            title: 'Heartfelt Messages',
            description: 'Express your feelings with custom messages and love notes'
        }
    ]

    return (
        <section className="features section">
            <div className="container">
                <div className="section-header text-center mb-lg">
                    <h2 className="fade-in-up">Why Choose Us? 💕</h2>
                    <p className="fade-in-up">Everything you need to create the perfect proposal</p>
                </div>
                <div className="features-grid">
                    {features.map((feature, index) => (
                        <div 
                            key={index} 
                            className="feature-card card fade-in-up"
                            style={{ animationDelay: `${index * 0.1}s` }}
                        >
                            <div className="feature-icon">{feature.icon}</div>
                            <h3>{feature.title}</h3>
                            <p>{feature.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Features
