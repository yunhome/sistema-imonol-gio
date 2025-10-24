body {
    background: #008744; /* Verde escuro (corpo saudável) */
    color: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
    font-family: Arial, sans-serif;
    margin: 0;
}

.container {
    background: #fff;
    width: 90%;
    max-width: 600px;
    padding: 20px;
    border-radius: 10px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
    color: #333; /* Texto dentro da caixa clara */
    text-align: center;
}

h1 {
    color: #004d2b; /* Título verde */
    border-bottom: 2px solid #004d2b;
    padding-bottom: 10px;
}

#quiz-box {
    padding: 20px 0;
}

#question {
    font-size: 1.5em;
    margin-bottom: 20px;
    color: #000;
}

.btn-grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr); /* 2 colunas */
    gap: 10px;
    margin-bottom: 20px;
}

.btn {
    background: #f0f0f0;
    color: #333;
    border: 1px solid #ccc;
    padding: 10px;
    border-radius: 5px;
    cursor: pointer;
    font-size: 1em;
    transition: background-color 0.3s;
}

.btn:hover:not([disabled]) {
    background: #ddd;
}

.btn.correct {
    background: #4CAF50; /* Verde de acerto */
    color: white;
    border-color: #4CAF50;
}

.btn.incorrect {
    background: #f44336; /* Vermelho de erro */
    color: white;
    border-color: #f44336;
}

.hide {
    display: none;
}

#next-btn, #restart-btn {
    background: #004d2b;
    color: white;
    border: none;
    padding: 10px 20px;
    border-radius: 5px;
    cursor: pointer;
    margin-top: 15px;
}

#next-btn.hide {
    display: none;
}

#final-score {
    font-size: 1.2em;
    color: #004d2b;
    margin-top: 20px;
}
