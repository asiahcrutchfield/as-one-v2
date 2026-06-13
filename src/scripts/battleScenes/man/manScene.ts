export function manScene() {
    return `
    <section class="battle-scene battle-scene--man">
        <!-- Background 🏞️ -->
        <div class="arena-layer arena-layer--background">
        
        </div>
        <!---->

        <!-- Battle arena ⚔️ -->
        <div class="arena-layer arena-layer--walkable">
            <div class="arena-boundary"></div>
            <div class="player player--man"></div>
            <div class="enemy"></div>
        </div>
        <!---->

        <!-- Foreground 🌻 -->
        <div class="arena-layer arena-layer--foreground">

        </div>
        <!---->

        <!-- UI 🎮 -->
        <div class="arena-ui ui-area"></div>
        <!---->
    </section>
    `
}