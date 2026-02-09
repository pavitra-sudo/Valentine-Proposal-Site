import './HowItWorks.css'

const HowItWorks = () => {
    const steps = [
        {
            number: '1',
            title: 'Choose a Template',
            description: 'Browse our collection of romantic templates and pick your favorite',
            icon: '📋'
        },
        {
            number: '2',
            title: 'Customize Your Page',
            description: 'Add your photos, messages, and select your special song',
            icon: '✏️'
        },
        {
            number: '3',
            title: 'Preview & Share',
            description: 'Review your page and get a unique link to share with your love',
            icon: '🔗'
        },
        {
            number: '4',
            title: 'Make Magic Happen',
            description: 'Send the link and wait for that special "Yes!" moment',
            icon: '✨'
        }
    ]

    return (
        <section className="how-it-works section">
            <div className="container">
                <div className="section-header text-center mb-lg">
                    <h2 className="fade-in-up">How It Works 🌟</h2>
                    <p className="fade-in-up">Create your dream proposal in just 4 simple steps</p>
                </div>
                <div className="steps-container">
                    {steps.map((step, index) => (
                        <div
                            key={index}
                            className="step-card fade-in-up"
                            style={{ animationDelay: `${index * 0.2}s` }}
                        >
                            <div className="step-number">{step.number}</div>
                            <div className="step-icon">{step.icon}</div>
                            <h3>{step.title}</h3>
                            <p>{step.description}</p>
                            {index < steps.length - 1 && <div className="step-arrow">→</div>}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default HowItWorks
