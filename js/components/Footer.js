/**
 * Footer Component
 * Renders a clean, executive footer with source code repository link and back-to-top action
 */

export function renderFooter(container, data) {
  const { profile } = data;
  const currentYear = new Date().getFullYear();

  const footerHtml = `
    <footer class="cyber-footer">
      <div class="container footer-content">
        
        <div class="footer-brand-meta">
          <p>&copy; ${currentYear} ${profile.fullName}. Software Engineer &bull; AI & HPC Researcher.</p>
        </div>

        <div class="footer-actions">
          <a href="https://github.com/arthurcandrade/arthurcandrade.github.io" target="_blank" rel="noopener noreferrer" class="footer-action-link" title="GitHub Repository" aria-label="GitHub Repository">
            <i class="fa-brands fa-github" style="font-size: 1.25rem;"></i>
          </a>

          <a href="#" class="footer-top-btn" title="Back to top of page">
            <i class="fa-solid fa-arrow-up"></i>
            <span>TOP</span>
          </a>
        </div>

      </div>
    </footer>
  `;

  container.innerHTML = footerHtml;
}
