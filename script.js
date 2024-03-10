document.addEventListener('DOMContentLoaded', function () {

    function showImage(imageSrc) {
        const modal = document.getElementById('imageModal');
        const modalImage = document.getElementById('modalImage');

        modal.style.display = 'block';
        modalImage.src = imageSrc;
    }


    function closeModal() {
        const modal = document.getElementById('imageModal');
        modal.style.display = 'none';
    }


    window.onclick = function (event) {
        const modal = document.getElementById('imageModal');
        if (event.target == modal) {
            closeModal();
        }
    }


    document.querySelectorAll('.project').forEach(function (project) {
        project.addEventListener('click', function () {
            const imageSrc = this.querySelector('img').src;
            showImage(imageSrc);
        });
    });

    function scrollToSection(sectionId) {
        const section = document.getElementById(sectionId);

        if (section) {
            section.scrollIntoView({
                behavior: 'smooth'
            });
        }
    }

  
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            const targetId = this.getAttribute('href').substring(1);
            scrollToSection(targetId);
        });
    });


    const experienceButton = document.getElementById('experience-button');

    if (experienceButton) {
        experienceButton.addEventListener('click', function () {
            const experienceSection = document.getElementById('experience');

            if (experienceSection) {
                experienceSection.classList.add('animate-items');
                experienceSection.scrollIntoView({ behavior: 'smooth' });
            }
        });
    }


    const textElement = document.getElementById('typing-text');
    const greetings = ["I am a Student of Mulawarman University", "Social Media Content Manager", "Network Topology Mapper", "Content Designer"];
    let greetingIndex = 0;
    let charIndex = 0;

    function typeText() {
        if (greetingIndex < greetings.length) {
            textElement.textContent += greetings[greetingIndex][charIndex];
            charIndex++;

            if (charIndex < greetings[greetingIndex].length) {
                setTimeout(typeText, 50);
            } else {

                setTimeout(resetText, 1000);
            }
        }
    }

    function resetText() {
        let currentText = textElement.textContent;
        if (currentText.length > 7) {
            textElement.textContent = currentText.slice(0, -1);
            setTimeout(resetText, 50);
        } else {
            // Text erased, move to the next greeting
            greetingIndex = (greetingIndex + 1) % greetings.length;
            charIndex = 0;
            setTimeout(typeText, 500);
        }
    }


    typeText();
});
