// deno-lint-ignore-file
// generated by cdk8s
import { ApiObject, ApiObjectMetadata, GroupVersionKind } from "npm:cdk8s";
import { Construct } from "constructs";

/**
 * @schema HelmChart
 */
export class HelmChart extends ApiObject {
  /**
   * Returns the apiVersion and kind for "HelmChart"
   */
  public static readonly GVK: GroupVersionKind = {
    apiVersion: "helm.cattle.io/v1",
    kind: "HelmChart",
  };

  /**
   * Renders a Kubernetes manifest for "HelmChart".
   *
   * This can be used to inline resource manifests inside other objects (e.g. as templates).
   *
   * @param props initialization props
   */
  public static manifest(props: HelmChartProps = {}): any {
    return {
      ...HelmChart.GVK,
      ...toJson_HelmChartProps(props),
    };
  }

  /**
   * Defines a "HelmChart" API object
   * @param scope the scope in which to define this object
   * @param id a scope-local name for the object
   * @param props initialization props
   */
  public constructor(scope: Construct, id: string, props: HelmChartProps = {}) {
    super(scope, id, {
      ...HelmChart.GVK,
      ...props,
    });
  }

  /**
   * Renders the object to Kubernetes JSON.
   */
  public toJson(): any {
    const resolved = super.toJson();

    return {
      ...HelmChart.GVK,
      ...toJson_HelmChartProps(resolved),
    };
  }
}

/**
 * @schema HelmChart
 */
export interface HelmChartProps {
  /**
   * @schema HelmChart#metadata
   */
  readonly metadata?: ApiObjectMetadata;

  /**
   * @schema HelmChart#spec
   */
  readonly spec?: HelmChartSpec;
}

/**
 * Converts an object of type 'HelmChartProps' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_HelmChartProps(
  obj: HelmChartProps | undefined,
): Record<string, any> | undefined {
  if (obj === undefined) {
    return undefined;
  }
  const result = {
    metadata: obj.metadata,
    spec: toJson_HelmChartSpec(obj.spec),
  };
  // filter undefined values
  return Object.entries(result).reduce(
    (r, i) => (i[1] === undefined ? r : { ...r, [i[0]]: i[1] }),
    {},
  );
}
/* eslint-enable max-len, quote-props */

/**
 * @schema HelmChartSpec
 */
export interface HelmChartSpec {
  /**
   * @schema HelmChartSpec#authPassCredentials
   */
  readonly authPassCredentials?: boolean;

  /**
   * @schema HelmChartSpec#authSecret
   */
  readonly authSecret?: HelmChartSpecAuthSecret;

  /**
   * @schema HelmChartSpec#backOffLimit
   */
  readonly backOffLimit?: number;

  /**
   * @schema HelmChartSpec#bootstrap
   */
  readonly bootstrap?: boolean;

  /**
   * @schema HelmChartSpec#chart
   */
  readonly chart?: string;

  /**
   * @schema HelmChartSpec#chartContent
   */
  readonly chartContent?: string;

  /**
   * @schema HelmChartSpec#createNamespace
   */
  readonly createNamespace?: boolean;

  /**
   * @schema HelmChartSpec#dockerRegistrySecret
   */
  readonly dockerRegistrySecret?: HelmChartSpecDockerRegistrySecret;

  /**
   * @schema HelmChartSpec#failurePolicy
   */
  readonly failurePolicy?: string;

  /**
   * @schema HelmChartSpec#helmVersion
   */
  readonly helmVersion?: string;

  /**
   * @schema HelmChartSpec#jobImage
   */
  readonly jobImage?: string;

  /**
   * @schema HelmChartSpec#repo
   */
  readonly repo?: string;

  /**
   * @schema HelmChartSpec#repoCA
   */
  readonly repoCa?: string;

  /**
   * @schema HelmChartSpec#repoCAConfigMap
   */
  readonly repoCaConfigMap?: HelmChartSpecRepoCaConfigMap;

