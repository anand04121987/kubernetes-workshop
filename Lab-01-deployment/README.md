# deployment
```
kubectl apply -f deployment.yaml
kubectl get all -n dev
kubectl logs deployment.apps/hello-world-deployment -n dev
kubectl logs pod/hello-world-deployment-76765586f7-z4qfz -n dev
kubectl logs deployment.apps/hello-world-deployment -n dev
kubectl describe  service/hello-world-service -n dev
kubectl describe  pod/hello-world-deployment-76765586f7-z4qfz -n dev
kubectl get svc hello-world-service -o wide -n dev
minikube ip
minikube service hello-world-service -n dev --url
kubectl delete -f deployment.yaml
```