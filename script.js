// Questions Vrai/Faux (10 questions - 5 points)
const trueFalseQuestions = [
    { id: 1, question: "C++ est un langage de programmation orienté objet.", type: "trueFalse", correct: true },
    { id: 2, question: "C++ a été développé par Dennis Ritchie.", type: "trueFalse", correct: false },
    { id: 3, question: "Le langage C++ est une extension du langage C.", type: "trueFalse", correct: true },
    { id: 4, question: "Un programme C++ peut fonctionner sur plusieurs plateformes.", type: "trueFalse", correct: true },
    { id: 5, question: "La fonction main() peut être appelée plusieurs fois.", type: "trueFalse", correct: false },
    { id: 6, question: "cout permet d'afficher des données à l'écran.", type: "trueFalse", correct: true },
    { id: 7, question: "L'instruction using namespace std; est obligatoire en C++.", type: "trueFalse", correct: false },
    { id: 8, question: "Le caractère \\n permet un retour à la ligne.", type: "trueFalse", correct: true },
    { id: 9, question: "Une classe est un modèle pour créer des objets.", type: "trueFalse", correct: true },
    { id: 10, question: "L'encapsulation améliore la sécurité des données.", type: "trueFalse", correct: true }
];

// Questions à choix unique (10 questions - 10 points)
const singleChoiceQuestions = [
    { id: 11, question: "Qui a développé le langage C++ ?", type: "singleChoice", options: ["James Gosling", "Dennis Ritchie", "Bjarne Stroustrup", "Guido van Rossum"], correct: 2 },
    { id: 12, question: "Quelle fonction est le point d'entrée d'un programme C++ ?", type: "singleChoice", options: ["start()", "init()", "main()", "run()"], correct: 2 },
    { id: 13, question: "Quel symbole est utilisé pour afficher avec cout ?", type: "singleChoice", options: [">>", "<<", "::", "&&"], correct: 1 },
    { id: 14, question: "Quelle extension correspond à un fichier C++ ?", type: "singleChoice", options: [".c", ".java", ".cpp", ".exe"], correct: 2 },
    { id: 15, question: "Quel type stocke un caractère ?", type: "singleChoice", options: ["int", "string", "char", "bool"], correct: 2 },
    { id: 16, question: "Quel type retourne une fonction sans valeur ?", type: "singleChoice", options: ["int", "bool", "void", "return"], correct: 2 },
    { id: 17, question: "Quel mot-clé permet de créer une classe ?", type: "singleChoice", options: ["object", "class", "struct", "define"], correct: 1 },
    { id: 18, question: "Quel mot-clé cache les attributs d'une classe ?", type: "singleChoice", options: ["public", "static", "private", "final"], correct: 2 },
    { id: 19, question: "Quel opérateur est utilisé pour la résolution de portée ?", type: "singleChoice", options: [".", "::", "->", ":"], correct: 1 },
    { id: 20, question: "Une fonction récursive doit obligatoirement contenir :", type: "singleChoice", options: ["Une boucle", "Une condition d'arrêt", "Un tableau", "Un constructeur"], correct: 1 }
];

// Questions à choix multiples (10 questions - 5 points)
const multipleChoiceQuestions = [
    { id: 21, question: "Le C++ est utilisé pour :", type: "multipleChoice", options: ["Jeux vidéo", "Systèmes embarqués", "Applications performantes", "Uniquement le web"], correct: [0, 1, 2] },
    { id: 22, question: "Un IDE permet de :", type: "multipleChoice", options: ["Écrire du code", "Compiler", "Déboguer", "Remplacer le langage"], correct: [0, 1, 2] },
    { id: 23, question: "Les commentaires C++ sont :", type: "multipleChoice", options: ["//", "/* */", "#", "<!--"], correct: [0, 1] },
    { id: 24, question: "Une fonction peut :", type: "multipleChoice", options: ["Être appelée", "Recevoir des paramètres", "Retourner une valeur", "Être sans nom"], correct: [0, 1, 2] },
    { id: 25, question: "Une classe contient :", type: "multipleChoice", options: ["Attributs", "Méthodes", "main()", "cout"], correct: [0, 1] },
    { id: 26, question: "Un constructeur :", type: "multipleChoice", options: ["A le même nom que la classe", "Est appelé automatiquement", "Retourne une valeur", "Est obligatoire"], correct: [0, 1] },
    { id: 27, question: "Les spécificateurs d'accès sont :", type: "multipleChoice", options: ["public", "private", "protected", "local"], correct: [0, 1, 2] },
    { id: 28, question: "L'héritage permet :", type: "multipleChoice", options: ["Réutilisation du code", "Relation parent-enfant", "Accès aux méthodes publiques", "Supprimer une classe"], correct: [0, 1, 2] },
    { id: 29, question: "L'encapsulation utilise :", type: "multipleChoice", options: ["get", "set", "Attributs privés", "Héritage multiple"], correct: [0, 1, 2] },
    { id: 30, question: "C++ permet :", type: "multipleChoice", options: ["Programmation procédurale", "Programmation orientée objet", "Hautes performances", "Uniquement l'apprentissage"], correct: [0, 1, 2] }
];

