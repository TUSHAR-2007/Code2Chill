import React, { useState, useEffect, useCallback } from 'react';
import { Link } from 'react-router-dom';
import Container from '../components/layout/Container.jsx';
import SectionHeading from '../components/ui/SectionHeading.jsx';

// Determine the health-check URL from environment or standard local default
const getHealthEndpointUrl = () => {
  const baseUrl = import.meta.env.VITE_API_BASE_URL || 'http://127.0.0.1:8000/api';
  if (baseUrl.endsWith('/api')) {
    return `${baseUrl}/health`;
  }
  if (baseUrl.endsWith('/')) {
    return `${baseUrl}api/health`;
  }
  return `${baseUrl}/api/health`;
};

export default function StatusPage() {
  const [healthData, setHealthData] = useState(null);
  const [httpStatus, setHttpStatus] = useState(null);
  const [latencyMs, setLatencyMs] = useState(null);
  const [rawPayload, setRawPayload] = useState(null);
  const [errorDetails, setErrorDetails] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [lastChecked, setLastChecked] = useState(null);

  const fetchHealthStatus = useCallback(async () => {
    setIsLoading(true);
    setErrorDetails(null);

    const endpointUrl = getHealthEndpointUrl();
    const startTime = performance.now();

    try {
      const response = await fetch(endpointUrl, {
        method: 'GET',
        headers: {
          Accept: 'application/json',
        },
      });

      const elapsed = Math.round(performance.now() - startTime);
      setLatencyMs(elapsed);
      setHttpStatus(response.status);

      let payload = null;
      try {
        payload = await response.json();
      } catch {
        payload = await response.text();
      }
      setRawPayload(payload);

      // Condition 1: HTTP 200 + expected payload {"status": "ok"}
      if (response.status === 200 && payload && payload.status === 'ok') {
        setHealthData({
          condition: 'HEALTHY',
          overall: 'OPERATIONAL',
          apiStatus: 'OPERATIONAL',
          dbStatus: 'OPERATIONAL',
          apiLabel: 'OPERATIONAL',
          dbLabel: 'OPERATIONAL',
          dbDiagnostic: 'SELECT 1 SUCCESS',
          apiDiagnostic: 'HTTP 200 OK',
          message: 'FastAPI application is reachable and database ping query succeeded.',
        });
      }
      // Condition 2: HTTP 503 + expected payload {"detail": "Database unavailable"}
      else if (response.status === 503) {
        setHealthData({
          condition: 'DEGRADED',
          overall: 'DEGRADED',
          apiStatus: 'REACHABLE_WITH_ERROR',
          dbStatus: 'UNAVAILABLE',
          apiLabel: 'REACHABLE (HTTP 503)',
          dbLabel: 'UNAVAILABLE',
          dbDiagnostic: 'CONNECTION FAILED',
          apiDiagnostic: 'HTTP 503 SERVICE UNAVAILABLE',
          message: 'API process is reachable, but database connectivity query failed.',
        });
      }
      // Condition 4: Unexpected HTTP status or payload format
      else {
        setHealthData({
          condition: 'UNKNOWN',
          overall: 'UNKNOWN',
          apiStatus: 'UNEXPECTED_RESPONSE',
          dbStatus: 'UNKNOWN',
          apiLabel: 'UNEXPECTED RESPONSE',
          dbLabel: 'STATUS UNKNOWN',
          dbDiagnostic: 'NOT EVALUATED (INVALID PAYLOAD)',
          apiDiagnostic: `HTTP ${response.status}`,
          message: `Endpoint returned unexpected HTTP ${response.status} or unrecognized payload.`,
        });
      }
    } catch (err) {
      // Condition 3: Network failure (backend unreachable)
      const elapsed = Math.round(performance.now() - startTime);
      setLatencyMs(elapsed);
      setHttpStatus(null);
      setRawPayload(null);
      setErrorDetails(err.message || 'Failed to connect to backend service.');
      setHealthData({
        condition: 'NETWORK_FAILURE',
        overall: 'UNAVAILABLE',
        apiStatus: 'UNREACHABLE',
        dbStatus: 'UNKNOWN',
        apiLabel: 'UNREACHABLE',
        dbLabel: 'STATUS UNKNOWN',
        dbDiagnostic: 'NOT EVALUATED (GATEWAY DOWN)',
        apiDiagnostic: 'CONNECTION REFUSED',
        message: 'Could not establish connection to the backend health endpoint.',
      });
    } finally {
      setIsLoading(false);
      setLastChecked(new Date());
    }
  }, []);

  useEffect(() => {
    fetchHealthStatus();
  }, [fetchHealthStatus]);

  // Overall status design styling
  const getOverallBadgeStyle = () => {
    if (isLoading && !healthData) {
      return {
        text: 'CHECKING STATUS...',
        color: 'text-[#45D9E8]',
        borderColor: 'border-[#45D9E8]/40',
        bg: 'bg-[#45D9E8]/10',
        pulse: 'bg-[#45D9E8]',
        bannerBg: 'border-[#45D9E8]/40 bg-[#45D9E8]/5',
      };
    }
    if (healthData?.overall === 'OPERATIONAL') {
      return {
        text: 'ALL SYSTEMS OPERATIONAL',
        color: 'text-[#B8F34A]',
        borderColor: 'border-[#B8F34A]/40',
        bg: 'bg-[#B8F34A]/10',
        pulse: 'bg-[#B8F34A]',
        bannerBg: 'border-[#B8F34A]/40 bg-[#B8F34A]/5',
      };
    }
    if (healthData?.overall === 'DEGRADED') {
      return {
        text: 'SYSTEM DEGRADED',
        color: 'text-[#FF6B35]',
        borderColor: 'border-[#FF6B35]/40',
        bg: 'bg-[#FF6B35]/10',
        pulse: 'bg-[#FF6B35]',
        bannerBg: 'border-[#FF6B35]/40 bg-[#FF6B35]/5',
      };
    }
    if (healthData?.overall === 'UNKNOWN') {
      return {
        text: 'HEALTH STATUS UNKNOWN',
        color: 'text-[#FF6B35]',
        borderColor: 'border-[#FF6B35]/40',
        bg: 'bg-[#FF6B35]/10',
        pulse: 'bg-[#FF6B35]',
        bannerBg: 'border-[#FF6B35]/40 bg-[#FF6B35]/5',
      };
    }
    return {
      text: 'BACKEND UNAVAILABLE',
      color: 'text-[#FF6B35]',
      borderColor: 'border-[#FF6B35]/40',
      bg: 'bg-[#FF6B35]/10',
      pulse: 'bg-[#FF6B35]',
      bannerBg: 'border-[#FF6B35]/40 bg-[#FF6B35]/5',
    };
  };

  const badgeStyle = getOverallBadgeStyle();

  return (
    <div className="space-y-16 md:space-y-24">
      {/* SECTION 1: HERO & LIVE STATUS BANNER */}
      <section className="relative overflow-hidden pt-4 pb-2">
        <Container>
          <div className="border border-[#344044] rounded-lg bg-[#111619] p-6 sm:p-8 md:p-12 relative space-y-8">
            {/* Top telemetry status bar */}
            <div className="flex flex-wrap items-center justify-between gap-3 border-b border-[#344044] pb-4">
              <div className="flex items-center gap-2 font-mono text-xs text-[#A5B0AA]">
                <span className={`h-2 w-2 rounded-full ${badgeStyle.pulse} ${isLoading ? 'animate-pulse' : ''}`}></span>
                <span>telemetry:~/c2c/system_status</span>
                <span className="text-[#344044]">|</span>
                <span className={badgeStyle.color}>{badgeStyle.text}</span>
              </div>
              <div className="font-mono text-xs text-[#45D9E8] border border-[#45D9E8]/40 px-2.5 py-1 rounded bg-[#45D9E8]/10 tracking-wider">
                C2C // SYSTEM_STATUS
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-8 space-y-5">
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold font-['Barlow Condensed'] text-[#F1F3E9] uppercase tracking-tight leading-tight">
                  System Status <span className="text-[#FF6B35]">& Availability</span>.
                </h1>
                <p className="text-base sm:text-lg text-[#F1F3E9]/90 max-w-2xl leading-relaxed">
                  Real-time availability and diagnostic telemetry for the Code2Chill backend services and database connection.
                </p>
                <p className="text-sm text-[#A5B0AA] max-w-2xl leading-relaxed">
                  Status data on this page reflects genuine health evaluations executed directly against our FastAPI backend and PostgreSQL database ping query.
                </p>
              </div>

              {/* Custom SVG Health Network Schematic */}
              <div className="lg:col-span-4 flex justify-center">
                <div className="w-full max-w-xs rounded border border-[#344044] bg-[#1A2224]/80 p-5 font-mono text-xs space-y-3">
                  <div className="flex justify-between items-center text-[11px] text-[#A5B0AA] border-b border-[#344044] pb-2">
                    <span className="text-[#F1F3E9]">SERVICE_BUS_TOPOLOGY</span>
                    <span className={badgeStyle.color}>{isLoading ? 'POLLING' : 'ACTIVE'}</span>
                  </div>

                  <svg
                    className="w-full h-32"
                    viewBox="0 0 220 120"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    aria-label="System status schematic diagram"
                    role="img"
                  >
                    {/* Background grid */}
                    <line x1="10" y1="20" x2="210" y2="20" stroke="#344044" strokeWidth="0.5" strokeDasharray="2 2" />
                    <line x1="10" y1="60" x2="210" y2="60" stroke="#344044" strokeWidth="0.5" strokeDasharray="2 2" />
                    <line x1="10" y1="100" x2="210" y2="100" stroke="#344044" strokeWidth="0.5" strokeDasharray="2 2" />

                    {/* Connection Traces */}
                    <path
                      d="M45 60 L110 60 L175 60"
                      stroke={healthData?.overall === 'OPERATIONAL' ? '#B8F34A' : '#344044'}
                      strokeWidth="1.5"
                    />

                    {/* Node 1: Client/Frontend */}
                    <rect x="15" y="45" width="45" height="30" rx="3" fill="#111619" stroke="#45D9E8" strokeWidth="1.5" />
                    <text x="37" y="63" fill="#45D9E8" fontSize="7" fontFamily="monospace" textAnchor="middle" fontWeight="bold">CLIENT</text>

                    {/* Node 2: FastAPI Gateway */}
                    <rect
                      x="85"
                      y="40"
                      width="50"
                      height="40"
                      rx="3"
                      fill="#111619"
                      stroke={
                        healthData?.apiStatus === 'OPERATIONAL'
                          ? '#B8F34A'
                          : healthData?.apiStatus === 'REACHABLE_WITH_ERROR'
                          ? '#FF6B35'
                          : '#FF6B35'
                      }
                      strokeWidth="1.5"
                    />
                    <text
                      x="110"
                      y="63"
                      fill={
                        healthData?.apiStatus === 'OPERATIONAL'
                          ? '#B8F34A'
                          : healthData?.apiStatus === 'REACHABLE_WITH_ERROR'
                          ? '#FF6B35'
                          : '#FF6B35'
                      }
                      fontSize="7"
                      fontFamily="monospace"
                      textAnchor="middle"
                      fontWeight="bold"
                    >
                      FASTAPI
                    </text>

                    {/* Node 3: Database Engine */}
                    <rect
                      x="160"
                      y="45"
                      width="45"
                      height="30"
                      rx="3"
                      fill="#111619"
                      stroke={
                        healthData?.dbStatus === 'OPERATIONAL'
                          ? '#B8F34A'
                          : healthData?.dbStatus === 'UNAVAILABLE'
                          ? '#FF6B35'
                          : '#344044'
                      }
                      strokeWidth="1.5"
                    />
                    <text
                      x="182"
                      y="63"
                      fill={
                        healthData?.dbStatus === 'OPERATIONAL'
                          ? '#B8F34A'
                          : healthData?.dbStatus === 'UNAVAILABLE'
                          ? '#FF6B35'
                          : '#A5B0AA'
                      }
                      fontSize="7"
                      fontFamily="monospace"
                      textAnchor="middle"
                      fontWeight="bold"
                    >
                      DATABASE
                    </text>

                    {/* Dynamic Status Indicator Dots */}
                    <circle cx="65" cy="60" r="2.5" fill="#45D9E8" />
                    <circle
                      cx="155"
                      cy="60"
                      r="2.5"
                      fill={healthData?.overall === 'OPERATIONAL' ? '#B8F34A' : '#FF6B35'}
                    />
                  </svg>

                  <div className="pt-2 border-t border-[#344044] flex justify-between text-[11px] font-mono text-[#A5B0AA]">
                    <span>CHECK: SELECT 1</span>
                    <span className={badgeStyle.color}>{healthData?.overall || 'PENDING'}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Prominent Live Status Banner */}
            <div className={`rounded-lg border p-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 ${badgeStyle.bannerBg}`}>
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <span className={`h-3 w-3 rounded-full ${badgeStyle.pulse} ${isLoading ? 'animate-pulse' : ''}`}></span>
                  <span className={`font-mono text-sm sm:text-base font-bold ${badgeStyle.color}`}>
                    {badgeStyle.text}
                  </span>
                </div>
                <p className="text-xs sm:text-sm text-[#A5B0AA]">
                  {healthData?.message || 'Connecting to live service telemetry...'}
                </p>
              </div>

              <div className="flex flex-col sm:items-end gap-1 text-xs font-mono text-[#A5B0AA]/80">
                <div>
                  LAST CHECKED:{' '}
                  <span className="text-[#F1F3E9]">
                    {lastChecked ? lastChecked.toLocaleTimeString() : 'Awaiting check'}
                  </span>
                </div>
                {latencyMs !== null && (
                  <div>
                    RESPONSE LATENCY:{' '}
                    <span className={latencyMs < 500 ? 'text-[#B8F34A]' : 'text-[#FF6B35]'}>
                      {latencyMs}ms
                    </span>
                  </div>
                )}
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* SECTION 2: GENUINE SERVICE HEALTH CHECKS */}
      <section>
        <Container>
          <div className="space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-3 border-b border-[#344044] pb-4">
              <div>
                <span className="font-mono text-xs text-[#FF6B35] uppercase tracking-wider block">
                  // MONITORED_SERVICES
                </span>
                <SectionHeading className="!mb-0">
                  Service Components
                </SectionHeading>
              </div>
              <span className="font-mono text-xs text-[#A5B0AA]">
                GENUINE BACKEND METRICS ONLY
              </span>
            </div>

            <p className="text-sm text-[#A5B0AA] max-w-2xl leading-relaxed">
              Only services with direct automated health-check endpoints in our backend are displayed. No synthetic uptime percentages or mock metrics are fabricated.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
              {/* Service 1: FastAPI Application */}
              <div className="rounded-lg border border-[#344044] bg-[#111619] p-6 space-y-4 hover:border-[#45D9E8] transition-colors flex flex-col justify-between">
                <div className="space-y-3">
                  <div className="flex items-center justify-between border-b border-[#344044] pb-3">
                    <span className="font-mono text-xs text-[#45D9E8] bg-[#45D9E8]/10 px-2 py-0.5 rounded border border-[#45D9E8]/30">
                      SERVICE // 01
                    </span>
                    <span
                      className={`font-mono text-xs px-2 py-0.5 rounded border ${
                        healthData?.apiStatus === 'OPERATIONAL'
                          ? 'bg-[#B8F34A]/10 text-[#B8F34A] border-[#B8F34A]/30'
                          : healthData?.apiStatus === 'REACHABLE_WITH_ERROR'
                          ? 'bg-[#FF6B35]/10 text-[#FF6B35] border-[#FF6B35]/30'
                          : 'bg-[#FF6B35]/10 text-[#FF6B35] border-[#FF6B35]/30'
                      }`}
                    >
                      {isLoading ? 'CHECKING...' : healthData?.apiLabel || 'UNKNOWN'}
                    </span>
                  </div>

                  <h3 className="text-xl sm:text-2xl font-bold font-['Barlow Condensed'] text-[#F1F3E9] uppercase tracking-wide">
                    FastAPI Application Gateway
                  </h3>

                  <p className="text-xs sm:text-sm text-[#A5B0AA] leading-relaxed">
                    Processes incoming REST requests, enforces CORS policies, validates request payloads, and exposes public API endpoints.
                  </p>
                </div>

                <div className="pt-3 border-t border-[#344044]/60 flex items-center justify-between text-xs font-mono text-[#A5B0AA]/80">
                  <span>CHECK: HTTP GET /api/health</span>
                  <span className="text-[#F1F3E9]">{healthData?.apiDiagnostic || 'NO_RESPONSE'}</span>
                </div>
              </div>

              {/* Service 2: Database Connectivity */}
              <div className="rounded-lg border border-[#344044] bg-[#111619] p-6 space-y-4 hover:border-[#45D9E8] transition-colors flex flex-col justify-between">
                <div className="space-y-3">
                  <div className="flex items-center justify-between border-b border-[#344044] pb-3">
                    <span className="font-mono text-xs text-[#FF6B35] bg-[#FF6B35]/10 px-2 py-0.5 rounded border border-[#FF6B35]/30">
                      SERVICE // 02
                    </span>
                    <span
                      className={`font-mono text-xs px-2 py-0.5 rounded border ${
                        healthData?.dbStatus === 'OPERATIONAL'
                          ? 'bg-[#B8F34A]/10 text-[#B8F34A] border-[#B8F34A]/30'
                          : healthData?.dbStatus === 'UNAVAILABLE'
                          ? 'bg-[#FF6B35]/10 text-[#FF6B35] border-[#FF6B35]/30'
                          : 'bg-[#A5B0AA]/10 text-[#A5B0AA] border-[#A5B0AA]/30'
                      }`}
                    >
                      {isLoading ? 'CHECKING...' : healthData?.dbLabel || 'UNKNOWN'}
                    </span>
                  </div>

                  <h3 className="text-xl sm:text-2xl font-bold font-['Barlow Condensed'] text-[#F1F3E9] uppercase tracking-wide">
                    Database Connection Engine
                  </h3>

                  <p className="text-xs sm:text-sm text-[#A5B0AA] leading-relaxed">
                    Evaluates persistent database responsiveness using an active <code className="text-[#45D9E8]">SELECT 1</code> ping query against the configured database session.
                  </p>
                </div>

                <div className="pt-3 border-t border-[#344044]/60 flex items-center justify-between text-xs font-mono text-[#A5B0AA]/80">
                  <span>DIAGNOSTIC: DB_PING</span>
                  <span className="text-[#F1F3E9]">
                    {healthData?.dbDiagnostic || 'NOT EVALUATED'}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* SECTION 3: TECHNICAL DETAILS & REFRESH CONTROL */}
      <section>
        <Container>
          <div className="rounded-lg border border-[#344044] bg-[#111619] p-6 sm:p-8 space-y-6">
            <div className="flex flex-wrap items-center justify-between gap-4 border-b border-[#344044] pb-4">
              <div className="space-y-1">
                <span className="font-mono text-xs text-[#45D9E8] uppercase tracking-wider block">
                  // TELEMETRY_CONSOLE
                </span>
                <h2 className="text-2xl sm:text-3xl font-bold font-['Barlow Condensed'] text-[#F1F3E9] uppercase tracking-wide">
                  Live Diagnostic Telemetry
                </h2>
              </div>

              {/* Refresh Button with Loading Protection */}
              <button
                type="button"
                onClick={fetchHealthStatus}
                disabled={isLoading}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded font-mono text-xs font-medium transition-colors bg-[#1A2224] text-[#F1F3E9] hover:bg-[#344044] border border-[#344044] hover:border-[#45D9E8] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#45D9E8] disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <span className={isLoading ? 'animate-spin inline-block' : ''}>↻</span>
                {isLoading ? 'Checking...' : 'Refresh Status'}
              </button>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start font-mono text-xs">
              {/* Telemetry Inspection Box */}
              <div className="lg:col-span-8 p-5 rounded border border-[#344044] bg-[#090B0D] space-y-3 overflow-x-auto">
                <div className="flex items-center justify-between text-[#A5B0AA] border-b border-[#344044] pb-2 text-[11px]">
                  <span>HTTP_TRANSACTION_PAYLOAD</span>
                  <span className={httpStatus === 200 ? 'text-[#B8F34A]' : 'text-[#FF6B35]'}>
                    {httpStatus ? `STATUS: ${httpStatus}` : 'FAILED_CONNECTION'}
                  </span>
                </div>

                <div className="space-y-1 text-[#A5B0AA] text-xs">
                  <div>ENDPOINT: <span className="text-[#F1F3E9]">GET {getHealthEndpointUrl()}</span></div>
                  <div>RESPONSE TIME: <span className="text-[#45D9E8]">{latencyMs !== null ? `${latencyMs} ms` : 'N/A'}</span></div>
                  <div>PAYLOAD DATA:</div>
                  <pre className="p-3 rounded bg-[#111619] border border-[#344044] text-[#B8F34A] overflow-x-auto text-[11px]">
                    {rawPayload
                      ? JSON.stringify(rawPayload, null, 2)
                      : errorDetails
                      ? JSON.stringify({ error: errorDetails, target: getHealthEndpointUrl() }, null, 2)
                      : '// No payload received'}
                  </pre>
                </div>
              </div>

              {/* Verification & Method Note */}
              <div className="lg:col-span-4 p-5 rounded border border-[#344044] bg-[#1A2224] space-y-3">
                <div className="flex justify-between items-center text-[#A5B0AA] border-b border-[#344044] pb-2 text-[11px]">
                  <span>CHECK_METHODOLOGY</span>
                  <span className="text-[#45D9E8]">VERIFIED</span>
                </div>
                <div className="space-y-2 text-xs text-[#A5B0AA] leading-relaxed">
                  <p>
                    Health checks run directly from your browser to the configured FastAPI health route.
                  </p>
                  <p>
                    HTTP 200 confirms both process availability and database query execution. HTTP 503 confirms the API is reachable but database connectivity failed.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* SECTION 4: INCIDENT INFORMATION */}
      <section>
        <Container>
          <div className="rounded-lg border border-[#344044] bg-[#111619] p-6 sm:p-8 space-y-4">
            <div className="flex flex-wrap items-center justify-between gap-3 border-b border-[#344044] pb-3">
              <span className="font-mono text-xs text-[#FF6B35] uppercase tracking-wider block">
                // INCIDENT_LOGS
              </span>
              <span className="font-mono text-xs text-[#A5B0AA]">
                HISTORICAL TRACKING: NOT PUBLISHED
              </span>
            </div>

            <h3 className="text-xl sm:text-2xl font-bold font-['Barlow Condensed'] text-[#F1F3E9] uppercase tracking-wide">
              Incident History & Scheduled Maintenance
            </h3>

            <p className="text-xs sm:text-sm text-[#A5B0AA] leading-relaxed max-w-3xl">
              Historical incident logs and automated outage timelines are not published on this public dashboard. Code2Chill announces planned maintenance windows or service updates through official club announcements.
            </p>
          </div>
        </Container>
      </section>

      {/* SECTION 5: NAVIGATION CTA */}
      <section className="pb-8">
        <Container>
          <div className="rounded-lg border border-[#344044] bg-[#111619] p-8 sm:p-12 text-center space-y-6 relative overflow-hidden">
            <div className="inline-block font-mono text-xs text-[#FF6B35] border border-[#FF6B35]/40 px-3 py-1 rounded bg-[#FF6B35]/10">
              NAVIGATION // DIRECTORY
            </div>

            <div className="space-y-3 max-w-2xl mx-auto">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold font-['Barlow Condensed'] text-[#F1F3E9] uppercase tracking-wide">
                Return to Public Pages
              </h2>
              <p className="text-sm sm:text-base text-[#A5B0AA] leading-relaxed">
                Explore our community philosophy, upcoming events, and official communication channels.
              </p>
            </div>

            <div className="pt-2 flex flex-wrap items-center justify-center gap-3 sm:gap-4">
              <Link
                to="/about"
                className="px-6 py-2.5 rounded font-medium text-xs sm:text-sm transition-colors duration-200 bg-[#FF6B35] text-[#090B0D] hover:bg-[#FF7A4A] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#45D9E8]"
              >
                About Us →
              </Link>
              <Link
                to="/events"
                className="px-6 py-2.5 rounded font-medium text-xs sm:text-sm transition-colors duration-200 bg-[#1A2224] text-[#F1F3E9] hover:bg-[#344044] border border-[#344044] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#45D9E8]"
              >
                Events →
              </Link>
              <Link
                to="/contact"
                className="px-6 py-2.5 rounded font-medium text-xs sm:text-sm transition-colors duration-200 bg-[#1A2224] text-[#F1F3E9] hover:bg-[#344044] border border-[#344044] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#45D9E8]"
              >
                Contact →
              </Link>
            </div>

            <div className="pt-4 text-xs font-mono text-[#A5B0AA]/80 flex flex-wrap justify-center items-center gap-4">
              <span className="text-[#A5B0AA]">Code2Chill • Office of Student Life (OSL), Chitkara University</span>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}
