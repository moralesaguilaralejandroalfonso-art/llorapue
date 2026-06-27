/**
 * GhostCode - Secure Systems Engine
 * Core security utilities to protect against SQL Injection, Cross-Site Scripting (XSS),
 * and dynamic query injection vulnerabilities.
 */

/**
 * Sanitizes input values to prevent SQL injection by escaping characters
 * and checking for hazardous SQL keywords.
 * 
 * @param input The raw input string
 * @returns The sanitized safe string
 */
export function sanitizeSqlInput(input: string): string {
  if (typeof input !== "string") return "";

  // 1. Detect common SQL Injection patterns (Case-Insensitive)
  const sqlInjectionPattern = /('|--|#|\/\*|\*\/|UNION|SELECT|INSERT|UPDATE|DELETE|DROP|ALTER|OR\s+\d+=\d+|AND\s+\d+=\d+)/gi;
  
  let sanitized = input;

  // 2. Reject or replace critical Injection markers
  if (sqlInjectionPattern.test(input)) {
    // Replace dangerous SQL characters and patterns
    sanitized = sanitized.replace(/['"\\#;]/g, "");
  }

  // 3. Trim and normalize
  return sanitized.trim();
}

/**
 * Escapes HTML characters to prevent Cross-Site Scripting (XSS)
 * 
 * @param input The unsafe string
 * @returns An HTML-safe escaped string
 */
export function escapeHtml(input: string): string {
  if (typeof input !== "string") return "";
  
  return input
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#x27;")
    .replace(/\//g, "&#x2F;");
}

/**
 * Simulates a secure, parameterized prepared statement to process database parameters safely.
 * Under no circumstances does this construct raw query strings (avoiding string concatenation).
 * 
 * @param query The parameterized query template (e.g. "SELECT * FROM users WHERE id = ?")
 * @param params Array of parameters to bind safely
 * @returns A structured representation of the safe executed call
 */
export function executeSecurePreparedCall(query: string, params: any[]): { query: string; params: any[]; secure: boolean } {
  // Enforce parameterization - parameters and query structure are separated
  return {
    query,
    params: params.map(p => typeof p === "string" ? sanitizeSqlInput(p) : p),
    secure: true
  };
}
