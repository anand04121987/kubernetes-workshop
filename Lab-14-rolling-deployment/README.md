# commands
```
kubectl apply -f ns.yaml
kubectl apply -f rolling.yaml
kubectl get deployments -n prd -o wide
kubectl set image deployment/nginx-deployment nginx=nginx:1.27.4 -n prd
kubectl get all -n prd
kubectl rollout status deployment/nginx-deployment -n prd
kubectl rollout history deployment/nginx-deployment -n prd
kubectl annotate deployment nginx-deployment kubernetes.io/change-cause="Update to Nginx version 1.27.4" -n prd
kubectl rollout history deployment/nginx-deployment --revision 2 -n prd
kubectl rollout undo deployment nginx-deployment --to-revision=1 -n prd
kubectl delete -f rolling.yaml
kubectl delete -f ns.yaml
```