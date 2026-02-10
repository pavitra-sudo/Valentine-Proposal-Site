import { useEffect, useState } from 'react'
import './AnimatedBackground.css'
import bgImage from '/background.png' 

const AnimatedBackground = () => {
    const [hearts, setHearts] = useState([])

    useEffect(() => {
        const heartArray = []
        for (let i = 0; i < 20; i++) {
            heartArray.push({
                id: i,
                left: Math.random() * 100,
                delay: Math.random() * 5,
                duration: 15 + Math.random() * 10,
                size: 0.8 + Math.random() * 1.2
            })
        }
        setHearts(heartArray)
    }, [])

    return (
        <div
            className="animated-bg"
            style={{ backgroundImage: `url(${bgImage})` }}
        >
            <div className="floating-hearts">
                {hearts.map(heart => (
                    <div
                        key={heart.id}
                        className="heart"
                        style={{
                            left: `${heart.left}%`,
                            animationDelay: `${heart.delay}s`,
                            animationDuration: `${heart.duration}s`,
                            fontSize: `${heart.size}rem`
                        }}
                    >
                        ❤️
                    </div>
                ))}
            </div>
        </div>
    )
}

export default AnimatedBackground
