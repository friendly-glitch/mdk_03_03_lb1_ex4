// Обработка отправки формы
document.getElementById('bugForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Останавливаем перезагрузку страницы

    // Сбор данных из полей формы (создание объекта)
    const bugData = {
        summary: document.getElementById('summary').value,
        description: document.getElementById('description').value,
        severity: document.getElementById('severity').value,
        priority: document.getElementById('priority').value,
        environment: document.getElementById('environment').value,
        assignee: document.getElementById('assignee').value,
        steps: document.getElementById('steps').value,
        expected: document.getElementById('expected').value,
        actual: document.getElementById('actual').value,
        // Автоматически добавляемые поля
        author: "Студент (QA)", 
        status: "Open",
        createdAt: new Date().toLocaleString('ru-RU')
    };

    // Преобразуем объект в красивый JSON
    const jsonString = JSON.stringify(bugData, null, 2);

    // Выводим результат в модальное окно
    document.getElementById('jsonOutput').textContent = jsonString;
    document.getElementById('resultModal').style.display = 'flex';
});

// Функция закрытия модального окна и очистки формы
function closeModal() {
    document.getElementById('resultModal').style.display = 'none';
    document.getElementById('bugForm').reset(); // Очищаем все поля формы
}

// Имитация работы загрузки файлов
function simulateFileUpload() {
    alert('В этой демо-версии загрузка файлов не реализована, но в реальной системе здесь откроется проводник ОС для выбора файла.');
}