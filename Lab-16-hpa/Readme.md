# Commands
### Install k6
```
sudo gpg -k
sudo gpg --no-default-keyring --keyring /usr/share/keyrings/k6-archive-keyring.gpg --keyserver hkp://keyserver.ubuntu.com:80 --recv-keys C5AD17C747E3415A3642D57D77C6C491D6AC1D69
echo "deb [signed-by=/usr/share/keyrings/k6-archive-keyring.gpg] https://dl.k6.io/deb stable main" | sudo tee /etc/apt/sources.list.d/k6.list
sudo apt-get update
sudo apt-get install k6
```

### kubectl commands
```
minikube addons list
minikube addons enable metrics-server
minikube dashboard &
kubectl apply -f ingress.yaml
kubectl apply -f hpa.yaml (averageUtilization: 50/80)
kubectl get pods -n dev
kubectl get all -n dev
kubectl top pod -n dev
kubectl top node -n dev
kubectl -n dev describe hpa my-app

k6 run k6-test.js

kubectl get pods -n dev -o wide
kubectl get all -n dev -o wide
kubectl -n dev describe hpa my-app
kubectl top pod -n dev
kubectl top node -n dev

kubectl delete -f hpa.yaml
kubectl delete -f ingress.yaml
```
### Explanation
```
minReplicas: HPA won’t scale below this (2). 
maxReplicas: HPA won’t scale above this (10).
averageUtilization: If average CPU usage goes above 50%, HPA will scale up.

scaleUp:
Allows scaling up by 100% or 4 pods max every 60s.

scaleDown:
Allows scaling down by 50% or 2 pods max every 60s.
stabilizationWindowSeconds: 300 prevents quick scale-downs — it waits for 5 minutes of consistent low usage.
```
