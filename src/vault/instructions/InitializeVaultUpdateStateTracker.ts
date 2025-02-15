/**
 * This code was GENERATED using the solita package.
 * Please DO NOT EDIT THIS FILE, instead rerun solita to update it or write a wrapper to add functionality.
 *
 * See: https://github.com/metaplex-foundation/solita
 */

import * as beet from "@metaplex-foundation/beet";
import * as web3 from "@solana/web3.js";
import {
  WithdrawalAllocationMethod,
  withdrawalAllocationMethodBeet,
} from "../types/WithdrawalAllocationMethod";

/**
 * @category Instructions
 * @category InitializeVaultUpdateStateTracker
 * @category generated
 */
export type InitializeVaultUpdateStateTrackerInstructionArgs = {
  withdrawalAllocationMethod: WithdrawalAllocationMethod;
};
/**
 * @category Instructions
 * @category InitializeVaultUpdateStateTracker
 * @category generated
 */
export const InitializeVaultUpdateStateTrackerStruct = new beet.BeetArgsStruct<
  InitializeVaultUpdateStateTrackerInstructionArgs & {
    instructionDiscriminator: number;
  }
>(
  [
    ["instructionDiscriminator", beet.u8],
    ["withdrawalAllocationMethod", withdrawalAllocationMethodBeet],
  ],
  "InitializeVaultUpdateStateTrackerInstructionArgs",
);
/**
 * Accounts required by the _InitializeVaultUpdateStateTracker_ instruction
 *
 * @property [] config
 * @property [_writable_] vault
 * @property [_writable_] vaultUpdateStateTracker
 * @property [_writable_] payer
 * @category Instructions
 * @category InitializeVaultUpdateStateTracker
 * @category generated
 */
export type InitializeVaultUpdateStateTrackerInstructionAccounts = {
  config: web3.PublicKey;
  vault: web3.PublicKey;
  vaultUpdateStateTracker: web3.PublicKey;
  payer: web3.PublicKey;
  systemProgram?: web3.PublicKey;
};

export const initializeVaultUpdateStateTrackerInstructionDiscriminator = 26;

/**
 * Creates a _InitializeVaultUpdateStateTracker_ instruction.
 *
 * @param accounts that will be accessed while the instruction is processed
 * @param args to provide as instruction data to the program
 *
 * @category Instructions
 * @category InitializeVaultUpdateStateTracker
 * @category generated
 */
export function createInitializeVaultUpdateStateTrackerInstruction(
  accounts: InitializeVaultUpdateStateTrackerInstructionAccounts,
  args: InitializeVaultUpdateStateTrackerInstructionArgs,
  programId = new web3.PublicKey("Vau1t6sLNxnzB7ZDsef8TLbPLfyZMYXH8WTNqUdm9g8"),
) {
  const [data] = InitializeVaultUpdateStateTrackerStruct.serialize({
    instructionDiscriminator:
      initializeVaultUpdateStateTrackerInstructionDiscriminator,
    ...args,
  });
  const keys: web3.AccountMeta[] = [
    {
      pubkey: accounts.config,
      isWritable: false,
      isSigner: false,
    },
    {
      pubkey: accounts.vault,
      isWritable: true,
      isSigner: false,
    },
    {
      pubkey: accounts.vaultUpdateStateTracker,
      isWritable: true,
      isSigner: false,
    },
    {
      pubkey: accounts.payer,
      isWritable: true,
      isSigner: false,
    },
    {
      pubkey: accounts.systemProgram ?? web3.SystemProgram.programId,
      isWritable: false,
      isSigner: false,
    },
  ];

  const ix = new web3.TransactionInstruction({
    programId,
    keys,
    data,
  });
  return ix;
}
