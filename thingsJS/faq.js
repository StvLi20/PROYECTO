document.addEventListener('DOMContentLoaded', () => {
    const questions = document.querySelectorAll('.faq-question');
    
    questions.forEach(question => {
        question.addEventListener('click', () => {
            // Cerrar todas las respuestas abiertas
            questions.forEach(q => {
                if (q !== question) {
                    q.classList.remove('active');
                }
            });
            
            // Alternar la pregunta actual
            question.classList.toggle('active');
        });
    });
});