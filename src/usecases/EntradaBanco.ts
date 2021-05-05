class EntradaBanco {

    public register(stringDate: string): string 
    {
        const stringToDate = new Date(stringDate);
        if(Number.isNaN(stringToDate.getDate())){
            throw new Error("Invalid Format");
        };

        if(!this.inWorkingHours(stringToDate)) {
            throw new Error("Not in working hours");
        }

        return stringDate
    }

    public checkFormat(stringDate :string): boolean {
        
        const regex = new RegExp('[0-9]{4}-[0-9]{2}-[0-9]{2} [0-9]{2}:[0-9]{2}:[0-9]{2}')
        return regex.test(stringDate);
    }

    private inWorkingHours (date: Date): boolean {//YYYY-mm-dd H:i:s 
        const hours = date.getHours();
        return hours >= 10 && hours <= 16;
    }
}

export { EntradaBanco }

