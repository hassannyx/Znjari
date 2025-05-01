const questions = [
    {
        question: "You’re more energized by:",
        answers: [
            { text: "Spending time with others", type: "E" },
            { text: "Being alone", type: "I" },
            { text: "Group activities", type: "E" },
            { text: "Quiet reflection", type: "I" }
        ]
    },
    {
        question: "You focus more on:",
        answers: [
            { text: "Facts and details", type: "S" },
            { text: "Big ideas and concepts", type: "N" },
            { text: "What’s real", type: "S" },
            { text: "What could be", type: "N" }
        ]
    },
    {
        question: "When making decisions, you tend to rely more on:",
        answers: [
            { text: "Logic and consistency", type: "T" },
            { text: "Feelings and values", type: "F" },
            { text: "Practicality", type: "T" },
            { text: "Empathy", type: "F" }
        ]
    },
    {
        question: "You prefer your work to be:",
        answers: [
            { text: "Decided in advance", type: "J" },
            { text: "Spontaneous", type: "P" },
            { text: "Structured", type: "J" },
            { text: "Flexible", type: "P" }
        ]
    },
    {
        question: "In social situations, you are usually:",
        answers: [
            { text: "Talkative", type: "E" },
            { text: "Reserved", type: "I" },
            { text: "Engaged", type: "E" },
            { text: "Quiet", type: "I" }
        ]
    },
    {
        question: "When it comes to new information, you trust:",
        answers: [
            { text: "Your direct experience", type: "S" },
            { text: "Your intuition", type: "N" },
            { text: "What’s been proven", type: "S" },
            { text: "Possibilities", type: "N" }
        ]
    },
    {
        question: "In decision-making, you value:",
        answers: [
            { text: "Objectivity", type: "T" },
            { text: "Personal values", type: "F" },
            { text: "Fairness", type: "T" },
            { text: "Harm to others", type: "F" }
        ]
    },
    {
        question: "You prefer to plan your day:",
        answers: [
            { text: "In advance", type: "J" },
            { text: "On the go", type: "P" },
            { text: "The night before", type: "J" },
            { text: "Without a plan", type: "P" }
        ]
    },
    {
        question: "You are more likely to:",
        answers: [
            { text: "Seek out opportunities", type: "E" },
            { text: "Wait for opportunities", type: "I" },
            { text: "Initiate conversations", type: "E" },
            { text: "Enjoy solitude", type: "I" }
        ]
    },
    {
        question: "You prefer to work:",
        answers: [
            { text: "Independently", type: "I" },
            { text: "As part of a team", type: "E" },
            { text: "On a set task", type: "I" },
            { text: "Collaborating", type: "E" }
        ]
    },
    {
        question: "When dealing with problems, you prefer:",
        answers: [
            { text: "Practical solutions", type: "S" },
            { text: "Creative solutions", type: "N" },
            { text: "Factual approaches", type: "S" },
            { text: "New ideas", type: "N" }
        ]
    },
    {
        question: "You find it easier to focus on:",
        answers: [
            { text: "What’s in front of you", type: "S" },
            { text: "What’s possible", type: "N" },
            { text: "Practical realities", type: "S" },
            { text: "Future opportunities", type: "N" }
        ]
    },
    {
        question: "In a conversation, you tend to focus on:",
        answers: [
            { text: "The facts", type: "S" },
            { text: "Ideas and possibilities", type: "N" },
            { text: "Details", type: "S" },
            { text: "Theories", type: "N" }
        ]
    },
    {
        question: "When making plans, you prefer to:",
        answers: [
            { text: "Have a clear structure", type: "J" },
            { text: "Keep things open-ended", type: "P" },
            { text: "Be organized", type: "J" },
            { text: "Be flexible", type: "P" }
        ]
    },
    {
        question: "Your work style is typically:",
        answers: [
            { text: "Methodical", type: "J" },
            { text: "Adaptable", type: "P" },
            { text: "Structured", type: "J" },
            { text: "Spontaneous", type: "P" }
        ]
    },
    {
        question: "You are more likely to take risks in:",
        answers: [
            { text: "Business", type: "E" },
            { text: "Personal life", type: "I" },
            { text: "Social situations", type: "E" },
            { text: "With close friends", type: "I" }
        ]
    },
    {
        question: "You prefer:",
        answers: [
            { text: "Stability", type: "S" },
            { text: "Change", type: "N" },
            { text: "Security", type: "S" },
            { text: "New experiences", type: "N" }
        ]
    },
    {
        question: "When working with others, you prefer:",
        answers: [
            { text: "Clear guidelines", type: "J" },
            { text: "Flexibility", type: "P" },
            { text: "Set tasks", type: "J" },
            { text: "Autonomy", type: "P" }
        ]
    },
    {
        question: "You tend to make decisions based on:",
        answers: [
            { text: "Objectivity", type: "T" },
            { text: "Empathy", type: "F" },
            { text: "Reason", type: "T" },
            { text: "Feelings", type: "F" }
        ]
    },
    {
        question: "You would rather:",
        answers: [
            { text: "Lead a team", type: "E" },
            { text: "Support a team", type: "I" },
            { text: "Guide others", type: "E" },
            { text: "Work alone", type: "I" }
        ]
    }
];

