// Function to create the content for each deck
function displayDeckContent(deck) {
    let content = '';

    if (deck === 'kaito-pair') {
        content = `
        <aside>
            <h2 style="color: #ff00b7;">Evil★Twin the Kaito Pair</h2>
        </aside>
        <main>
            <section id="hero">
                <div class="hero-content">
                    <img src="images/TTD_KP_DB.png" alt="Kaito Pair Deck Box">
                    <div class="deck-info">
                        <h2>Main Deck</h2>
                        <h3>Monsters</h3>
                        <ul>
                            <li>Evil Twins Ki-sikil & Lil-la</li>
                            <li>3x Live Twin Ki-sikil</li>
                            <li>3x Live Twin Lil-la</li>
                            <li>Live Twin Ki-sikil Frost</li>
                            <li>Live Twin Lil-la Treat</li>
                            <li>Spright Blue</li>
                            <li>Spright Jet</li>
                            <li>Spright Red</li>
                            <li>Spright Carrot</li>
                            <li>EM:P Gremeowade</li>
                            <li>Ash Blossom & Joyous Spring</li>
                            <li>Maxx C</li>
                        </ul>
                        <h3>Spells</h3>
                        <ul>
                            <li>Secret Password</li>
                            <li>Live Twin Entrance</li>
                            <li>3x Live Twin Sunny's Snitch</li>
                            <li>Spright Starter</li>
                            <li>Spright Smasher</li>
                            <li>Spright Gamma Burst</li>
                            <li>Harpie's Feather Duster</li>
                            <li>Cosmic Cyclone</li>
                            <li>2x Called by the Grave</li>
                            <li>Crossout Designator</li>
                            <li>Forbidden Droplet</li>
                        </ul>
                        <h3>Traps</h3>
                        <ul>
                            <li>Evil Twin Challenge</li>
                            <li>Spright Double Cross</li>
                            <li>2x Infinite Impermanence</li>
                        </ul>
                        <h3>Extra Deck</h3>
                        <ul>
                            <li>2x Evil Twin Ki-sikil</li>
                            <li>2x Evil Twin Lil-la</li>
                            <li>Evil Twin's Trouble Sunny</li>
                            <li>I:P Masquerena</li>
                            <li>Knightmare Unicorn</li>
                            <li>Accesscode Talker</li>
                            <li>Gigantic Spright</li>
                            <li>Sky Calvary Centaurea</li>
                        </ul>
                    </div>
                </div>
            </section>
            <aside>
                <h2>Highlight Cards</h2>
            </aside>
            <section id="features">
                <div class="feature">
                    <h3><img src="images/TTD_KP_Secret_Password.png" alt="Secret Password"></h3>
                </div>
                <div class="feature">
                    <h3><img src="images/TTD_KP_Evil★Twins_Ki-sikil & Lil-la.png" alt="Evil★Twins Ki-sikil & Lil-la"></h3>
                </div>
                <div class="feature">
                    <h3><img src="images/TTD_KP_Evil★Twin_Challenge.png" alt="Evil★Twin Challenge"></h3>
                </div>
            </section>
        </main>`;
    } else if (deck === 'eldlich-conqueror') {
        content = `
        <aside>
            <h2 style="color: #FFD700;">Eldlich the Conqueror</h2>
        </aside>
        <main>
            <section id="hero">
                <div class="hero-content">
                    <img src="images/TTD_EC_DB.png" alt="Eldlich Deck Box">
                    <div class="deck-info">
                        <h2>Main Deck</h2>
                        <h3>Monsters</h3>
                        <ul>
                            <li>3x Eldlich the Golden Lord</li>
                            <li>Doomking Balderoch</li>
                            <li>Necroworld Banshee</li>
                            <li>2x Ash Blossom & Joyous Spring</li>
                        </ul>
                        <h3>Spells</h3>
                        <ul>
                            <li>2x Cursed Eldland</li>
                            <li>3x Eldlixir of Black Awakening</li>
                            <li>Eldlixir of White Destiny</li>
                            <li>Zombie World</li>
                            <li>Pot of Extravagance</li>
                            <li>Pot of Prosperity</li>
                            <li>Foolish Burial</li>
                            <li>Foolish Burial Goods</li>
                            <li>Lightning Storm</li>
                            <li>Cosmic Cyclone</li>
                        </ul>
                        <h3>Traps</h3>
                        <ul>
                            <li>3x Eldlixir of Scarlet Sanguine</li>
                            <li>2x Conquistador of the Golden Land</li>
                            <li>2x Huaquero of the Golden Land</li>
                            <li>Golden Land Forever!</li>
                            <li>Solemn Judgment</li>
                            <li>Skill Drain</li>
                            <li>Rivalry of Warlords</li>
                            <li>Gozen Match</li>
                            <li>There Can Be Only One</li>
                            <li>Dogmatika Punishment</li>
                            <li>2x Torrential Tribute</li>
                            <li>2x Infinite Impermanence</li>
                        </ul>
                        <h3>Extra Deck</h3>
                        <ul>
                            <li>Elder Entity N'tss</li>
                            <li>Garura, Wings of Resonant Life</li>
                            <li>Constellar Pleiades</li>
                            <li>Superdreadnought Rail Cannon Gustav Max</li>
                            <li>Number 81: Superdreadnought Rail Cannon Super Dora</li>
                            <li>Superdreadnought Rail Cannon Juggernaut Liebe</li>
                            <li>Divine Arsenal AA-Zeus - Sky Thunder</li>
                            <li>Link Spider</li>
                            <li>Vampire Sucker</li>
                            <li>Knightmare Phoenix</li>
                        </ul>
                    </div>
                </div>
            </section>
            <aside>
                <h2>Highlight Cards</h2>
            </aside>
            <section id="features">
                <div class="feature">
                    <h3><img src="images/TTD_EC_Cursed_Eldland.png" alt="Cursed Eldland"></h3>
                </div>
                <div class="feature">
                    <h3><img src="images/TTD_EC_Eldlich_the_Golden_Lord.png" alt="Eldlich the Golden Lord"></h3>
                </div>
                <div class="feature">
                    <h3><img src="images/TTD_EC_Eldlixir_of_Scarlet_Sanguine.png" alt="Eldlixir of Scarlet Sanguine"></h3>
                </div>
            </section>
        </main>`;
    } else if (deck === 'cyber-dragon') {
        content = `
        <aside>
            <h2 style="color: #C0C0C0;">Cyber Dragon</h2>
        </aside>
        <main>
            <section id="hero">
                <div class="hero-content">
                    <img src="images/TTD_CD_DB.png" alt="Cyber Dragon Deck Box">
                    <div class="deck-info">
                        <h2>Main Deck</h2>
                        <h3>Monsters</h3>
                        <ul>
                            <li>3x Cyber Dragon</li>
                            <li>3x Cyber Dragon Core</li>
                            <li>2x Cyber Dragon Herz</li>
                            <li>Cyber Dragon Nachster</li>
                            <li>Cyberdark Chimera</li>
                            <li>Jizukiru</li>
                            <li>Therion King Regulus</li>
                            <li>2x Galaxy Soldier</li>
                            <li>2x Ash Blossom</li>
                            <li>2x Maxx C</li>
                        </ul>
                        <h3>Spells</h3>
                        <ul>
                            <li>2x Power Bond</li>
                            <li>3x Cyber Emergency</li>
                            <li>Cyber Repair Plant</li>
                            <li>Cyberdark World</li>
                            <li>Machine Duplication</li>
                            <li>2x Clockwork Night</li>
                            <li>Triple Tactics Talent</li>
                            <li>Triple Tactics Thrust</li>
                            <li>Sales Ban</li>
                            <li>Raigeki</li>
                            <li>Harpie's Feather Duster</li>
                            <li>2x Lightning Storm</li>
                            <li>2x Called by the Grave</li>
                        </ul>
                        <h3>Traps</h3>
                        <ul>
                            <li>3x Infinite Impermanence</li>
                            <li>3x Cybernetic Overflow</li>
                        </ul>
                        <h3>Extra Deck</h3>
                        <ul>
                            <li>2x Chimeratech Mega Fleet Dragon</li>
                            <li>2x Chimeratech Rampage Dragon</li>
                            <li>Cyber Twin Dragon</li>
                            <li>Cyber Twin Dragon</li>
                            <li>Cyber Twin Dragon</li>
                            <li>Cyber Twin Dragon</li>
                            <li>Cyber Twin Dragon</li>
                            <li>Cyber Twin Dragon</li>
                            <li>Cyber Twin Dragon</li>
                            <li>Cyber Twin Dragon</li>
                            <li>Cyber Twin Dragon</li>
                        </ul>
                    </div>
                </div>
            </section>
            <aside>
                <h2>Highlight Cards</h2>
            </aside>
            <section id="features">
                <div class="feature">
                    <h3><img src="images/TTD_CD_Cyber_Dragon.png" alt="Cyber Dragon"></h3>
                </div>
                <div class="feature">
                    <h3><img src="images/TTD_CD_Cyber_Dragon_Core.png" alt="Cyber Dragon Core"></h3>
                </div>
                <div class="feature">
                    <h3><img src="images/TTD_CD_Power_Bond.png" alt="Power Bond"></h3>
                </div>
            </section>
        </main>`;
    }

    const contentContainer = document.getElementById('deck-content');
    contentContainer.innerHTML = content;
}

// Event listeners for deck links
document.querySelectorAll('.deck-link').forEach(link => {
    link.addEventListener('click', (event) => {
        const deckType = event.target.getAttribute('data-deck');
        displayDeckContent(deckType);
    });
});
