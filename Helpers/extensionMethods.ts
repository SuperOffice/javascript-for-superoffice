
import * as tsclientWebapi from "@superoffice/tsclient.webapi";


class ExtendedContactAgent extends tsclientWebapi.ContactAgent {
    createDefaultContactEntityAsync() {
        return this.CreateDefaultContactEntity();
    }
    getContactEntityAsync(id: number) {
        return this.GetContactEntity(id);
    }
    saveContactEntityAsync(entity: any) {
        return this.SaveContactEntity(entity);
    }
    deleteContactEntityAsync(id: number) {
        return this.DeleteContactEntity(id);
    }
}


class ExtendedPersonAgent extends tsclientWebapi.PersonAgent {
    createDefaultPersonEntityAsync() {
        return this.CreateDefaultPersonEntity();
    }
    getPersonEntityAsync(id: number) {
        return this.GetPersonEntity(id);
    }
    savePersonEntityAsync(entity: any) {
        return this.SavePersonEntity(entity);
    }
    deletePersonEntityAsync(id: number) {
        return this.DeletePersonEntity(id);
    }
}


class ExtendedSaleAgent extends tsclientWebapi.SaleAgent {
    createDefaultSaleEntityAsync() {
        return this.CreateDefaultSaleEntity();
    }
    getSaleEntityAsync(id: number) {
        return this.GetSaleEntity(id);
    }
    saveSaleEntityAsync(entity: any) {
        return this.SaveSaleEntity(entity);
    }
    deleteSaleEntityAsync(id: number) {
        return this.DeleteSaleEntity(id);
    }
}


export const RTL = {
    ContactAgent: ExtendedContactAgent,
    PersonAgent: ExtendedPersonAgent,
    SaleAgent: ExtendedSaleAgent
};
