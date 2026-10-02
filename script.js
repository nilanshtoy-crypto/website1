const bookSelection = document.getElementById("book-selection");
        const bookInfo = document.getElementById("book-info");
        const showInfo = document.getElementById("show-info");
        const body = document.getElementById("body");

        showInfo.addEventListener("click", () => {
            const selectedBook = bookSelection.value;

            if (selectedBook === "1") {
                bookInfo.textContent = `MISSION/: To find the mastermind behind a possible attack at the Big Air Games.\n\nLOCATION: Philadelphia, PA.\n\nPOTENTIAL VICTIMS: Top extreme athletes in the country. Thousands of spectators.\n\nSUSPECTS: There may be a group of extremists working together. There may be just one.`;
                body.style.backgroundImage = "url('back_image 1.webp')";
            } else if (selectedBook === "2") {
                bookInfo.textContent = `MISSION/: To determine if the arther stench is really threatening people to save the ecosystem.\n\nLOCATION: California.\n\nPOTENTIAL VICTIMS: millions of oil factrory owners.\n\nSUSPECTS: Arther stench and his group of eco-terrorists`;
                body.style.backgroundImage = "url('back image 2.webp')";
            } else if (selectedBook === "3") {
                bookInfo.textContent = `MISSION/: Investigate and put a halt on to the recent rash of jwellery store robberies.Potentially danger on the groung and in the air.\n\nLOCATION: Ocean Grove, NJ.\n\nPOTENTIAL VICTIMS: All jewellery store owners.\n\nSUSPECTS: Undetermined.`;
                body.style.backgroundImage = "url('back image 3.avif')";
            } else if (selectedBook === "4") {
                bookInfo.textContent = "Part 4: Thrill Ride - No information is added because internet is slow. PLESE REFRESH THE PAGE AND CLICK ON THE BUTTON AGAIN.";
            } else if (selectedBook === "5") {
                bookInfo.textContent = "Part 5: Rocky Road - No information is added because internet is slow. PLEASE REFRESH THE PAGE AND CLICK ON THE BUTTON AGAIN.";
            } else if (selectedBook === "6") {
                bookInfo.textContent = "Part 6: Burned - No information is added because internet is slow. PLEASE REFRESH THE PAGE AND CLICK ON THE BUTTON AGAIN.";
            }
        });