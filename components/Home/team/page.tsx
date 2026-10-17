import { BriefcaseBusiness, Globe2, Lightbulb, MessageCircle, MoveRight } from 'lucide-react';

// Step item interface definition
interface StepItem {
  id: number;
  title: string;
  description: string;
  icon: string; // SVG path or Icon identifier
}

const stepsData: StepItem[] = [
  {
    id: 1,
    title: 'Send an inquiry',
    description: 'Tell us about your idea, expectations, and requirements.',
    icon: 'bulb',
  },
  {
    id: 2,
    title: 'Discuss requirements',
    description: 'We’ll schedule one or more calls to discuss and clarify the details.',
    icon: 'chat',
  },
  {
    id: 3,
    title: 'Meet your team members',
    description: 'Get acquainted with the specialists that will be dedicated to your project.',
    icon: 'case',
  },
  {
    id: 4,
    title: 'Kick off the project',
    description: 'Your team starts working on your project.',
    icon: 'globe',
  },
];

const stepIcons = {
  bulb: Lightbulb,
  chat: MessageCircle,
  case: BriefcaseBusiness,
  globe: Globe2,
};

export function ProcessSteps() {
  return (
    <section className="team-process-section" aria-labelledby="team-process-title">
      <div className="team-process-shell">
        <div className="team-process-heading">
          <span className="team-process-eyebrow"><span aria-hidden="true" /> HOW WE WORK</span>
          <div className="team-process-heading-row">
            <div>
              <h2 id="team-process-title">Great work starts with a <span>good conversation.</span></h2>
              <p>From the first idea to project kickoff, we bring the right people and plan together.</p>
            </div>
            <div className="team-process-note"><span>01—04</span><span>A clear path forward</span></div>
          </div>
        </div>
        <div className="team-process-grid">
          {stepsData.map((step, index) => {
            const Icon = stepIcons[step.icon as keyof typeof stepIcons];
            return (
              <article className="team-process-card" key={step.id} style={{ animationDelay: `${index * 100}ms` }}>
                <div className="team-process-card-top">
                  <span className="team-process-number">0{step.id}</span>
                  <span className="team-process-icon"><Icon size={22} strokeWidth={1.8} aria-hidden="true" /></span>
                </div>
                <span className="team-process-label">{['Start a conversation', 'Align on the plan', 'Build the right team', 'Kick off with confidence'][index]}</span>
                <h3>{['Tell us what you have in mind', 'Shape the requirements', 'Meet your project team', 'Move from plan to progress'][index]}</h3>
                <p>{step.description}</p>
                {index < stepsData.length - 1 && <MoveRight className="team-process-arrow" size={18} aria-hidden="true" />}
              </article>
            );
          })}
        </div>
        <div className="team-process-footer"><span /> A collaborative process, tailored to your project.</div>
      </div>
    </section>
  );
}

export const LegacyProcessSteps = () => {
  return (
    <section className="w-full max-w-none mx-0 px-6 md:px-10 py-12 font-sans bg-white">
      {/* Section Title */}
      <h2 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight mb-12 max-w-xl">
        How to start working with the SDV Edutech Software product development team
      </h2>

      {/* Grid Layout */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {stepsData.map((step) => (
          <div key={step.id} className="flex flex-col items-start">
            {/* Number + Icon Header */}
            <div className="flex items-center gap-3 mb-4">
              <span className="text-4xl font-medium text-sky-600">
                {step.id}
              </span>
              <div className="w-10 h-10 flex items-center justify-center">
                {step.icon === 'bulb' && (
                  <span className="text-3xl">💡</span>
                )}
                {step.icon === 'chat' && (
                  <span className="text-3xl">💬</span>
                )}
                {step.icon === 'case' && (
                  <span className="text-3xl">💼</span>
                )}
                {step.icon === 'globe' && (
                  <span className="text-3xl">🌐</span>
                )}
              </div>
            </div>

            {/* Title */}
            <h3 className="text-lg font-semibold text-gray-900 mb-2">
              {step.title}
            </h3>

            {/* Description */}
            <p className="text-sm text-gray-600 leading-relaxed">
              {step.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProcessSteps;
