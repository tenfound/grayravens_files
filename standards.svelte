<!-- @migration-task Error while migrating Svelte code: `<tr>` is invalid inside `<table>` -->
<script>
    import HeaderGradient from "$lib/components/headers/HeaderGradient.svelte"
    import Notification from "$lib/components/standalone/Notification.svelte"
    import PrismCode from "$lib/components/standalone/PrismCode.svelte"
    import StandardMetaTags from "$lib/components/standalone/StandardMetaTags.svelte"

    import Toc from "$lib/components/tableofcontents/Toc.svelte"
    import TocItem from "$lib/components/tableofcontents/TocItem.svelte"
    import TocList from "$lib/components/tableofcontents/TocList.svelte"
    import { decode } from "html-entities"
    let imageImport = decode("&#123;import&#46;meta&#46;env&#46;VITE_ASSETS_SERVER&#125;")
</script>

<StandardMetaTags title="Standards" robots="noindex"></StandardMetaTags>

<div class="main-content">
    <HeaderGradient><h1>Standards</h1></HeaderGradient>
    <br />
    <p>This page covers different standards used on the website.</p>
    <br />
    <Toc>
        <TocItem text="URL Standards" href="#url-standards"></TocItem>
        <TocItem text="ID Generation" href="#id-generation"></TocItem>
        <TocItem text="Image Usage" href="#image-usage"></TocItem>

        <TocList>
            <TocItem text="Chracter Skills" href="#character-skills"></TocItem>
            <TocItem text="Weapons" href="#weapons"></TocItem>
            <TocItem text="Profile Icons" href="#profile-icons"></TocItem>
            <TocItem text="Item Icons" href="#item-icons"></TocItem>
            <TocItem text="Character Coatings" href="#character-coatings"></TocItem>
        </TocList>
    </Toc>
    <br />
    <section class="bg-containers-light flex flex-col p-4 gap-2">
        <section class="bg-containers-medium p-4" id="url-standards">
            <h2>URL Standards</h2>
            <hr />
            <p>
                When creating pages on the website, it's important its URLs comform to the following standards for
                clarity, SEO, and user experience.
            </p>
            <ul class="list-inside list-disc">
                <li>
                    <b>Short and descriptive: </b>URLs short be short and clearly descriptive of their page's content.
                    Unnecessary words should be avoided.
                </li>
                <li><b>Lowercase: </b>URLs should be strictly lowercased.</li>
                <li><b>Hyphens to seperated words: </b>Replace spaces with hyphens (-) to separate words.</li>
                <li>
                    <b>Alphanumeric: </b>URLs should include only numbers and English alphabet characters. Accented
                    characters and special characters such as parentheses, quotes, and periods should not be used.
                    Hyphens are the only allowed non-alphanumeric characters.
                </li>
            </ul>
        </section>
        <section class="bg-containers-medium p-4" id="id-generation">
            <h2>ID Generation</h2>
            <hr />
            <p>
                Each entity — whether a character, CUB, weapon, item, or memory — has an ID which is their file's name.
                When creating a new entity, ensure its ID (and therefore its file name) conforms to the following
                standards:
            </p>
            <ul class="list-inside list-disc">
                <li>
                    <b>Based on name:</b> The ID should derive entirely from the entity's name. For characters, use the name
                    of their frame.
                </li>
                <li><b>Lowercase:</b> All IDs must be in lowercase letters.</li>
                <li><b>Hyphens to seperated words:</b> Replace spaces with hyphens (-) to separate words.</li>
                <li>
                    <b>Alphanumeric:</b> IDs should only include numbers and English alphabet characters. Hyphens are the
                    only allowed non-alphanumeric characters.
                </li>
                <li>
                    <b>Accented Characters:</b> Replace accented characters with their non-accented counterparts.
                </li>
                <li>
                    <b>Special Characters </b>: Greek and German alphabet characters, as well as specific symbols,
                    should be replaced with their English equivalents:
                    <ul class="list-inside list-disc">
                        <li><b>α</b> becomes "alpha".</li>
                        <li><b>β</b> becomes "beta".</li>
                        <li><b>δ</b> becomes "delta".</li>
                        <li><b>ß</b> becomes"ss".</li>
                        <li><b>★</b> becomes "star".</li>
                        These replacements should be separated by hyphens as if they were words.
                    </ul>
                </li>
                <li>
                    <b>Remove Unwanted Characters:</b>Other special characters such as parentheses, quotes, and periods
                    should be removed.
                </li>
            </ul>
            <p><b>Example: </b>The ID for an item named "Serum Bundle β (M)" should be "serum-bundle-beta-m".</p>
            <p>The only exception to this rule is "BLACK★ROCK SHOOTER"</p>
        </section>
        <section class="bg-containers-medium p-4" id="image-usage">
            <h2>Image Usage</h2>
            <hr />
            <p>
                All images are served through assets-server. Usually images would be imported as follows using the
                &ltimg&gt; tag:
            </p>
            <br />
            <PrismCode language="markup">
                {`<img src="https://assets.newravens.online/images/characters/a2/coatings/generic.webp" alt="A2's Generic coating">`}
            </PrismCode>
            <br />
            <p>
                However, {imageImport} should be used instead of "https://assets.newravens.online". So instead of the above
                example, we would use the following example:
            </p>
            <br />
            <PrismCode language="markup">
                {`<img src="${imageImport}/images/characters/a2/coatings/generic.webp" alt="A2's Generic coating">`}
            </PrismCode>
            <br />
            <Notification color="red">All image URLs need to be in lower case.</Notification>
            <br />
            Furthermore, all images must be a descriptive alt attribute.
        </section>
        <section class="bg-containers-medium p-4" id="image-naming">
            <h2>Image Naming</h2>
            <hr />
            The following sections describe how images should be named.
            <br />
            <br />
            <div class="flex flex-col gap-4">
                <section class="bg-containers-dark p-4" id="character-skills">
                    <h3 class="text-3xl">Character Skills</h3>
                    <hr />
                    <div class="flex gap-4 flex-col md:flex-row items-center justify-center">
                        <img
                            src="{import.meta.env
                                .VITE_ASSETS_SERVER}/images/characters/dragontoll/skills/special-signature.webp"
                            alt="Dragontoll signature"
                        />
                    </div>
                    <PrismCode language="markup">
                        {`<img src="${imageImport}/images/characters/{Character ID}/skills/{Category}-{Title}.webp" alt="description">`}
                    </PrismCode>
                    <br />
                    <p>
                        The above is the syntax used for Character skill PNGs. The table below shows what Categories and
                        Titles are available for you to plug into.
                    </p>
                    <br />
                    <section>
                        <h4>Categories & Titles:</h4>
                        <table>
                            <tbody>
                                <tr>
                                    <th>Category</th>
                                    <th>Title</th>
                                </tr>
                                <tr>
                                    <td>basic</td>
                                    <td>red; blue; yellow; attack;</td>
                                </tr>
                                <tr>
                                    <td>special</td>
                                    <td>signature; core; qte;</td>
                                </tr>
                                <tr>
                                    <td>common</td>
                                    <td>leader; class; awakening;</td>
                                </tr>
                                <tr>
                                    <td>evolution</td>
                                    <td>ss; sss; sssp;</td>
                                </tr>
                            </tbody>
                        </table>
                    </section>
                    <br />
                    <section>
                        <h4>Examples:</h4>
                        <PrismCode language="markup">
                            {`
                            <img src="${imageImport}/images/characters/lotus/skills/basic-blue.webp" alt="Lotus'Basic Blue Skill">
                            <img src="${imageImport}/images/characters/pavo/skills/evolution-sssp.webp" alt="Pavo's SSS+ Evolution">
                            <img src="${imageImport}/images/characters/arclight/skills/common-awakening.webp" alt="Arclight's Awakening">
                            <img src="${imageImport}/images/characters/vitrum/skills/special-core.webp" alt="Vitrum's Special Core Skill">
                        `}
                        </PrismCode>
                    </section>
                </section>
                <section class="bg-containers-dark p-4" id="weapons">
                    <h3 class="text-3xl">Weapons</h3>
                    <hr />
                    <div class="flex gap-4 flex-col md:flex-row items-center justify-center">
                        <img src="{import.meta.env.VITE_ASSETS_SERVER}/images/weapons/durendal.webp" alt="" />
                    </div>
                    <section>
                        <h4>Syntax:</h4>
                        <PrismCode language="markup">
                            {`<img src="${imageImport}/images/weapons/{Weapon ID}.webp" alt="description">`}
                        </PrismCode>
                    </section>
                    <br />
                    <section>
                        <h4>Examples:</h4>
                        <PrismCode language="markup">
                            {`
                        <img src="${imageImport}/images/weapons/inverse-chimera.webp" alt="description">
                        <img src="${imageImport}/images/weapons/genesis.webp" alt="description">
                        <img src="${imageImport}/images/weapons/astraea.webp" alt="description">
                        `}
                        </PrismCode>
                    </section>
                </section>
                <section class="bg-containers-dark p-4" id="profile-icons">
                    <h3 class="text-3xl">Profile Icons</h3>
                    <hr />
                    <div class="flex gap-4 flex-col md:flex-row items-center justify-center">
                        <img
                            src="{import.meta.env.VITE_ASSETS_SERVER}/images/characters/xxi/portrait/chibi.webp"
                            alt="XXI chibi"
                        />
                    </div>
                    <section>
                        <h4>Syntax:</h4>
                        <PrismCode language="markup">
                            {`<img src="${imageImport}/images/characters/{Frame Name}/portrait/{Type}.webp" alt="description">`}
                        </PrismCode>
                    </section>
                    <section>
                        <h4>Types:</h4>
                        <table>
                            <tbody>
                                <tr>
                                    <th>Type</th>
                                </tr>
                                <tr>
                                    <td>default; chibi; awaken; icon;</td>
                                </tr>
                            </tbody>
                        </table>
                    </section>
                    <br />
                    <section>
                        <h4>Examples:</h4>
                        <PrismCode language="markup">
                            {`
                        <img src="${imageImport}/images/characters/pavo/portrait/chibi.webp" alt="Pavo's chibi portrait">
                        <img src="${imageImport}/images/characters/plume/portrait/awaken.webp" alt="Plume's awaken portrait">
                        <img src="${imageImport}/images/characters/a2/portrait/default.webp" alt="A2's default portrait">
                        `}
                        </PrismCode>
                    </section>
                </section>
                <section class="bg-containers-dark p-4" id="item-icons">
                    <h3 class="text-3xl">Item Icons</h3>
                    <hr />
                    <div class="flex gap-4 flex-col md:flex-row items-center justify-center">
                        <img
                            src="{import.meta.env.VITE_ASSETS_SERVER}/images/items/black-card.webp"
                            alt="Black Card"
                            width="100"
                            height="100"
                        />
                    </div>
                    <section>
                        <h4>Syntax:</h4>
                        <PrismCode language="markup">
                            {`<img src="${imageImport}/images/items/{Item ID}.webp" alt="description">`}
                        </PrismCode>
                    </section>
                    <br />
                    <section>
                        <h4>Examples:</h4>
                        <PrismCode language="markup">
                            {`
                        <img src="${imageImport}/images/items/6-star-memory-box.webp" alt="description">
                        <img src="${imageImport}/images/items/frog-accessory.webp" alt="description">
                        <img src="${imageImport}/images/items/guinevere-2-piece-set.webp" alt="description">
                        `}
                        </PrismCode>
                    </section>
                </section>

                <section class="bg-containers-dark p-4" id="character-coatings">
                    <h3 class="text-3xl">Character Coatings</h3>
                    <hr />
                    <div class="flex gap-4 flex-col md:flex-row items-center justify-center">
                        <img
                            src="{import.meta.env
                                .VITE_ASSETS_SERVER}/images/characters/plume/coatings/danceofripples.webp"
                            alt="Dance of Ripples"
                            width="300"
                            height="700"
                        />
                    </div>

                    <section>
                        <h4>Syntax</h4>
                        <PrismCode language="markup">
                            {`<img src="${imageImport}/images/characters/{Frame ID}/coatings/{File name}.webp" alt="description">`}
                        </PrismCode>
                    </section>
                    <br />
                    The file name of generic coatings should always be "generic," "genericmodified," and "genericfinal."
                    <br />
                    For alternative coatings, the file name should be chosen from one of the following formats:
                    <ul class="list-inside list-disc">
                        <li>
                            A lowercased version of the coating name with no spaces (e.g., a coating named "Dance of
                            Ripples" should be named "danceofripples").
                        </li>
                        <li>A name in the format "alt" followed by a number, such as "alt1" or "alt2."</li>
                    </ul>
                    <br />
                    <section>
                        <h4>Examples:</h4>
                        <PrismCode language="markup">
                            {`
                        <img src="${imageImport}/images/characters/stigmata/coatings/generic.webp" alt="Stigmata's Generic Coating">
                        <img src="${imageImport}/images/characters/stigmata/coatings/genericfinal.webp" alt="Stigmata's Generic Final Coating">
                        <img src="${imageImport}/images/characters/stigmata/coatings/solitarydream.webp" alt="Solidary Dream">
                        <img src="${imageImport}/images/characters/stigmata/coatings/pyrewatch.webp.webp" alt="Pyre Watch">
                        `}
                        </PrismCode>
                    </section>
                </section>
            </div>
        </section>
    </section>
</div>

<style lang="postcss">
    table,
    th,
    td {
        border: 1px solid white;
        border-collapse: collapse;
        padding: 8px;
        text-align: center;
    }

    li > ul {
        padding-left: 2rem;
    }
    li {
        @apply my-1;
    }
</style>
