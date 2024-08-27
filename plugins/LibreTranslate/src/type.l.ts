export interface LTResponse {
    alternatives?: string[],
    detectedLanguage?: {
        confidence?: number,
        language?: string
    },
    translatedText?: string
 }