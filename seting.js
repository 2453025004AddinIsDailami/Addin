<script>
  // Animasi muncul saat scroll
  const projects = document.querySelectorAll('.project');

  const showOnScroll = () => {
    const triggerBottom = window.innerHeight * 0.9;

    projects.forEach((project) => {
      const top = project.getBoundingClientRect().top;

      if (top < triggerBottom) {
        project.classList.add('visible');
      }
    });
  };

  window.addEventListener('scroll', showOnScroll);
  window.addEventListener('load', showOnScroll);
</script>
