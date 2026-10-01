/**
 * AudioHabits Service Module
 * Manages Arthur Andrade's Top Artists (Last 6 Months period).
 * Features:
 * - LocalStorage caching with 24-hour TTL to prevent redundant requests.
 * - Same-origin data loading from js/data/audiohabits.json (synced locally via scripts/sync-audiohabits.ps1).
 * - Instant fallback dataset for zero-latency, offline-capable first paint.
 */

export const AUDIOHABITS_PROFILE_URL = 'https://audiohabits.co/u/12163317381';
const CACHE_KEY = 'audiohabits_artists_cache_v3';
const CACHE_TTL_MS = 24 * 60 * 60 * 1000; // 24 Hours

/**
 * Top Artists - Last 6 Months (Official verified dataset)
 */
export const FALLBACK_ARTISTS = [
  {
    rank: "1",
    name: "Eminem",
    genre: "rap",
    imageUrl: "https://i.scdn.co/image/ab6761610000e5eba00b11c129b27a88fc72f36b",
    spotifyUrl: "https://open.spotify.com/artist/7dGJo4pcD2V6oG8kP0tJRR"
  },
  {
    rank: "2",
    name: "Clams Casino",
    genre: "cloud rap",
    imageUrl: "https://i.scdn.co/image/ab6761610000e5eb775c5cfa9dbf38861387eebc",
    spotifyUrl: "https://open.spotify.com/artist/5vSQUyT33qxr1xAX2Tkf3A"
  },
  {
    rank: "3",
    name: "Crystal Castles",
    genre: "witch house",
    imageUrl: "https://i.scdn.co/image/5419a05563a9ba8cb16fe207199c298f621eef85",
    spotifyUrl: "https://open.spotify.com/artist/7K3zpFXBvPcvzhj7zlGJdO"
  },
  {
    rank: "4",
    name: "Yung Lean",
    genre: "cloud rap",
    imageUrl: "https://i.scdn.co/image/ab6761610000e5eb9203ea92f4c538f41e6eea8c",
    spotifyUrl: "https://open.spotify.com/artist/67lytN32YpUxiSeWlKfHJ3"
  },
  {
    rank: "5",
    name: "Kid Cudi",
    genre: "alternative rap",
    imageUrl: "https://i.scdn.co/image/ab6761610000e5eb5f00bb6dd7a7008d14156630",
    spotifyUrl: "https://open.spotify.com/artist/0fA0VVWsXO9YnASrzqfmYu"
  },
  {
    rank: "6",
    name: "Yung Buda",
    genre: "brazilian trap",
    imageUrl: "https://i.scdn.co/image/ab6761610000e5eb681e2b4e6e3815bbb04155c3",
    spotifyUrl: "https://open.spotify.com/artist/34JhhuxlkDFSA5ek4AuZOp"
  },
  {
    rank: "7",
    name: "Bobby Raps",
    genre: "bass house",
    imageUrl: "https://i.scdn.co/image/ab6761610000e5eb9eeea29c54ddfc568d380b52",
    spotifyUrl: "https://open.spotify.com/artist/22g86cix6LCeLMbu3m91Wo"
  },
  {
    rank: "8",
    name: "O Rappa",
    genre: "brazilian rock",
    imageUrl: "https://i.scdn.co/image/ab6761610000e5eb70eaf88bf53be1e2f8b0fa6e",
    spotifyUrl: "https://open.spotify.com/artist/1A5QJAC1vdhbhPE25Q0x0f"
  },
  {
    rank: "9",
    name: "Lorn",
    genre: "witch house",
    imageUrl: "https://i.scdn.co/image/ab6761610000e5eb407dacc6afcca2e56bdf0b02",
    spotifyUrl: "https://open.spotify.com/artist/1PmVyfIR9KtCxbHWuga8E5"
  },
  {
    rank: "10",
    name: "Phantogram",
    genre: "indie electronic",
    imageUrl: "https://i.scdn.co/image/ab6761610000e5eb0fcb5946f9fea8be6ae5e858",
    spotifyUrl: "https://open.spotify.com/artist/1l9d7B8W0IHy3LqWsxP2SH"
  }
];

/**
 * Loads authentic 6-month artist data from localStorage cache, same-origin audiohabits.json, or fallback dataset.
 * Guarantees zero CORS blocks, zero network proxy dependencies, and instant reliable loading.
 */
export async function getAudioHabitsData(onBackgroundUpdate = null) {
  // 1. Check fresh localStorage cache
  try {
    const rawCache = localStorage.getItem(CACHE_KEY);
    if (rawCache) {
      const cache = JSON.parse(rawCache);
      const isFresh = cache.timestamp && (Date.now() - cache.timestamp < CACHE_TTL_MS);
      const list = Array.isArray(cache.data) ? cache.data : cache.data?.artists;
      if (isFresh && list && list.length > 0) {
        return { data: list, isLive: false, fromCache: true };
      }
    }
  } catch (err) {
    // Gracefully handle sandboxed environments
  }

  // 2. Fetch latest data from same-origin JSON (updated locally via scripts/sync-audiohabits.ps1)
  try {
    const res = await fetch('./js/data/audiohabits.json', { cache: 'no-cache' });
    if (res.ok) {
      const json = await res.json();
      const list = Array.isArray(json) ? json : json.artists;
      if (list && list.length > 0) {
        try {
          localStorage.setItem(CACHE_KEY, JSON.stringify({
            timestamp: Date.now(),
            data: list
          }));
        } catch (e) {}

        if (typeof onBackgroundUpdate === 'function') {
          onBackgroundUpdate(list);
        }

        return { data: list, isLive: true, fromCache: false };
      }
    }
  } catch (err) {
    // Fallback if running from local file:// or network is unavailable
  }

  // 3. Fallback dataset
  return { data: FALLBACK_ARTISTS, isLive: false, fromCache: false };
}

/**
 * Manually updates the cached artist data if needed
 */
export function updateAudioHabitsCache(customData) {
  if (!customData) return;
  const list = Array.isArray(customData) ? customData : (customData.artists || customData.sixMonths);
  if (!list) return;

  try {
    localStorage.setItem(CACHE_KEY, JSON.stringify({
      timestamp: Date.now(),
      data: list
    }));
    window.dispatchEvent(new CustomEvent('audiohabits:updated', {
      detail: { data: list }
    }));
  } catch (e) {
    // Ignore storage errors
  }
}
