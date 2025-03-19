# commands
```
kubectl create namespace dev
kubectl -n dev create secret docker-registry regcred --docker-server=<http://registry.hub.docker.com|registry.hub.docker.com> --docker-username=xx --docker-password=xx --docker-email=your-email@gmail.com
kubectl -n dev get secret regcred --output=yaml
kubectl -n dev get secret regcred --output="jsonpath={.data.\.dockerconfigjson}" | base64 -d
kubectl apply -f pod-private.yaml
kubectl get pod private-reg -n dev
kubectl describe pod private-reg -n dev
kubectl logs pod/private-reg -n dev
kubectl get secret -n dev
kubectl delete secret regcred -n dev
kubectl delete -f pod-private.yaml
```