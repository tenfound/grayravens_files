<script lang="ts">
    import HeaderNotch from "$lib/components/headers/HeaderNotch.svelte"
    import ImageLabelDescriptionPair from "$lib/components/standalone/ImageLabelDescriptionPair.svelte"
    import InformationTable from "$lib/components/standalone/InformationTable.svelte"
    import StandardMetaTags from "$lib/components/standalone/StandardMetaTags.svelte"
    import StatHexagon from "$lib/components/standalone/StatHexagon.svelte"
    import StatTable from "$lib/components/standalone/StatTable.svelte"
    import TitleAndBoxDescriptionPair from "$lib/components/standalone/TitleAndBoxDescriptionPair.svelte"
    import PageTabs from "$lib/components/pagetabs/PageTabs.svelte"
    import PageTabsPanel from "$lib/components/pagetabs/PageTabPanel.svelte"
    import PageTabsList from "$lib/components/pagetabs/PageTabList.svelte"
    import PageTab from "$lib/components/pagetabs/PageTab.svelte"
    import TabList from "$lib/components/tabber/TabList.svelte"
    import TabPanel from "$lib/components/tabber/TabPanel.svelte"
    import { Tab, Tabs } from "$lib/components/tabber/tabs"
    import APIEndpoints from "$lib/constants/APIEndpoints"
    import LinkConsts from "$lib/constants/LinkConsts"

    import DynamicMediaUtils from "$lib/utility/DynamicMediaUtils"
    import SkillUtils from "$lib/utility/SkillUtils"
    import StringUtils from "$lib/utility/StringUtils"
    import { GetCharacterEffectDescription } from "$lib/utility/CharacterEffectUtils"
    import Notification from "$lib/components/standalone/Notification.svelte"
    import PatchListData from "$lib/data/PatchData"
    import MemoryBuild from "$lib/components/builds/MemoryBuild.svelte"
    import WeaponBuild from "$lib/components/builds/WeaponBuild.svelte"
    import CubBuild from "$lib/components/builds/CUBBuild.svelte"
    import StandardPanel from "$lib/components/panels/StandardPanel.svelte"
    import VoiceLinePanel from "$lib/components/panels/VoiceLinePanel.svelte"

    const s_svr = import.meta.env.VITE_ASSETS_SERVER

    interface Props {
        data: {
            info: DTOs.CharacterPage.FullPCInfo
            howtoplay_data?: DTOs.HowToPlay.HTPResponse
        }
    }

    let { data }: Props = $props()

    let char = $derived(data.info.character)
    let title = $derived(data.info.character.fullName)
    let bioData = $derived(data.info.character.biography)
    let formattedBioData = $derived({
        Birthday: bioData.activation,
        "Model Number": bioData.modelNumber,
        "Vital Fluid Type": bioData.vitalFluid,
        "Mental Age": bioData["mental-age"],
        Height: bioData.height,
        Weight: bioData.weight,
    })
    let ecoeff = $derived(data.info.character.energyRatio)

    //let charBg = `${s_svr}/images/siteutils/defaultcharbanner.webp`
    //let smallBg = `${s_svr}/images/siteutils/defaultcharbannercropped.webp`
    let smallBg = $derived(DynamicMediaUtils.GetCharSmallBg(char.id))
    let charBg = $derived(DynamicMediaUtils.GetCharBigBg(char.id))
    let displaySettings = $derived(data.info.character.displaySettings)
    let selectedMemIndex = $state(0)

    let frameType = $derived(data.info.character.summary.class != "vanguard" ? "Omniframe" : "Uniframe")
    let metaImage = $derived(
        DynamicMediaUtils.GetPNGVersion(DynamicMediaUtils.GetCharacterPortraitImage(char.id, "awaken"))
    )

    let metaDescription = $derived(
        `${data.info.character.summary.rank}-RANK ${StringUtils.CapitalizeOnlyFirstLetter(
            data.info.character.energyRatio.primary
        )} ${StringUtils.CapitalizeOnlyFirstLetter(data.info.character.summary.class)}`
    )

    let audios: Record<string, HTMLAudioElement> = {}

    let playingAudio: HTMLAudioElement | null = null
    let playingAudiofile: string | null = null
    function PlayVL(file: string) {
        let audio: HTMLAudioElement

        if (audios[file] == null) {
            audio = new Audio(APIEndpoints.VoiceLines.AudioFile(char.id, file))
            audio.addEventListener("ended", (event) => {
                buttonText.textContent = "Play"
                playingAudio = null
                playingAudiofile = null
            })
            audios[file] = audio
        } else {
            audio = audios[file]
        }

        let buttonText = document.querySelector(`button[data-file="${file}"] .button-text`)!

        if (playingAudio == null) {
            audio.play()
            buttonText.textContent = "Stop"
        } else if (playingAudio != audio) {
            playingAudio.pause()
            playingAudio.currentTime = 0

            document.querySelector(`button[data-file="${playingAudiofile}"] .button-text`)!.textContent = "Play"

            audio.play()
            buttonText.textContent = "Stop"
        } else if (playingAudio.paused) {
            audio.play()
            buttonText.textContent = "Stop"
        } else {
            audio.pause()
            playingAudio.currentTime = 0
            buttonText.textContent = "Play"
        }
        playingAudio = audio
        playingAudiofile = file
    }

    let genericCoatings = $derived(char.coatings.filter((c) => c.generic))
    let alternativeCoatings = $derived(char.coatings.filter((c) => !c.generic))

    export const snapshot = {
        restore: (v) => {
            selectedMemIndex = v
        },
        capture: () => {
            return selectedMemIndex
        },
    }

    let videoWidth: number = $state(0)
    let videoHeight: number = $derived(videoWidth * 0.5625)
