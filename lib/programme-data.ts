// lib/programme-data.ts
export interface ProgrammeDay {
  type: string;
  title?: string;
  core?: string[];
  taskType?: string;
  task?: string[];
  output?: string;
  theme?: string;
  present?: string[];
  criteria?: string[];
  awards?: string[];
}

export interface ProgrammeData {
  icon: string;
  name: string;
  cert: string;
  days: {
    mon: ProgrammeDay;
    tue: ProgrammeDay;
    wed: ProgrammeDay;
    thu: ProgrammeDay;
    fri: ProgrammeDay;
    sat: ProgrammeDay;
  };
}

export const programmeData: Record<string, ProgrammeData> = {
  estate: {
    icon: "building",
    name: "Estate Management",
    cert: "Professional Certificate in Estate Management",
    days: {
      mon: { type: "Individual Class · Activity Day", title: "Foundations of Estate Management & Property Administration",
        core: ["Introduction to Estate Management", "Roles and Responsibilities of an Estate Manager", "Overview of the Nigerian Real Estate Industry", "Types of Properties", "Land Ownership Systems in Nigeria", "Property Rights and the Land Use Act", "Basic Real Estate Terminologies", "Ethics and Professional Conduct", "Career Opportunities in Estate Management", "Importance of Estate Management in Community Development"],
        taskType: "Individual Task", task: ['Write: "What Estate Management Means to Me."', "Identify five property types within your community", "List three property-related challenges in your locality", "Identify one undeveloped property with potential"],
        output: "Personal Estate Management Reflection Sheet" },
      tue: { type: "Group Class · Collaboration Day", title: "Property Identification, Documentation & Market Analysis",
        core: ["Identifying Real Estate Opportunities", "Property Inspection Techniques", "Understanding Property Documentation", "Introduction to Property Valuation", "Factors Affecting Property Value", "Community Property Mapping", "Housing Needs Assessment", "Real Estate Market Analysis", "Identifying Investment Opportunities", "Risk Assessment in Property Acquisition"],
        taskType: "Group Task", task: ["Survey a selected community (real or simulated)", "Identify one major housing or property challenge", "Analyze available land and property opportunities", "Identify stakeholders", "Define the selected problem clearly"],
        output: "Community Property Assessment Report" },
      wed: { type: "Individual Skill Practice Day", title: "Property Management, Client Relations & Facility Administration",
        core: ["Principles of Property Management", "Tenant and Landlord Relationships", "Rent Administration", "Lease Agreements", "Facility Management", "Property Maintenance Planning", "Client Relationship Management", "Negotiation Skills", "Real Estate Marketing", "Professional Ethics in Property Transactions"],
        taskType: "Individual Task", task: ["Prepare a property management plan for a residential building", 'Write: "How I would manage a residential estate effectively."', "Develop a one-minute property marketing pitch", "List five qualities of a successful estate manager"],
        output: "Individual Property Management Plan" },
      thu: { type: "Group Project Development Day", title: "Real Estate Development, Investment & Project Planning",
        core: ["Real Estate Development Process", "Land Development Planning", "Affordable Housing Concepts", "Cost Estimation Basics", "Project Planning and Scheduling", "Stakeholder Engagement", "Risk Management in Property Development", "Sustainable Estate Development", "Community Infrastructure Planning", "Team Collaboration in Real Estate Projects"],
        taskType: "Group Task", task: ["Develop a practical real estate solution to Tuesday's challenge", "Assign responsibilities among team members", "Prepare an implementation strategy", "Estimate project requirements and resources"],
        output: "Group Real Estate Development Strategy" },
      fri: { type: "Capstone Project Day", title: "Estate Development Strategy & Community Housing Solutions",
        core: ["Transforming Property Ideas into Practical Projects", "Developing Sustainable Community Housing Solutions", "Property Investment Planning", "Financial Feasibility Basics", "Risk Identification and Mitigation", "Monitoring and Evaluation of Real Estate Projects", "Community Impact Assessment", "Preparing Professional Project Presentations"],
        taskType: "Capstone · Group Task", task: ["Problem Definition", "Estate Development Strategy", "Implementation Plan", "Team Responsibilities", "Expected Outcomes"],
        output: "Final Capstone Project Document" },
      sat: { type: "Graduation", theme: "Presenting Solutions, Celebrating Excellence & Becoming Certified Professionals",
        present: ["Community or property challenge identified", "Background of the problem", "Root cause analysis", "Proposed estate management solution", "Implementation plan", "Expected outcomes and community impact", "Q&A with the assessment panel"],
        criteria: ["Problem Identification and Analysis", "Practicality of the Proposed Solution", "Innovation and Creativity", "Feasibility and Sustainability", "Team Collaboration", "Communication and Presentation Skills", "Professionalism"],
        awards: ["Best Estate Development Project", "Best Property Management Strategy", "Most Innovative Real Estate Solution", "Best Team Collaboration", "Best Project Presentation", "Outstanding Participant"] },
    },
  },
  // Add agro, entre, digital, trade, eng here with the same structure
};
