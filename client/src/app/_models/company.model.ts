export interface ICompanyInfo {
    id: number;
    companyName: string;
    companyType: CompanyType;
    address: string;
    city: string;
    postalCode: string;
    nip: string;
}

export enum CompanyType {
    Individual = 1,
    Cooperative,
    CivilianCompany,
    OvertCompany,
    PartnerCompany,
    LimitedPartnershipCompany,
    LimitedJSPartnershipCompany,
    StockCompany,
    LimitedLiabilityCompany
}
