import Spline from '@splinetool/react-spline';
import { CheckCircle2 } from 'lucide-react';

export default function Hero() {
  return (
    <div className="relative rounded-2xl overflow-hidden border border-neutral-800 bg-gradient-to-b from-neutral-900/60 to-neutral-950">
      <div className="h-[420px] sm:h-[480px] w-full">
        <Spline
          scene="https://prod.spline.design/qQUip0dJPqrrPryE/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-neutral-950/70 via-transparent to-transparent" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 p-6 sm:p-8">
        <div className="max-w-xl">
          <div className="inline-flex items-center gap-2 text-cyan-300/90 bg-cyan-500/10 ring-1 ring-cyan-500/30 px-3 py-1 rounded-full mb-3">
            <CheckCircle2 className="h-4 w-4" />
            Verified Profiles • Modern HR
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold leading-tight">
            A futuristic employee register for digital identity and onboarding
          </h2>
          <p className="mt-2 text-neutral-300/90">
            Capture essential details, verify status, and keep your roster up-to-date in a delightful, vibrant UI.
          </p>
        </div>
      </div>
    </div>
  );
}
