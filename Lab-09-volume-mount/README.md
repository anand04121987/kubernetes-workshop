# commands Mount Volume:
```
minikube mount /home/kalyan/Downloads:/data &
or
------
minikube mount /home/kalyan/Downloads:/data
^c
jobs
bg %1
jobs
------
kubectl apply -f mount.yaml
kubectl describe pod/myapp -n dev
kubectl logs pod/myapp -n dev
kubectl -n dev exec -it pod/myapp -- ls -l /
kubectl -n dev exec -it pod/myapp -- /bin/bash
kubectl delete pod/myapp -n dev
kubectl delete -f mount.yaml
```