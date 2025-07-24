from flask import Flask
from prometheus_client import Counter, generate_latest, CONTENT_TYPE_LATEST
import random
import time

app = Flask(__name__)

# Prometheus counter
REQUEST_COUNT = Counter('http_requests_total', 'Total HTTP Requests', ['method', 'endpoint'])

@app.route("/")
def hello():
    REQUEST_COUNT.labels(method='GET', endpoint='/').inc()
    return "Hello from Kubernetes with metrics!"

@app.route("/metrics")
def metrics():
    return generate_latest(), 200, {'Content-Type': CONTENT_TYPE_LATEST}

if __name__ == "__main__":
    app.run(host='0.0.0.0', port=5000)
