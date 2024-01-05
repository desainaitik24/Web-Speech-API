function generateVoice() {
    const text = document.querySelector('input').value
    const utterance = new SpeechSynthesisUtterance(text)
    window.speechSynthesis.speak(utterance)
}