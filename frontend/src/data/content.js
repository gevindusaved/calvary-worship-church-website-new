export const branchesData = Object.freeze([
  { id: 'main', name: 'Cathedral Branch', isMain: true, location: 'Brookfield', address: '1184 Cedar Ridge Avenue', serviceTimes: ['Sun 9:00 AM', 'Wed 7:00 PM'], description: 'Our founding branch where worship, teaching, and community outreach are rooted.', image: 'https://images.unsplash.com/photo-1519491050282-cf00c82424b4?q=80&w=1200&auto=format&fit=crop', ministriesAvailable: ['Worship', 'Youth', 'Prayer', 'Multimedia'] },
  { id: 'north', name: 'North Haven Branch', isMain: false, location: 'North Haven', address: '442 Union Street', serviceTimes: ['Sun 10:30 AM', 'Fri 7:30 PM'], description: 'A welcoming branch focused on discipleship and family life.', image: 'https://images.unsplash.com/photo-1494891848038-7bd202a2afeb?q=80&w=1200&auto=format&fit=crop', ministriesAvailable: ['Children', 'Outreach', 'Prayer'] },
  { id: 'lakeside', name: 'Lakeside Branch', isMain: false, location: 'Lakeside', address: '90 Willow Drive', serviceTimes: ['Sun 8:30 AM', 'Tue 7:00 PM'], description: 'Known for active youth and worship ministries with strong community mentorship.', image: 'https://images.unsplash.com/photo-1548625149-fc4a29cf7092?q=80&w=1200&auto=format&fit=crop', ministriesAvailable: ['Youth', 'Choir', 'Ushers'] },
])

export const ministriesData = Object.freeze([
  { id: 1, name: 'Worship & Choir', description: 'Leading the congregation in reverent praise.' },
  { id: 2, name: 'Youth Fellowship', description: 'Formation, mentorship, and faith for young adults.' },
  { id: 3, name: 'Prayer Team', description: 'Intercession and spiritual support throughout the week.' },
  { id: 4, name: 'Multimedia', description: 'Livestream, projection, editing, and visual storytelling.' },
])

export const servantsData = Object.freeze([
  { id: 1, name: 'Pastor Daniel Adebayo', role: 'Senior Pastor', category: 'Pastoral Team', bio: 'Faithful exposition of Scripture with compassionate pastoral care.', branch: 'Cathedral Branch', yearsOfService: 18, image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=800&auto=format&fit=crop' },
  { id: 2, name: 'Pastor Ruth Mensah', role: 'Associate Pastor', category: 'Pastoral Team', bio: 'Discipleship and women ministry leadership.', branch: 'North Haven Branch', yearsOfService: 12, image: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?q=80&w=800&auto=format&fit=crop' },
  { id: 3, name: 'Samuel Brooks', role: 'Lead Sound Engineer', category: 'Multimedia', bio: 'Coordinates audio excellence for in-person and online worship.', branch: 'Cathedral Branch', yearsOfService: 7, image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=800&auto=format&fit=crop' },
  { id: 4, name: 'Grace Okafor', role: 'Youth Coordinator', category: 'Youth Ministry', bio: 'Guides youth gatherings, mentorship tracks, and prayer circles.', branch: 'Lakeside Branch', yearsOfService: 6, image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=800&auto=format&fit=crop' },
])

export const eventsData = Object.freeze([
  { id: 1, title: 'Sunday Worship Service', type: 'weekly', category: 'Worship', day: 'Sunday', date: 'Weekly', time: '9:00 AM', location: 'Cathedral Sanctuary', branch: 'Cathedral Branch', description: 'Word, worship, prayer, and communion.', featured: false },
  { id: 2, title: 'Midweek Bible Study', type: 'weekly', category: 'Bible Study', day: 'Wednesday', date: 'Weekly', time: '7:00 PM', location: 'Main Hall', branch: 'Cathedral Branch', description: 'Verse-by-verse biblical teaching and discussion.', featured: false },
  { id: 3, title: 'Youth Fellowship Night', type: 'weekly', category: 'Youth', day: 'Friday', date: 'Weekly', time: '6:30 PM', location: 'Lakeside Hall', branch: 'Lakeside Branch', description: 'Worship, mentoring, and fellowship for youth.', featured: false },
  { id: 4, title: 'Citywide Prayer Vigil', type: 'special', category: 'Prayer', day: 'Friday', date: 'June 14, 2026', time: '10:00 PM', location: 'Cathedral Branch', branch: 'Cathedral Branch', description: 'A night of intercession for families, city leaders, and revival.', featured: true },
])

export const videosData = Object.freeze([
  { id: 1, title: 'Anchored in Hope', category: 'Sermons', speaker: 'Pastor Daniel Adebayo', date: 'April 20, 2026', thumbnail: 'https://images.unsplash.com/photo-1475721027785-f74eccf877e2?q=80&w=1200&auto=format&fit=crop', youtubeUrl: 'https://www.youtube.com/watch?v=ysz5S6PUM-U', embedUrl: 'https://www.youtube.com/embed/ysz5S6PUM-U', description: 'A call to remain steadfast in Christ through every season.', featured: true, duration: '42:12' },
  { id: 2, title: 'The Beauty of Prayer', category: 'Bible Study', speaker: 'Pastor Ruth Mensah', date: 'April 13, 2026', thumbnail: 'https://images.unsplash.com/photo-1438232992991-995b7058bbb3?q=80&w=1200&auto=format&fit=crop', youtubeUrl: 'https://www.youtube.com/watch?v=jNQXAC9IVRw', embedUrl: 'https://www.youtube.com/embed/jNQXAC9IVRw', description: 'Learning to pray with consistency, humility, and confidence.', featured: false, duration: '31:40' },
])
