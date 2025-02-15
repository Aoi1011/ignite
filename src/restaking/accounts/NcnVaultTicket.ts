/**
 * This code was GENERATED using the solita package.
 * Please DO NOT EDIT THIS FILE, instead rerun solita to update it or write a wrapper to add functionality.
 *
 * See: https://github.com/metaplex-foundation/solita
 */

import * as web3 from "@solana/web3.js";
import * as beet from "@metaplex-foundation/beet";
import * as beetSolana from "@metaplex-foundation/beet-solana";
import { SlotToggle, slotToggleBeet } from "../types/SlotToggle";

/**
 * Arguments used to create {@link NcnVaultTicket}
 * @category Accounts
 * @category generated
 */
export type NcnVaultTicketArgs = {
  ncn: web3.PublicKey;
  vault: web3.PublicKey;
  index: beet.bignum;
  state: SlotToggle;
  bump: number;
  reserved: number[] /* size: 263 */;
};
/**
 * Holds the data for the {@link NcnVaultTicket} Account and provides de/serialization
 * functionality for that data
 *
 * @category Accounts
 * @category generated
 */
export class NcnVaultTicket implements NcnVaultTicketArgs {
  private constructor(
    readonly ncn: web3.PublicKey,
    readonly vault: web3.PublicKey,
    readonly index: beet.bignum,
    readonly state: SlotToggle,
    readonly bump: number,
    readonly reserved: number[] /* size: 263 */,
  ) {}

  /**
   * Creates a {@link NcnVaultTicket} instance from the provided args.
   */
  static fromArgs(args: NcnVaultTicketArgs) {
    return new NcnVaultTicket(
      args.ncn,
      args.vault,
      args.index,
      args.state,
      args.bump,
      args.reserved,
    );
  }

  /**
   * Deserializes the {@link NcnVaultTicket} from the data of the provided {@link web3.AccountInfo}.
   * @returns a tuple of the account data and the offset up to which the buffer was read to obtain it.
   */
  static fromAccountInfo(
    accountInfo: web3.AccountInfo<Buffer>,
    offset = 0,
  ): [NcnVaultTicket, number] {
    return NcnVaultTicket.deserialize(accountInfo.data, offset);
  }

  /**
   * Retrieves the account info from the provided address and deserializes
   * the {@link NcnVaultTicket} from its data.
   *
   * @throws Error if no account info is found at the address or if deserialization fails
   */
  static async fromAccountAddress(
    connection: web3.Connection,
    address: web3.PublicKey,
    commitmentOrConfig?: web3.Commitment | web3.GetAccountInfoConfig,
  ): Promise<NcnVaultTicket> {
    const accountInfo = await connection.getAccountInfo(
      address,
      commitmentOrConfig,
    );
    if (accountInfo == null) {
      throw new Error(`Unable to find NcnVaultTicket account at ${address}`);
    }
    return NcnVaultTicket.fromAccountInfo(accountInfo, 0)[0];
  }

  /**
   * Provides a {@link web3.Connection.getProgramAccounts} config builder,
   * to fetch accounts matching filters that can be specified via that builder.
   *
   * @param programId - the program that owns the accounts we are filtering
   */
  static gpaBuilder(
    programId: web3.PublicKey = new web3.PublicKey(
      "RestkWeAVL8fRGgzhfeoqFhsqKRchg6aa1XrcH96z4Q",
    ),
  ) {
    return beetSolana.GpaBuilder.fromStruct(programId, ncnVaultTicketBeet);
  }

  /**
   * Deserializes the {@link NcnVaultTicket} from the provided data Buffer.
   * @returns a tuple of the account data and the offset up to which the buffer was read to obtain it.
   */
  static deserialize(buf: Buffer, offset = 0): [NcnVaultTicket, number] {
    return ncnVaultTicketBeet.deserialize(buf, offset);
  }

  /**
   * Serializes the {@link NcnVaultTicket} into a Buffer.
   * @returns a tuple of the created Buffer and the offset up to which the buffer was written to store it.
   */
  serialize(): [Buffer, number] {
    return ncnVaultTicketBeet.serialize(this);
  }

  /**
   * Returns the byteSize of a {@link Buffer} holding the serialized data of
   * {@link NcnVaultTicket}
   */
  static get byteSize() {
    return ncnVaultTicketBeet.byteSize;
  }

  /**
   * Fetches the minimum balance needed to exempt an account holding
   * {@link NcnVaultTicket} data from rent
   *
   * @param connection used to retrieve the rent exemption information
   */
  static async getMinimumBalanceForRentExemption(
    connection: web3.Connection,
    commitment?: web3.Commitment,
  ): Promise<number> {
    return connection.getMinimumBalanceForRentExemption(
      NcnVaultTicket.byteSize,
      commitment,
    );
  }

  /**
   * Determines if the provided {@link Buffer} has the correct byte size to
   * hold {@link NcnVaultTicket} data.
   */
  static hasCorrectByteSize(buf: Buffer, offset = 0) {
    return buf.byteLength - offset === NcnVaultTicket.byteSize;
  }

  /**
   * Returns a readable version of {@link NcnVaultTicket} properties
   * and can be used to convert to JSON and/or logging
   */
  pretty() {
    return {
      ncn: this.ncn.toBase58(),
      vault: this.vault.toBase58(),
      index: (() => {
        const x = <{ toNumber: () => number }>this.index;
        if (typeof x.toNumber === "function") {
          try {
            return x.toNumber();
          } catch (_) {
            return x;
          }
        }
        return x;
      })(),
      state: this.state,
      bump: this.bump,
      reserved: this.reserved,
    };
  }
}

/**
 * @category Accounts
 * @category generated
 */
export const ncnVaultTicketBeet = new beet.BeetStruct<
  NcnVaultTicket,
  NcnVaultTicketArgs
>(
  [
    ["ncn", beetSolana.publicKey],
    ["vault", beetSolana.publicKey],
    ["index", beet.u64],
    ["state", slotToggleBeet],
    ["bump", beet.u8],
    ["reserved", beet.uniformFixedSizeArray(beet.u8, 263)],
  ],
  NcnVaultTicket.fromArgs,
  "NcnVaultTicket",
);
