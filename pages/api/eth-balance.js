// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import {processEnv} from "../index";
import {ethers} from "ethers";
export var ETHbalance;
export var ETHblock;
export var account = "0xeB2629a2734e272Bcc07BDA959863f316F4bD4Cf";

export async function getETHBalance(account, provider) {
  try {
    ETHblock = 0;
    ETHbalance = 0;

    return Promise.all([
      (ETHblock = await provider.getBlockNumber()),
      (ETHbalance = await provider.getBalance(account))
    ]).catch((error) => {
      console.log(error);
      return [null, null, null];
    });
  } catch (error) {
    console.log(error);
  }
}
export default async function handler(req, res) {
  const requestMethod = req.method;
  const {NEXT_PUBLIC_RPCENDPOINT} = processEnv;
  const rpcendpoint = NEXT_PUBLIC_RPCENDPOINT;
  const provider = new ethers.providers.JsonRpcProvider(rpcendpoint);
  await getETHBalance(account, provider);

  switch (requestMethod) {
    case 'POST':
      const body = JSON.parse(req.body);
      res.status(200).json({message: `You submitted the following data: ${body}`})

      // handle other HTTP methods
    default:
      res.status(200).json({message: 'Welcome to API Routes! ' + rpcendpoint + ' ' + ETHbalance})
  }
}
