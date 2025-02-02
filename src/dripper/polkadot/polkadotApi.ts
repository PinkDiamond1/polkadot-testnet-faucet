import "@polkadot/api-augment";
import { ApiPromise } from "@polkadot/api";
import { WsProvider } from "@polkadot/rpc-provider";

import { serverConfig } from "../../config";

const rpcEndpointUrl = serverConfig.Get("RPC_ENDPOINT");
const injectedTypes = JSON.parse(serverConfig.Get("INJECTED_TYPES")) as Record<string, string>;

const provider = new WsProvider(rpcEndpointUrl);
const types = injectedTypes;
const polkadotApi = new ApiPromise({ provider, types });

export default polkadotApi;
