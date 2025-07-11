// WebSocket service
class WebSocketService {
    constructor(url = 'wss://ws.cryptoscope.com') {
        this.url = url;
        this.socket = null;
        this.subscribers = {};
    }

    connect() {
        this.socket = new WebSocket(this.url);
        
        this.socket.onopen = () => {
            console.log('WebSocket connected');
            this.heartbeat();
        };
        
        this.socket.onmessage = (event) => {
            const data = JSON.parse(event.data);
            if (data.type && this.subscribers[data.type]) {
                this.subscribers[data.type].forEach(callback => callback(data.payload));
            }
        };
        
        this.socket.onclose = () => {
            console.log('WebSocket disconnected');
            setTimeout(() => this.connect(), 5000);
        };
    }

    subscribe(type, callback) {
        if (!this.subscribers[type]) {
            this.subscribers[type] = [];
        }
        this.subscribers[type].push(callback);
    }

    unsubscribe(type, callback) {
        if (this.subscribers[type]) {
            this.subscribers[type] = this.subscribers[type].filter(cb => cb !== callback);
        }
    }

    heartbeat() {
        if (!this.socket) return;
        
        if (this.socket.readyState === WebSocket.OPEN) {
            this.socket.send(JSON.stringify({ type: 'heartbeat' }));
            setTimeout(() => this.heartbeat(), 30000);
        }
    }

    send(data) {
        if (this.socket && this.socket.readyState === WebSocket.OPEN) {
            this.socket.send(JSON.stringify(data));
        }
    }
}

export default WebSocketService;