  /**
   * @schema HelmChartSpec#set
   */
  readonly set?: { [key: string]: any };

  /**
   * @schema HelmChartSpec#targetNamespace
   */
  readonly targetNamespace?: string;

  /**
   * @schema HelmChartSpec#timeout
   */
  readonly timeout?: string;

  /**
   * @schema HelmChartSpec#valuesContent
   */
  readonly valuesContent?: string;

  /**
   * @schema HelmChartSpec#version
   */
  readonly version?: string;
}

/**
 * Converts an object of type 'HelmChartSpec' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_HelmChartSpec(
  obj: HelmChartSpec | undefined,
): Record<string, any> | undefined {
  if (obj === undefined) {
    return undefined;
  }
  const result = {
    authPassCredentials: obj.authPassCredentials,
    authSecret: toJson_HelmChartSpecAuthSecret(obj.authSecret),
    backOffLimit: obj.backOffLimit,
    bootstrap: obj.bootstrap,
    chart: obj.chart,
    chartContent: obj.chartContent,
    createNamespace: obj.createNamespace,
    dockerRegistrySecret: toJson_HelmChartSpecDockerRegistrySecret(
      obj.dockerRegistrySecret,
    ),
    failurePolicy: obj.failurePolicy,
    helmVersion: obj.helmVersion,
    jobImage: obj.jobImage,
    repo: obj.repo,
    repoCA: obj.repoCa,
    repoCAConfigMap: toJson_HelmChartSpecRepoCaConfigMap(obj.repoCaConfigMap),
    set: obj.set === undefined ? undefined : Object.entries(obj.set).reduce(
      (r, i) => (i[1] === undefined ? r : { ...r, [i[0]]: i[1] }),
      {},
    ),
    targetNamespace: obj.targetNamespace,
    timeout: obj.timeout,
    valuesContent: obj.valuesContent,
    version: obj.version,
  };
  // filter undefined values
  return Object.entries(result).reduce(
    (r, i) => (i[1] === undefined ? r : { ...r, [i[0]]: i[1] }),
    {},
  );
}
/* eslint-enable max-len, quote-props */

/**
 * @schema HelmChartSpecAuthSecret
 */
export interface HelmChartSpecAuthSecret {
  /**
   * @schema HelmChartSpecAuthSecret#name
   */
  readonly name?: string;
}

/**
 * Converts an object of type 'HelmChartSpecAuthSecret' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_HelmChartSpecAuthSecret(
  obj: HelmChartSpecAuthSecret | undefined,
): Record<string, any> | undefined {
  if (obj === undefined) {
    return undefined;
  }
  const result = {
    name: obj.name,
  };
  // filter undefined values
  return Object.entries(result).reduce(
    (r, i) => (i[1] === undefined ? r : { ...r, [i[0]]: i[1] }),
    {},
  );
}
/* eslint-enable max-len, quote-props */

/**
 * @schema HelmChartSpecDockerRegistrySecret
 */
export interface HelmChartSpecDockerRegistrySecret {
  /**
   * @schema HelmChartSpecDockerRegistrySecret#name
   */
  readonly name?: string;
}

/**
 * Converts an object of type 'HelmChartSpecDockerRegistrySecret' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_HelmChartSpecDockerRegistrySecret(
  obj: HelmChartSpecDockerRegistrySecret | undefined,
): Record<string, any> | undefined {
  if (obj === undefined) {
    return undefined;
  }
  const result = {
    name: obj.name,
  };
  // filter undefined values
  return Object.entries(result).reduce(
    (r, i) => (i[1] === undefined ? r : { ...r, [i[0]]: i[1] }),
    {},
  );
}
/* eslint-enable max-len, quote-props */

/**
 * @schema HelmChartSpecRepoCaConfigMap
 */
