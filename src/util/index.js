export class Util {
    static truncate(text) {
        let result = text;
        if (text.length > 40) result = `${text.substr(0, 60)}...`;

        return result;
    }

    static objToArray(obj) {
        let keys = Object.keys(obj);

        return keys.map(id => ({
            ...obj[id], id
        }))
    }
}