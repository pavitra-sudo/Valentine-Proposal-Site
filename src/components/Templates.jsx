import './Templates.css'

const Templates = () => {
    const templates = [
        {
            id: 1,
            name: 'Be My Valentine',
            theme: 'Classic Romance',
            preview: '💕'
        },
        {
            id: 2,
            name: 'You & Me Forever',
            theme: 'Eternal Love',
            preview: '💑'
        },
        {
            id: 3,
            name: 'My Heart Belongs to You',
            theme: 'Passionate Love',
            preview: '❤️'
        }
    ]

    return (
        <section className="templates section">
            <div className="container">
                <div className="section-header text-center mb-lg">
                    <h2 className="fade-in-up">Choose a Template for Your Proposal 💖</h2>
                    <p className="fade-in-up">Select from our beautiful designs and customize to your heart's content</p>
                </div>
                <div className="templates-grid">
                    {templates.map((template, index) => (
                        <div
                            key={template.id}
                            className="template-card card fade-in-up"
                            style={{ animationDelay: `${index * 0.15}s` }}
                        >
                            <div className="template-preview">
                                <div className="template-icon">{template.preview}</div>
                                <div className="template-overlay">
                                    <button className="btn btn-primary">Select & Customize</button>
                                </div>
                            </div>
                            <div className="template-info">
                                <h3>{template.name}</h3>
                                <p className="template-theme">{template.theme}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Templates
