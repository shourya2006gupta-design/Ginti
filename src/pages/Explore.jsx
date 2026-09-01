import { useState } from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement
} from 'chart.js';
import { Bar, Pie } from 'react-chartjs-2';
import { useAppContext } from '../context/AppContext';
import Translate from '../components/Translate';
import { askGuideQuestion } from '../services/ai';
import './Explore.css';

// Register Chart.js modules
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement
);

// Illustrative Data
const DEMO_LITERACY_DATA = {
  labels: ['2001', '2011', '2027 (Proj)'],
  datasets: [
    {
      label: 'Literacy Rate (%)',
      data: [64.8, 74.04, 84.5],
      backgroundColor: 'rgba(52, 152, 219, 0.6)',
      borderColor: 'rgba(41, 128, 185, 1)',
      borderWidth: 1,
    },
  ],
};

const DEMO_URBAN_RURAL_DATA = {
  labels: ['Rural', 'Urban'],
  datasets: [
    {
      data: [65, 35],
      backgroundColor: [
        'rgba(39, 174, 96, 0.6)',
        'rgba(243, 156, 18, 0.6)',
      ],
      borderColor: [
        'rgba(39, 174, 96, 1)',
        'rgba(243, 156, 18, 1)',
      ],
      borderWidth: 1,
    },
  ],
};

const DEMO_AGE_DATA = {
  labels: ['0–14', '15–24', '25–59', '60+'],
  datasets: [
    {
      label: 'Population Share (%)',
      data: [26, 18, 45, 11],
      backgroundColor: [
        'rgba(155, 89, 182, 0.6)',
        'rgba(52, 152, 219, 0.6)',
        'rgba(39, 174, 96, 0.6)',
        'rgba(230, 126, 34, 0.6)',
      ],
      borderColor: [
        'rgba(155, 89, 182, 1)',
        'rgba(52, 152, 219, 1)',
        'rgba(39, 174, 96, 1)',
        'rgba(230, 126, 34, 1)',
      ],
      borderWidth: 1,
    },
  ],
};

function ChartCard({ title, chart, accessibleTable, explanation, whyItMatters, aiContext }) {
  const { selectedLanguage } = useAppContext();
  const [aiExplanation, setAiExplanation] = useState('');
  const [isAsking, setIsAsking] = useState(false);

  const handleAiExplain = async () => {
    if (isAsking || aiExplanation) return;
    setIsAsking(true);
    const question = `Explain this census data chart in very simple language a common citizen can understand: ${aiContext}. Keep it under 4 sentences.`;
    const answer = await askGuideQuestion(question, 'India', selectedLanguage);
    setAiExplanation(answer);
    setIsAsking(false);
  };

  return (
    <section className="chart-card">
      <h2 className="chart-card__question"><Translate>{title}</Translate></h2>

      <div className="chart-card__viz" style={{ maxWidth: title.includes('Urban') ? '300px' : undefined, margin: title.includes('Urban') ? '0 auto' : undefined }}>
        {chart}
      </div>

      {accessibleTable}

      <div className="chart-card__explanation">
        <strong><Translate>Simple Explanation:</Translate></strong> <Translate>{explanation}</Translate>
      </div>

      <div className="chart-card__why-it-matters">
        <h3 className="chart-card__why-title">
          <span aria-hidden="true">💡</span> <Translate>Why does this matter?</Translate>
        </h3>
        <p><Translate>{whyItMatters}</Translate></p>
      </div>

      <div style={{ marginTop: 'var(--space-md)' }}>
        {!aiExplanation ? (
          <button
            className="btn btn-secondary guide-ai-btn"
            onClick={handleAiExplain}
            disabled={isAsking}
            style={{ fontSize: 'var(--font-size-sm)' }}
          >
            <span aria-hidden="true">🤖</span>{' '}
            {isAsking ? <Translate>Ginti AI is thinking…</Translate> : <Translate>Ask Ginti AI to explain this chart</Translate>}
          </button>
        ) : (
          <div className="ai-chat-box" style={{ marginTop: 0 }}>
            <div className="ai-chat-box__header">
              <span className="badge-ai"><Translate>Ginti AI</Translate></span>
            </div>
            <p style={{ fontSize: 'var(--font-size-sm)', lineHeight: 'var(--line-height-relaxed)' }}>{aiExplanation}</p>
            <small className="ai-disclaimer"><Translate>This is an AI-generated explanation, not official government data.</Translate></small>
          </div>
        )}
      </div>
    </section>
  );
}

