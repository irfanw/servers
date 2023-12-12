// deno-lint-ignore-file
// generated by cdk8s
import { ApiObject, ApiObjectMetadata, GroupVersionKind } from "npm:cdk8s";
import { Construct } from "constructs";

/**
 * @schema Addon
 */
export class Addon extends ApiObject {
  /**
   * Returns the apiVersion and kind for "Addon"
   */
  public static readonly GVK: GroupVersionKind = {
    apiVersion: "k3s.cattle.io/v1",
    kind: "Addon",
  };

  /**
   * Renders a Kubernetes manifest for "Addon".
   *
   * This can be used to inline resource manifests inside other objects (e.g. as templates).
   *
   * @param props initialization props
   */
  public static manifest(props: AddonProps = {}): any {
    return {
      ...Addon.GVK,
      ...toJson_AddonProps(props),
    };
  }

  /**
   * Defines a "Addon" API object
   * @param scope the scope in which to define this object
   * @param id a scope-local name for the object
   * @param props initialization props
   */
  public constructor(scope: Construct, id: string, props: AddonProps = {}) {
    super(scope, id, {
      ...Addon.GVK,
      ...props,
    });
  }

  /**
   * Renders the object to Kubernetes JSON.
   */
  public toJson(): any {
    const resolved = super.toJson();

    return {
      ...Addon.GVK,
      ...toJson_AddonProps(resolved),
    };
  }
}

/**
 * @schema Addon
 */
export interface AddonProps {
  /**
   * @schema Addon#metadata
   */
  readonly metadata?: ApiObjectMetadata;

  /**
   * @schema Addon#spec
   */
  readonly spec?: AddonSpec;
}

/**
 * Converts an object of type 'AddonProps' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AddonProps(
  obj: AddonProps | undefined,
): Record<string, any> | undefined {
  if (obj === undefined) {
    return undefined;
  }
  const result = {
    metadata: obj.metadata,
    spec: toJson_AddonSpec(obj.spec),
  };
  // filter undefined values
  return Object.entries(result).reduce(
    (r, i) => (i[1] === undefined ? r : { ...r, [i[0]]: i[1] }),
    {},
  );
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AddonSpec
 */
export interface AddonSpec {
  /**
   * @schema AddonSpec#checksum
   */
  readonly checksum?: string;

  /**
   * @schema AddonSpec#source
   */
  readonly source?: string;
}

/**
 * Converts an object of type 'AddonSpec' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AddonSpec(
  obj: AddonSpec | undefined,
): Record<string, any> | undefined {
  if (obj === undefined) {
    return undefined;
  }
  const result = {
    checksum: obj.checksum,
    source: obj.source,
  };
  // filter undefined values
  return Object.entries(result).reduce(
    (r, i) => (i[1] === undefined ? r : { ...r, [i[0]]: i[1] }),
    {},
  );
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ETCDSnapshotFile
 */
export class EtcdSnapshotFile extends ApiObject {
  /**
   * Returns the apiVersion and kind for "ETCDSnapshotFile"
   */
  public static readonly GVK: GroupVersionKind = {
    apiVersion: "k3s.cattle.io/v1",
    kind: "ETCDSnapshotFile",
  };

  /**
   * Renders a Kubernetes manifest for "ETCDSnapshotFile".
   *
   * This can be used to inline resource manifests inside other objects (e.g. as templates).
   *
   * @param props initialization props
   */
  public static manifest(props: EtcdSnapshotFileProps = {}): any {
    return {
      ...EtcdSnapshotFile.GVK,
      ...toJson_EtcdSnapshotFileProps(props),
    };
  }

  /**
   * Defines a "ETCDSnapshotFile" API object
   * @param scope the scope in which to define this object
   * @param id a scope-local name for the object
   * @param props initialization props
   */
  public constructor(
    scope: Construct,
    id: string,
    props: EtcdSnapshotFileProps = {},
  ) {
    super(scope, id, {
      ...EtcdSnapshotFile.GVK,
      ...props,
    });
  }

  /**
   * Renders the object to Kubernetes JSON.
   */
  public toJson(): any {
    const resolved = super.toJson();

    return {
      ...EtcdSnapshotFile.GVK,
      ...toJson_EtcdSnapshotFileProps(resolved),
    };
  }
}

/**
 * @schema ETCDSnapshotFile
 */
