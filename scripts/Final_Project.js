document.addEventListener("DOMContentLoaded", function() {
    const deckInfo = {
        "kaito-pair": {
            title: "Evil★Twin the Kaito Pair",
            imgSrc: "images/TTD_KP_DB.png",
            content: `
                <h2>Main Deck</h2>
                <h3>Monsters</h3>
                <ul>
                    <li>Evil Twins Ki-sikil & Lil-la</li>
                    <li>3x Live Twin Ki-sikil</li>
                    <!-- Add remaining cards here -->
                </ul>
                <h3>Spells</h3>
                <ul>
                    <li>Secret Password</li>
                    <!-- Add remaining cards here -->
                </ul>
                <h3>Traps</h3>
                <ul>
                    <li>Evil Twin Challenge</li>
                    <!-- Add remaining cards here -->
                </ul>
                <h3>Extra Deck</h3>
                <ul>
                    <li>2x Evil Twin Ki-sikil</li>
                    <!-- Add remaining cards here -->
                </ul>`,
            features: `
                <div class="feature"><img src="images/TTD_KP_Secret_Password.png" alt="Secret Password"></div>
                <!-- Add more feature images -->
            `
        },
        "eldlich": {
            title: "Eldlich the Conqueror",
            imgSrc: "images/TTD_EC_DB.png",
            content: `
                <h2>Main Deck</h2>
                <h3>Monsters</h3>
                <ul>
                    <li>3x Eldlich the Golden Lord</li>
                    <!-- Add remaining cards here -->
                </ul>`,
            features: `
                <div class="feature"><img src="images/TTD_EC_Cursed_Eldland.png" alt="Cursed Eldland"></div>
            `
        },
        "cyber-dragons": {
            title: "Decisive Strike Cyber Dragon",
            imgSrc: "images/TTD_CD_DB.png",
            content: `
                <h2>Main Deck</h2>
                <h3>Monsters</h3>
                <ul>
                    <li>3x Cyber Dragon</li>
                    <!-- Add remaining cards here -->
                </ul>`,
            features: `
                <div class="feature"><img src="images/TTD_CD_Power_Bond.png" alt="Power Bond"></div>
            `
        }
    };

    document.getElementById("kaito-pair-link").addEventListener("click", () => swapDeck("kaito-pair"));
    document.getElementById("eldlich-link").addEventListener("click", () => swapDeck("eldlich"));
    document.getElementById("cyber-dragons-link").addEventListener("click", () => swapDeck("cyber-dragons"));

    function swapDeck(deck) {
        document.getElementById("deck-title").innerHTML = `<h2>${deckInfo[deck].title}</h2>`;
        document.querySelector("#hero .hero-content img").src = deckInfo[deck].imgSrc;
        document.querySelector(".deck-info").innerHTML = deckInfo[deck].content;
        document.getElementById("features").innerHTML = deckInfo[deck].features;
    }

    // Default load - Cyber Dragon
    swapDeck("cyber-dragons");
});
