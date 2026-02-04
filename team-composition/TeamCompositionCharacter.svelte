<script lang="ts">
    import LinkConsts from "$lib/constants/LinkConsts"
    import DynamicMediaUtils from "$lib/utility/DynamicMediaUtils"
    import { getContext, onMount } from "svelte"
    import TeamCompositionFrameSelect from "./TeamCompositionFrameSelect.svelte"
    import OpenModalBtn from "../generic-modals/OpenModalBtn.svelte"
    import Fa from "svelte-fa"
    import { faArrowRightArrowLeft } from "@fortawesome/free-solid-svg-icons"
    import { get } from "svelte/store"

    interface Props {
        color?: UI.TeamComposition.TeamColor
        leader?: boolean
        frame: string
        text?: any
    }

    let { color = "blue", leader = false, frame, text = frame }: Props = $props()

    let frameValue = $state("")
    let textValue = $state("")
    $effect(() => {
        frameValue = frame
        textValue = text
    })

    let controller = getContext<UI.TeamComposition.Controller>("team-composition")
    let frameList: string[] = $state([frame])
    if (controller != null) {
        controller.selectedFrameIndex.subscribe((i) => {
            frameValue = controller.getSelectedFrame()
            textValue = frameValue
        })
        frameList = get(controller.frameList)
    }
</script>

<div class="relative w-28 team-composition-character">
    <span class="frame-color color-{color} z-20">{color}</span>

    <div class="w-full relative rounded-[50%] overflow-hidden z-10">
        {#if leader}
            <div class="leader">LEADER</div>
        {/if}
        <a href={LinkConsts.Characters.Individual(frameValue)}>
            <img
                src={DynamicMediaUtils.GetCharacterPortraitImage(frameValue, "default", 240)}
                alt="Icon"
                class="character w-full color-{color}"
            />
        </a>
    </div>

    <p class="uppercase text-center frame-name">
        {textValue}
    </p>
    {#if frameList.length > 1}
        <OpenModalBtn
            classes="p-2 rounded-full z-20 absolute top-0 right-0 bg-gr-red-active"
            component={TeamCompositionFrameSelect}
            props={{
                color,
                controller,
            }}
        >
            <Fa icon={faArrowRightArrowLeft} style="margin:auto" size="sm" />
        </OpenModalBtn>

        <OpenModalBtn
            classes="text-center mt-0 bg-gr-red-active w-full text-sm"
            component={TeamCompositionFrameSelect}
            props={{
                color,
                controller,
            }}
        >
            SWITCH
        </OpenModalBtn>
    {/if}
</div>

<style lang="postcss">
    .leader {
        @apply w-full absolute bottom-[0.35rem]  bg-[#357ef6] text-center text-white;
        box-shadow: 0px 0px 10px 1px #0000004d;
        font-size: 13px;
        font-weight: 400;
    }
    .character {
        @apply aspect-[1] border-white border-2 rounded-[50%];
    }
    .color-blue {
        @apply bg-team-blue;
    }
    .color-yellow {
        @apply bg-team-yellow;
    }
    .color-red {
        @apply bg-team-red;
    }
    .frame-name {
        @apply bg-white uppercase text-center text-black;
        font-size: 13px;
        margin-top: 7px;
    }
    .frame-color {
        @apply border-white border-2 top-0 left-0 absolute text-center uppercase px-2;
    }
    .modal-backdrop {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: #00000080;
    }
</style>