export interface EtcdSnapshotFileProps {
  /**
   * @schema ETCDSnapshotFile#metadata
   */
  readonly metadata?: ApiObjectMetadata;

  /**
   * @schema ETCDSnapshotFile#spec
   */
  readonly spec?: EtcdSnapshotFileSpec;
}

/**
 * Converts an object of type 'EtcdSnapshotFileProps' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_EtcdSnapshotFileProps(
  obj: EtcdSnapshotFileProps | undefined,
): Record<string, any> | undefined {
  if (obj === undefined) {
    return undefined;
  }
  const result = {
    metadata: obj.metadata,
    spec: toJson_EtcdSnapshotFileSpec(obj.spec),
  };
  // filter undefined values
  return Object.entries(result).reduce(
    (r, i) => (i[1] === undefined ? r : { ...r, [i[0]]: i[1] }),
    {},
  );
}
/* eslint-enable max-len, quote-props */

/**
 * @schema EtcdSnapshotFileSpec
 */
export interface EtcdSnapshotFileSpec {
  /**
   * @schema EtcdSnapshotFileSpec#location
   */
  readonly location?: string;

  /**
   * @schema EtcdSnapshotFileSpec#metadata
   */
  readonly metadata?: { [key: string]: string };

  /**
   * @schema EtcdSnapshotFileSpec#nodeName
   */
  readonly nodeName?: string;

  /**
   * @schema EtcdSnapshotFileSpec#s3
   */
  readonly s3?: EtcdSnapshotFileSpecS3;

  /**
   * @schema EtcdSnapshotFileSpec#snapshotName
   */
  readonly snapshotName?: string;
}

/**
 * Converts an object of type 'EtcdSnapshotFileSpec' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_EtcdSnapshotFileSpec(
  obj: EtcdSnapshotFileSpec | undefined,
): Record<string, any> | undefined {
  if (obj === undefined) {
    return undefined;
  }
  const result = {
    location: obj.location,
    metadata: obj.metadata === undefined
      ? undefined
      : Object.entries(obj.metadata).reduce(
        (r, i) => (i[1] === undefined ? r : { ...r, [i[0]]: i[1] }),
        {},
      ),
    nodeName: obj.nodeName,
    s3: toJson_EtcdSnapshotFileSpecS3(obj.s3),
    snapshotName: obj.snapshotName,
  };
  // filter undefined values
  return Object.entries(result).reduce(
    (r, i) => (i[1] === undefined ? r : { ...r, [i[0]]: i[1] }),
    {},
  );
}
/* eslint-enable max-len, quote-props */

/**
 * @schema EtcdSnapshotFileSpecS3
 */
export interface EtcdSnapshotFileSpecS3 {
  /**
   * @schema EtcdSnapshotFileSpecS3#bucket
   */
  readonly bucket?: string;

  /**
   * @schema EtcdSnapshotFileSpecS3#endpoint
   */
  readonly endpoint?: string;

  /**
   * @schema EtcdSnapshotFileSpecS3#endpointCA
   */
  readonly endpointCa?: string;

  /**
   * @schema EtcdSnapshotFileSpecS3#insecure
   */
  readonly insecure?: boolean;

  /**
   * @schema EtcdSnapshotFileSpecS3#prefix
   */
  readonly prefix?: string;

  /**
   * @schema EtcdSnapshotFileSpecS3#region
   */
  readonly region?: string;

  /**
   * @schema EtcdSnapshotFileSpecS3#skipSSLVerify
   */
  readonly skipSslVerify?: boolean;
}

/**
 * Converts an object of type 'EtcdSnapshotFileSpecS3' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_EtcdSnapshotFileSpecS3(
  obj: EtcdSnapshotFileSpecS3 | undefined,
): Record<string, any> | undefined {
  if (obj === undefined) {
    return undefined;
  }
  const result = {
    bucket: obj.bucket,
    endpoint: obj.endpoint,
    endpointCA: obj.endpointCa,
    insecure: obj.insecure,
    prefix: obj.prefix,
    region: obj.region,
    skipSSLVerify: obj.skipSslVerify,
  };
  // filter undefined values
  return Object.entries(result).reduce(
    (r, i) => (i[1] === undefined ? r : { ...r, [i[0]]: i[1] }),
    {},
  );
}
/* eslint-enable max-len, quote-props */
