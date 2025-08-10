let h5s = document.querySelectorAll(".total div h5");

h5s.forEach(h5 => {
    h5.addEventListener("click", function() {
        h5s.forEach(h => {
            h.style.borderBottom = "none";
            h.style.color = "";
        });
       
        this.style.borderBottom = "3px solid #0d6efd";
        this.style.color = "#0d6efd";
    });
});



 const ctx = document.getElementById('salesChart').getContext('2d');

    new Chart(ctx, {
        type: 'line',
        data: {
            labels: [ '2014', '2015', '2016', '2017', '2018', '2019'],
            datasets: [{
                label: 'Sales',
                data: [0, 10000, 5000, 15000, 10000, 20000],
                borderColor: 'rgba(54, 162, 235, 1)',
                backgroundColor: 'transparent',
                pointBackgroundColor: 'rgba(255, 99, 132, 1)',
                pointRadius: 4,
                borderWidth: 2,
                tension: 0.3 
            }]
        },
        options: {
            responsive: true,
            plugins: {
                legend: { display: false }
            },
            scales: {
                y: {
                    beginAtZero: true,
                    ticks: {
                        callback: function(value) {
                            return 'RS. ' + value.toLocaleString();
                        }
                    }
                }
            }
        }
    });
    

const ctx1 = document.getElementById('policyChart').getContext('2d');

new Chart(ctx1, {
    type: 'doughnut',
    data: {
        labels: ['Targeted Credit', 'Current Credit'],
        datasets: [{
            data: [2800, 2248],
            backgroundColor: ['#4dc4d2', '#6f8fe9'],
            borderWidth: 0
        }]
    },
    options: {
        responsive: true,

        plugins: {
            legend: {
                position: 'bottom',
                labels: {
                    usePointStyle: true,
                    padding: 20,
                    font: {
                        size: 14
                    }
                }
            },
            tooltip: {
                callbacks: {
                    label: function(context) {
                        return context.label + ': ' + context.parsed;
                    }
                }
            }
        },
        cutout: '60%' // size of inner hole
    }
});    