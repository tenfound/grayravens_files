<script lang="ts">
    import DynamicMediaUtils from "$lib/utility/DynamicMediaUtils"
    import { getContext } from "svelte"
    import { CloseModal } from "../singletons/modal-manager/ModalManager.svelte"
    interface Props {
        color?: UI.TeamComposition.TeamColor
        controller?: UI.TeamComposition.Controller
    }

    let { color = "blue", controller = getContext<UI.TeamComposition.Controller>("team-composition") }: Props = $props()

    let frameList = controller.frameList

    function handleCharacterChange(index: number) {
        controller.selectedFrameIndex.set(index)
        CloseModal()
    }
</script>

<div class="modal z-50 rounded-[10px]">
    <div class="modal-content text-center">
        <h3 class="text-white">Character Selection</h3>

        {#each $frameList as char, i}
            <ul>
                <li>
                    <button
                        onclick={() => handleCharacterChange(i)}
                        class="modal-button flex flex-row items-center gap-4 p-1 my-1 rounded w-full"
                    >
                        <img
                            src={DynamicMediaUtils.GetCharacterPortraitImage(char, "default", 240)}
                            alt="Icon"
                            class="character object-contain w-10 h-10 color-{color}"
                        />
                        <p class="uppercase">
                            {char}
                        </p>
                    </button>
                </li>
            </ul>
        {/each}

        <button class="h-6 mt-3" onclick={CloseModal} aria-controls="generic-modal">Close</button>
    </div>
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
    .modal {
        position: fixed;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        padding: 1em;
        @apply bg-[#0e0f14];
    }
    .modal-button {
        width: 100%;
    }
    .exchange {
        width: 25px;
        height: 25px;
        /* position: absolute;
        top: -12px;
        right: -10px; */
    }
    button {
        width: 112px;
        background-color: #95042f;
        font-size: 13px;
    }
</style>
