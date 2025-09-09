class RateLimiter {
  constructor() {
    this.requestCounts = new Map();
    this.MAX_REQUESTS = 5; // Maximum requests allowed
    this.TIME_WINDOW_MS = 60 * 1000; // 1-minute window

    // Start cleanup task
    this.startCleanupTask();
  }

  allowRequest(ipAddress) {
    const now = Date.now();

    let requestCount = this.requestCounts.get(ipAddress);
    if (!requestCount) {
      requestCount = {
        windowStart: now,
        count: 0
      };
      this.requestCounts.set(ipAddress, requestCount);
    }

    const elapsed = now - requestCount.windowStart;

    // Reset window if time window has passed
    if (elapsed > this.TIME_WINDOW_MS) {
      requestCount.windowStart = now;
      requestCount.count = 0;
    }

    // Check if limit exceeded
    if (requestCount.count >= this.MAX_REQUESTS) {
      return false;
    }

    // Increment count
    requestCount.count++;
    return true;
  }

  getTimeRemaining(ipAddress) {
    const requestCount = this.requestCounts.get(ipAddress);
    if (!requestCount) {
      return 0;
    }

    const now = Date.now();
    const elapsed = now - requestCount.windowStart;

    if (elapsed >= this.TIME_WINDOW_MS) {
      return 0;
    }

    return Math.ceil((this.TIME_WINDOW_MS - elapsed) / 1000); // Return seconds
  }

  cleanup() {
    const cutoffTime = Date.now() - this.TIME_WINDOW_MS;

    for (const [ipAddress, requestCount] of this.requestCounts.entries()) {
      if (requestCount.windowStart < cutoffTime) {
        this.requestCounts.delete(ipAddress);
      }
    }
  }

  startCleanupTask() {
    // Run cleanup every 30 minutes (1800000 ms)
    setInterval(() => {
      this.cleanup();
    }, 1800000);
  }

  getRateLimitInfo(ipAddress) {
    const requestCount = this.requestCounts.get(ipAddress);
    if (!requestCount) {
      return {
        remaining: this.MAX_REQUESTS,
        resetTime: Date.now() + this.TIME_WINDOW_MS
      };
    }

    const now = Date.now();
    const elapsed = now - requestCount.windowStart;

    if (elapsed > this.TIME_WINDOW_MS) {
      return {
        remaining: this.MAX_REQUESTS,
        resetTime: now + this.TIME_WINDOW_MS
      };
    }

    return {
      remaining: Math.max(0, this.MAX_REQUESTS - requestCount.count),
      resetTime: requestCount.windowStart + this.TIME_WINDOW_MS
    };
  }
}

const rateLimiter = new RateLimiter();

export default rateLimiter;