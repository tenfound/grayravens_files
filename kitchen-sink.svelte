<script>
    import Toc from "$lib/components/tableofcontents/Toc.svelte"
    import TocItem from "$lib/components/tableofcontents/TocItem.svelte"
    import TocList from "$lib/components/tableofcontents/TocList.svelte"
    import Notification from "$lib/components/standalone/Notification.svelte"
    import Dropdown from "$lib/components/standalone/Dropdown.svelte"
    import FaqBody from "$lib/components/faq/FaqBody.svelte"
    import FaqContainer from "$lib/components/faq/FaqContainer.svelte"
    import FaqHeader from "$lib/components/faq/FaqHeader.svelte"
    import Spoiler from "$lib/components/standalone/Spoiler.svelte"

    import TeamComposition from "$lib/components/team-composition/TeamComposition.svelte"
    import TeamCompositionContainer from "$lib/components/team-composition/TeamCompositionContainer.svelte"
    import TeamCompositionText from "$lib/components/team-composition/TeamCompositionText.svelte"
    import TeamCompositionCharacter from "$lib/components/team-composition/TeamCompositionCharacter.svelte"
    import TeamCompositionTextSelector from "$lib/components/team-composition/TeamCompositionTextSelector.svelte"

    import Pager from "$lib/components/pager/Pager.svelte"
    import PagerSelector from "$lib/components/pager/PagerSelector.svelte"
    import PagerSelectorList from "$lib/components/pager/PagerSelectorList.svelte"
    import PagerElement from "$lib/components/pager/PagerElement.svelte"

    import CharacterCard from "$lib/components/cards/CharacterCard.svelte"
    import HeaderGradient from "$lib/components/headers/HeaderGradient.svelte"
    import HeaderNotch from "$lib/components/headers/HeaderNotch.svelte"
    import HeaderSolid from "$lib/components/headers/HeaderSolid.svelte"
    import InformationTable from "$lib/components/standalone/InformationTable.svelte"
    import StarsSpan from "$lib/components/standalone/StarsSpan.svelte"

    import TextHighlighter from "$lib/components/standalone/TextHighlighter.svelte"
    import ViewPortLazyLoad from "$lib/components/standalone/ViewPortLazyLoad.svelte"
    import CubCard from "$lib/components/cards/CubCard.svelte"
    import ItemCard from "$lib/components/cards/ItemCard.svelte"
    import { PageTab, PageTabPanel, PageTabs, PageTabList } from "$lib/components/pagetabs/PageTabs"
    import StandardMetaTags from "$lib/components/standalone/StandardMetaTags.svelte"

    import TitleBackground from "$lib/components/standalone/TitleBackground.svelte"
    import PrismCode from "$lib/components/standalone/PrismCode.svelte"
    import { Tabs, Tab, TabPanel, TabList } from "$lib/components/tabber/tabs"
    import { decode } from "html-entities"
    let imageImport = decode("&#123;import&#46;meta&#46;env&#46;VITE_ASSETS_SERVER&#125;")
</script>

<StandardMetaTags title="Kitchen Sink" robots="noindex"></StandardMetaTags>
<!-- Button component to link to conventions -->
<!-- <button on:click={() => handleClickButton()}>Conventions</button> -->

