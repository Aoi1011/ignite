/**
 * This code was GENERATED using the solita package.
 * Please DO NOT EDIT THIS FILE, instead rerun solita to update it or write a wrapper to add functionality.
 *
 * See: https://github.com/metaplex-foundation/solita
 */

import * as beet from "@metaplex-foundation/beet";
import * as web3 from "@solana/web3.js";
import { NcnAdminRole, ncnAdminRoleBeet } from "../types/NcnAdminRole";

/**
 * @category Instructions
 * @category NcnSetSecondaryAdmin
 * @category generated
 */
export type NcnSetSecondaryAdminInstructionArgs = {
  ncnAdminRole: NcnAdminRole;
};
/**
 * @category Instructions
 * @category NcnSetSecondaryAdmin
 * @category generated
 */
export const NcnSetSecondaryAdminStruct = new beet.BeetArgsStruct<
  NcnSetSecondaryAdminInstructionArgs & {
    instructionDiscriminator: number;
  }
>(
  [
    ["instructionDiscriminator", beet.u8],
    ["ncnAdminRole", ncnAdminRoleBeet],
  ],
  "NcnSetSecondaryAdminInstructionArgs",
);
/**
 * Accounts required by the _NcnSetSecondaryAdmin_ instruction
 *
 * @property [_writable_] ncn
 * @property [**signer**] admin
 * @property [] newAdmin
 * @category Instructions
 * @category NcnSetSecondaryAdmin
 * @category generated
 */
export type NcnSetSecondaryAdminInstructionAccounts = {
  ncn: web3.PublicKey;
  admin: web3.PublicKey;
  newAdmin: web3.PublicKey;
};

export const ncnSetSecondaryAdminInstructionDiscriminator = 18;

/**
 * Creates a _NcnSetSecondaryAdmin_ instruction.
 *
 * @param accounts that will be accessed while the instruction is processed
 * @param args to provide as instruction data to the program
 *
 * @category Instructions
 * @category NcnSetSecondaryAdmin
 * @category generated
 */
export function createNcnSetSecondaryAdminInstruction(
  accounts: NcnSetSecondaryAdminInstructionAccounts,
  args: NcnSetSecondaryAdminInstructionArgs,
  programId = new web3.PublicKey("RestkWeAVL8fRGgzhfeoqFhsqKRchg6aa1XrcH96z4Q"),
) {
  const [data] = NcnSetSecondaryAdminStruct.serialize({
    instructionDiscriminator: ncnSetSecondaryAdminInstructionDiscriminator,
    ...args,
  });
  const keys: web3.AccountMeta[] = [
    {
      pubkey: accounts.ncn,
      isWritable: true,
      isSigner: false,
    },
    {
      pubkey: accounts.admin,
      isWritable: false,
      isSigner: true,
    },
    {
      pubkey: accounts.newAdmin,
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
