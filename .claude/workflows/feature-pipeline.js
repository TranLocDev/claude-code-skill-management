// TODO: script điều phối nhiều subagent (Workflow tool).
// Dùng khi muốn chạy pipeline tự động, song song (vd: review + test cùng lúc).
export const meta = {
  name: 'feature-pipeline',
  description: 'TODO: Spec → Plan → Dev → Review → Test → Report',
  phases: [
    { title: 'Spec' }, { title: 'Plan' }, { title: 'Dev' },
    { title: 'Review' }, { title: 'Test' }, { title: 'Report' },
  ],
}

// TODO: implement bằng agent()/parallel()/pipeline()
