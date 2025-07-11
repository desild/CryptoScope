// Control functions
function initControls() {
    document.getElementById('startScraping').addEventListener('click', startScraping);
    document.getElementById('pauseScraping').addEventListener('click', pauseScraping);
    document.getElementById('exportData').addEventListener('click', exportData);
    document.getElementById('refreshDashboard').addEventListener('click', refreshDashboard);
}

function startScraping() {
    const btn = event.target;
    btn.innerHTML = '<div class="loading-spinner"></div>';
    btn.disabled = true;
    
    setTimeout(() => {
        btn.innerHTML = 'Scraping Active';
        btn.classList.add('pulse');
        updateStats();
    }, 2000);
}

function pauseScraping() {
    const startBtn = document.querySelector('.btn-primary');
    startBtn.innerHTML = 'Start Scraping';
    startBtn.classList.remove('pulse');
    startBtn.disabled = false;
}

function exportData() {
    // Simulate export
    const btn = event.target;
    const originalText = btn.innerHTML;
    btn.innerHTML = 'Exporting...';
    btn.disabled = true;
    
    setTimeout(() => {
        btn.innerHTML = 'Download Ready';
        setTimeout(() => {
            btn.innerHTML = originalText;
            btn.disabled = false;
        }, 2000);
    }, 1500);
}

function refreshDashboard() {
    // Simulate refresh
    const btn = event.target;
    btn.innerHTML = '<div class="loading-spinner"></div>';
    btn.disabled = true;
    
    setTimeout(() => {
        btn.innerHTML = 'Refresh';
        btn.disabled = false;
        updateStats();
    }, 1000);
}