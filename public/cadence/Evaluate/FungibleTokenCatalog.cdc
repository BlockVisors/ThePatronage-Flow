import FungibleToken from 0x9a0766d93b6608b7
import FlowToken from 0x7e60df042a9c0868
import DapperUtilityCoin from 0x82ec283f88a62e65
import FlowUtilityToken from 0x82ec283f88a62e65
import FUSD from 0xe223d8a629e49c68

access(all) contract FungibleTokenCatalog {

    /// VaultSchema
    /// Data about a fungible token vault path and type information
    access(all) struct VaultSchema {
        access(all) let type: Type
        access(all) let contractName: String
        access(all) let storagePath: StoragePath
        access(all) let publicPath: PublicPath
        access(all) let publicLinkedType: Type
        access(all) let privatePath: PrivatePath?
        access(all) let privateLinkedType: Type?

        init(
            type: Type,
            contractName: String,
            storagePath: StoragePath,
            publicPath: PublicPath,
            publicLinkedType: Type,
            privatePath: PrivatePath?,
            privateLinkedType: Type?
        ) {
            self.type = type
            self.contractName = contractName
            self.storagePath = storagePath
            self.publicPath = publicPath
            self.publicLinkedType = publicLinkedType
            self.privatePath = privatePath
            self.privateLinkedType = privateLinkedType
        }
    }

    /// getVaultForType
    /// Function to return vault information for a given fungible token vault type.
    access(all) fun getVaultForType(vaultType: Type): VaultSchema? {
        switch vaultType {
            case Type<@FlowToken.Vault>():
                return VaultSchema(
                    type: Type<@FlowToken.Vault>(),
                    contractName: "FlowToken",
                    storagePath: StoragePath(identifier: "flowTokenVault")!,
                    publicPath: PublicPath(identifier: "flow")!,
                    publicLinkedType: Type<@FlowToken.Vault{FungibleToken.Receiver, FungibleToken.Balance}>(),
                    privatePath: PrivatePath(identifier: "flow")!,
                    privateLinkedType: Type<@FlowToken.Vault{FungibleToken.Provider}>()
                )
            case Type<@DapperUtilityCoin.Vault>():
                return VaultSchema(
                    type: Type<@DapperUtilityCoin.Vault>(),
                    contractName: "DapperUtilityCoin",
                    storagePath: StoragePath(identifier: "dapperUtilityCoinVault")!,
                    publicPath: PublicPath(identifier: "dapperUtilityCoinReceiver")!,
                    publicLinkedType: Type<@DapperUtilityCoin.Vault{FungibleToken.Receiver}>(),
                    privatePath: PrivatePath(identifier: "dapperUtilityCoinVault")!,
                    privateLinkedType: Type<@DapperUtilityCoin.Vault{FungibleToken.Provider, FungibleToken.Balance}>()
                )
            case Type<@FlowUtilityToken.Vault>():
                return VaultSchema(
                    type: Type<@FlowUtilityToken.Vault>(),
                    contractName: "FlowUtilityToken",
                    storagePath: StoragePath(identifier: "flowUtilityTokenVault")!,
                    publicPath: PublicPath(identifier: "flowUtilityTokenReceiver")!,
                    publicLinkedType: Type<@FlowUtilityToken.Vault{FungibleToken.Receiver}>(),
                    privatePath: nil,
                    privateLinkedType: nil
                )
            case Type<@FUSD.Vault>():
                return VaultSchema(
                    type: Type<@FUSD.Vault>(),
                    contractName: "FUSD",
                    storagePath: StoragePath(identifier: "fusdVault")!,
                    publicPath: PublicPath(identifier: "fusdReceiver")!,
                    publicLinkedType: Type<@FUSD.Vault{FungibleToken.Receiver}>(),
                    privatePath: nil,
                    privateLinkedType: nil
                )
            default:
                return nil
        }
    }
}
