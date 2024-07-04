export class Reservation {
    constructor(
        public id?: number,
        public userId?: string,
        public maisonId?: number,
        public chambreId?: number,
        public date_debut?: Date,
        public date_fin?: Date,
        public isConfirmed?: boolean
    ) { }
}

export class EventCalendar {
    constructor(
        public title?: string,
        public start?: string,
        public end?: string
    ) { }
}

export class image {
    constructor(
        public id?: number,
        public titre?: string,
        public data?: string,
        public maisonId?: number,
        public chambreId?: number
    ) { }
}
export class Commentaire {
    constructor(
        public id?: number,
        public contenu?: string,
        public date?: Date,
        public maisonId?: number,
        public chambreId?: number,
        public userId?: string
    ) { }

}

export class Message {
    constructor(
        public id?: number,
        public userName?: string,
        public text?:string,
        public date?:Date,
        public userId?: string,
    ){}
}

export class Destination {
    constructor(
        public NomDestination?: string,
        public images?:string,
        public information?:string,
        public lienWikepedia?: string,
    ){}
}