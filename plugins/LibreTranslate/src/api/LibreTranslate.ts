import { LTResponse } from "../type"
import { logger } from "@vendetta"

const API_URL = "https://tr.f4iey.fr/translate"

const translate = async (q: string, source: string = "auto", target: string, format: string = "text", alternatives: number = 3, api_key: string) => {
    try {
        const data: LTResponse = await (await fetch(API_URL, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                q,
                source,
                target,
                format,
                alternatives,
                api_key
            })
        })).json()
        //if (data.code !== 200) throw Error(`Failed to translate text from LibreTranslate instance: ${data.message}`)
        return { source, text: data.translatedText }
        logger.info(data);
    } catch (e) {
        throw Error(`Failed to fetch from LibreTranslate instance: ${e}`)
    }
}

export default { translate }
