import { Deployment } from "npm:cdk8s-plus-27";
import { Chart } from "npm:cdk8s";

export function createHomeAssistantDeployment(chart: Chart) {
  const deployment = new Deployment(chart, "homeassistant", {
    replicas: 1,
  });

  deployment.addContainer({
    image: "ghcr.io/home-assistant/home-assistant:stable",
    portNumber: 8123,
    securityContext: {
      ensureNonRoot: false,
      readOnlyRootFilesystem: false,
    },
    resources: {},
  });

  const service = deployment.exposeViaService({
    ports: [
      {
        port: 443,
        targetPort: 8123,
      },
    ],
  });

  service.metadata.addAnnotation("tailscale.com/expose", "true");
  service.metadata.addAnnotation("tailscale.com/hostname", "homeassistant");
}