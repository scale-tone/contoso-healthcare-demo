# contoso-healthcare-demo

A demo Health Checks app for Contoso Healthcare. Lets users tell us how they feel on a daily basis.

```mermaid

flowchart LR

app("Single-Page Application (React or React Native)")
func[["Azure Function/Durable Entities"]]
storage{{"Azure Storage (alternatively Azure SQL)"}}
analytics[("Analytics (Azure Synapse)")]

app ==> func
func -. "Azure SignalR service" .-> app
func ==> storage
func --> analytics

```

# Live Demo

https://durmvckykp7vssaqdkk-function.azurewebsites.net/
