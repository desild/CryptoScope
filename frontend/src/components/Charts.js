// Charts component logic
class Charts {
    constructor() {
        this.charts = {};
    }

    createChart(ctx, type, data, options) {
        this.charts[ctx.canvas.id] = new Chart(ctx, {
            type,
            data,
            options
        });
        return this.charts[ctx.canvas.id];
    }

    updateChart(chartId, newData) {
        if (this.charts[chartId]) {
            this.charts[chartId].data = newData;
            this.charts[chartId].update();
            return true;
        }
        return false;
    }
}

export default Charts;