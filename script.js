// script.js

document.addEventListener('DOMContentLoaded', function () {
    function showImage(imageSrc) {
        var modal = document.getElementById('imageModal');
        var modalImage = document.getElementById('modalImage');

        modal.style.display = 'block';
        modalImage.src = imageSrc;
    }

    function closeModal() {
        var modal = document.getElementById('imageModal');
        modal.style.display = 'none';
    }

    window.onclick = function (event) {
        var modal = document.getElementById('imageModal');
        if (event.target == modal) {
            modal.style.display = 'none';
        }
    }

    function scrollToSection(sectionId) {
        const section = document.getElementById(sectionId);

        if (section) {
            section.scrollIntoView({
                behavior: 'smooth'
            });
        }
    }

    // Add the following event listener to handle the smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            const targetId = this.getAttribute('href').substring(1);
            scrollToSection(targetId);
        });
    });

    const aboutMeButton = document.querySelector('.button[href="#aboutMe"]');
    const animatedItems = document.querySelectorAll('.about-item');


    // Mendapatkan referensi ke tombol Experience
const experienceButton = document.getElementById('experience-button');

// Menambahkan event listener ke tombol Experience
if (experienceButton) {
    experienceButton.addEventListener('click', function () {
        // Menemukan elemen dengan ID 'experience'
        const experienceSection = document.getElementById('experience');

        // Menambahkan kelas 'animate-items' untuk memicu animasi
        if (experienceSection) {
            experienceSection.classList.add('animate-items');
        }
    });
}
    const textElement = document.getElementById('typing-text');
    const textToType = "salken lur";
    let index = 0;

    function typeText() {
        textElement.textContent += textToType[index];
        index++;

        if (index < textToType.length) {
            setTimeout(typeText, 50); // Adjust the typing speed (in milliseconds)
        } else {
            
        }
    }

    function resetText() {
        textElement.textContent = "";
        index = 0;
        setTimeout(typeText, 500); // Wait for 0.5 seconds before starting the typing again
    }

    // Start typing when the page loads
    typeText();
});

