# commands 
### https://docs.nginx.com/nginx-ingress-controller/installation/ingress-nginx/
```
kubectl apply -f ns.yaml
kubectl apply -f service.yaml
kubectl apply -f blue.yaml
kubectl apply -f green.yaml
kubectl apply -f ingress.yaml
curl  demo.example.com
kubectl get all -n prd
kubectl get ing -n prd
kubectl describe pod/blue-app -n prd
kubectl apply -f canary.yaml
for i in {1..10}; do curl demo.example.com;done
```