export default function Explore() {
  return (
    <div className="container">
      <header className="page-header text-center">
        <h1 className="page-shell__title"><Translate>Explore Census Data</Translate></h1>
        <p className="page-shell__desc">
          <Translate>Every number tells a story about India's future. See how data collected during the census shapes policies.</Translate>
        </p>
        <div style={{ marginTop: 'var(--space-md)' }}>
          <span className="badge-demo"><Translate>Illustrative / Demo Data Only</Translate></span>
        </div>
      </header>

      <div className="charts-grid">
        <ChartCard
          title="How has literacy improved over time?"
          chart={
            <Bar
              data={DEMO_LITERACY_DATA}
              options={{ responsive: true, plugins: { legend: { position: 'top' }, title: { display: false } } }}
            />
          }
          accessibleTable={
            <div className="chart-card__accessible-table sr-only">
              <table>
                <caption>Literacy rate over time</caption>
                <tbody>
                  <tr><th>2001</th><td>64.8%</td></tr>
                  <tr><th>2011</th><td>74.04%</td></tr>
                  <tr><th>2027 (Proj)</th><td>84.5%</td></tr>
                </tbody>
              </table>
            </div>
          }
          explanation="The literacy rate shows the percentage of people aged 7 and above who can read and write. It has grown steadily over the last two decades."
          whyItMatters="When the government sees which regions have lower literacy rates, they can allocate more funds for building schools, hiring teachers, and launching adult education programs exactly where they are needed most."
          aiContext="India literacy rate chart: 2001=64.8%, 2011=74.04%, 2027 projected=84.5%"
        />

        <ChartCard
          title="Where do we live? (Urban vs Rural)"
          chart={
            <Pie
              data={DEMO_URBAN_RURAL_DATA}
              options={{ responsive: true, plugins: { legend: { position: 'bottom' } } }}
            />
          }
          accessibleTable={
            <div className="chart-card__accessible-table sr-only">
              <table>
                <caption>Population distribution</caption>
                <tbody>
                  <tr><th>Rural</th><td>65%</td></tr>
                  <tr><th>Urban</th><td>35%</td></tr>
                </tbody>
              </table>
            </div>
          }
          explanation="A large majority of the population still lives in rural villages, but the urban population (cities and towns) is growing rapidly due to migration for jobs and education."
          whyItMatters="Understanding this shift helps planners decide where to build new infrastructure. Growing urban areas need more roads, water supply, and public transport, while rural areas need better agricultural support and healthcare access."
          aiContext="India urban vs rural population distribution: Rural 65%, Urban 35%"
        />

        <ChartCard
          title="What is India's age distribution?"
          chart={
            <Bar
              data={DEMO_AGE_DATA}
              options={{
                responsive: true,
                plugins: { legend: { display: false }, title: { display: false } },
                scales: { y: { beginAtZero: true, max: 60, ticks: { callback: (v) => v + '%' } } }
              }}
            />
          }
          accessibleTable={
            <div className="chart-card__accessible-table sr-only">
              <table>
                <caption>Population by age group</caption>
                <tbody>
                  <tr><th>0–14 (Children)</th><td>26%</td></tr>
                  <tr><th>15–24 (Youth)</th><td>18%</td></tr>
                  <tr><th>25–59 (Working Age)</th><td>45%</td></tr>
                  <tr><th>60+ (Senior)</th><td>11%</td></tr>
                </tbody>
              </table>
            </div>
          }
          explanation="India has a large working-age population (25–59 years), which is often called the 'demographic dividend'. A youthful population means more workers, innovators, and consumers."
          whyItMatters="Understanding the age structure helps the government plan for schools (young population), jobs (youth bulge), and pension/healthcare (ageing population). Census 2027 will give the most accurate picture of this shift."
          aiContext="India age distribution: 0-14 years=26%, 15-24 years=18%, 25-59 years=45%, 60+ years=11%"
        />
      </div>
    </div>
  );
}
