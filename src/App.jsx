import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Hero from './components/Hero'
import Features from './components/Features'
import HowItWorks from './components/HowItWorks'
import CTA from './components/CTA'
import Footer from './components/Footer'
import AnimatedBackground from './components/AnimatedBackground'
import ProposalForm from './components/ProposalForm'
import PreviewPage from './components/PreviewPage'
import ProposalPage from './components/ProposalPage'
import YesResponse from './components/YesResponse'
import NoResponse from './components/NoResponse'
import './App.css'

function LandingPage() {
    return (
        <>
            <Hero />
        </>
    )
}

function App() {
    return (
        <Router>
            <div className="app">
                <AnimatedBackground />
                <Routes>
                    <Route path="/" element={<LandingPage />} />
                    <Route path="/create" element={<ProposalForm />} />
                    <Route path="/preview" element={<PreviewPage />} />
                    <Route path="/p/:proposalId" element={<ProposalPage />} />
                    <Route path="/response/yes" element={<YesResponse />} />
                    <Route path="/response/no" element={<NoResponse />} />
                </Routes>
            </div>
        </Router>
    )
}

export default App
