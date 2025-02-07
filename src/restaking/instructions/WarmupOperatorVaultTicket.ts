/**
 * This code was GENERATED using the solita package.
 * Please DO NOT EDIT THIS FILE, instead rerun solita to update it or write a wrapper to add functionality.
 *
 * See: https://github.com/metaplex-foundation/solita
 */

import * as beet from "@metaplex-foundation/beet";
import * as web3 from "@solana/web3.js";

/**
 * @category Instructions
 * @category WarmupOperatorVaultTicket
 * @category generated
 */
export const WarmupOperatorVaultTicketStruct = new beet.BeetArgsStruct<{
  instructionDiscriminator: number;
}>(
  [["instructionDiscriminator", beet.u8]],
  "WarmupOperatorVaultTicketInstructionArgs",
);
/**
 * Accounts required by the _WarmupOperatorVaultTicket_ instruction
 *
 * @property [] config
 * @property [] operator
 * @property [] vault
 * @property [_writable_] operatorVaultTicket
 * @property [**signer**] admin
 * @category Instructions
 * @category WarmupOperatorVaultTicket
 * @category generated
 */
export type WarmupOperatorVaultTicketInstructionAccounts = {
  config: web3.PublicKey;
  operator: web3.PublicKey;
  vault: web3.PublicKey;
  operatorVaultTicket: web3.PublicKey;
  admin: web3.PublicKey;
};

export const warmupOperatorVaultTicketInstructionDiscriminator = 15;

/**
 * Creates a _WarmupOperatorVaultTicket_ instruction.
 *
 * @param accounts that will be accessed while the instruction is processed
 * @category Instructions
 * @category WarmupOperatorVaultTicket
 * @category generated
 */
export function createWarmupOperatorVaultTicketInstruction(
  accounts: WarmupOperatorVaultTicketInstructionAccounts,
  programId = new web3.PublicKey("RestkWeAVL8fRGgzhfeoqFhsqKRchg6aa1XrcH96z4Q"),
) {
  const [data] = WarmupOperatorVaultTicketStruct.serialize({
    instructionDiscriminator: warmupOperatorVaultTicketInstructionDiscriminator,
  });
  const keys: web3.AccountMeta[] = [
    {
      pubkey: accounts.config,
      isWritable: false,
      isSigner: false,
    },
    {
      pubkey: accounts.operator,
      isWritable: false,
      isSigner: false,
    },
    {
      pubkey: accounts.vault,
      isWritable: false,
      isSigner: false,
    },
    {
      pubkey: accounts.operatorVaultTicket,
      isWritable: true,
      isSigner: false,
    },
    {
      pubkey: accounts.admin,
      isWritable: false,
      isSigner: true,
    },
  ];

  const ix = new web3.TransactionInstruction({
    programId,
    keys,
    data,
  });
  return ix;
}
