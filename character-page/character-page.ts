import APIEndpoints from "$lib/constants/APIEndpoints"
import type { LoadEvent } from "@sveltejs/kit"

export async function load(loadEvent: LoadEvent) {
    const info = <DTOs.CharacterPage.FullPCInfo>loadEvent.data
    const char = info.character

    try {
        const frameAudioMapResponse = await loadEvent.fetch(APIEndpoints.VoiceLines.FrameMap(char.id))
        if (!frameAudioMapResponse.ok) {
            console.log("Error getting voicelines map for " + char.id)
        } else {
            const frameAudioMap: string[] = await frameAudioMapResponse.json()

            for (let i = 0; i < char.voiceLines.length; i++) {
                const vl = char.voiceLines[i]

                if (frameAudioMap.includes(vl.file)) {
                    info.voiceLinesIndexes.push(i)
                }
            }
        }
    } catch (ex) {
        console.error(ex)
    }

    const howtoplay_data = await LoadHowToPlay(loadEvent)

    return {
        info,
        howtoplay_data,
    }
}

async function LoadHowToPlay(loadEvent: LoadEvent) {
    let content = null
    try {
        content = (await import(`../../../lib/data/howtoplay_data/${loadEvent.params.slug?.toLowerCase()}.svelte`))
            .default
        // return (await import(`./../../../../lib/data/howtoplay_data/${loadEvent.params.slug?.toLowerCase()}.svelte`)).default
    } catch (e1) {}
    return content
}
