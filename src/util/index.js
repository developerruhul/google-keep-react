export class Util {
    static truncate(text) {
        let result = text;
        if (text.length > 40) result = `${text.substr(0, 60)}...`;

        return result;
    }
}