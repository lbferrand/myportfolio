const mainNav = `
    <div class="container">
      <div class="nav-bar">
        <ul class="nav justify-content-right">
          <h3 class="logo">My Portfolio</h3>
          <li class="nav-item">
            <a class="nav-link" title="Homepage" href="/index.html"
              >Home</a
            >
          </li>
          <li class="nav-item">
            <a
              class="nav-link"
              title="My story"
              aria-current="page"
              href="/mystory.html"
              >My Story</a
            >
          </li>
          <li class="nav-item">
            <a class="nav-link" title="My Work description" href="/mywork.html"
              >My Work</a
            >
          </li>
          <li class="nav-item">
            <a
              class="nav-link"
              title="My Certifications description"
              href="/certifications.html"
              >Certifications</a
            >
          </li>
          <li class="nav-item">
            <a class="nav-link" title="Skills" href="/skills.html">Skills</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" title="Books I read in 2022" href="/books.html"
              >My Reading</a
            >
          </li>
          <li class="nav-item">
            <a class="nav-link" title="Contact Information" href="/contact.html"
              >Contact</a
            >
          </li>
        </ul>
      </div>
    </div>
`;

const article = document.querySelector(".main");

const newNav = document.createElement("mainNav");
newNav.classList.add("mainNav");
newNav.setAttribute("id", "nav-menu");
newNav.innerHTML = mainNav;

article.append(newNav);

const mainFooter = `
        <div class="footer d-flex justify-content-center">
          <a href="https://www.lbferrandportfolio.com/" class="email-link"
            >www.lbferrandportfolio.com</a
          >
        </div>
        <br />
        <div class="social-links d-flex justify-content-center">
          <a href="mailto:lbferrand@gmail.com">
            <i class="fas fa-envelope-open-text"> Email</i></a
          >
          <a href="https://github.com/lbferrand/myportfolio" target="_blank">
            <i class="fab fa-github-square"> Github</i></a
          >
          <a
            href="https://www.linkedin.com/in/luciana-bautista-ferrand-615bb0216/"
            target="_blank"
          >
            <i class="fab fa-linkedin-in"> LinkedIn</i></a
          >
        </div>
`;

const footer = document.querySelector("footer");

const newFooter = document.createElement("mainFooter");
newFooter.classList.add("mainFooter");
newFooter.setAttribute("id", "list-footer");
newFooter.innerHTML = mainFooter;

footer.append(newFooter);
