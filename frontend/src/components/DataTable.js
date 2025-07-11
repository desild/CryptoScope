// DataTable component logic
class DataTable {
    constructor(tableId) {
        this.table = document.getElementById(tableId);
        this.data = [];
    }

    loadData(newData) {
        this.data = newData;
        this.render();
    }

    render() {
        if (!this.table) return;
        
        const tbody = this.table.querySelector('tbody');
        tbody.innerHTML = '';
        
        this.data.forEach(item => {
            const row = document.createElement('tr');
            row.innerHTML = `
                <td>${item.project}</td>
                <td>${item.riskLevel}</td>
                <td>${item.confidence}%</td>
                <td>${item.detected}</td>
                <td><span class="status-badge status-${item.status.toLowerCase()}">${item.status}</span></td>
            `;
            tbody.appendChild(row);
        });
    }
}

export default DataTable;