const allQuestions = [...trueFalseQuestions, ...singleChoiceQuestions, ...multipleChoiceQuestions];
let userAnswers = {};
let showResults = false;
let submitted = false;

document.addEventListener('DOMContentLoaded', () => {
    renderSections();
    document.getElementById('submitContainer').classList.remove('hidden');
    updateProgress();
});

function renderSections() {
    const container = document.getElementById('sectionsContainer');
    container.innerHTML = '';
    container.appendChild(createSection("I. VRAI / FAUX", "5 points", trueFalseQuestions));
    container.appendChild(createSection("II. QCM À CHOIX UNIQUE", "10 points", singleChoiceQuestions));
    container.appendChild(createSection("III. QCM (CHOIX MULTIPLES)", "5 points", multipleChoiceQuestions));
}

function createSection(title, points, questions) {
    const section = document.createElement('div');
    section.className = 'section';
    section.innerHTML = `
        <div class="section-header">
            <h2 class="section-title">${title}</h2>
            <span class="section-points">${points}</span>
        </div>
    `;
    questions.forEach(q => section.appendChild(createQuestionCard(q)));
    return section;
}

function createQuestionCard(q) {
    const card = document.createElement('div');
    card.className = 'question-card';
    card.id = `question-${q.id}`;

    let resultIcon = '';
    if (showResults) {
        const result = getQuestionResult(q);
        if (result === 'correct') {
            card.classList.add('correct');
            resultIcon = '<span class="result-icon">✅</span>';
        } else if (result === 'incorrect') {
            card.classList.add('incorrect');
            resultIcon = '<span class="result-icon">❌</span>';
        } else if (result === 'partial') {
            card.classList.add('partial');
            resultIcon = '<span class="result-icon">⚠️</span>';
        }
    }

    card.innerHTML = `
        <div class="question-header">
            <span class="question-number">${q.id}</span>
            <h3 class="question-text">${q.question}</h3>
            ${resultIcon}
        </div>
        <div class="options">${createOptionsHTML(q)}</div>
    `;
    return card;
}

function createOptionsHTML(q) {
    if (q.type === 'trueFalse') return createTrueFalseOptions(q);
    if (q.type === 'singleChoice') return createSingleChoiceOptions(q);
    if (q.type === 'multipleChoice') return createMultipleChoiceOptions(q);
}

function createTrueFalseOptions(q) {
    return [{ value: 'true', label: "Vrai" }, { value: 'false', label: "Faux" }].map(opt => {
        const optValue = opt.value === 'true';
        const isSelected = userAnswers[q.id] === optValue;
        const isCorrect = q.correct === optValue;
        
        let className = 'option-label';
        if (showResults || submitted) {
            className += ' disabled';
            if (isCorrect) className += ' correct-option';
            else if (isSelected) className += ' incorrect-option';
        } else if (isSelected) {
            className += ' selected';
        }

        return `
            <label class="${className}">
                <input type="radio" name="q${q.id}" value="${opt.value}" 
                    ${isSelected ? 'checked' : ''} ${showResults || submitted ? 'disabled' : ''}
                    onchange="handleTrueFalseChange(${q.id}, ${optValue})">
                <span class="option-text">${opt.label}</span>
                ${showResults && isCorrect ? '<span class="correct-indicator">✓ Bonne réponse</span>' : ''}
            </label>
        `;
    }).join('');
}

function createSingleChoiceOptions(q) {
    return q.options.map((option, idx) => {
        const isSelected = userAnswers[q.id] === idx;
        const isCorrect = q.correct === idx;
        
        let className = 'option-label';
        if (showResults || submitted) {
            className += ' disabled';
            if (isCorrect) className += ' correct-option';
            else if (isSelected) className += ' incorrect-option';
        } else if (isSelected) {
            className += ' selected';
        }

        return `
            <label class="${className}">
                <input type="radio" name="q${q.id}" value="${idx}"
                    ${isSelected ? 'checked' : ''} ${showResults || submitted ? 'disabled' : ''}
                    onchange="handleSingleChoiceChange(${q.id}, ${idx})">
                <span class="option-text">${option}</span>
                ${showResults && isCorrect ? '<span class="correct-indicator">✓ Bonne réponse</span>' : ''}
            </label>
        `;
    }).join('');
}

