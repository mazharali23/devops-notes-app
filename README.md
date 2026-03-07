![CI](https://github.com/mazharali23/devops-notes-app/actions/workflows/ci.yml/badge.svg)

# DevOps Notes App

A **production-style DevOps project** demonstrating a full CI/CD pipeline, containerized microservices, Kubernetes orchestration, and monitoring stack.

This project implements a **3-tier Notes Application** with automated builds, container deployment, reverse proxy routing, and observability tools.

---

# 🚀 Tech Stack

### Application Layer

* **Frontend:** React + TailwindCSS
* **Backend:** Node.js + Express
* **Database:** MongoDB

### DevOps & Infrastructure

* Docker
* Docker Compose
* Kubernetes
* Helm
* Nginx Reverse Proxy
* GitHub Actions (CI/CD)

### Monitoring & Observability

* Prometheus
* Grafana
* Node Exporter
* Alertmanager

---

# 🏗 System Architecture

```
User
 │
 ▼
Nginx Reverse Proxy
 │
 ▼
Frontend (React)
 │
 ▼
Backend API (Node.js)
 │
 ▼
MongoDB Database
```

### Infrastructure Architecture

```
Developer
   │
   ▼
GitHub Repository
   │
   ▼
GitHub Actions CI/CD
   │
   ▼
Docker Build
   │
   ▼
DockerHub Registry
   │
   ▼
Kubernetes Cluster
   │
   ├── Frontend Pods
   ├── Backend Pods
   └── MongoDB Pod
   │
   ▼
Prometheus Monitoring
   │
   ▼
Grafana Dashboard
```

---

# 📦 Project Structure

```
devops-notes-app
│
├── backend
│   └── Node.js API
│
├── frontend
│   └── React application
│
├── nginx
│   └── Reverse proxy configuration
│
├── k8s
│   └── Kubernetes manifests
│
├── monitoring
│   ├── prometheus.yml
│   └── alerts.yml
│
├── notes-app
│   └── Helm chart
│
├── docker-compose.yml
│
└── .github/workflows
    └── ci-cd.yml
```

---

# ⚙️ Running the Project Locally

### 1️⃣ Clone Repository

```
git clone https://github.com/mazharali23/devops-notes-app.git
cd devops-notes-app
```

---

### 2️⃣ Run Docker Compose

```
docker compose up --build
```

Services will start:

| Service     | URL                   |
| ----------- | --------------------- |
| Frontend    | http://localhost:3000 |
| Backend API | http://localhost:5000 |
| Prometheus  | http://localhost:9091 |
| Grafana     | http://localhost:3001 |

---

# 📊 Monitoring Stack

### Prometheus

Collects metrics from:

* Backend service
* Node Exporter
* Infrastructure metrics

### Grafana

Visualizes:

* CPU usage
* Memory usage
* Container metrics
* Request rate
* Application health

---

# ⚠️ Alerting

Alertmanager is configured to trigger alerts for:

* High CPU usage
* Container failures
* Node resource exhaustion

---

# 🔄 CI/CD Pipeline

CI/CD is implemented using **GitHub Actions**.

### Pipeline Flow

```
Developer pushes code
        │
        ▼
GitHub Actions Pipeline
        │
Build Docker Images
        │
Push Images to DockerHub
        │
Deploy to Kubernetes
```

Pipeline steps:

1. Checkout repository
2. Login to DockerHub
3. Build backend container
4. Build frontend container
5. Push images to registry
6. Deploy to cluster

---

# ☸ Kubernetes Deployment

The application is deployed using Kubernetes:

Components:

* Deployments
* Services
* Ingress
* Configurations

Example command:

```
kubectl apply -f k8s/
```

Helm charts are also provided for production-style deployments.

---

# 🌐 Reverse Proxy

Nginx is used as a reverse proxy for routing traffic:

```
/        → Frontend
/api     → Backend
```

---

# 🧠 Key DevOps Concepts Demonstrated

* Containerization with Docker
* Multi-container orchestration with Docker Compose
* Kubernetes deployments and scaling
* CI/CD automation with GitHub Actions
* Monitoring with Prometheus and Grafana
* Infrastructure observability and alerting
* Reverse proxy routing with Nginx

---

# 📌 Future Improvements

* GitOps deployment using ArgoCD
* Infrastructure as Code with Terraform
* Centralized logging with ELK stack
* Cloud deployment (AWS / GCP)

---

# 👨‍💻 Author

**Mazhar Ali Mansuri**

DevOps Enthusiast | Cloud & Automation

GitHub:
https://github.com/mazharali23
