<script lang="ts">
    import HeaderNotch from "$lib/components/headers/HeaderNotch.svelte"
    import TextHighlighter from "$lib/components/standalone/TextHighlighter.svelte"
</script>

<TextHighlighter
    caseSensitive={false}
    blueKeywords={["blue 3-ping", "blue orb ping", "blue", "Hypermatrix"]}
    redKeywords={["red orb 3-pings", "red 3-ping", "Red"]}
    yellowKeywords={["Yellow"]}
    orangeKeywords={["Sight Points", "Time lag Calculation"]}
>
    <div class="list-diamond flex flex-col gap-4 p-2">
        <div class="bg-containers-dark p-4">
            <div class="pb-2"><HeaderNotch><h2>Hyperreal - Fundamentals</h2></HeaderNotch></div>
            <div class="flex flex-col bg-containers-medium gap-4 p-2">
                <ul class="list-red-diamond">
                    Press and hold Basic Attack when the gauge is full to enter Hypermatrix
                    <li>Every 3-Ping will deal additional damage and add a Sight Point, up to 4</li>
                    <li>Blue Orbs will be converted to Red or Yellow Orbs</li>
                    <li>Basic Attack will consume one stored bullet to generate 3 Orbs of the same color</li>
                    <li>Hypermatrix ends when the gauge runs out or when pressing Signature Move</li>
                    <li>
                        Exiting Hypermatrix will trigger a powerful finisher that consumes all Sight Points to deal
                        increased damage
                    </li>
                </ul>
                <ol class="list-red-diamond">
                    Outside of Hypermatrix:
                    <li>Each 3-Ping will be generate one bullet and up to three can be stored at once</li>
                    <li>Using Signature Move will cause Time Lag Calculation and unleash a powerful AOE attack</li>
                    <li>It's recommended to switch characters while Hypermatrix is in cooldown</li>
                </ol>
            </div>

            <div class="pt-4 pb-2"><HeaderNotch><h2>Hyperreal - Additional Information</h2></HeaderNotch></div>
            <div class="flex flex-col bg-containers-medium gap-4 p-2">
                <ol class="list-red-diamond">
                    Core Passive details:
                    <li>
                        Holding Basic Attack during Hypermatrix will consume one Sight Point to increase the duration by
                        2 seconds
                    </li>
                    <li>
                        Pressing Basic Attack once will enter a sniping stance during which the duration of Hypermatrix
                        will not decrease
                        <ol>
                            <li>
                                Pressing Basic Attack once will enter a sniping stance during which the duration of
                                Hypermatrix will not decrease
                            </li>
                            <li>Pressing Basic Attack again will briefly unpause Hypermatrix to shoot</li>
                        </ol>
                    </li>
                    <li>After Hypermatrix ends 3 Orbs of the same color will be generated</li>
                </ol>
                <ol class="list-red-diamond">
                    Advanced technique:
                    <li>
                        It's possible to activate Hypermatrix by holding Basic Attack during a Blue Orb Ping
                        <ol>
                            <li>
                                Since Hyperreal's swap-in attack is a Blue 3-Ping this can be done immediately after he
                                enters the field
                            </li>
                        </ol>
                    </li>
                    <li>
                        The initial movement of Red or Yellow Orbs counts as a dodge and can avoid enemy attacks to
                        activate Matrix
                    </li>
                    <li>
                        3-Pings during Hypermatrix generate Sight Points immediately, making it possible to dodge cancel
                        their animations to reach 4 Sight Points faster in time-sensitive gamemodes
                    </li>
                    <li>
                        Canceling the Hypermatrix version of a Red 3-Ping loses damage, unless done shortly after Lee
                        throws his firearm case at the ground
                    </li>
                </ol>
            </div>
        </div>
    </div>
</TextHighlighter>

<style lang="postcss">
    .list-diamond ul::before {
        content: "◆";
        padding-right: 5px;
    }
</style>
