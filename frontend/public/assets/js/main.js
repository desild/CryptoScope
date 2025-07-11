// Main application logic
document.addEventListener('DOMContentLoaded', function() {
    // Add smooth scrolling
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Real-time updates simulation for the table
    setInterval(() => {
        const table = document.getElementById('detectionsTable');
        const rows = table.querySelectorAll('tr');
        
        // Randomly update confidence percentages
        rows.forEach(row => {
            const confidenceCell = row.cells[2];
            if (confidenceCell) {
                const currentValue = parseFloat(confidenceCell.textContent);
                const newValue = currentValue + (Math.random() - 0.5) * 2;
                confidenceCell.textContent = Math.max(0, Math.min(100, newValue)).toFixed(1) + '%';
            }
        });
    }, 5000);

    // Initialize components
    if (typeof initCharts === 'function') {
        initCharts();
    }
    
    if (typeof initControls === 'function') {
        initControls();
    }
});

// Stats update function
function updateStats() {
    const statNumbers = document.querySelectorAll('.stat-number');
    statNumbers.forEach(stat => {
        const currentValue = parseInt(stat.textContent.replace(/,/g, ''));
        const increment = Math.floor(Math.random() * 10) + 1;
        if (stat.textContent.includes('%')) {
            stat.textContent = (parseFloat(stat.textContent) + Math.random() * 2).toFixed(1) + '%';
        } else if (stat.textContent.includes('/')) {
            // Keep 24/7 unchanged
        } else {
            stat.textContent = (currentValue + increment).toLocaleString();
        }
    });
}