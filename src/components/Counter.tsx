import { useEffect, useState, useRef } from 'react';

export function Counter() {
  const [isVisible, setIsVisible] = useState(false);
  const [counters, setCounters] = useState([0, 0, 0, 0]);
  const sectionRef = useRef<HTMLDivElement>(null);

  const targetValues = [10, 500, 150, 20];
  const labels = [
    'سنوات خبرة',
    'مشروع منفذ',
    'عميل سنوياً',
    'نوع رخام وجرانيت متوفر'
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !isVisible) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    const currentRef = sectionRef.current;

    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [isVisible]);

  useEffect(() => {
    if (!isVisible) return;

    const duration = 2000; // 2 seconds
    const steps = 60;
    const stepDuration = duration / steps;

    let currentStep = 0;
    const interval = setInterval(() => {
      currentStep++;
      const progress = currentStep / steps;

      setCounters(targetValues.map(target => Math.floor(target * progress)));

      if (currentStep >= steps) {
        setCounters(targetValues);
        clearInterval(interval);
      }
    }, stepDuration);

    return () => clearInterval(interval);
  }, [isVisible]);

  return (
    <section 
      ref={sectionRef}
      style={{ 
        padding: '100px 0',
        background: 'linear-gradient(135deg, #0054A6 0%, #003d7a 100%)',
        position: 'relative',
        overflow: 'hidden'
      }}
    >
      {/* Decorative Pattern */}
      <div 
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }}
      />

      <div className="max-w-[1400px] mx-auto px-20 sm:px-20 lg:px-24 relative z-10">
        <div 
          className="grid grid-cols-2 lg:grid-cols-4"
          style={{ gap: '40px' }}
        >
          {counters.map((count, index) => (
            <div 
              key={index}
              className="text-center"
              style={{
                padding: '40px 20px',
                borderRadius: '16px',
                backgroundColor: 'rgba(255, 255, 255, 0.1)',
                backdropFilter: 'blur(10px)',
                border: '2px solid rgba(201, 160, 78, 0.3)'
              }}
            >
              <div 
                style={{ 
                  fontSize: 'clamp(40px, 6vw, 56px)',
                  fontWeight: 700,
                  color: '#C9A04E',
                  marginBottom: '12px',
                  direction: 'ltr',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  gap: '4px'
                }}
              >
                <span>+</span>
                <span>{count}</span>
              </div>
              <p 
                style={{ 
                  color: '#ffffff',
                  fontSize: '18px',
                  fontWeight: 500,
                  lineHeight: '1.5'
                }}
              >
                {labels[index]}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
