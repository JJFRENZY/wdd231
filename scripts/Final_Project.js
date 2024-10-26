// Function to create the content for each deck
function displayDeckContent(deck) {
    let content = '';

    if (deck === 'kaito-pair') {
        content = `
        <aside>
            <h2>Evil★Twin the Kaito Pair</h2>
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
            <h2>Eldlich the Conqueror</h2>
        </aside>
        <main>
            <section id="hero">
                <div class="hero-content">
                    <img src="images/TTD_Eldlich_DB.png" alt="Eldlich Deck Box">
                    <div class="deck-info">
                        <h2>Main Deck</h2>
                        <h3>Monsters</h3>
                        <ul>
                            <li>3x Eldlich the Golden Lord</li>
                            <li>2x Ash Blossom & Joyous Spring</li>
                            <li>2x Ghost Ogre & Snow Rabbit</li>
                            <li>3x Golden Land Forever</li>
                        </ul>
                        <h3>Spells</h3>
                        <ul>
                            <li>3x Cursed Eldland</li>
                            <li>2x Eldlixir of Black Awakening</li>
                            <li>2x Eldlixir of White Destiny</li>
                            <li>1x Harpie's Feather Duster</li>
                        </ul>
                        <h3>Traps</h3>
                        <ul>
                            <li>3x Conquistador of the Golden Land</li>
                            <li>3x Huacachina of the Golden Land</li>
                            <li>2x Infinite Impermanence</li>
                        </ul>
                        <h3>Extra Deck</h3>
                        <ul>
                            <li>2x Linkuriboh</li>
                            <li>2x Predaplant Verte Anaconda</li>
                            <li>1x Accesscode Talker</li>
                        </ul>
                    </div>
                </div>
            </section>
            <aside>
                <h2>Highlight Cards</h2>
            </aside>
            <section id="features">
                <div class="feature">
                    <h3><img src="images/TTD_Eldlich_Best_Card.png" alt="Eldlich Best Card"></h3>
                </div>
                <div class="feature">
                    <h3><img src="images/TTD_Eldlich_Golden_Lord.png" alt="Eldlich Golden Lord"></h3>
                </div>
            </section>
        </main>`;
    } else if (deck === 'cyber-dragon') {
        content = `
        <aside>
            <h2>Decisive Strike Cyber Dragon</h2>
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
                            <li>Triple Tactic Talents</li>
                            <li>Triple Tactic Thrust</li>
                            <li>Sales Ban</li>
                            <li>Raigeki</li>
                            <li>Harpie's Feather Duster</li>
                        </ul>
                        <h3>Traps</h3>
                        <ul>
                            <li>3x Infinite Impermanence</li>
                        </ul>
                        <h3>Extra Deck</h3>
                        <ul>
                            <li>3x Cyber Twin Dragon</li>
                            <li>2x Cyber Twin Dragon</li>
                            <li>2x Chimeratech Rampage Dragon</li>
                            <li>Cyber Dragon Infinity</li>
                            <li>Cyber Dragon Nova</li>
                        </ul>
                    </div>
                </div>
            </section>
            <aside>
                <h2>Highlight Cards</h2>
            </aside>
            <section id="features">
                <div class="feature">
                    <h3><img src="images/TTD_CD_Best_Card.png" alt="Cyber Dragon Best Card"></h3>
                </div>
                <div class="feature">
                    <h3><img src="images/TTD_CD_Cyber_Dragon.png" alt="Cyber Dragon"></h3>
                </div>
            </section>
        </main>`;
    }

    // Update the main content
    document.getElementById("content").innerHTML = content;
}

// Event listeners for each navigation link
document.getElementById("kaito-pair").addEventListener("click", function(event) {
    event.preventDefault(); // Prevent default link behavior
    displayDeckContent('kaito-pair');
});

document.getElementById("eldlich-conqueror").addEventListener("click", function(event) {
    event.preventDefault();
    displayDeckContent('eldlich-conqueror');
});

document.getElementById("cyber-dragon").addEventListener("click", function(event) {
    event.preventDefault();
    displayDeckContent('cyber-dragon');
});
