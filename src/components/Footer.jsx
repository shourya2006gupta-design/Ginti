import Translate from './Translate';

export default function Footer() {
  return (
    <footer className="footer" role="contentinfo">
      <div className="container footer__inner">
        <div className="footer__disclaimer">
          <strong>⚠ <Translate>Prototype Disclaimer:</Translate></strong> <Translate>Ginti is a hackathon prototype built for educational purposes. It is not an official Government of India Census portal. Dates shown are illustrative. For official information, visit</Translate>{' '}
          <a
            href="https://censusindia.gov.in"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: '#F39C12' }}
          >
            censusindia.gov.in
          </a>
        </div>
        <p className="footer__meta">
          <Translate>Built with care for Census 2027 · We do not collect any personal information</Translate>
        </p>
      </div>
    </footer>
  );
}
