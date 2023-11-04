const jobListingsSection1 = [
    {
        id: 1,
        title: "Software Engineer",
        type: "software",
        company: "TechCo",
        description: "TechCo is hiring a Software Engineer to develop innovative software solutions...",
	qualification: "MCA/BE/Btech",
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
	qualification: "MCA/BE/Btech",
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
	qualification: "MCA/BE/Btech",
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
        id: 4,
        title: "Data Analyst",
        type: "data",
        company: "DataTech",
        description: "DataTech is looking for a Data Analyst to analyze and interpret data...",
	qualification: "MCA/BE/Btech",
        experience: "2+ years",
        deadline: "2023-11-20",
        applyLink: "https://example.com/data-analyst-apply"
    },
    {
        id: 2,
        title: "Marketing Specialist",
        type: "marketing",
        company: "MarketingPro",
        description: "MarketingPro is seeking a Marketing Specialist to execute marketing campaigns...",
	qualification: "MCA/BE/Btech",
        experience: "3+ years",
        deadline: "2023-11-22",
        applyLink: "https://example.com/marketing-specialist-apply"
    },
    {
        id: 3,
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

    // Sort jobListings based on ID
    jobListings.sort((a, b) => a.id - b.id);

    jobListings.forEach((job, index) => {
        const jobElement = document.createElement("div");
        jobElement.classList.add("job");

        let jobTitle = job.title;

        if (index < 2) {
            // Add superscript to the top 2 jobs
            jobTitle = `${jobTitle}<sup class="blink">New</sup>`;
        }

        if (job.walkInAddress) {
            jobElement.innerHTML = `
                <h3>${jobTitle} at ${job.company}</h3>
                <p>Walk-In Address: ${job.walkInAddress}</p>
                <p>Experience Required: ${job.experience}</p>
                <p>Qualification: ${job.qualification}</p>
                <p>${job.description}</p>
                <p>Interview Deadline: ${job.deadline}</p>
            `;
        } else {
            jobElement.innerHTML = `
                <h3>${jobTitle} at ${job.company}</h3>
                <p>Experience Required: ${job.experience}</p>
                <p>Qualification: ${job.qualification}</p>
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
//========================================================================================
//=========adding job into section1=============
function addJob(listingsArray, newJob) {
    listingsArray.push(newJob);
}

// Usage example:
const newJob = {
    id: 1,
    title: "Associate System Engineer ",
    type: "Software",
    company: "IBM 2023",
    description: "IBM is looking for a Associate System engineer...",
    experience: "Freshers",
    qualification: "BE/B.Tech/M.E/M.Tech/MCA/M.Sc",
    deadline: "ASAP",
    applyLink: "https://careers.ibm.com/job/19344653/associate-system-engineer-remote/?codes=WEB_SEARCH_INDIA&sf183355623=1"
};

addJob(jobListingsSection2, newJob);

//==========================================================================================

// Assuming you want to delete the job with id 2 from jobListingsSection1

/*const jobIdToDelete = 2;

const indexToDelete = jobListingsSection1.findIndex(job => job.id === jobIdToDelete);

if (indexToDelete !== -1) {
    jobListingsSection1.splice(indexToDelete, 1);
} else {
    console.log(`Job with id ${jobIdToDelete} not found.`);
}*/
//==========================================================================================


// Optional JavaScript for dynamically adding news items
const newsContainer = document.querySelector('.news-list');

function updateNews() {
    const newsItems = [
        "News 4: This is the fourth news item.",
        "News 5: This is the fifth news item.",
        "News 6: This is the sixth news item."
        // Add more news items as needed
    ];

    newsItems.forEach(item => {
        const li = document.createElement('li');
        li.classList.add('news-item');
        li.textContent = item;
        newsContainer.appendChild(li);
    });
}

// Call this function to update the news content
//updateNews(); // Uncomment this line if you want to update the news dynamically