function createMultipleChoiceOptions(q) {
    return q.options.map((option, idx) => {
        const userAnswer = userAnswers[q.id] || [];
        const isSelected = userAnswer.includes(idx);
        const isCorrect = q.correct.includes(idx);
        
        let className = 'option-label';
        if (showResults || submitted) {
            className += ' disabled';
            if (isCorrect) className += ' correct-option';
            else if (isSelected) className += ' incorrect-option';
        } else if (isSelected) {
            className += ' selected';
        }

        return `
            <label class="${className}">
                <input type="checkbox" name="q${q.id}" value="${idx}"
                    ${isSelected ? 'checked' : ''} ${showResults || submitted ? 'disabled' : ''}
                    onchange="handleMultipleChoiceChange(${q.id}, ${idx})">
                <span class="option-text">${option}</span>
                ${showResults && isCorrect ? '<span class="correct-indicator">✓ Bonne réponse</span>' : ''}
            </label>
        `;
    }).join('');
}

function handleTrueFalseChange(qId, value) {
    if (submitted) return;
    userAnswers[qId] = value;
    updateProgress();
}

function handleSingleChoiceChange(qId, value) {
    if (submitted) return;
    userAnswers[qId] = value;
    updateProgress();
}

function handleMultipleChoiceChange(qId, value) {
    if (submitted) return;
    if (!userAnswers[qId]) userAnswers[qId] = [];
    const idx = userAnswers[qId].indexOf(value);
    if (idx > -1) userAnswers[qId].splice(idx, 1);
    else userAnswers[qId].push(value);
    updateProgress();
}

function updateProgress() {
    const answered = Object.keys(userAnswers).filter(k => {
        const ans = userAnswers[k];
        return Array.isArray(ans) ? ans.length > 0 : ans !== undefined;
    }).length;

    const percent = (answered / allQuestions.length) * 100;
    document.getElementById('progressBar').style.width = `${percent}%`;
    document.getElementById('progressText').textContent = `${answered} / ${allQuestions.length} questions répondues`;
    
    const btn = document.getElementById('submitBtn');
    const btnText = document.getElementById('btnText');
    if (answered === allQuestions.length) {
        btn.disabled = false;
        btnText.textContent = '✅ Soumettre l\'examen';
    } else {
        btn.disabled = true;
        btnText.textContent = `Compléter toutes les questions (${allQuestions.length - answered} restantes)`;
    }
}

function getQuestionResult(q) {
    const ans = userAnswers[q.id];
    if (q.type === 'trueFalse' || q.type === 'singleChoice') {
        return ans === q.correct ? 'correct' : 'incorrect';
    }
    if (q.type === 'multipleChoice') {
        if (!ans || ans.length === 0) return 'incorrect';
        const sorted1 = [...ans].sort((a,b) => a-b).join(',');
        const sorted2 = [...q.correct].sort((a,b) => a-b).join(',');
        if (sorted1 === sorted2) return 'correct';
        return ans.some(a => q.correct.includes(a)) ? 'partial' : 'incorrect';
    }
}

function calculateScore() {
    if (submitted) return;
    submitted = true;

    let correct = 0, partial = 0;
    
    // Vrai/Faux : 0.5 point chacune
    trueFalseQuestions.forEach(q => {
        const res = getQuestionResult(q);
        if (res === 'correct') correct += 0.5;
    });
    
    // Choix unique : 1 point chacune
    singleChoiceQuestions.forEach(q => {
        const res = getQuestionResult(q);
        if (res === 'correct') correct += 1;
    });
    
    // Choix multiples : 0.5 point chacune
    multipleChoiceQuestions.forEach(q => {
        const res = getQuestionResult(q);
        if (res === 'correct') correct += 0.5;
        else if (res === 'partial') partial += 0.25;
    });

    const total = correct + partial;
    const maxScore = 20; // 5 + 10 + 5
    const percent = ((total / maxScore) * 100).toFixed(1);
    const grade = total.toFixed(1);

    document.getElementById('scoreDisplay').textContent = `${grade} / 20`;
    document.getElementById('percentage').textContent = `${percent}%`;
    document.getElementById('gradeDisplay').textContent = `${grade}/20`;

    showResults = true;
    document.getElementById('results').classList.remove('hidden');
    document.getElementById('submitContainer').classList.add('hidden');
    renderSections();
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

function resetQuiz() {
    userAnswers = {};
    showResults = false;
    submitted = false;
    document.getElementById('results').classList.add('hidden');
    document.getElementById('submitContainer').classList.remove('hidden');
    renderSections();
    updateProgress();
    window.scrollTo({ top: 0, behavior: 'smooth' });
}