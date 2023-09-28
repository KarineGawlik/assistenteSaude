function updateDate() {
    const dateElement = document.getElementById('date');
    const currentDate = new Date();

    // Formate a data como desejar (por exemplo, "dd/mm/yyyy HH:mm:ss")
    const options = { year: 'numeric', month: '2-digit', day: '2-digit'};
    const formattedDate = currentDate.toLocaleDateString('pt-BR', options);

    dateElement.textContent = `${formattedDate}`;
}

// Atualize a data a cada segundo (1000 milissegundos)
setInterval(updateDate, 1000);

// Chame a função para exibir a data atualizada quando a página for carregada
updateDate();


function updateTime() {
    const timeElement = document.getElementById('time');
    const currentTime = new Date();

    // Formate o horário como desejar (por exemplo, "HH:mm:ss")
    const options = { hour: '2-digit', minute: '2-digit', second: '2-digit' };
    const formattedTime = currentTime.toLocaleTimeString('pt-BR', options);

    timeElement.textContent = `${formattedTime}`;
}

// Atualize o horário a cada segundo (1000 milissegundos)
setInterval(updateTime, 1000);

// Chame a função para exibir o horário atual quando a página for carregada
updateTime();


document.addEventListener('DOMContentLoaded', function() {
    const calendarEl = document.getElementById('calendar');
    const calendar = new FullCalendar.Calendar(calendarEl, {
        initialView: 'dayGridMonth', // Visualização inicial do mês
        events: [
            {
                title: 'Evento 1',
                start: '2023-09-15', // Data de início do evento
                end: '2023-09-16',   // Data de término do evento
                backgroundColor: 'blue' // Cor do evento
            },
            {
                title: 'Evento 2',
                start: '2023-09-20',
                end: '2023-09-22',
                backgroundColor: 'green'
            }
            // Adicione mais eventos aqui
        ]
    });

    calendar.render();
});


document.addEventListener('DOMContentLoaded', function() {
    var calendarEl = document.getElementById('calendar');
    var calendar = new FullCalendar.Calendar(calendarEl, {
        plugins: ['interaction', 'dayGrid'],
        header: {
            left: 'prev,next today',
            center: 'title',
            right: 'dayGridMonth'
        },
        editable: true,
        dateClick: function(info) {
            var title = prompt('Informe o título da tarefa:');
            if (title) {
                calendar.addEvent({
                    title: title,
                    start: info.date,
                    allDay: true
                });
            }
        },
        events: [
            // Aqui você pode carregar eventos preexistentes, se desejar.
        ]
    });

    calendar.render();
});