# commands
```
kubectl apply -f configmap.yaml
kubectl describe configmap/myconfigmap -n dev
kubectl describe pod/env-configmap -n dev
kubectl logs pod/env-configmap -n dev
```