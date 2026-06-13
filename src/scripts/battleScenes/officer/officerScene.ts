export function officerScene() {
    return `
    <section class="battle-scene battle-scene--officer">
        <!-- Background 🏞️ -->
        <div class="tactics-layer tactics-layer--background"></div>
        <!---->

        <!-- Tactics area ⚔️ -->
        <div class="tactics-board">
            <div class="tile"></div>
            <div class="tile"></div>
            <div class="unit unit--officer"></div>
            <div class="unit unit--suspect"></div>
        </div>
        <!---->

        <!-- Foreground 🌻 -->
    
        <!---->

        <!-- UI 🎮 -->
       <div class="tactics-ui ui-area"></div>
        <!---->
    </section>
    `
}