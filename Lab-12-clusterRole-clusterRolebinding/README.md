# commands
```
kubectl api-versions | grep rbac
kubectl apply -f service-account.yaml
TOKEN=$(kubectl -n dev create token cluster-admin-svc-acc)
echo $TOKEN
kubectl dev config set-credentials cluster-admin-svc-acc --token=$TOKEN
kubectl config current-context
kubectl config set-context cluster-admin-svc-acc-context --cluster=minikube --user=cluster-admin-svc-acc (--cluster=default) (no namespace)
kubectl config use-context cluster-admin-svc-acc-context
kubectl dev config current-context

kubectl -n dev run nginx --image=nginx:latest
kubectl get po -A
kubectl get ns -A
kubectl get all -A
kubectl get all -n kube-system
kubectl get all -n ingress-nginx

kubectl config use-context minikube
kubectl dev config current-context

kubectl delete -f cluster-role-rolebinding.yaml
kubectl delete -f service-account.yaml
kubectl config delete-context cluster-admin-svc-acc-context
kubectl config delete-user cluster-admin-svc-acc
```