<div class="main-content">
    <HeaderGradient><h1>Kitchen Sink</h1></HeaderGradient>
    <br />
    <p>
        This page describes and showcases major components the website uses, as well as their import lines, which will
        hopefully help you in your editing.
    </p>
    <br />
    <Toc idPrefix="main-toc">
        <TocList>
            <TocItem text="Cards" href="#cards">
                <TocList>
                    <TocItem href="#cub-card" text="Cub Containers"></TocItem>
                    <TocItem href="#character-card" text="Character Cards"></TocItem>
                    <TocItem href="#item-card" text="Item Containers"></TocItem>
                </TocList>
            </TocItem>
            <TocItem text="Team Composition" href="#team-comp"></TocItem>
            <TocItem text="Heading Components" href="#heading-components">
                <TocList>
                    <TocItem text="Header Gradient" href="#header-gradient"></TocItem>
                    <TocItem text="Header Solid" href="#header-solid"></TocItem>
                    <TocItem text="Header Notch" href="#header-notch"></TocItem>
                </TocList>
            </TocItem>
            <TocItem text="Page Related Components" href="#page-components">
                <TocList>
                    <TocItem text="Standard Meta Tags" href="#standard-meta-tags"></TocItem>
                    <TocItem text="Under Construction" href="#under-construction"></TocItem>
                </TocList>
            </TocItem>
            <TocItem text="Table Components" href="#table-components">
                <TocList>
                    <TocItem text="Information Table" href="#information-table"></TocItem>
                    <TocItem text="Table of Contents" href="#table-of-contents"></TocItem>
                </TocList>
            </TocItem>
            <TocItem text="Sectioning Components" href="#sectioning">
                <TocList>
                    <TocItem text="Tabs" href="#tabs"></TocItem>
                    <TocItem text="PageTabs" href="#page-tabs"></TocItem>
                </TocList>
            </TocItem>
            <TocItem text="Major Layout" href="#major-layout">
                <TocList>
                    <TocItem text="TitleBackground" href="#title-background"></TocItem>
                </TocList>
            </TocItem>
            <TocItem text="Other Components" href="#other-components">
                <TocList>
                    <TocItem text="Faq" href="#faq"></TocItem>
                    <TocItem text="Stars Span" href="#stars-span"></TocItem>
                    <TocItem text="Dropdown" href="#dropdown"></TocItem>
                    <TocItem text="Notification" href="#notification"></TocItem>
                    <TocItem text="Spoiler" href="#spoiler"></TocItem>
                    <TocItem text="Text Highlighter" href="#text-highlighter"></TocItem>
                    <TocItem text="Media Viewer" href="#media-viewer"></TocItem>
                    <!--<TocItem text="View Port Lazy Load" href="#view-port"></TocItem>-->
                </TocList>
            </TocItem>
        </TocList>
    </Toc>
    <br />

    <section class="bg-containers-light flex flex-col p-4 gap-2">
        <h2 id="cards">
            Cards
            <hr />
        </h2>
        <section class="bg-containers-medium p-4">
            <h3 id="cub-card">Cub Cards</h3>
            <hr />
            <p>
                This component is usually used when you need to display a Cub. When rendered, it also allows you to jump
                directly to the cub's information page when clicked.
                <br /><br />
            </p>
            <div class="flex gap-4 flex-col md:flex-row items-center justify-center">
                <CubCard cub={{ id: "boreas", name: "Boreas", rank: "S", energy: "ice" }} />
            </div>
            <h4>Component Import Line:</h4>

            <PrismCode language="typescript">import CubCard from "$lib/components/cards/CubCard.svelte"</PrismCode>

            <div class="py-4">
                <ul>
                    <li>
                        <span class="parameter-color">cub</span>: Object type. It uses the following proprieties:
                        <ul>
                            <li><span class="parameter-color">id:</span> String type. The ID of the CUB.</li>
                            <li><span class="parameter-color">name:</span> String type. The name of the CUB. <br /></li>
                            <li>
                                <span class="parameter-color">rank:</span>String type. Represents the rarity of the CUB.
                                Should be either "A" or "S".<br />
                            </li>
                            <li>
                                <span class="parameter-color">energy:</span>String type. Represents the energy type of
                                the CUB. Can only have the values of "dark", "fire", "ice", "lighting", "physical" or
                                "nihil".
                            </li>
                        </ul>
                    </li>
                </ul>
            </div>

            <h4>Sample:</h4>
            <PrismCode language="svelte">
                {`<CubCard cub={{ id: "boreas", name: "Boreas", rank: "S", energy: "ice" }} />`}
            </PrismCode>
        </section>
        <br />

        <div class="bg-containers-medium p-4">
            <h3 id="character-card">Character Cards</h3>
            <hr />
            <p>
                Character Cards can be used to quickly show what characters are being referenced in your context. Like
                CUB cards, when clicked, will direct the user to their respective Character Pages.
            </p>
            <div class="flex gap-4 flex-col md:flex-row items-center justify-center">
                <CharacterCard character={{ id: "lotus", frame: "Lotus", class: "tank", energy: "fire", rank: "A" }} />
                <CharacterCard
                    character={{
                        id: "lotus",
                        frame: "Lotus",
                        class: "tank",
                        energy: "nihil",
                        rank: "S",
                        effect: "glaciation",
                    }}
                />
            </div>
            <Notification color="red">OUTDATED</Notification>
            <h4>Component Import Line:</h4>
            <PrismCode language="typescript">
                import CharacterCard from "$lib/components/cards/CharacterCard.svelte"
            </PrismCode>

            <div class="py-4">
                To hard code this component, you will need the following parameters:
                <br />
                <ul>
                    <li>
                        <span class="parameter-color">charId:</span>String type. Represents the ID of the character.
                    </li>
                    <li>
                        <span class="parameter-color">frameName:</span> String type. Represents the name of the frame.
                    </li>
                    <li>
                        <span class="parameter-color">frameClass:</span>String type. Represents the class of the
                        charater. Can only have the values of "attacker", "tank", "support", "amplifier", "vanguard or
                        "annihilator".
                    </li>
                    <li>
                        <span class="parameter-color">energyType:</span>String type. Represents the energy type of the
                        character. Can only have the values of "ice", "dark", "fire", "lightning", "physical" or
                        "nihil".
                    </li>
                    <li>
                        <span class="parameter-color">rank:</span> String type. Rarity of Character. Can only have the values
                        of "B", "A", or "S".
                    </li>
                </ul>
            </div>

            <h4>Sample:</h4>
            <PrismCode language="svelte">
                {`<CharacterCard character={{id:"lotus", frame:"Lotus", class:"tank", energy:"fire", rank:"A"}} />`}
            </PrismCode>
        </div>
        <br />

        <div class="bg-containers-medium p-4">
            <h3 id="item-card">Item Cards</h3>
            <hr />
            <p>
                Can be used to dislay rewards for stages, events etc. Similar to Character Card & Cub Container, will
                let users jump to item details when clicked, and be hard coded or coded with the help of json data.
            </p>
            <br />
            <div class="flex gap-4 flex-col md:flex-row items-center justify-center">
                <ItemCard item={{ id: "black-card", name: "Black Card", stars: 5 }} label="Example" showGrade={false}
                ></ItemCard>
                <ItemCard item={{ id: "serum", name: "Serum", stars: 2 }} label="Stamina"></ItemCard>
            </div>
            <br />
            <h4>Component Import Line:</h4>
            <PrismCode language="typescript">import ItemCard from "$lib/components/cards/ItemCard.svelte"</PrismCode>

            <ul class="py-4">
                <li>
                    <span class="parameter-color">item:</span> Object type. It uses the following proprieties
                    <ul>
                        <li>
                            <span class="parameter-color">id:</span> String type. Item ID.
                        </li>
                        <li>
                            <span class="parameter-color">name:</span> String type. Item Name.
                        </li>
                        <li>
                            <span class="parameter-color">stars:</span> Number type. Item rarity. It must be a number from
                            1 to 6
                        </li>
                    </ul>
                </li>
                <li>
                    <span class="parameter-color">label:</span> String type. Optional. The text that is displayed below the
                    card.
                </li>
                <li>
                    <span class="parameter-color">showGrade:</span> Boolean type. Optional, defaults to true. Determines
                    whether supply rarity image will show.
                </li>
                <li>
                    <span class="parameter-color">size:</span> String type. Optional, defaults to "md". Size of the card.
                    Can only have the values of "sm", "md" or "lg".
                </li>
                <li>
                    <span class="parameter-color">textSize:</span> String type. Optional, defaults to "md". Size of label
                    text.Can only have the values of "sm", "md" or "lg".
                </li>
            </ul>
            <h4>Sample:</h4>
            <PrismCode language="svelte">
                {`
            <ItemCard item={{ id: "blackcard", name: "Black Card", stars: 5 }} label="Example" showGrade={false} />
            <ItemCard item={{ id: "serum", name: "Serum", stars: 2 }} label="Stamina" />
            `}
            </PrismCode>
        </div>
        <!--
        <br />
        <div class="bg-containers-medium p-4">
            <h3><a id="stat-hexagon">Stat Hexagon</a></h3>
            <hr />
            <p>
                This component is mainly used to display a particular characters' stats, which can be found in the data
                tab for each character page.
            </p>
            <br />
            <div class="w-full max-w-xs mx-auto">
                <StatHexagon area={80} burst={60} single={40} support={25} survival={100}></StatHexagon>
            </div>

            <h4>Component Import Line:</h4>
            <PrismCode language="typescript"> StatHexagon from "$lib/components/modules/StatHexagon.svelte"</PrismCode>

            <p class="py-4">
                This component can take in 6 parameters, all corresponding to each side of a Hexagon, with a default
                value of 0. Meaning if there were to be Stats that have a value of 0, they need not be used in the
                component. We also do not need to use these parameters in any particular order.
                <br /><br />
                The values for each character can be obtained by using the json data for characters, or manually setting
                it. If you are manually setting these values, do refer to the stas at the very bottom of the character's
                json file. These files can be found under the path: "src\lib\data\character_data\&#123Character&#125".
                <br /><br />
                Do note that if you were to just render the component as is, it would be HUGE. Therefore, it is advised to
                set its size using Tailwind css classes. Do look up the Max Width sizing class for more information.
            </p>

            <h4>Sample Format for Stat Hexagon:</h4>
            <PrismCode language="svelte">
                    &lt;StatHexagon area=&#123;80&#125; burst=&#123;60&#125; single=&#123;40&#125; support=&#123;25&#125; survival=&#123;100&#125; /&gt;
                </PrismCode>
        </div>
        -->
    </section>
    <br />
    <br />

    <div class="team-components bg-containers-light flex flex-col p-4 gap-2">
        <h2 id="team-comp">Team Composition Components</h2>
        <hr />
        <div class="bg-containers-medium p-4">
            <h3 id="team-composition-character">Team Composition Character (TCChar)</h3>
            <p>
                Displays the portrait of a character. It works similarly to the CharacterCard component, but displays
                the information in a different format. Used in conjunction with
                <a class="link-internal" href="#tctext">{"<TeamCompositionText>"}</a> to give users a description of what
                the character does in a team composition.
            </p>
            <br />
            <div class="flex gap-4 flex-col md:flex-row items-center justify-center">
                <TeamCompositionCharacter color="blue" frame="lux"></TeamCompositionCharacter>
                <TeamCompositionCharacter color="yellow" frame="crimson-abyss" text="crimsom abyss" leader
                ></TeamCompositionCharacter>
            </div>
            <br />
            <h4>Component Import Line:</h4>

            <PrismCode language="typescript">
                import TeamCompositionCharacter from "$lib/components/team-composition/TeamCompositionCharacter.svelte"
            </PrismCode>
            <p class="py-4">
                Variables this component uses:<br />
                <span class="parameter-color">Colour:</span> Can only have the values of red, blue and yellow. The
                colour set should correspond to what position in the character lineup they should be in.<br />
                <span class="parameter-color">Frame:</span> The name of the construct frame. &lpar;only the name of the
                frame, not the character&rpar;<br />
                <span class="parameter-color">Leader:</span> Set to false by default. This tag should only be used on
                the character whose leader skill is being used.
                <span class="parameter-color">Text:</span> Optional, defaults to whatever value "Frame" is. Affects the
                white text box under the character portrait.
                <br /><br />
            </p>
            <h4>Sample format for this component:</h4>
            <PrismCode language="svelte">
                {`<TeamCompositionCharacter color="yellow" frame="crimsonabyss" leader/>`}
                {`<TeamCompositionCharacter color="yellow" frame="crimsonabyss"/>`}
            </PrismCode>
        </div>
        <br />

        <div class="bg-containers-medium p-4">
            <h3 id="tctext">Team Composition Text (TCText)</h3>
            <hr />
            <p>
                A container for character descriptions - how they synergise with & function in the team.
                <br /><br />
                <TeamCompositionText>希望这些知识能帮着你啊</TeamCompositionText>
                <br />
            </p>
            <h4>Component Import Line:</h4>
            <PrismCode language="typescript">
                import TeamCompositionText from "$lib/components/team-composition/TeamCompositionText.svelte"
            </PrismCode>

            <p class="py-4">
                It only has 1 parameter:
                <br />
                <span class="parameter-color">Colour:</span> Can only have the values of red, blue and yellow. If no value
                is set, default will be blue.
            </p>

            <h4>Sample format for component:</h4>
            <PrismCode language="svelte">
                &lt;TeamCompositionText color="yellow"&gt;Sample Text 1&lt;/TeamCompositionText&gt;
            </PrismCode>
        </div>
        <br />

        <div class="bg-containers-medium p-4">
            <h3 id="team-composition">Team Composition (TC)</h3>
            <hr />
            <p>
                This component imports the previous 2 components (TCChar & TCText), meaning: you can directly import
                this component when creating a Teammate for Team lineups. If mulitple characters can fit into 1 slot, we
                can instead declare a list of frames in a singular TC component, as shown below.
            </p>
            <br />
            <TeamComposition color="red" frame="rozen"
                >*Whoosh* *Mechanical Door Opens* "Captain on bridge."</TeamComposition
            >
            <br />
            <TeamComposition color="blue" frame={["pavo", "garnet"]} leader>
                <TeamCompositionTextSelector frame="pavo">Shows up when Pavo is selected</TeamCompositionTextSelector>
                <TeamCompositionTextSelector frame="garnet"
                    >Shows up when Garnet is selected</TeamCompositionTextSelector
                >
            </TeamComposition>
            <br />
            <h4>Component import line:</h4>
            <PrismCode language="typescript">
                {`
                import TeamComposition from "$lib/components/team-composition/TeamComposition.svelte"
                import TeamCompositionTextSelector from "$lib/components/team-composition/TeamCompositionTextSelector.svelte"
                `}
            </PrismCode>

            <p class="py-4">
                The component has 3 parameters, all of which should be in small letters whose values should be of type
                String when used:
                <br />
                <span class="parameter-color">Colour:</span> Can only have the values of "red", "blue" and "yellow".
                (Used by TCChar and TCText)<br />
                <span class="parameter-color">Frame:</span> The name of the construct frame. If a string array is passed
                into this component, it will allow users to switch between the characters through a
                <a href="https://www.w3schools.com/w3css/w3css_modal.asp" class="link-external" target="_blank">modal</a
                >. Doing this requires you to import
                <span class="orange-highlight">{"<TeamCompositionTextSelector>"}</span><a
                    class="red-highlight"
                    href="#ref-1">[1]</a
                >
                such that the text is updated corresponding to the user's selection. <br />
                <span class="parameter-color">Leader:</span> Set to false by default.
            </p>

            <h4>Sample Code format for component:</h4>
            <PrismCode language="svelte">
                {`
                // Non Leader
                <TeamComposition color="red" frame="lotus">Sample Text</TeamComposition> 

                // Leader
                <TeamComposition color="yellow" frame="lotus" leader>Sample Text</TeamComposition>

                // If more than 1 frame can be used in the team slot
                <TeamComposition color="blue" frame={["pavo", "garnet"]}>
                    <TeamCompositionTextSelector frame="pavo">Shows up when Pavo is selected</TeamCompositionTextSelector>
                    <TeamCompositionTextSelector frame="garnet">Shows up when Garnet is selected</TeamCompositionTextSelector>
                </TeamComposition>
                `}
            </PrismCode>
            <br />
            <p>
                <span class="red-highlight" id="ref-1">[1]</span> Nummber of TeamCompositionTextSelector components should
                correspond to how many frames you declared in the TeamComposition component. Only has "frame" as a parameter.
                To link the two, ensure "frame" is the same as the character you want to link the description to. Example
                is shown above.
            </p>
        </div>
        <br />

        <div class="bg-containers-medium p-4">
            <h3 id="team-composition">Team Composition Container (TCCont)</h3>
            <hr />
            <p class="py-4">
                This component is mainly serves as a "container" for your team composition and helps format all TC
                components neatly.
            </p>

            <h4>Component Import Line:</h4>
            <PrismCode language="typescript">
                import TeamCompositionContainer from "$lib/components/team-composition/TeamCompositionContainer.svelte"
            </PrismCode>
        </div>
        <br />

        <div class="bg-containers-medium p-4">
            <h3 id="combined-team-comp">Using Team Composition Components together</h3>
            <hr />
            <p>
                The following is a demonstration of how TCCont and TC are used together, ie. An example of a team
                lineup.
                <br />
            </p>

            <TeamCompositionContainer>
                <TeamComposition color="red" frame="lotus" leader>欢迎你回来，指挥长 ⸜(｡˃ ᵕ ˂ )⸝♡</TeamComposition>
                <TeamComposition color="yellow" frame="eclipse">Jersey Liv</TeamComposition>
                <TeamComposition color="blue" frame={["tenebrion", "crocotta"]}>
                    <TeamCompositionTextSelector frame="tenebrion">Hey Shikikan!</TeamCompositionTextSelector>
                    <TeamCompositionTextSelector frame="crocotta">Bye Shikikan!</TeamCompositionTextSelector>
                </TeamComposition>
            </TeamCompositionContainer>
            <br />

            <h4>Sample Code format for Complete Team Lineup:</h4>
            <PrismCode language="svelte">
                {`
                <TeamCompositionContainer>
                    <TeamComposition color="red" frame="lotus" leader>Sample Text 2</TeamComposition>
                    <TeamComposition color="yellow" frame="eclipse">Sample Text 3</TeamComposition>
                    <TeamComposition color="blue" frame={["tenebrion", "crocotta"]}>
                        <TeamCompositionTextSelector frame="tenebrion">Sample Text 4</TeamCompositionTextSelector>   
                        <TeamCompositionTextSelector frame="crocotta">Sameple Text 5</TeamCompositionTextSelector> 
                    </TeamComposition>
                </TeamCompositionContainer>
                `}
            </PrismCode>
        </div>
    </div>
    <br /><br />

    <section class="heading-styles bg-containers-light flex flex-col p-4 gap-2">
        <h2 id="heading-components">Heading Components</h2>
        <hr />
        <section class="bg-containers-medium p-4">
            <h3 id="header-gradient">Header Gradient</h3>
            <hr />
            <p>
                <HeaderGradient>I look cool.</HeaderGradient>
                <br />
                A Header with a gradient color background
            </p>
            <br />
            <h3 id="header-solid">Header Solid</h3>
            <hr />
            <p class="py-2">
                <HeaderSolid>I am a clear distinguisher that the topic has changed.</HeaderSolid>
                <br />
                Header with a solid color background
            </p>
            <br />
            <h3 id="header-notch">Header Notch</h3>
            <hr />
            <p class="py-2">
                <HeaderNotch>I am used when displaying content.</HeaderNotch>
                <br />
                Header with a red bar to the right
            </p>
            <br />
            <h4>Component Import Lines:</h4>
            <PrismCode language="typescript">
                {`
                import HeaderGradient from "$lib/components/headers/HeaderGradient.svelte"
                import HeaderNotch from "$lib/components/headers/HeaderNotch.svelte"
                import HeaderSolid from "$lib/components/headers/HeaderSolid.svelte"
            `}
            </PrismCode>
            <br />

            <h4>Sample:</h4>
            <PrismCode language="svelte">
                {`
                <HeaderGradient><h2>Title 1</h2></HeaderGradient>
                <HeaderSolid><h2>Title 2</h2></HeaderSolid>
                <HeaderNotch><h2>Title 3</h2></HeaderNotch>
            `}
            </PrismCode>
            <br />
            <p>
                In essence, the header style you should use depends on what purpose the heading serves. Do try your best
                to pick the heading style that suits the page content best.
            </p>
            <p>
                A heading element must always be inside a heading component to define the header level. For more
                information, see <a
                    href="https://www.w3schools.com/tags/tag_hn.asp"
                    class="link-external"
                    target="_blank">h1 to h6 tags</a
                >.
            </p>
        </section>
    </section>
    <br /><br />

    <section class="page-related-components bg-containers-light flex flex-col p-4 gap-2">
        <h2 id="page-components">Page Related Components</h2>
        <hr />
        <section class="bg-containers-medium p-4">
            <h3 id="standard-meta-tags">Standard Meta Tags</h3>
            <hr />
            <p>
                <a href="https://www.w3schools.com/tags/tag_meta.asp" class="link-external" target="_blank">Meta tags</a
                > are HTML elements that provide information about the content on your pages. Metadata is not displayed on
                the page but is machine parsable, meaning browsers are able to know how to display or reload the page, search
                engines are able to direct users to this page using keywords, and other web serives are able to make use
                of this metadata.
            </p>
            <br />
            <h4>Component Import Line:</h4>
            <PrismCode language="typescript"
                >import StandardMetaTags from "$lib/components/standalone/StandardMetaTags.svelte"</PrismCode
            >

            <div class="py-4">
                This component already imports a set of "preset" metatags, so the following props are "add-ons" to the
                metatags already predefined.
                <br /><br />
                <ul>
                    <li>
                        <span class="parameter-color">title:</span>String type. Title of the page.
                    </li>
                    <li>
                        <span class="parameter-color">description:</span>String type. Optional. Short description of the
                        page.
                    </li>
                    <li>
                        <span class="parameter-color">image:</span>String type. Optional, defaults to Gray Ravens' logo.
                        The URL of an image that represetns the page.
                    </li>
                    <li>
                        <span class="parameter-color">cannonical:</span>String type. Optional. The
                        <a
                            href="https://developers.google.com/search/docs/crawling-indexing/consolidate-duplicate-urls#:~:text=A%20rel%3D%22canonical%22%20link,the%20content%20on%20the%20page."
                            target="_blank">canonical</a
                        > URL of the page.
                    </li>
                    <li>
                        <span class="parameter-color">keywords:</span>String array type. Keywords related to the page,
                        giving it more searchability.
                    </li>
                    <li>
                        <span class="parameter-color">ogUrl:</span>String type. Optional. The
                        <a href="https://ogp.me/" target="_blank">Open Graph's</a> URL of the page
                    </li>
                    <li>
                        <span class="parameter-color">robots:</span>String type. Optional. Defines how search engines
                        <a
                            href="https://developers.google.com/search/docs/crawling-indexing/robots-meta-tag"
                            target="_blank">index</a
                        > the page.
                    </li>
                </ul>
            </div>

            <h4>Sample:</h4>
            <PrismCode language="svelte">
                {`
                <StandardMetaTags 
                    title="Karenina: Scire" 
                    description="Karenina:Scire page" 
                    image="${imageImport}/images/characters/scire/portrait/icon.webp" 
                    keywords={["karenina", "scire", "dark", "tank"]} 
                />
                `}
            </PrismCode>

            <p class="py-4">For most cases, only the title and description parameters will be necessary.</p>
        </section>
        <br />

        <div class="bg-containers-medium p-4">
            <h3 id="under-construction">Under Construction</h3>
            <hr />
            <p>This component indicates a page or section is still being developed.</p>
            <br />

            <h4>Component Import Line:</h4>
            <PrismCode language="typescript"
                >import UnderConstruction from "$lib/components/standalone/UnderConstruction.svelte"</PrismCode
            >

            <div class="py-4">
                Parameters:
                <ul>
                    <li>
                        <span class="parameter-color">segmentType: </span>String type. Indicates the component's scope.
                        Can only have the values of "page" or "section"
                    </li>
                    <li>
                        <span class="parameter-color">level: </span>Number type. Optional, it defaults to 2. If
                        segmentType is equal to "section", the level parameter indicates the
                        <a href="https://www.w3schools.com/tags/tag_hn.asp" target="_blank">heading level</a>. Can only
                        have values from 1 to 6.
                    </li>
                </ul>
            </div>
            <h4>Sample:</h4>
            <PrismCode language="svelte">
                {`
            <UnderConstruction segmentType="section" level={3} />
            <UnderConstruction segmentType="page" />
            `}
            </PrismCode>
        </div>
    </section>
    <br /><br />

    <section class="table-components bg-containers-light flex flex-col p-4 gap-2">
        <h2 id="table-components">Table Components</h2>
        <hr />

        <section class="bg-containers-medium p-4">
            <h3 id="information-table">Information Table</h3>
            <p>This component creates a table-like structure to display information in key-value pairs.</p>
            <br />
            <div class="flex flex-col gap-4 w-full">
                <InformationTable
                    information={{
                        Birthday: "2 March",
                        "Model Number": "BPD-72",
                        "Vital Fluid Type": "B",
                        "Mental Age": "16",
                        Height: "163cm",
                        Weight: "42kg",
                    }}
                    tableClasses={"bg-containers-dark p-4"}
                />
                <InformationTable
                    information={{
                        Birthday: "2 March",
                        "Model Number": "BPD-72",
                        "Vital Fluid Type": "B",
                        "Mental Age": "16",
                        Height: "163cm",
                        Weight: "42kg",
                    }}
                    textClasses={"text-sm"}
                    keyClasses={"text-[pink]"}
                    valueClasses={"text-[green]"}
                    tableClasses={"bg-containers-dark p-4"}
                />
            </div>
            <br />

            <h4>Component Import Line:</h4>
            <PrismCode language="typescript">
                import InformationTable from "$lib/components/standalone/InformationTable.svelte"</PrismCode
            >

            <div class="py-4">
                Parameters
                <ul>
                    <li>
                        <span class="parameter-color">information:</span> String dictonary type. Sets the information to
                        be displayed.
                    </li>
                    <li>
                        <span class="parameter-color">keyClasses:</span> String type. Optional. Defines CSS classes applied
                        to the keys' text
                    </li>
                    <li>
                        <span class="parameter-color">valueClasses:</span> String type. Optional. Defines CSS classes applied
                        to the values' text
                    </li>
                    <li>
                        <span class="parameter-color">textClasses:</span> String type. Optional. Defines CSS classes applied
                        to both keys' and values' text
                    </li>
                    <li>
                        <span class="parameter-color">tableClasses:</span> String type. Optional. Defines CSS classes applied
                        to the table
                    </li>
                </ul>
            </div>

            <h4>Sample:</h4>
            <PrismCode language="svelte">
                {`
                <InformationTable
                    information={{
                        Birthday: "2 March",
                        "Model Number": "BPD-72",
                        "Vital Fluid Type": "B",
                        "Mental Age": "16",
                        Height: "163cm",
                        Weight: "42kg",
                    }}
                    tableClasses={"bg-containers-dark p-4"}
                />
                <InformationTable
                    information={{
                        Birthday: "2 March",
                        "Model Number": "BPD-72",
                        "Vital Fluid Type": "B",
                        "Mental Age": "16",
                        Height: "163cm",
                        Weight: "42kg",
                    }}
                    textClasses={"text-sm"}
                    keyClasses={"text-[pink]"}
                    valueClasses={"text-[green]"}
                    tableClasses={"bg-containers-dark p-4"}
                />
                `}
            </PrismCode>
        </section>
        <br />

        <section class="bg-containers-medium p-4">
            <h3 id="table-of-contents">Table of Contents (ToC)</h3>
            <hr />
            <p>
                The component group is made of 3 components: Toc, TocItem and TocList. Toc renders a container, TocList
                is an orderd list and TocItem are the items we put in TocList.
            </p>
            <br />

            <div class="flex gap-4 flex-col md:flex-row items-center justify-center">
                <Toc>
                    <TocItem text="Header Solid" href="#header-solid"></TocItem>
                    <TocItem text="Examples" href="#cards">
                        <TocList>
                            <TocItem text="Character Cards" href="#character-card"></TocItem>
                            <TocItem text="Table of Contents" href="#table-of-contents"></TocItem>
                        </TocList>
                    </TocItem>
                </Toc>
            </div>

            <h4>Component Import Line:</h4>
            <PrismCode language="typescript">
                {`
                import Toc from "$lib/components/tableofcontents/Toc.svelte"
                import TocItem from "$lib/components/tableofcontents/TocItem.svelte"
                import TocList from "$lib/components/tableofcontents/TocList.svelte"
            `}
            </PrismCode>
            <div class="py-4">
                <h4 class="text-yellow-highlight">Toc</h4>
                <p>The TOC container.</p>
                Parameters:
                <ul>
                    <li>
                        <span class="parameter-color">text</span>: String type. Optional, defaults to "Contents". The
                        title of the ToC container
                    </li>
                    <li>
                        <span class="parameter-color">href</span>: String type. Optional. The prefix of the generated
                        IDs of the ToC container elements. Only useful in case there are multiple ToC in the same page.
                    </li>
                </ul>
            </div>
            <div class="py-4">
                <h4 class="text-yellow-highlight">TocItem</h4>
                <p>An Item in the TOC.</p>
                <ul>
                    <li>
                        <span class="parameter-color">text</span>: String type. The text displayed in the item.
                    </li>
                    <li>
                        <span class="parameter-color">href</span>: String type. Must be an the ID of the element the
                        user will be guided to when they click on the item. This parameter behaves exacly the same as
                        <a href="https://www.w3schools.com/tags/tag_a.asp" class="link-external" target="_blank">
                            the href parameter in {"<a>"} elements</a
                        >.
                    </li>
                </ul>
            </div>
            <div class="py-4">
                <h4 class="text-yellow-highlight">TocList</h4>
                <p>
                    A list of TOC Items. It must always be nested inside a {`<TocItem>`}.
                    <br />
                    It doesn't have any parameters.
                </p>
            </div>

            <h4>Sample:</h4>
            <PrismCode language="svelte">
                {`
                    <Toc>
                        <TocItem text="Header Solid" href="#header-solid"></TocItem>
                        <TocItem text="Examples" href="#cards">
                            <TocList>
                                <TocItem text="Character Cards" href="#character-card"></TocItem>
                                <TocItem text="Table of Contents" href="#table-of-contents"></TocItem>
                            </TocList>
                        </TocItem>
                    </Toc>
                    `}
            </PrismCode>
        </section>
    </section>
    <br /><br />
    <section class="tabbing-components bg-containers-light flex flex-col p-4 gap-2">
        <h2 id="sectioning">Sectioning Components</h2>
        <hr />
        <p>
            The following components are used to section content within a page to make it neater or to cleanly separate
            content into distinct parts.
            <br /><br />
            The Code Format for these components are rougly the same. Each tab button will be linked to their corresponding
            panel component e.g. The 1st tab button will be linked to the 1st panel, the 2nd tab button will be linked to
            the 2nd panel, and so on.
        </p>

        <section class="bg-containers-medium p-4">
            <h3 id="tabs">Tabs</h3>
            <hr />
            <p>
                Should be used when you want to tabulate a section of the page. The component is made of 4 other
                components: Tab, Tabs, TabList and TabPanel.
            </p>
            <Tabs>
                <TabList label="Tabs example">
                    <Tab
                        text="1st Tab"
                        image="{import.meta.env.VITE_ASSETS_SERVER}/images/characters/lotus/skills/basic-red.webp"
                    ></Tab>
                    <Tab text="2nd Tab"></Tab>
                    <Tab text="3rd Tab"></Tab>
                </TabList>
                <TabPanel bgColor="light">1st tab content</TabPanel>
                <TabPanel bgColor="medium">2st tab content</TabPanel>
                <TabPanel bgColor="dark">3rd tab content</TabPanel>
            </Tabs>

            <h4>Component Import Line:</h4>
            <PrismCode language="typescript">
                {`import { Tabs, Tab, TabPanel, TabList } from "$lib/components/tabber/tabs"`}
            </PrismCode>
            <div class="flex flex-col gap-4">
                <section class="py-4">
                    <h4 class="text-yellow-highlight">Tabs</h4>
                    <p>
                        The parent component, sets up context for the nested compoennts and manages them. It does not
                        have any parameters
                    </p>
                    Parameters:
                    <ul>
                        <li>
                            <span class="parameter-color">idPrefix</span>: String type. Optional. This parameter will be
                            used as a id prefix for all necessary tab buttons and tab panels. Useful when there are
                            multiple {"<Tabs>}"} in a page.
                        </li>
                        <li>
                            <span class="parameter-color">useHashNavigation</span>: Boolean type. Optional, it defaults
                            to false. Whether the page's URL will be updated according to the selected tab.
                        </li>
                    </ul>
                </section>
                <section class="py-4">
                    <h4 class="text-yellow-highlight">TabList</h4>
                    <p>
                        This component is used to nest {"<Tab>"} components into.
                    </p>
                    Parameters:
                    <ul>
                        <li>
                            <span class="parameter-color">label</span>: String type. Optional. Defines a label for the
                            component. Useful for screen readers.
                        </li>
                    </ul>
                </section>
                <section class="py-4">
                    <h4 class="text-yellow-highlight">Tab</h4>
                    <p>The tab button</p>
                    Parameters:
                    <ul>
                        <li>
                            <span class="parameter-color">text</span>: String type. Text of the tab button.
                        </li>
                        <li>
                            <span class="parameter-color">image</span>: String type. Optional. The URL of an image that
                            will be displayed besides the text.
                        </li>
                        <li>
                            <span class="parameter-color">imageScale</span>: String type. Optional, it defaults to
                            "1.0". The
                            <a
                                href="https://developer.mozilla.org/en-US/docs/Web/CSS/transform-function/scale"
                                target="_blank"
                                class="link-external">CSS scale</a
                            > of the image.
                        </li>
                        <li>
                            <span class="parameter-color">id</span>: String type. Optional, defaults to an
                            auto-generated value based on the text parameter. The ID of the tab button.
                        </li>
                    </ul>
                </section>
                <section class="py-4">
                    <h4 class="text-yellow-highlight">TabPanel</h4>
                    <p>Area where content is shown.</p>
                    Parameters:
                    <ul>
                        <li>
                            <span class="parameter-color">bgColor</span>: String type. Optional, it defaults to "light".
                            The background color of the panel. Can only have the values of "light", "medium", or "dark"
                        </li>
                    </ul>
                </section>
            </div>

            <h4>Sample:</h4>
            <PrismCode language="svelte">
                {`
                   <Tabs>
                        <TabList label="Tabs example">
                            <Tab
                                text="1st Tab"
                                image="${imageImport}/images/characters/lotus/skills/basic-red.webp"
                            ></Tab>
                            <Tab text="2nd Tab"></Tab>
                            <Tab text="3rd Tab"></Tab>
                        </TabList>
                        <TabPanel bgColor="light">1st tab content</TabPanel>
                        <TabPanel bgColor="medium">2st tab content</TabPanel>
                        <TabPanel bgColor="dark">3rd tab content</TabPanel>
                    </Tabs>
                   `}
            </PrismCode>
        </section>
        <br />
        <!--
        <div class="bg-containers-medium p-4">
            <h3><a id="pager">Pager</a></h3>
            <hr />
            Should be used when you want to section an entire page or a large section of one. Unlike the Tabs Component,
            this one does not have a container that holds the content you want to showcase and just kind of site there, but
            similarly to Tabs, it is also made up of 4 other components: Pager, PagerSelectorList, PagerSelector and PagerElement.
            As of writing, this component is not being used in any page.

            <Pager>
                <PagerSelectorList>
                    <PagerSelector text="PagerSelector 1"></PagerSelector>
                    <PagerSelector text="PagerSelector 2"></PagerSelector>
                    <PagerSelector text="Pavo">
                        
                        <div class="flex flex-row items-center gap-x-1">
                            <img
                                src="{import.meta.env
                                    .VITE_ASSETS_SERVER}/images/characters/pavo/portrait/chibi.webp?width=120"
                                alt=""
                                class="w-4"
                            />
                            <span>Pavo</span>
                        </div>
                        
                    </PagerSelector>
                </PagerSelectorList>
                <PagerElement>Content 1</PagerElement>
                <PagerElement>Content 2</PagerElement>
                <PagerElement>
                    <img
                        src="{import.meta.env.VITE_ASSETS_SERVER}/images/characters/pavo/portrait/awaken.webp?width=120"
                        alt=""
                    />
                </PagerElement>
            </Pager>
            <br />

            <h4>Component Import Lines:</h4>
            <PrismCode language="typescript">
                    import Pager from "$lib/components/pager/Pager.svelte"
                    import PagerSelector from "$lib/components/pager/PagerSelector.svelte"
                    import PagerSelectorList from "$lib/components/pager/PagerSelectorList.svelte"
                    import PagerElement from "$lib/components/pager/PagerElement.svelte"
                </PrismCode>

            <p class="py-4">
                The components do not have any parameters you can edit. It's structure and what you can pass into it is
                largely similar to Tabs, just substitute the names and you'll get a functioning Pager Component. Like
                the Tab component, you are able to pass images into PagerSelector as well, but do note that when users
                click on a PagerSelector component, it will turn white making certain images "invisible" when the user
                switches to it.
            </p>

            <h4>Sample Format for Pager Component:</h4>
            <PrismCode language="svelte">
                    &lt;Pager&gt;
                        &lt;PagerSelectorList&gt;
                          &lt;Pager&gt;Pager 1&lt;/Pager&gt;
                          &lt;Pager&gt;Pager 2&lt;/Pager&gt;
                        &lt;/PagerSelectorList&gt;
                        &lt;PagerElement&gt;Pager 1 Content&lt;/PagerElement&gt;
                        &lt;PagerElement&gt;Pager 2 Content&lt;/PagerElement&gt;
                    &lt;/Pager&gt;
                </PrismCode>
        </div>
    -->
        <br />

        <section class="bg-containers-medium p-4">
            <h3 id="page-tabs">PageTabs</h3>
            <hr />
            <p>
                Should be used when the entire page needs to be sectioned. Examples of this component being used is the
                whole Individual Character page. It is comprised of 4 components: PageTabs, PageTabList, PageTab and
                PageTabPanel.
            </p>
            <br />
            <PageTabs
                title="Karenina: Scire"
                subtitle="Subtitle"
                topText="Top Text"
                bottomText="Bottom Text"
                stars={5}
                renderVariation="bigRender"
                bigRender="{import.meta.env.VITE_ASSETS_SERVER}/images/characters/scire/coatings/marchhare.webp"
                bigRenderOffsetY="-120px"
                bigRenderHeightLg="950px"
                smallRenderHeight="300px"
                breakTitle=":"
            >
                <PageTabList>
                    <PageTab text="Tab 1" image="{import.meta.env.VITE_ASSETS_SERVER}/images/menu-icons/swords.webp"
                    ></PageTab>
                    <PageTab text="Tab 2"></PageTab>
                    <PageTab text="Tab 3"></PageTab>
                    <PageTab text="Tab 4" image="{import.meta.env.VITE_ASSETS_SERVER}/images/menu-icons/swords.webp"
                    ></PageTab>
                </PageTabList>
                <PageTabPanel>Text 1</PageTabPanel>
                <PageTabPanel>Text 2</PageTabPanel>
                <PageTabPanel>Text 3</PageTabPanel>
                <PageTabPanel transparent={true}>Text 4</PageTabPanel>
            </PageTabs>
            <br />

            <h4>Component Import Lines:</h4>
            <PrismCode language="typescript">
                {`import { PageTab, PageTabPanel, PageTabs, PageTabList } from "$lib/components/pagetabs/PageTabs"`}
            </PrismCode>

            <div class="flex flex-col gap-4">
                <section class="py-4">
                    <h4 class="text-yellow-highlight">PageTabs</h4>
                    <p>
                        The parent component, sets up context for the nested compoennts and manages them. It is composed
                        of an ambient background image, a text section (title, subtitle, bottom text, top text, and
                        stars), an optional render-like background image. The render-like background image is divided
                        into 2 parts -- big render, and small render:
                    </p>
                    <ul>
                        <li>Small render: The render background image that will be displayed on small screens</li>
                        <li>
                            Big render: The render background image that will be displayed on medium=-size and larger
                            screens
                        </li>
                    </ul>
                    <p>
                        Internally, this component uses the <a href="#title-background" class="link-internal"
                            >{"<TitleBackground>"}</a
                        > component. Their component parameters functions the same.
                    </p>
                    Parameters:
                    <ul>
                        <li>
                            <span class="parameter-color">title</span>: String type. The title of the page.
                        </li>
                        <li>
                            <span class="parameter-color">subtitle</span>: String type. Optional. A subtitle positioned
                            below the title.
                        </li>
                        <li>
                            <span class="parameter-color">bottomText</span>: String type. Optional. A text positioned
                            below the subtitle.
                        </li>
                        <li>
                            <span class="parameter-color">topText</span>: String type. Optional. A text position above
                            the title.
                        </li>
                        <li>
                            <span class="parameter-color">stars</span>: Number type. Optional. A star sequence displayed
                            below the bottom text. It can only have values from 1 to 6. Internally it uses the {"<StarSpan>"}
                            component.
                        </li>
                        <li>
                            <span class="parameter-color">topText</span>: String type. Optional. A text position above
                            the title.
                        </li>
                        <li>
                            <span class="parameter-color">renderType</span>: String type. Optional, it defaults to
                            "renderless". Defines how the background render image behaves. It can only have the values
                            of "renderless", "smallRender", and "bigRender". <br />
                            If this parameter is set to "renderless" no render background image will be displayed.
                            <br />
                            If this parameter is set to "bigRender", the image URL passed by the
                            <span class="parameter-color">bigRender</span>
                            parameter will be displayed on medium-size and larger screens and the image URl passed by the
                            <span class="parameter-color">smallRender</span>
                            parameter will be displayed on small screens. If the
                            <span class="parameter-color">smallRender</span>
                            parameter is not used, its value will default to the
                            <span class="parameter-color">bigRender</span>
                            parameter value.
                            <br />
                            If this parameter is set to "smallRender", the image URL passed by the
                            <span class="parameter-color">smallRender</span> parameter will be used for all screen sizes.
                            Please note that this also means the style/structure used by small screens will on all screens
                            regardless of size.
                        </li>
                        <li>
                            <span class="parameter-color">bigRender</span>: String type. Optional. The URL of the big
                            render image.
                        </li>
                        <li>
                            <span class="parameter-color">bigRenderOffsetY</span>: String type. Optional. The vertical
                            offset of the big render image. It must include the unit of measurement such as "px" or
                            "rem".
                        </li>
                        <li>
                            <span class="parameter-color">bigRenderHeightLg</span>: String type. Optional, it defaults
                            to "900px". The height of the big render background image. It must include the unit of
                            measurement such as "px" or "rem".
                        </li>
                        <li>
                            <span class="parameter-color">smallRender</span>: String type. Optional. The URL of the
                            small render image.
                        </li>
                        <li>
                            <span class="parameter-color">smallRenderHeight</span>: String type. Optional, it defaults
                            to "12rem". The height of the small render image. It must include the unit of measurement
                            such as "px" or "rem".
                        </li>
                        <li>
                            <span class="parameter-color">breakTitle</span>: String type. Optional. If this paremeter is
                            set, the title will break into 2 lines on small screens using this parameter's value as the
                            seperator e.g. if this is set to ":" and the <span class="parameter-color">title</span> is set
                            to "Lucia: Lotus", on small screens 1st line of the title will be "Lucia:", and the 2nd line
                            will be "Lotus".
                        </li>
                        <li>
                            <span class="parameter-color">idPrefix</span>: String type. Optional. A string that will
                            used as a prefix of autogenerated IDs of its managed tab buttons and tab panels.
                        </li>
                    </ul>
                </section>
                <section class="py-4">
                    <h4 class="text-yellow-highlight">PageTabList</h4>
                    <p>
                        This component is used to nest {"<Tab>"} components into.
                    </p>
                    Parameters:
                    <ul>
                        <li>
                            <span class="parameter-color">label</span>: String type. Optional. Defines a label for the
                            component. Useful for screen readers.
                        </li>
                    </ul>
                </section>
                <section class="py-4">
                    <h4 class="text-yellow-highlight">PageTab</h4>
                    <p>The tab button</p>
                    Parameters:
                    <ul>
                        <li>
                            <span class="parameter-color">text</span>: String type. Text of the tab button.
                        </li>
                        <li>
                            <span class="parameter-color">image</span>: String type. Optional. The URL of an image that
                            will be displayed besides the text.
                        </li>
                        <li>
                            <span class="parameter-color">imageScale</span>: String type. Optional, it defaults to
                            "1.0". The
                            <a
                                href="https://developer.mozilla.org/en-US/docs/Web/CSS/transform-function/scale"
                                target="_blank"
                                class="link-external">CSS scale</a
                            > of the image.
                        </li>
                        <li>
                            <span class="parameter-color">id</span>: String type. Optional, defaults to an
                            auto-generated value based on the text parameter. The ID of the tab button.
                        </li>
                    </ul>
                </section>
                <section class="py-4">
                    <h4 class="text-yellow-highlight">PageTabPanel</h4>
                    <p>Area where content is shown.</p>
                    Parameters:
                    <ul>
                        <li>
                            <span class="parameter-color">transperant</span>: Booelan type. Optional, it defaults to
                            false. If set to true, the panel will be slighly transparent.
                        </li>
                        <li>
                            <span class="parameter-color">mode</span>: String type. Optional, it defaults to
                            "prerender". Defines how the panel is rendered. Can only have the value of "prerender" or
                            "render". <br />
                            If mode is equal to "prerender", the panel will be rendered on page load, even if it's not the
                            starting active panel. <br />
                            If mode is equal to render, the panel will only be rendered once it is the active panel. The
                            render process only happens once.
                        </li>
                    </ul>
                </section>
            </div>
            <h4>Sample Format:</h4>
            <PrismCode language="svelte">
                {`
                     <PageTabs
                        title="Karenina: Scire"
                        subtitle="Subtitle"
                        topText="Top Text"
                        bottomText="Bottom Text"
                        stars={5}
                        renderVariation="bigRender"
                        bigRender="${imageImport}/images/characters/scire/coatings/marchhare.webp"
                        bigRenderOffsetY="-120px"
                        bigRenderHeightLg="950px"
                        smallRenderHeight="300px"
                        breakTitle=":"
                    >
                        <PageTabList>
                            <PageTab text="Tab 1" image="${imageImport}/images/menu-icons/swords.webp"></PageTab>
                            <PageTab text="Tab 2"></PageTab>
                            <PageTab text="Tab 3"></PageTab>
                            <PageTab text="Tab 4" image="${imageImport}/images/menu-icons/swords.webp"></PageTab>
                        </PageTabList>
                        <PageTabPanel>Text 1</PageTabPanel>
                        <PageTabPanel>Text 2</PageTabPanel>
                        <PageTabPanel>Text 3</PageTabPanel>
                        <PageTabPanel transparent={true}>Text 4</PageTabPanel>
                    </PageTabs>
                    `}
            </PrismCode>
        </section>
    </section>

    <br /><br />
    <section class="page-related-components bg-containers-light flex flex-col p-4 gap-2">
        <h2 id="major-layout">Major Layout</h2>
        <hr />
        <section class="bg-containers-medium p-4">
            <h3 id="title-background">TitleBackground</h3>
            <hr />
            <p>
                The parent component, sets up context for the nested compoennts and manages them. It is composed of an
                ambient background image, a text section (title, subtitle, bottom text, top text, and stars), an
                optional render-like background image. The render-like background image is divided into 2 parts -- big
                render, and small render:
            </p>
            <ul>
                <li>Small render: The render background image that will be displayed on small screens</li>
                <li>
                    Big render: The render background image that will be displayed on medium=-size and larger screens
                </li>
            </ul>
            <p>
                This component is used internally by the <a href="#page-tabs" class="link-internal">{"<PageTabs>"}</a> component.
                Their common parameters function the same.
            </p>

            <TitleBackground
                title="Haicma: Starveil"
                subtitle="Subtitle"
                topText="Top Text"
                bottomText="Bottom Text"
                stars={5}
                renderVariation="bigRender"
                bigRender="{import.meta.env.VITE_ASSETS_SERVER}/images/characters/starveil/coatings/generic.webp"
                bigRenderOffsetY="-100px"
                bigRenderHeightLg="950px"
                smallRenderHeight="300px"
                breakTitle=":"
            >
                Content
            </TitleBackground>
            <br />
            <h4>Component Import Line:</h4>
            <PrismCode language="typescript"
                >import TitleBackground from "$lib/components/standalone/TitleBackground.svelte"</PrismCode
            >

            <div>
                Parameters:
                <ul>
                    <li>
                        <span class="parameter-color">title</span>: String type. The title of the page.
                    </li>
                    <li>
                        <span class="parameter-color">subtitle</span>: String type. Optional. A subtitle positioned
                        below the title.
                    </li>
                    <li>
                        <span class="parameter-color">bottomText</span>: String type. Optional. A text positioned below
                        the subtitle.
                    </li>
                    <li>
                        <span class="parameter-color">topText</span>: String type. Optional. A text position above the
                        title.
                    </li>
                    <li>
                        <span class="parameter-color">stars</span>: Number type. Optional. A star sequence displayed
                        below the bottom text. It can only have values from 1 to 6. Internally it uses the {"<StarSpan>"}
                        component.
                    </li>
                    <li>
                        <span class="parameter-color">topText</span>: String type. Optional. A text position above the
                        title.
                    </li>
                    <li>
                        <span class="parameter-color">renderType</span>: String type. Optional, it defaults to
                        "renderless". Defines how the background render image behaves. It can only have the values of
                        "renderless", "smallRender", and "bigRender". <br />
                        If this parameter is set to "renderless" no render background image will be displayed.
                        <br />
                        If this parameter is set to "bigRender", the image URL passed by the
                        <span class="parameter-color">bigRender</span>
                        parameter will be displayed on medium-size and larger screens and the image URl passed by the
                        <span class="parameter-color">smallRender</span>
                        parameter will be displayed on small screens. If the
                        <span class="parameter-color">smallRender</span>
                        parameter is not used, its value will default to the
                        <span class="parameter-color">bigRender</span>
                        parameter value.
                        <br />
                        If this parameter is set to "smallRender", the image URL passed by the
                        <span class="parameter-color">smallRender</span> parameter will be used for all screen sizes. Please
                        note that this also means the style/structure used by small screens will on all screens regardless
                        of size.
                    </li>
                    <li>
                        <span class="parameter-color">bigRender</span>: String type. Optional. The URL of the big render
                        image.
                    </li>
                    <li>
                        <span class="parameter-color">bigRenderOffsetY</span>: String type. Optional. The vertical
                        offset of the big render image. It must include the unit of measurement such as "px" or "rem".
                    </li>
                    <li>
                        <span class="parameter-color">bigRenderHeightLg</span>: String type. Optional, it defaults to
                        "900px". The height of the big render background image. It must include the unit of measurement
                        such as "px" or "rem".
                    </li>
                    <li>
                        <span class="parameter-color">smallRender</span>: String type. Optional. The URL of the small
                        render image.
                    </li>
                    <li>
                        <span class="parameter-color">smallRenderHeight</span>: String type. Optional, it defaults to
                        "12rem". The height of the small render image. It must include the unit of measurement such as
                        "px" or "rem".
                    </li>
                    <li>
                        <span class="parameter-color">breakTitle</span>: String type. Optional. If this paremeter is
                        set, the title will break into 2 lines on small screens using this parameter's value as the
                        seperator e.g. if this is set to ":" and the <span class="parameter-color">title</span> is set to
                        "Lucia: Lotus", on small screens 1st line of the title will be "Lucia:", and the 2nd line will be
                        "Lotus".
                    </li>
                </ul>
            </div>

            <h4>Sample:</h4>
            <PrismCode language="svelte">
                {`
                    <TitleBackground
                        title="Haicma: Starveil"
                        subtitle="Subtitle"
                        topText="Top Text"
                        bottomText="Bottom Text"
                        stars={5}
                        renderVariation="bigRender"
                        bigRender="${imageImport}/images/characters/starveil/coatings/generic.webp"
                        bigRenderOffsetY="-100px"
                        bigRenderHeightLg="950px"
                        smallRenderHeight="300px"
                        breakTitle=":"
                    >
                        Content
                    </TitleBackground>
                    `}
            </PrismCode>
        </section>
        <br />
    </section>
    <br /><br />
    <section class="other-components bg-containers-light flex flex-col p-4 gap-2">
        <h2 id="other-components">Other Components</h2>
        <hr />
        <section class="bg-containers-medium p-4">
            <h3 id="faq">Faq</h3>
            <p>
                To create an FAQ Component, we need to import 3 other components: FAQContainer, FAQHeader & FAQBody.
                FAQHeader, a red container, makes the top half of the component. FAQBody, a dark coloured container,
                makes the bottom half of the component. FAQContainer serves as the parent component for the other 2,
                aligning them vertically and relative to it.
            </p>
            <br />

            <FaqContainer>
                <FaqHeader
                    image="{import.meta.env.VITE_ASSETS_SERVER}/images/characters/pavo/portrait/chibi.webp"
                    imageAlt="Qu: Pavo">Gib Qu book</FaqHeader
                >
                <FaqBody style="dark">Text Here</FaqBody>
            </FaqContainer>
            <br />

            <h4>Component Import Lines:</h4>
            <PrismCode language="typescript">
                {`
                import FaqBody from "$lib/components/faq/FaqBody.svelte"
                import FaqContainer from "$lib/components/faq/FaqContainer.svelte"
                import FaqHeader from "$lib/components/faq/FaqHeader.svelte"
            `}
            </PrismCode>

            <div class="py-4">
                FaqHeader parameters:
                <ul>
                    <li><span class="parameter-color">image</span>: String type. Optional. The image's URL.</li>
                    <li>
                        <span class="parameter-color">imageAlt</span>: String type. Optional. The alternative text of
                        the image. Useful for screen readers.
                    </li>
                </ul>
            </div>

            <div class="py-4">
                FaqBody parameters:
                <ul>
                    <li>
                        <span class="parameter-color">style</span>: String type. Optional, it defaults to "light".
                        Determines the background color of the body. Can only have values of "light", "medium", or
                        "dark".
                    </li>
                </ul>
            </div>

            <h4>Sample:</h4>
            <PrismCode language="svelte">
                {`
                    <FaqContainer>
                        <FaqHeader
                            image="${imageImport}/images/characters/pavo/portrait/chibi.webp"
                            imageAlt="Qu: Pavo">Gib Qu book</FaqHeader
                        >
                        <FaqBody style="dark">Text Here</FaqBody>
                    </FaqContainer>
                    `}
            </PrismCode>
        </section>
        <div class="bg-containers-medium p-4">
            <h3 id="stars-span">Stars Span</h3>
            <hr />
            <p>Displays a sequence of colored stars</p>
            <div class="flex gap-4 flex-col md:flex-row items-center justify-center">
                <StarsSpan stars={2}></StarsSpan>
                <StarsSpan stars={3}></StarsSpan>
                <StarsSpan stars={4}></StarsSpan>
                <StarsSpan stars={5}></StarsSpan>
                <StarsSpan stars={6}></StarsSpan>
            </div>

            <h4>Component Import Line:</h4>
            <PrismCode language="typescript"
                >import StarsSpan from "$lib/components/standalone/StarsSpan.svelte"</PrismCode
            >

            <p class="py-4">
                It only has 1 parameter. Changing this parameter will change the number and the color of stars displayed <br
                />
                <span class="parameter-color">stars:</span> Number type. Can only have a value from 1 to 6.
            </p>

            <h4>Sample:</h4>
            <PrismCode language="svelte">
                {`<StarsSpan stars={6} />`}
            </PrismCode>
        </div>
        <br />
        <div class="bg-containers-medium p-4">
            <h3 id="dropdown">Dropdown</h3>
            <hr />
            <p>Simple dropdown component, will show and hide content nested within when the user clicks it.</p>
            <br />
            <div class="flex gap-4 flex-col md:flex-row items-center justify-center">
                <Dropdown>Boo!</Dropdown>
            </div>
            <h4>Component Import Line:</h4>
            <PrismCode language="typescript"
                >import Dropdown from "$lib/components/standalone/Dropdown.svelte"</PrismCode
            >

            <p class="py-4">
                The component can be used as a parent component to other components, but do note that the sizes of
                nested components may get messed up. Component hides text best.
            </p>

            <h4>Sample:</h4>
            <PrismCode language="svelte">&lt;Dropdown&gt;Dropdown Content&lt;/Dropdown&gt;</PrismCode>
        </div>
        <br />

        <div class="bg-containers-medium p-4">
            <h3 id="notification">Notification</h3>
            <hr />
            <p>
                Renders a container on the page. An example of this component being used is the Home page, with the link
                to a form that allows users to provide feedback.
            </p>
            <br />
            <div class="space-y-3">
                <Notification color="red">Warning</Notification>
                <Notification color="blue">Warning</Notification>
            </div>
            <br />
            <h4>Component Import Line:</h4>
            <PrismCode language="typescript"
                >import Notification from "$lib/components/standalone/Notification.svelte"</PrismCode
            >

            <p class="py-4">
                Component has 1 parameter: <span class="parameter-color">color</span>. It only has the values of "red"
                and "blue". Only the red one has a border around the component, which makes it slightly bigger & more
                eye catching. Do note that other objects are able to be nested within this compoennt eg. Images, tables
                & other components.
            </p>

            <h4>Sample:</h4>
            <PrismCode language="svelte">
                {`
                        <Notification color="red">Warning</Notification>
                        <Notification color="blue">Warning</Notification>
                    `}
            </PrismCode>
        </div>

        <div class="bg-containers-medium p-4">
            <h3 id="spoiler">Spoiler</h3>
            <hr />
            <p>
                The component works similarly to Discord's/Reddit's spoilers, in which text is covered up until the user
                clicks on it.
            </p>
            <div class="flex gap-4 flex-col md:flex-row items-center justify-center">
                <Spoiler>Spoiler Text</Spoiler>
            </div>
            <h4>Component Import Line:</h4>
            <PrismCode language="typescript">import Spoiler from "$lib/components/standalone/Spoiler.svelte"</PrismCode>

            <p class="py-4">
                Do note that you are only able to spoiler tag text. Although objects (images, other components etc.)
                themselves are unable to be spoilered, texts inside them will still be marked as spoilers.
            </p>

            <h4>Sample Format for Spoilers:</h4>
            <PrismCode language="svelte">&lt;Spoiler&gt;Spoiler Text&lt;/Spoiler&gt;</PrismCode>
        </div>
        <br />

        <div class="bg-containers-medium p-4">
            <h3 id="text-highlighter">Text Highligher</h3>
            <hr />
            <p>This component highlights text within it based on its parameters.</p>
            <br />
            <div class="flex gap-4 flex-col md:flex-row items-center justify-center">
                <TextHighlighter
                    boldKeywords={["hello", "bye"]}
                    redKeywords={["red"]}
                    orangeKeywords={["orange"]}
                    blueKeywords={["blue"]}
                    linkKeywords={[{ term: "Conventions", link: "/kitchen-sink/conventions" }]}
                    caseSensitive={false}
                    >Hello Red Orange Blue Conventions Phantom Pain Cage 1000s. 10 / 20% / 30 bye</TextHighlighter
                >
            </div>
            <br />
            <section>
                <h4>Parameters</h4>
                <ul>
                    <li>
                        <span class="parameter-color">boldKeywords</span>: Array of strings type. Optional. Collection
                        of strings that will be bold.
                    </li>
                    <li>
                        <span class="parameter-color">redKeywords</span>: Array of strings type. Optional. Collection of
                        strings that will be colored red.
                    </li>
                    <li>
                        <span class="parameter-color">orangeKeywords</span>: Array of strings type. Optional. Collection
                        of strings that will be colored orange.
                    </li>
                    <li>
                        <span class="parameter-color">blueKeywords</span>: Array of strings type. Optional. Collection
                        of strings that will be colored blue.
                    </li>
                    <li>
                        <span class="parameter-color">linkKeywords</span>: Array of objects type. Optional. Collection
                        of string and link pairs. Links will be created on all the assigned strings.
                        <ul>
                            <li>
                                <span class="parameter-color">term</span>: String type. A string that will be associated
                                with a link.
                            </li>
                            <li>
                                <span class="parameter-color">link</span>: String type. The link's URl.
                            </li>
                        </ul>
                    </li>
                    <li>
                        <span class="parameter-color">linkModes</span>: Boolean type. Optional, it defalts to true. If
                        set to true, the comomnent automatically link references to weekly gamemodes. Currently,
                        gamemode keywords include: "ppc", "Phantom Pain Cage", "wz", "War Zone" and "Norman Revival
                        Plan".
                    </li>
                    <li>
                        <span class="parameter-color">useCommonOrangeTerms</span>: Boolean type. Optional, it defalts to
                        true. If true, it automatically colors numbers that end with an 's', "/" and percentages.
                    </li>
                </ul>
            </section>
            <br />
            <section>
                <h4>Sample:</h4>
                <PrismCode language="svelte">
                    {`
                    <TextHighlighter
                        boldKeywords={["hello", "bye"]}
                        redKeywords={["red"]}
                        orangeKeywords={["orange"]}
                        blueKeywords={["blue"]}
                        linkKeywords={[{ term: "Conventions", link: "/kitchen-sink/conventions" }]}
                        caseSensitive={false}
                    >
                        Hello Red Orange Blue Conventions Phantom Pain Cage 1000s. 10 / 20% / 30 bye
                    </TextHighlighter>
                    `}
                </PrismCode>
            </section>
        </div>
        <br />
        <section class="bg-containers-medium p-4">
            <h3 id="media-viewer">Media Viewer</h3>
            <hr />
            <p>
                This component already exists on every page. It makes it so when the user clicks on an image, it opens
                the media viewer and it showcases the clicked image. Users can then expand or download the image from
                the media viewer.
            </p>
            <br />
            <div class="flex gap-4 flex-col md:flex-row items-center justify-center">
                <img
                    src="{import.meta.env.VITE_ASSETS_SERVER}/images/characters/starfarer/portrait/chibi.webp"
                    alt=""
                />
                <img
                    src="{import.meta.env.VITE_ASSETS_SERVER}/images/characters/starfarer/portrait/chibi.webp"
                    alt=""
                    class="open-mv"
                />
            </div>
            <br />
            <p>
                As this component already exists on every page, there is no need to import it.
                <br /><br />
                To use this component, the image needs to have the <span class="parameter-color">open-mv</span> class. Do
                inspect the images above and compare their classes. Only the one on the right has the open-mv class and therefore
                is the only one that can be expanded.
            </p>
            <section>
                <h4>Sample:</h4>
                <PrismCode language="svelte">
                    {`
                        <img src="${imageImport}/images/characters/starfarer/portrait/chibi.webp" alt="Nanami" class="open-mv" />
                    `}
                </PrismCode>
            </section>
        </section>
        <!--
        <section class="bg-containers-medium p-4">
            <h3 id="view-port">View Port Lazy Load</h3>
            <hr />
            <p>
                This will make it such that the component will only render once it appears on the viewport (area that is
                visible to the user on a web page).
            </p>
            <br />
            <ViewPortLazyLoad>
                <div class="flex gap-4 flex-col md:flex-row items-center justify-center">
                    <img
                        src="{import.meta.env.VITE_ASSETS_SERVER}/images/characters/plume/portrait/awaken.webp"
                        class="open-mv"
                        alt="Plume"
                        width="100"
                        height="100"
                    />
                    <p>This image and text is only rendered when it enters the area visible to the user.</p>
                </div>
            </ViewPortLazyLoad>
            <br />
            <h4>Component Import Line:</h4>
            <PrismCode language="typescript">import ViewPortLazyLoad from "$lib/components/standalone/ViewPortLazyLoad.svelte"</PrismCode>

            <p class="py-4">
                Component is used like a div tag, content you want to be rendered only when visible to the user should
                all be passed into this component as children.
            </p>

            <h4>Sample Format for ViewPort Component:</h4>
            <PrismCode language="svelte"> 
                    {`<ViewPortLazyLoad>Sample Text</ViewPortLazyLoad>`} 
                </PrismCode>
        </section>
        -->
    </section>
</div>

<style lang="postcss">
    .parameter-color {
        @apply text-[#FC97B0];
    }

    /* button {
        display: block;
        margin-top: 1rem;
        padding: 0.5rem 1rem;
        font-size: 1rem;
        cursor: pointer;
        background-color: #534fbc;
    } */

    ul {
        list-style: none;
        margin-left: 0;
        padding-left: 0;
    }

    li {
        padding-left: 2em;
        text-indent: -1em;
    }

    li:before {
        content: "+";
        padding-right: 5px;
    }
</style>
