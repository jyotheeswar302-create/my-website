const jobListingsSection1 = [
    {
        id: 1,
        title: "Software Engineer",
        type: "software",
        company: "TechCo",
        description: "TechCo is hiring a Software Engineer to develop innovative software solutions...",
        experience: "3+ years",
        deadline: "2023-11-15",
        applyLink: "https://example.com/software-engineer-apply"
    },
    {
        id: 2,
        title: "Web Developer",
        type: "software",
        company: "WebTech",
        description: "WebTech is looking for a Web Developer to create amazing websites...",
        experience: "2+ years",
        deadline: "2023-11-18",
        applyLink: "https://example.com/web-developer-apply"
    },
    {
        id: 3,
        title: "UX Designer",
        type: "design",
        company: "DesignStudio",
        description: "DesignStudio seeks a talented UX Designer to create user-friendly interfaces...",
        experience: "4+ years",
        deadline: "2023-11-20",
        applyLink: "https://example.com/ux-designer-apply"
    },
	{
        id: 4,
        title: "Walk-In Interview - Sales Associate",
        type: "sales",
        company: "SalesCorp",
        description: "SalesCorp is conducting a walk-in interview for Sales Associates...",
        experience: "1+ year",
        deadline: "2023-11-10",
        walkInAddress: "456 Sales Street, Cityville"
    },
];

const jobListingsSection2 = [
    {
        id: 21,
        title: "Data Analyst",
        type: "data",
        company: "DataTech",
        description: "DataTech is looking for a Data Analyst to analyze and interpret data...",
        experience: "2+ years",
        deadline: "2023-11-20",
        applyLink: "https://example.com/data-analyst-apply"
    },
    {
        id: 22,
        title: "Marketing Specialist",
        type: "marketing",
        company: "MarketingPro",
        description: "MarketingPro is seeking a Marketing Specialist to execute marketing campaigns...",
        experience: "3+ years",
        deadline: "2023-11-22",
        applyLink: "https://example.com/marketing-specialist-apply"
    },
    {
        id: 23,
        title: "Finance Manager",
        type: "finance",
        company: "FinanceCorp",
        description: "FinanceCorp is hiring a Finance Manager to oversee financial operations...",
        experience: "5+ years",
        deadline: "2023-11-25",
        applyLink: "https://example.com/finance-manager-apply"
    }
];

function displayJobListings(jobListings, sectionId) {
    const section = document.querySelector(`#jobListingsSection${sectionId}`);

    jobListings.forEach(job => {
        const jobElement = document.createElement("div");
        jobElement.classList.add("job");
        if (job.walkInAddress) {
            jobElement.innerHTML = `
                <h3>${job.title} at ${job.company}</h3>
                <p>Walk-In Address: ${job.walkInAddress}</p>
                <p>Experience Required: ${job.experience}</p>
                <p>${job.description}</p>
                <p>Interview Deadline: ${job.deadline}</p>
            `;
        } else {
            jobElement.innerHTML = `
                <h3>${job.title} at ${job.company}</h3>
                <p>Experience Required: ${job.experience}</p>
                <p>${job.description}</p>
                <p>Application Deadline: ${job.deadline}</p>
                <a href="${job.applyLink}" target="_blank" class="apply-button">Apply Now</a>
            `;
        }
        section.appendChild(jobElement);
    });
}

document.addEventListener('DOMContentLoaded', () => {
    displayJobListings(jobListingsSection1, 1); // Display in Section 1
    displayJobListings(jobListingsSection2, 2); // Display in Section 2
});
