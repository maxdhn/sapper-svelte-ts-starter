export class DateUtils {
    public static getToday(locale: string) {
        return new Date().toLocaleDateString(locale);
    }
}