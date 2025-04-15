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
minikube dashboard
kubectl apply -f ingress.yaml
kubectl apply -f hpa.yaml (averageUtilization: 50/80)
kubectl get pods -n dev
kubectl get all -n dev
kubectl -n dev describe horizontalpodautoscaler.autoscaling/my-app

k6 run k6-test.js

kubectl get pods -n dev
kubectl get all -n dev
kubectl -n dev describe horizontalpodautoscaler.autoscaling/my-app

kubectl delete -f hpa.yaml
kubectl delete -f ingress.yaml
```