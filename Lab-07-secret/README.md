# commands
```
minikube start
kubectl get all -A
echo -n 'admin' | base64
echo -n 'password' | base64
kubectl apply -f secret.yaml
kubectl get secret -n dev
kubectl get secret regcred -o yaml -n dev
kubectl apply -f secret.yaml
kubectl delete -f secret.yaml
```