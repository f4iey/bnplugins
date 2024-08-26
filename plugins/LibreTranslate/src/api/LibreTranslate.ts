import { LTResponse } from "../type"

const API_URL = "https://tr.f4iey.fr/translate"

const translate = async (text: string, source_lang: string = "auto", target_lang: string, original: boolean = false) => {
    try {
        if (original) return { source_lang, text }
        const data: LTResponse = await (await fetch(API_URL, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                text,
                source_lang,
                target_lang,
                format: "text",
                alternatives: 3,
                api_key: ""
            })
        })).json()
        //if (data.code !== 200) throw Error(`Failed to translate text from LibreTranslate instance: ${data.message}`)
        return { source_lang, text: data.translatedText }
    } catch (e) {
        throw Error(`Failed to fetch from LibreTranslate instance: ${e}`)
    }
}

export default { translate }