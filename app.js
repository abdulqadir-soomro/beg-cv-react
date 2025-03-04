const cv = React.createElement(
    'div',
    { id: 'cv', className: 'cv-container' },
    [
        // Header Section
        React.createElement('header', { key: 'header', className: 'cv-header' }, [
            React.createElement('h1', { key: 'name', className: 'cv-name' }, 'Abdul Qadir'),
            React.createElement('h2', { key: 'title', className: 'cv-title' }, 'Software Engineer'),
            React.createElement('p', { key: 'contact', className: 'cv-contact' }, '📧 abdulqadir@devloper.com | 📞 +123456789 | 🌐 abdulqadir.dev'),
        ]),

        // Summary Section
        React.createElement('section', { key: 'summary', className: 'cv-section' }, [
            React.createElement('h3', { key: 'summary-heading' }, 'Summary'),
            React.createElement('p', { key: 'summary-text' }, 'Experienced Software Engineer specializing in JavaScript, React, and Node.js. Passionate about building scalable applications and leading development teams.'),
        ]),

        // Work Experience Section
        React.createElement('section', { key: 'experience', className: 'cv-section' }, [
            React.createElement('h3', { key: 'experience-heading' }, 'Work Experience'),
            React.createElement('ul', { key: 'experience-list' }, [
                React.createElement('li', { key: 'job1' }, 
                    React.createElement('strong', {}, 'Software Engineer at XYZ Corp (2022 - Present)')
                ),
                React.createElement('li', { key: 'job2' }, 
                    React.createElement('strong', {}, 'Frontend Developer at ABC Ltd (2020 - 2022)')
                ),
            ])
        ]),

        // Education Section
        React.createElement('section', { key: 'education', className: 'cv-section' }, [
            React.createElement('h3', { key: 'education-heading' }, 'Education'),
            React.createElement('p', { key: 'education-text' }, 'BSc in Computer Science - Fedral Urdu  University (2022 - 2025)'),
        ]),

        // Skills Section
        React.createElement('section', { key: 'skills', className: 'cv-section' }, [
            React.createElement('h3', { key: 'skills-heading' }, 'Skills'),
            React.createElement('ul', { key: 'skills-list' }, [
                React.createElement('li', { key: 'skill1' }, 'JavaScript'),
                React.createElement('li', { key: 'skill2' }, 'React'),
                React.createElement('li', { key: 'skill3' }, 'Node.js'),
                React.createElement('li', { key: 'skill4' }, 'Express.js'),
                React.createElement('li', { key: 'skill5' }, 'MongoDB'),
                React.createElement('li', { key: 'skill6' }, 'GraphQL'),
            ])
        ]),

        // Projects Section
        React.createElement('section', { key: 'projects', className: 'cv-section' }, [
            React.createElement('h3', { key: 'projects-heading' }, 'Projects'),
            React.createElement('ul', { key: 'projects-list' }, [
                React.createElement('li', { key: 'project1' }, 'Ecommerce Website - Built using React, Firebase, and Stripe API'),
                React.createElement('li', { key: 'project2' }, 'Task Manager App - Created with Node.js, Express, and MongoDB'),
            ])
        ]),

        // Certifications Section
        React.createElement('section', { key: 'certifications', className: 'cv-section' }, [
            React.createElement('h3', { key: 'certifications-heading' }, 'Certifications'),
            React.createElement('ul', { key: 'certifications-list' }, [
                React.createElement('li', { key: 'certification1' }, 'Certified React Developer - Meta'),
                React.createElement('li', { key: 'certification2' }, 'AWS Cloud Practitioner'),
            ])
        ]),

        // Languages Section
        React.createElement('section', { key: 'languages', className: 'cv-section' }, [
            React.createElement('h3', { key: 'languages-heading' }, 'Languages'),
            React.createElement('ul', { key: 'languages-list' }, [
                React.createElement('li', { key: 'lang1' }, 'English - Intermediate '),
                React.createElement('li', { key: 'lang2' }, 'Urdu - Fluent'),
            ])
        ])
    ]
);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(cv);