</script>

<StandardMetaTags
    {title}
    canonical={LinkConsts.Characters.Individual(char.id)}
    description={metaDescription}
    image={metaImage}
    ogUrl={LinkConsts.Characters.Individual(char.id)}
    keywords={new Array(char.name, char.frame, char.fullName)}
/>
{#if !char.releasedInGlobal}
    <Notification color="light-red">Unreleased in the Global version.</Notification>
{/if}

<PageTabs
    bigRenderOffsetY={displaySettings["banner-image-offset"]}
    bigRenderHeightLg={displaySettings["banner-image-height"]}
    title={char.fullName}
    topText={frameType}
    breakTitle={char.fullName.split(":").length > 1 ? ":" : undefined}
    subtitle="{data.info.character.summary.rank}-RANK {StringUtils.CapitalizeOnlyFirstLetter(
        data.info.character.energyRatio.primary
    )} {StringUtils.CapitalizeOnlyFirstLetter(data.info.character.summary.class)}"
    renderVariation="bigRender"
    smallRender={displaySettings["dedicated-small-image"] ? smallBg : undefined}
    bigRender={charBg}
    smallRenderHeight="14.5rem"
>
    <PageTabsList>
        <PageTab image={`${s_svr}/images/menu-icons/swords.webp`} text="Builds"></PageTab>
        <PageTab image={`${s_svr}/images/menu-icons/fire.webp`} text="Skills" imageScale="1.3"></PageTab>
        <PageTab image={`${s_svr}/images/menu-icons/bookmark.webp`} text="Data" imageScale="0.7"></PageTab>
        <PageTab image={`${s_svr}/images/menu-icons/checkroom.webp`} text="Coatings"></PageTab>
        {#if char.voiceLines.length > 0}
            <PageTab image={DynamicMediaUtils.MenuIcon("volume-high")} text="Voice Lines" imageScale="0.8"></PageTab>
        {/if}
        {#if data.howtoplay_data}
            <PageTab image={`${s_svr}/images/menu-icons/fire.webp`} text="How To Play" imageScale="1.3"></PageTab>
        {/if}
    </PageTabsList>
    <PageTabsPanel transparent={true} mode="render">
        <!--Begin memory build-->
        <HeaderNotch>
            <h2>Memory Build</h2>
        </HeaderNotch>
        {#if data.info.builds.length > 0}
            <form class="mt-4">
                <label for="build-filter">Select a build:</label>
                <select
                    class="bg-form-select p-2 rounded w-72 text-white border-0"
                    id="build-filter"
                    bind:value={selectedMemIndex}
                >
                    {#each data.info.builds as build, i}
                        <option value={i}>{build.name}</option>
                    {/each}
                </select>
            </form>

            {#each data.info.builds as build, j}
                <div class="w-full" class:hidden={selectedMemIndex != j}>
                    <MemoryBuild {build} characterId={data.info.character.id} />
                </div>
            {/each}
        {:else}
            <div class="my-4">
                <Notification color="red">We haven't gathered memory builds for {char.fullName} yet.</Notification>
            </div>
        {/if}
        <!--end memory build-->

        <!--Begin weapon build-->
        {#if data.info.bestWeapon != null}
            <section>
                <HeaderNotch>
                    <h2>Best Weapon Build</h2>
                </HeaderNotch>
                <WeaponBuild weapon={data.info.bestWeapon} weaponResoBuild={data.info.character.weaponReso} />
            </section>
        {/if}
        <!--End weapon build-->
        <!--Being cub build-->
        {#if data.info.character.cubBuild != null && data.info.cub != null}
            {@const build = data.info.character.cubBuild}
            {@const cub = data.info.cub}
            <section>
                <HeaderNotch>
                    <h2>Best CUB Build</h2>
                </HeaderNotch>

                <CubBuild {cub} {build} />
            </section>
        {/if}
        <!--End cub build-->
        <!-- Begin Videos -->
        {#if data.info.character.videos && data.info.character.videos.length > 0}
            <section>
                <br />
                <HeaderNotch>
                    <h2>Videos</h2>
                </HeaderNotch>

                <div class="px-4 mt-4">
                    <div bind:clientWidth={videoWidth}>
                        {#each data.info.character.videos as video}
                            {@const url = video.startsWith("https://youtu.be/")
                                ? `https://www.youtube.com/watch?v=${video.split("https://youtu.be/")[1]}`
                                : video}
                            <iframe
                                class="my-2"
                                width={videoWidth ?? 560}
                                height={videoHeight ?? 315}
                                src={url.replace("watch?v=", "embed/")}
                                title="YouTube video player"
                                frameborder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen"
                                referrerpolicy="strict-origin-when-cross-origin"
                            ></iframe>
                        {/each}
                    </div>
                </div>
            </section>
        {/if}
    </PageTabsPanel>
    <PageTabsPanel transparent={true} mode="render">
        {#each SkillUtils.GroupCollections as skillCollection}
            <section>
                <HeaderNotch>
                    <h2>{SkillUtils.GroupNames[skillCollection]}</h2>
                </HeaderNotch>
                <Tabs>
                    <TabList scroll={true}>
                        {#each SkillUtils.Collections[skillCollection] as skillId}
                            <Tab
                                text={SkillUtils.Names[skillId]}
                                image={DynamicMediaUtils.GetChracterSkillImage(char.id, skillId)}
                            ></Tab>
                        {/each}
                    </TabList>
                    {#each SkillUtils.Collections[skillCollection] as skill}
                        {@const skillObj = data.info.character.skills[skill]}
                        <TabPanel bgColor="dark">
                            <section class="skill-section">
                                <div>
                                    <img
                                        src={DynamicMediaUtils.GetChracterSkillImage(char.id, skill)}
                                        alt={skill}
                                        class="w-20 min-w-[5rem]"
                                        width="80"
                                        height="80"
                                    />
                                </div>
                                <div>
                                    <h3>{skillObj.name}</h3>
                                    {#if skillObj.switch}
                                        <span class="text-green-highlight">
                                            {#if char.id != "flamebeau"}
                                                Automatically uses a 3-Ping version of this attack upon switch-in.
                                            {:else}
                                                Automatically uses this attack upon switch-in.
                                            {/if}
                                            {#if skillObj.switchAdditional != null}
                                                <span>{skillObj.switchAdditional}</span>
                                            {/if}
                                        </span>
                                    {/if}
                                    <div class="flex flex-col gap-y-4">
                                        {#each skillObj.sections as section}
                                            <div>
                                                {#if section.name != null}
                                                    <h4>
                                                        {section.name}<span class="text-text-emphasis-blue"
                                                            >{section.condition != null
                                                                ? ` -- ${section.condition}`
                                                                : ""}</span
                                                        >
                                                    </h4>
                                                {:else if section.condition != null}
                                                    <span class="text-text-emphasis-blue">{section.condition} </span>
                                                {/if}
                                                {#if section.switch}
                                                    {#if section.name == null && section.condition != null}
                                                        <br />
                                                    {/if}
                                                    <span class="text-green-highlight">
                                                        Automatically uses this attack upon switch-in.
                                                        {#if section.switchAdditional != null}
                                                            <span>{section.switchAdditional}</span>
                                                        {/if}
                                                    </span>
                                                {/if}
                                                <p class="text-justify">
                                                    {@html section.description}
                                                </p>
                                            </div>
                                        {/each}
                                    </div>
                                </div>
                            </section>
                        </TabPanel>
                    {/each}
                </Tabs>
            </section>
        {/each}
        {#if data.info.character.uniframeSkills != null}
            {@const obj = data.info.character.uniframeSkills}
            {@const patch = PatchListData.find((entry) => entry.id == obj.patchId)}
            <section>
                <HeaderNotch>
                    <h2>Uniframe Skills</h2>
                </HeaderNotch>
                {#if patch != null}
                    <br />
                    <p>
                        This character's Leap is implemented during the <a
                            href={LinkConsts.Patch.Individual(patch.id)}
                            class="link-internal">{patch.name}</a
                        > patch.
                    </p>
                {/if}
                <Tabs>
                    <TabList>
                        <Tab text="Speed Attack"></Tab>
                        <Tab text="Ultimate"></Tab>
                    </TabList>
                    {#each [obj["speed-attack"], obj.ultimate] as section, i}
                        {@const type = i == 0 ? "speed-attack" : "ultimate"}
                        <TabPanel bgColor="dark">
                            <div class="special-skill-section">
                                <div>
                                    <img
                                        src={DynamicMediaUtils.GetCharacterUnifameSkillImage(char.id, type)}
                                        alt={type}
                                        class="w-20 min-w-[5rem]"
                                        width="80"
                                        height="80"
                                    />
                                </div>
                                <div>
                                    <h3>{section.name}</h3>
                                    <div class="flex flex-col gap-y-4">
                                        <div>
                                            <div class="text-justify bg-containers-light p-4">
                                                {@html section.initialEffect}
                                            </div>
                                        </div>
                                        <div>
                                            <span class="underline font-bold">Level 9: </span>
                                            <div class="text-justify bg-containers-light p-4">
                                                {@html section.level9Effect}
                                            </div>
                                        </div>
                                        <div>
                                            <span class="underline font-bold">Level 18: </span>
                                            <div class="text-justify bg-containers-light p-4">
                                                {@html section.level18Effect}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </TabPanel>
                    {/each}
                </Tabs>
                <br />
                <Tabs>
                    <TabList>
                        <Tab text="Enhanced Speed Attack"></Tab>
                        <Tab text="Enhanced Team"></Tab>
                        <Tab text="Enhanced Finishing Move"></Tab>
                    </TabList>

                    <TabPanel bgColor="dark">
                        <div class="special-skill-section">
                            <div>
                                <img
                                    src={DynamicMediaUtils.GetCharacterUnifameSkillImage(
                                        char.id,
                                        "enhanced-speed-attack"
                                    )}
                                    alt="Enhanced Speed Attack"
                                    class="w-20 min-w-[5rem]"
                                    width="80"
                                    height="80"
                                />
                            </div>
                            <div>
                                <h3>Enhanced Speed Attack</h3>

                                <p class="text-justify">
                                    {@html obj["enhanced-speed-attack"].effect}
                                </p>

                                <br />
                                <p>
                                    (Unlock requirement: <b>{obj["speed-attack"].name}</b> reaches Lv 9.)
                                </p>
                            </div>
                        </div>
                    </TabPanel>
                    <TabPanel bgColor="dark">
                        <div class="special-skill-section">
                            <div>
                                <img
                                    src={DynamicMediaUtils.GetCharacterUnifameSkillImage(char.id, "enhanced-team")}
                                    alt="Enhanced Team"
                                    class="w-20 min-w-[5rem]"
                                    width="80"
                                    height="80"
                                />
                            </div>
                            <div>
                                <h3>Enhanced Team</h3>

                                <p class="text-justify">
                                    {@html obj["enhanced-team"].effect}
                                </p>

                                <br />
                                <p>
                                    (Unlock requirement: Both <b>{obj["speed-attack"].name}</b> and
                                    <b>{obj["ultimate"].name}</b> reache Lv 18.)
                                </p>
                            </div>
                        </div>
                    </TabPanel>
                    <TabPanel bgColor="dark">
                        <div class="special-skill-section">
                            <div>
                                <img
                                    src={DynamicMediaUtils.GetCharacterUnifameSkillImage(
                                        char.id,
                                        "enhanced-finishing-move"
                                    )}
                                    alt="Enhanced Finishing Move"
                                    class="w-20 min-w-[5rem]"
                                    width="80"
                                    height="80"
                                />
                            </div>
                            <div>
                                <h3>Enhanced Finishing Move</h3>

                                <p class="text-justify">
                                    {@html obj["enhanced-finishing-move"].effect}
                                </p>

                                <br />
                                <p>
                                    (Unlock requirement: <b>{obj["ultimate"].name}</b> reaches Lv 9.)
                                </p>
                            </div>
                        </div>
                    </TabPanel>
                </Tabs>
            </section>
        {/if}

        {#if data.info.character.leap != null}
            {@const patch = PatchListData.find((entry) => entry.id == data.info.character.leap?.patchId)}
            <section>
                <HeaderNotch>
                    <h2>Leap</h2>
                </HeaderNotch>
                {#if patch != null}
                    <br />
                    <p>
                        This character's Leap is implemented during the <a
                            href={LinkConsts.Patch.Individual(patch.id)}
                            class="link-internal">{patch.name}</a
                        > patch.
                    </p>
                {/if}
                <Tabs>
                    <TabList>
                        {#each data.info.character.leap.sections as section, i}
                            <Tab text={section.name} image={DynamicMediaUtils.GetCharacterLeapSectionImage(char.id, i)}
                            ></Tab>
                        {/each}
                    </TabList>
                    {#each data.info.character.leap.sections as section, i}
                        <TabPanel bgColor="dark">
                            <div class="special-skill-section">
                                <div>
                                    <img
                                        src={DynamicMediaUtils.GetCharacterLeapSectionImage(char.id, i)}
                                        alt={section.name}
                                        class="w-20 min-w-[5rem]"
                                        width="80"
                                        height="80"
                                    />
                                </div>
                                <div>
                                    <h3>{section.name}</h3>
                                    <div class="flex flex-col gap-y-4">
                                        <div>
                                            <div class="text-justify bg-containers-light p-4">
                                                {@html section.initialEffect}
                                            </div>
                                        </div>
                                        <div>
                                            <div class="underline font-bold">Level 9:</div>
                                            <div class="text-justify bg-containers-light p-4">
                                                {@html section.level9Effect}
                                            </div>
                                        </div>
                                        <div>
                                            <div class="underline font-bold">Level 18:</div>
                                            <div class="text-justify bg-containers-light p-4">
                                                {@html section.level18Effect}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </TabPanel>
                    {/each}
                </Tabs>
            </section>
        {/if}
    </PageTabsPanel>
    <PageTabsPanel transparent={true} mode="render">
        <div class="flex flex-col gap-4">
            <div class="flex flex-col lg:flex-row gap-4">
                <div class="flex flex-col gap-4 w-full bg-containers-dark p-4">
                    <TitleAndBoxDescriptionPair title="Description" h2Notch={true}>
                        <p class="text-base text-gray-300">
                            {data.info.character.information}
                        </p>
                    </TitleAndBoxDescriptionPair>
                    {#if data.info.character.effect != null}
                        {@const effect = GetCharacterEffectDescription(data.info.character.effect)}
                        <TitleAndBoxDescriptionPair title="Effect" h2Notch={true}>
                            <p class="text-base text-gray-300">
                                <img
                                    src={DynamicMediaUtils.GetCharacterEffectImage(data.info.character.effect)}
                                    alt={data.info.character.effect}
                                    class="inline w-4"
                                    width="16"
                                    height="16"
                                />
                                <b>{effect.name} - </b>
                                {effect.description}
                            </p>
                        </TitleAndBoxDescriptionPair>
                    {/if}
                    <TitleAndBoxDescriptionPair title="Details" h2Notch={true}>
                        <InformationTable
                            information={formattedBioData}
                            tableClasses={"grid-cols-2"}
                            textClasses={"text-sm"}
                        />
                    </TitleAndBoxDescriptionPair>
                    <div class="py-2">
                        <TitleAndBoxDescriptionPair title="Speciality" h2Notch={true}>
                            {#each data.info.character.specialities as specialty}
                                <div class="text-gray-400 text-base">
                                    {specialty.name}
                                </div>
                                <div class="text-base">
                                    {specialty.description}
                                </div>
                            {/each}
                        </TitleAndBoxDescriptionPair>
                    </div>
                    <TitleAndBoxDescriptionPair title="Icons" h2Notch={true}>
                        <div
                            class="flex flex-col md:items-start md:justify-start md:flex-row justify-center items-center w-full gap-5"
                        >
                            <img
                                class="open-mv"
                                src={DynamicMediaUtils.GetCharacterPortraitImage(data.info.character.id, "default")}
                                alt="default icon"
                                width="100"
                                height="100"
                            />

                            <img
                                class="open-mv"
                                src={DynamicMediaUtils.GetCharacterPortraitImage(data.info.character.id, "chibi")}
                                alt="chibi icon"
                                width="100"
                                height="100"
                            />
                            <img
                                class="open-mv"
                                src={DynamicMediaUtils.GetCharacterPortraitImage(data.info.character.id, "awaken")}
                                alt="awaken icon"
                                width="100"
                                height="100"
                            />
                        </div>
                    </TitleAndBoxDescriptionPair>
                </div>
                <div class="flex flex-col lg:w-4/12 bg-containers-dark">
                    <div class="w-full flex flex-row justify-center items-center">
                        <div class="w-full max-w-sm">
                            <StatHexagon
                                fillColor="red"
                                area={char.reviewStats.area}
                                burst={char.reviewStats.burst}
                                difficulty={char.reviewStats.difficulty}
                                single={char.reviewStats.single}
                                support={char.reviewStats.support}
                                survival={char.reviewStats.survival}
                            />
                        </div>
                    </div>
                    <StatTable
                        hp={data.info.character.stats.hp}
                        def={data.info.character.stats.def}
                        atk={data.info.character.stats.atk}
                        crit={data.info.character.stats.crit}
                    />
                    <div class="flex flex-col gap-4 px-4 pt-4">
                        <ImageLabelDescriptionPair
                            imageSrc={DynamicMediaUtils.GetRankImage(data.info.character.rank)}
                            label="{data.info.character.rank}-Rank"
                            description="Rank"
                        />

                        <ImageLabelDescriptionPair
                            imageSrc={DynamicMediaUtils.GetCharacterClassImage(data.info.character.class, true)}
                            label={StringUtils.CapitalizeOnlyFirstLetter(data.info.character.class)}
                            description="Class"
                        />

                        <ImageLabelDescriptionPair
                            imageSrc={DynamicMediaUtils.GetEnergyTypeImage(ecoeff.primary)}
                            label={StringUtils.StringifyEnergyRatio(ecoeff)}
                            description="Energy"
                        />
                        {#if data.info.gift}
                            <ImageLabelDescriptionPair
                                imageSrc={DynamicMediaUtils.GetItemImage(data.info.gift.id)}
                                label="Gift"
                                description={data.info.gift.name}
                                link={LinkConsts.Items.Individual(data.info.gift.id)}
                            />
                        {:else}
                            <ImageLabelDescriptionPair
                                imageSrc={DynamicMediaUtils.GetGiftComingSoon()}
                                label="Gift"
                                description="T.B.A."
                            />
                        {/if}
                    </div>
                </div>
            </div>

            {#if char.informationData.length > 0}
                <section class="bg-containers-dark p-4">
                    <HeaderNotch>
                        <h2>Information</h2>
                    </HeaderNotch>
                    <div class="grid gap-4 md:grid-flow-col-dense md:grid-rows-3 mt-4">
                        {#each char.informationData as information, i}
                            <StandardPanel title="No.{i + 1}" level={3}>
                                {@html information}
                            </StandardPanel>
                        {/each}
                    </div>
                </section>
            {/if}

            {#if char.secrets.length > 0}
                <section class="bg-containers-dark p-4">
                    <HeaderNotch>
                        <h2>Secrets</h2>
                    </HeaderNotch>
                    <div class="grid gap-4 md:grid-flow-col-dense md:grid-rows-6 mt-4">
                        {#each char.secrets as secret, i}
                            <StandardPanel title="{char.frame}'s Secret {i + 1}" level={3}>
                                {@html secret}
                            </StandardPanel>
                        {/each}
                    </div>
                </section>
            {/if}
        </div>
    </PageTabsPanel>
    <PageTabsPanel transparent={true} mode="render">
        <section class="flex flex-col justify-center items-center">
            <div class="w-full">
                <HeaderNotch><h2>Generic Coatings</h2></HeaderNotch>
                <Tabs>
                    <TabList>
                        {#each genericCoatings as coating}
                            <Tab text={coating.name}></Tab>
                        {/each}
                    </TabList>
                    {#each genericCoatings as coating}
                        <TabPanel>
                            <div class="flex flex-col p-4">
                                <div class="w-full items-center justify-center flex flex-row">
                                    <div class="w-80">
                                        <img
                                            src={DynamicMediaUtils.GetCoating(char.id, coating.id)}
                                            alt={coating.name}
                                            class="w-full open-mv"
                                            width="320"
                                            height="800"
                                        />
                                    </div>
                                </div>

                                <div class="w-full bg-containers-medium text-center p-4">
                                    {@html coating.description}
                                </div>
                            </div>
                        </TabPanel>
                    {/each}
                </Tabs>
            </div>
            {#if alternativeCoatings.length > 0}
                <section class="w-full">
                    <HeaderNotch><h2>Alternative Coatings</h2></HeaderNotch>
                    <Tabs>
                        <TabList>
                            {#each alternativeCoatings as coating}
                                <Tab text={coating.name}></Tab>
                            {/each}
                        </TabList>
                        {#each alternativeCoatings as coating}
                            <TabPanel>
                                <div class="flex flex-col p-4">
                                    <div class="w-full items-center justify-center flex flex-row">
                                        <div class="w-80">
                                            <img
                                                src={DynamicMediaUtils.GetCoating(char.id, coating.id)}
                                                alt={coating.name}
                                                class="w-full open-mv"
                                                width="320"
                                                height="800"
                                            />
                                        </div>
                                    </div>

                                    <div class="w-full bg-containers-medium text-center p-4">
                                        {@html coating.description}
                                    </div>
                                </div>
                            </TabPanel>
                        {/each}
                    </Tabs>
                </section>
            {/if}
        </section>
    </PageTabsPanel>
    {#if char.voiceLines.length > 0}
        <PageTabsPanel transparent={true} mode="render">
            <div class="flex flex-col gap-4">
                {#each char.voiceLines as voiceLine, i}
                    {@const hasAudio = data.info.voiceLinesIndexes.includes(i)}
                    <VoiceLinePanel {voiceLine} level={3} playVL={PlayVL} {hasAudio} />
                {/each}
            </div>
        </PageTabsPanel>
    {/if}
    {#if data.howtoplay_data}
        {@const Comp = data.howtoplay_data}
        <PageTabsPanel transparent={true} mode="render">
            <Comp />
        </PageTabsPanel>
    {/if}
</PageTabs>

<style lang="postcss">
    .skill-section {
        @apply flex flex-col md:flex-row p-4 justify-center items-center md:justify-start gap-x-4;
    }
</style>