let currentAnswers = [];


function createQuiz() {
    const container = document.getElementById("quiz-container");
    questions.forEach((q, index) => {
        const div = document.createElement("div");
        div.classList.add("question-block");

        const questionEl = document.createElement("h3");
        questionEl.textContent = `${index + 1}. ${q.question}`;
        div.appendChild(questionEl);

        q.answers.forEach((answer, i) => {
            const label = document.createElement("label");
            label.style.display = "block";

            const radio = document.createElement("input");
            radio.type = "radio";
            radio.name = `question${index}`;
            radio.value = answer.type;

            radio.onclick = () => {
                currentAnswers[index] = answer.type;
                checkIfFinished();
            };

            label.appendChild(radio);
            label.append(` ${answer.text}`);
            div.appendChild(label);
        });

        container.appendChild(div);
    });
}

function checkIfFinished() {
    if (currentAnswers.filter(Boolean).length === questions.length) {
        document.getElementById("submit-section").style.display = "block";
    }
}

createQuiz();
function calculateResult() {
    // هنا سنقوم بتخزين عدد الإجابات التي تم اختيارها لكل نوع شخصية
    const typeCounts = { E: 0, I: 0, S: 0, N: 0, T: 0, F: 0, J: 0, P: 0 };

    // نقوم بجمع الإجابات التي اختارها المستخدم
    currentAnswers.forEach(answer => {
        typeCounts[answer]++;
    });

    // بناء نوع الشخصية بناءً على الإجابات الأكثر تكرارًا
    let personalityType = '';
    personalityType += typeCounts.E > typeCounts.I ? 'E' : 'I';
    personalityType += typeCounts.S > typeCounts.N ? 'S' : 'N';
    personalityType += typeCounts.T > typeCounts.F ? 'T' : 'F';
    personalityType += typeCounts.J > typeCounts.P ? 'J' : 'P';

    // عرض النتيجة للمستخدم
    const resultText = `Your personality type is: ${personalityType}`;

    // عرض النتيجة في صفحة الويب
    const resultDiv = document.createElement("div");
    resultDiv.classList.add("result");
    resultDiv.textContent = resultText;

    // استبدال الأسئلة بالنتيجة
    document.getElementById("quiz-container").innerHTML = "";
    document.getElementById("quiz-container").appendChild(resultDiv);
}

// ربط الوظيفة بزر "إرسال"
document.getElementById("submit-section").onclick = calculateResult;
// دالة لفحص الإجابات
function checkAnswers() {
    let allAnswered = true;
    // تأكد من أن المستخدم أجاب على جميع الأسئلة
    let answers = document.querySelectorAll('input[type="radio"]:checked');
    if (answers.length < 20) {
        allAnswered = false;
    }

    // إذا أجاب المستخدم على جميع الأسئلة، قم بإظهار الزر
    if (allAnswered) {
        document.getElementById("submit-section").style.display = "block";
    }
}

// استدعاء الدالة عند تغيير الإجابة
let allAnswers = document.querySelectorAll('input[type="radio"]');
allAnswers.forEach(answer => {
    answer.addEventListener('change', checkAnswers);
});
