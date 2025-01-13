import { DateRange } from "./date_range";

describe('DateRange Value Object', () => {

    it('should create a date range instance', () => {
        const startDate = new Date('2025-01-01');
        const endDate = new Date('2025-01-10');

        const dateRange = new DateRange(startDate, endDate);
        expect(dateRange.getStartDate()).toEqual(startDate);
        expect(dateRange.getEndDate()).toEqual(endDate);
    });

    it('should throw error if end date is after start date', () => {

        expect(() => {
            new DateRange(new Date('2025-01-13'), new Date('2025-01-01'));
        }).toThrow('End date must be after start date');
    });

    it('should calculate the number of nights', () => {
        const startDate = new Date('2025-01-01');
        const endDate = new Date('2025-01-10');

        const dateRange = new DateRange(startDate, endDate);

        const totalNights = dateRange.getTotalNights();
        expect(totalNights).toBe(9);

        const startDate2 = new Date('2025-01-01');
        const endDate2 = new Date('2025-02-10');

        const dateRange2 = new DateRange(startDate2, endDate2);

        const totalNights2 = dateRange2.getTotalNights();
        expect(totalNights2).toBe(40);

    });

    it('should verify if two date ranges are equal', () => {
        const startDate = new Date('2025-01-01');
        const endDate = new Date('2025-01-10');

        const dateRange1 = new DateRange(startDate, endDate);

        const startDate2 = new Date('2025-01-02');
        const endDate2 = new Date('2025-01-11');

        const dateRange2 = new DateRange(startDate2, endDate2);

        const overlaps = dateRange1.overlaps(dateRange2);
        expect(overlaps).toBe(true);
    });

    it('should throw error if start and end date are equal', () => {
        const date = new Date('2025-01-01');
        expect(() => {
            new DateRange(date, date);
        }).toThrow("End date don't be equal to start date");
    })
});