export interface HelmChartSpecRepoCaConfigMap {
  /**
   * @schema HelmChartSpecRepoCaConfigMap#name
   */
  readonly name?: string;
}

/**
 * Converts an object of type 'HelmChartSpecRepoCaConfigMap' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_HelmChartSpecRepoCaConfigMap(
  obj: HelmChartSpecRepoCaConfigMap | undefined,
): Record<string, any> | undefined {
  if (obj === undefined) {
    return undefined;
  }
  const result = {
    name: obj.name,
  };
  // filter undefined values
  return Object.entries(result).reduce(
    (r, i) => (i[1] === undefined ? r : { ...r, [i[0]]: i[1] }),
    {},
  );
}
/* eslint-enable max-len, quote-props */

/**
 * @schema HelmChartConfig
 */
export class HelmChartConfig extends ApiObject {
  /**
   * Returns the apiVersion and kind for "HelmChartConfig"
   */
  public static readonly GVK: GroupVersionKind = {
    apiVersion: "helm.cattle.io/v1",
    kind: "HelmChartConfig",
  };

  /**
   * Renders a Kubernetes manifest for "HelmChartConfig".
   *
   * This can be used to inline resource manifests inside other objects (e.g. as templates).
   *
   * @param props initialization props
   */
  public static manifest(props: HelmChartConfigProps = {}): any {
    return {
      ...HelmChartConfig.GVK,
      ...toJson_HelmChartConfigProps(props),
    };
  }

  /**
   * Defines a "HelmChartConfig" API object
   * @param scope the scope in which to define this object
   * @param id a scope-local name for the object
   * @param props initialization props
   */
  public constructor(
    scope: Construct,
    id: string,
    props: HelmChartConfigProps = {},
  ) {
    super(scope, id, {
      ...HelmChartConfig.GVK,
      ...props,
    });
  }

  /**
   * Renders the object to Kubernetes JSON.
   */
  public toJson(): any {
    const resolved = super.toJson();

    return {
      ...HelmChartConfig.GVK,
      ...toJson_HelmChartConfigProps(resolved),
    };
  }
}

/**
 * @schema HelmChartConfig
 */
export interface HelmChartConfigProps {
  /**
   * @schema HelmChartConfig#metadata
   */
  readonly metadata?: ApiObjectMetadata;

  /**
   * @schema HelmChartConfig#spec
   */
  readonly spec?: HelmChartConfigSpec;
}

/**
 * Converts an object of type 'HelmChartConfigProps' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_HelmChartConfigProps(
  obj: HelmChartConfigProps | undefined,
): Record<string, any> | undefined {
  if (obj === undefined) {
    return undefined;
  }
  const result = {
    metadata: obj.metadata,
    spec: toJson_HelmChartConfigSpec(obj.spec),
  };
  // filter undefined values
  return Object.entries(result).reduce(
    (r, i) => (i[1] === undefined ? r : { ...r, [i[0]]: i[1] }),
    {},
  );
}
/* eslint-enable max-len, quote-props */

/**
 * @schema HelmChartConfigSpec
 */
export interface HelmChartConfigSpec {
  /**
   * @schema HelmChartConfigSpec#failurePolicy
   */
  readonly failurePolicy?: string;

  /**
   * @schema HelmChartConfigSpec#valuesContent
   */
  readonly valuesContent?: string;
}

/**
 * Converts an object of type 'HelmChartConfigSpec' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_HelmChartConfigSpec(
  obj: HelmChartConfigSpec | undefined,
): Record<string, any> | undefined {
  if (obj === undefined) {
    return undefined;
  }
  const result = {
    failurePolicy: obj.failurePolicy,
    valuesContent: obj.valuesContent,
  };
  // filter undefined values
  return Object.entries(result).reduce(
    (r, i) => (i[1] === undefined ? r : { ...r, [i[0]]: i[1] }),
    {},
  );
}
/* eslint-enable max-len, quote-props */
