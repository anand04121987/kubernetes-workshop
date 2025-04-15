# Commands
### Install k6
```
sudo gpg -k
sudo gpg --no-default-keyring --keyring /usr/share/keyrings/k6-archive-keyring.gpg --keyserver hkp://keyserver.ubuntu.com:80 --recv-keys C5AD17C747E3415A3642D57D77C6C491D6AC1D69
echo "deb [signed-by=/usr/share/keyrings/k6-archive-keyring.gpg] https://dl.k6.io/deb stable main" | sudo tee /etc/apt/sources.list.d/k6.list
sudo apt-get update
sudo apt-get install k6
```
### Install the VPA
```
git clone https://github.com/kubernetes/autoscaler.git
cd autoscaler/vertical-pod-autoscaler/
./hack/vpa-process-yamls.sh print
./hack/vpa-up.sh
kubectl get pods -n kube-system
kubectl get crd
```

### kubectl commands
```
minikube addons list
minikube addons enable metrics-server
minikube dashboard &
kubectl get crd

kubectl apply -f ingress.yaml
kubectl apply -f vpa.yaml
kubectl get vpa -n dev
kubectl describe vpa -n dev

k6 run k6-test.js

kubectl get vpa -n dev
kubectl describe vpa -n dev


kubectl delete -f hpa.yaml
kubectl delete -f ingress.yaml
```
