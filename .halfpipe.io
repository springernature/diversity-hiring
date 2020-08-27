team: frontenddevs
pipeline: diversity-hiring
feature_toggles:
- update-pipeline
tasks:
- type: run
  name: "Trigger"
  script: \ls
  docker:
    image: node:13.14.0-alpine
