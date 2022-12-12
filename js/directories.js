const dir = [
    {
        "accre_index": 1,
        "accre_name": "AREA I. Vision & Mission, Goals & Objectives"
    },
    {
        "accre_index": 2,
        "accre_name": "AREA II. Faculty"
    },
    {
        "accre_index": 3,
        "accre_name": "AREA III. Curriculum"
    },
    {
        "accre_index": 4,
        "accre_name": "AREA IV.Student Support"
    },
    {
        "accre_index": 5,
        "accre_name": "AREA V. Research"
    },
    {
        "accre_index": 6,
        "accre_name": "AREA VI. Extension"
    },
    {
        "accre_index": 7,
        "accre_name": "AREA VII. Library"
    },
    {
        "accre_index": 8,
        "accre_name": "AREA VIII. Physical Plants Facilities"
    },
    {
        "accre_index": 9,
        "accre_name": "AREA IX. Laboratories"
    },
    {
        "accre_index": 10,
        "accre_name": "AREA X. Administration"
    }
];


const departments = [
    {id: 1, name:"Bachelor of Science in Information Technology", code:"BSIT", img: "img/icons/chip.svg", gradient:"#0047AB"},
    {id: 2, name:"Bachelor of Elementary Education", code:"BEED", img: "img/icons/education.svg", gradient: "#C41E3A"},
    {id: 3, name:"Bachelor of Science in Business Administration", code:"BSBA", img: "img/icons/business.svg", gradient: "#FFC000"},
    {id: 4, name:"Bachelor of Science in Agriculture", code:"BSA", img: "img/icons/agriculture.svg", gradient: "#228B22"}  
];


const dirt1 = [
    {
        "t1_id": 1,
        "accre_index": 1,
        "name": "A. Statement of Vision, Mission, Goals and Objectives"
    },
    {
        "t1_id": 2,
        "accre_index": 1,
        "name": "B. Dissemination and Acceptability"
    },
    {
        "t1_id": 3,
        "accre_index": 1,
        "name": "C. Congruend and Implementation"
    },
    {
        "t1_id": 4,
        "accre_index": 2,
        "name": "A.Academic Qualification and Professional Experience"
    },
    {
        "t1_id": 5,
        "accre_index": 2,
        "name": "B. Recruitment, Selection, and Orientation"
    },
    {
        "t1_id": 6,
        "accre_index": 2,
        "name": "C. Faculty Adequacy and Loading"
    },
    {
        "t1_id": 7,
        "accre_index": 2,
        "name": "D. Faculty and Adequacy and Loading"
    },
    {
        "t1_id": 8,
        "accre_index": 2,
        "name": "E. Faculty Development"
    },
    {
        "t1_id": 9,
        "accre_index": 2,
        "name": "F. Professional Performance and Scholarly Works"
    },
    {
        "t1_id": 10,
        "accre_index": 2,
        "name": "G. Salaries, Fringe Benefits and incentives"
    },
    {
        "t1_id": 11,
        "accre_index": 2,
        "name": "H. Professionalism"
    },
    {
        "t1_id": 12,
        "accre_index": 3,
        "name": "A. Curriculum and Program Studies"
    },
    {
        "t1_id": 13,
        "accre_index": 3,
        "name": "B. Instructional Porcess, Methodologies and Learning Opportunities"
    },
    {
        "t1_id": 14,
        "accre_index": 3,
        "name": "C. Assessment of Academic Performance"
    },
    {
        "t1_id": 15,
        "accre_index": 3,
        "name": "D. Classroom Managemenent"
    },
    {
        "t1_id": 16,
        "accre_index": 3,
        "name": "E. Graduation Requirements"
    },
    {
        "t1_id": 17,
        "accre_index": 3,
        "name": "F. Administrative Support for Effective Instruction"
    },
    {
        "t1_id": 18,
        "accre_index": 4,
        "name": "A. Students Service Program"
    },
    {
        "t1_id": 19,
        "accre_index": 4,
        "name": "B. Admission and Retention"
    },
    {
        "t1_id": 20,
        "accre_index": 4,
        "name": "C. Guidance Program"
    },
    {
        "t1_id": 21,
        "accre_index": 4,
        "name": "D. Other Students Services"
    },
    {
        "t1_id": 22,
        "accre_index": 4,
        "name": "E. Graduation Requirements."
    },
    {
        "t1_id": 23,
        "accre_index": 4,
        "name": "F. Co-curricular and Extra-curricular Program"
    },
    {
        "t1_id": 24,
        "accre_index": 5,
        "name": "A. Priorities and Relevance"
    },
    {
        "t1_id": 25,
        "accre_index": 5,
        "name": "B. Funding and other Resources"
    },
    {
        "t1_id": 26,
        "accre_index": 5,
        "name": "C. Implementation, Monitoring, Evaluation and Utilization of Research Results/Outputs"
    },
    {
        "t1_id": 27,
        "accre_index": 5,
        "name": "D. Publication and Dissemination"
    },
    {
        "t1_id": 28,
        "accre_index": 6,
        "name": "A. Priorities and Relevance"
    },
    {
        "t1_id": 29,
        "accre_index": 6,
        "name": "B. Planning, Implementing, Monitoring and Evaluation"
    },
    {
        "t1_id": 30,
        "accre_index": 6,
        "name": "C. Community involvement and participation in the Extension Activities"
    },
    {
        "t1_id": 31,
        "accre_index": 7,
        "name": "A. Administration"
    },
    {
        "t1_id": 32,
        "accre_index": 7,
        "name": "B. Staff/Personnel"
    },
    {
        "t1_id": 33,
        "accre_index": 7,
        "name": "C. Collection Development, Organization and Preservation."
    },
    {
        "t1_id": 34,
        "accre_index": 7,
        "name": "D. Services and Utilization"
    },
    {
        "t1_id": 35,
        "accre_index": 7,
        "name": "E. Physical Set-up and Facilities"
    },
    {
        "t1_id": 36,
        "accre_index": 7,
        "name": "F. Financial Support"
    },
    {
        "t1_id": 37,
        "accre_index": 7,
        "name": "G. Linkages"
    },
    {
        "t1_id": 38,
        "accre_index": 8,
        "name": "A. Site"
    },
    {
        "t1_id": 39,
        "accre_index": 8,
        "name": "Campus"
    },
    {
        "t1_id": 40,
        "accre_index": 8,
        "name": "B. Buildings"
    },
    {
        "t1_id": 41,
        "accre_index": 8,
        "name": "C. Classroom (For ocular inspection)"
    },
    {
        "t1_id": 42,
        "accre_index": 8,
        "name": "E. Offices Function Rooms and Staff Rooms (For ocular inspection)."
    },
    {
        "t1_id": 43,
        "accre_index": 8,
        "name": "F. Assembly and Athletic Facilities (For ocular inspection)"
    },
    {
        "t1_id": 44,
        "accre_index": 8,
        "name": "G. Medical and Dental Clinic"
    },
    {
        "t1_id": 45,
        "accre_index": 8,
        "name": "H. Student center (For ocular inspection)"
    },
    {
        "t1_id": 46,
        "accre_index": 8,
        "name": "I. Food Services/Canteen (For ocular inspection)"
    },
    {
        "t1_id": 47,
        "accre_index": 8,
        "name": "J. Accreditation Center (For Ocular Inspection)"
    },
    {
        "t1_id": 48,
        "accre_index": 8,
        "name": "K. Housing (optional)"
    },
    {
        "t1_id": 49,
        "accre_index": 9,
        "name": "A. Laboratories/Shops/Facilities"
    },
    {
        "t1_id": 50,
        "accre_index": 9,
        "name": "B. Equipment and Supplies"
    },
    {
        "t1_id": 51,
        "accre_index": 9,
        "name": "C. Maintenance"
    },
    {
        "t1_id": 52,
        "accre_index": 9,
        "name": "D. Special Provisions."
    },
    {
        "t1_id": 53,
        "accre_index": 10,
        "name": "A. Organization"
    },
    {
        "t1_id": 54,
        "accre_index": 10,
        "name": "B. Academic Administration"
    },
    {
        "t1_id": 55,
        "accre_index": 10,
        "name": "C. Student Administrations"
    },
    {
        "t1_id": 56,
        "accre_index": 10,
        "name": "D. Financial Management"
    },
    {
        "t1_id": 57,
        "accre_index": 10,
        "name": "E. Supply Management"
    },
    {
        "t1_id": 58,
        "accre_index": 10,
        "name": "F. Record Management"
    },
    {
        "t1_id": 59,
        "accre_index": 10,
        "name": "G. Institution Planning and Development"
    }
];


const dirt2 = [
    {
        "t2_id": 1,
        "t1_id": 1,
        "name": "A.1. Vision Statement.",
        "subcategory_name": null
    },
    {
        "t2_id": 2,
        "t1_id": 1,
        "name": "A.2. Mission statement.",
        "subcategory_name": null
    },
    {
        "t2_id": 3,
        "t1_id": 1,
        "name": "A.3. Statement of the Goals of the Academic Unit.",
        "subcategory_name": null
    },
    {
        "t2_id": 4,
        "t1_id": 1,
        "name": "A.4. Statement of the Program Objectives.",
        "subcategory_name": null
    },
    {
        "t2_id": 5,
        "t1_id": 1,
        "name": "A.5. Copy of the Charter Institution.",
        "subcategory_name": null
    },
    {
        "t2_id": 6,
        "t1_id": 1,
        "name": "A.6. Minutes of the Meetings on the formulation, review and revision of the VMGO.",
        "subcategory_name": null
    },
    {
        "t2_id": 7,
        "t1_id": 1,
        "name": "A.7 File Copies of letters of Invitation to Participants.",
        "subcategory_name": null
    },
    {
        "t2_id": 8,
        "t1_id": 1,
        "name": "A.8. Attendance Record of Stakeholder-Participants.",
        "subcategory_name": null
    },
    {
        "t2_id": 9,
        "t1_id": 1,
        "name": "A.9. Copies of CMOs relevant to VMGO formulation.",
        "subcategory_name": null
    },
    {
        "t2_id": 10,
        "t1_id": 2,
        "name": "B.1. Display boards on which of the VMGO are posted.",
        "subcategory_name": null
    },
    {
        "t2_id": 11,
        "t1_id": 2,
        "name": "B.2. Samples of dissemination materials.",
        "subcategory_name": null
    },
    {
        "t2_id": 12,
        "t1_id": 2,
        "name": "B.3. Evidence/s of awareness and acceptability of the VMGO.",
        "subcategory_name": null
    },
    {
        "t2_id": 13,
        "t1_id": 3,
        "name": "C.1. Evidence/s of congruence between educational practices/activities and VMGO.",
        "subcategory_name": null
    },
    {
        "t2_id": 14,
        "t1_id": 3,
        "name": "C.2. Awards/citations received by the program under survey.",
        "subcategory_name": null
    },
    {
        "t2_id": 15,
        "t1_id": 3,
        "name": "C.3. List of linkages consortia and networking",
        "subcategory_name": null
    },
    {
        "t2_id": 16,
        "t1_id": 3,
        "name": "C.4. Data on employability of graduates",
        "subcategory_name": null
    },
    {
        "t2_id": 17,
        "t1_id": 4,
        "name": "A.1. Copy of Qualification Standards.",
        "subcategory_name": null
    },
    {
        "t2_id": 18,
        "t1_id": 4,
        "name": "A.2. The Faculty’s Personal Data sheet.",
        "subcategory_name": null
    },
    {
        "t2_id": 19,
        "t1_id": 4,
        "name": "A.3. Profile of the Faculty",
        "subcategory_name": null
    },
    {
        "t2_id": 20,
        "t1_id": 4,
        "name": "A.4. List of the Faculty who have received academic awards recognition.",
        "subcategory_name": null
    },
    {
        "t2_id": 21,
        "t1_id": 5,
        "name": "B.1. Policies on hiring and selection",
        "subcategory_name": null
    },
    {
        "t2_id": 22,
        "t1_id": 5,
        "name": "B.2 Criteria used in the selection process.",
        "subcategory_name": null
    },
    {
        "t2_id": 23,
        "t1_id": 5,
        "name": "B.3 Composition of the Screening Committee",
        "subcategory_name": null
    },
    {
        "t2_id": 24,
        "t1_id": 5,
        "name": "B.4. Evidence of the selection process showing the names of applicants",
        "subcategory_name": null
    },
    {
        "t2_id": 25,
        "t1_id": 5,
        "name": "B.5. Evidence/s of the orientation Program for newly-hired faculty.",
        "subcategory_name": null
    },
    {
        "t2_id": 26,
        "t1_id": 5,
        "name": "B.6. Policies inbreeding",
        "subcategory_name": null
    },
    {
        "t2_id": 27,
        "t1_id": 6,
        "name": "C.1. Roster of faculty with valid professional license",
        "subcategory_name": null
    },
    {
        "t2_id": 28,
        "t1_id": 6,
        "name": "C.2. Faculty Manual.",
        "subcategory_name": null
    },
    {
        "t2_id": 29,
        "t1_id": 6,
        "name": "C.3. Copy of the loading system.",
        "subcategory_name": null
    },
    {
        "t2_id": 30,
        "t1_id": 6,
        "name": "C.4. Report on faculty-student ratio.",
        "subcategory_name": null
    },
    {
        "t2_id": 31,
        "t1_id": 6,
        "name": "C.5. Files of individual Faculty load.",
        "subcategory_name": null
    },
    {
        "t2_id": 32,
        "t1_id": 7,
        "name": "D.1. Policies on rank and tenure, including pertinent Board resolutions.",
        "subcategory_name": null
    },
    {
        "t2_id": 33,
        "t1_id": 7,
        "name": "D.2. Copy of the Merit System and Promotion plan.",
        "subcategory_name": null
    },
    {
        "t2_id": 34,
        "t1_id": 7,
        "name": "D.3. Profile of the faculty",
        "subcategory_name": null
    },
    {
        "t2_id": 35,
        "t1_id": 7,
        "name": "D.4. List of faculty arrange according to academic rank",
        "subcategory_name": null
    },
    {
        "t2_id": 36,
        "t1_id": 8,
        "name": "E.1. Copy of the Faculty Development Program",
        "subcategory_name": null
    },
    {
        "t2_id": 37,
        "t1_id": 8,
        "name": "E.2. Summary of Faculty who were granted scholarships, fellowship, etc.",
        "subcategory_name": null
    },
    {
        "t2_id": 38,
        "t1_id": 8,
        "name": "E.3. Files copies of Scholarship/ Fellowship/Training Contract",
        "subcategory_name": null
    },
    {
        "t2_id": 39,
        "t1_id": 8,
        "name": "E.4. Summary of in-service training conducted in campus by the program under survey, including list of faculty-participants",
        "subcategory_name": null
    },
    {
        "t2_id": 40,
        "t1_id": 8,
        "name": "E.5. Budgetary allocation for faculty development",
        "subcategory_name": null
    },
    {
        "t2_id": 41,
        "t1_id": 9,
        "name": "F.1. Updated course syllabi of individual faculty",
        "subcategory_name": null
    },
    {
        "t2_id": 42,
        "t1_id": 9,
        "name": "F.2. Samples of Instructional materials developed and produced by the faculty (workbook, manual, module, ICT materials etc.)",
        "subcategory_name": null
    },
    {
        "t2_id": 43,
        "t1_id": 9,
        "name": "F.3 Composition and Profile of the Instructional Materials Development Committee.",
        "subcategory_name": null
    },
    {
        "t2_id": 44,
        "t1_id": 9,
        "name": "F.4. Faculty who served as lecturer, resource person, consultant in his/her field of specialization well as in allied disciplines.",
        "subcategory_name": null
    },
    {
        "t2_id": 45,
        "t1_id": 10,
        "name": "G.1. Policies and guidelines on salaries, benefits and privileges, including the system of availment.",
        "subcategory_name": null
    },
    {
        "t2_id": 46,
        "t1_id": 10,
        "name": "G.2. List of privileges, fringe benefits as well as incentives.",
        "subcategory_name": null
    },
    {
        "t2_id": 47,
        "t1_id": 10,
        "name": "G.3. Copy of the Plantilla.",
        "subcategory_name": null
    },
    {
        "t2_id": 48,
        "t1_id": 10,
        "name": "G.4. Evidence/s that fringe benefits and incentives are provided o faculty.",
        "subcategory_name": null
    },
    {
        "t2_id": 49,
        "t1_id": 10,
        "name": "G.5. Description of the Faculty Performance Evaluation System, including the instrument/s used.",
        "subcategory_name": null
    },
    {
        "t2_id": 50,
        "t1_id": 10,
        "name": "G.6. List of faculty given recognition/ award/ credits for outstanding performance and production od scholarly works.",
        "subcategory_name": null
    },
    {
        "t2_id": 51,
        "t1_id": 11,
        "name": "H.1. Evidence/s on faculty attendance in class and other institutional activities.",
        "subcategory_name": null
    },
    {
        "t2_id": 52,
        "t1_id": 11,
        "name": "H.2. Minutes of meeting conducted.",
        "subcategory_name": null
    },
    {
        "t2_id": 53,
        "t1_id": 11,
        "name": "H.3. Evidence on Submission of Required Reports by the faculty.",
        "subcategory_name": null
    },
    {
        "t2_id": 54,
        "t1_id": 11,
        "name": "H.4. Personal Records on Administrative / Disciplinary Cases, if any.",
        "subcategory_name": null
    },
    {
        "t2_id": 55,
        "t1_id": 11,
        "name": "H.5. Records of Termination Cases",
        "subcategory_name": null
    },
    {
        "t2_id": 56,
        "t1_id": 11,
        "name": "H.6. Evidence/s of professional growth (advanced studies and attendance to seminars and other in-service training).",
        "subcategory_name": null
    },
    {
        "t2_id": 57,
        "t1_id": 11,
        "name": "H.7. Code of Professional Ethics/ RA 6713 and other pertinent CSC issuances.",
        "subcategory_name": null
    },
    {
        "t2_id": 58,
        "t1_id": 11,
        "name": "H.8 Evidence/s of dissemination and observance of RA 6713, the Citizens Charter and other pertinent legal issuances.",
        "subcategory_name": null
    },
    {
        "t2_id": 59,
        "t1_id": 12,
        "name": "A.1. Copy of the Curriculum (with prerequisite courses, where applicable).",
        "subcategory_name": null
    },
    {
        "t2_id": 60,
        "t1_id": 12,
        "name": "A.2. CHED policies and standards, CMO’s where applicable.",
        "subcategory_name": null
    },
    {
        "t2_id": 61,
        "t1_id": 12,
        "name": "A.3. Copies of MOA or MOU with agencies/institutions regarding immersion, OJT, RLE, Practice Teaching and other related activities.",
        "subcategory_name": null
    },
    {
        "t2_id": 62,
        "t1_id": 12,
        "name": "A.4. Minutes of the Academic Council meetings.",
        "subcategory_name": null
    },
    {
        "t2_id": 63,
        "t1_id": 12,
        "name": "A.5. Policies and Curriculum Development/Reviews.",
        "subcategory_name": null
    },
    {
        "t2_id": 64,
        "t1_id": 12,
        "name": "A.6. Policies on validation of subjects taken by transferees, and accommodation of students with special needs.",
        "subcategory_name": null
    },
    {
        "t2_id": 65,
        "t1_id": 13,
        "name": "B.1. Compilation of updated course syllabi in all subjects.",
        "subcategory_name": null
    },
    {
        "t2_id": 66,
        "t1_id": 13,
        "name": "B.2. Evidence/s on remedial program conducted.",
        "subcategory_name": null
    },
    {
        "t2_id": 67,
        "t1_id": 13,
        "name": "B.3 List of teaching strategies used in the different subject areas.",
        "subcategory_name": null
    },
    {
        "t2_id": 68,
        "t1_id": 13,
        "name": "B.4. Sample course requirements submitted by students.",
        "subcategory_name": null
    },
    {
        "t2_id": 69,
        "t1_id": 13,
        "name": "B.5 Records of class observations.",
        "subcategory_name": null
    },
    {
        "t2_id": 70,
        "t1_id": 13,
        "name": "B.6. List of academic linkages or consortia.",
        "subcategory_name": null
    },
    {
        "t2_id": 71,
        "t1_id": 14,
        "name": "C.1. Sample of copies of summative examinations (mid-term and final) with Table of Specifications.",
        "subcategory_name": null
    },
    {
        "t2_id": 72,
        "t1_id": 14,
        "name": "C.2 Sample of non-traditional assessments tools, e.g. rubric portfolio, etc.",
        "subcategory_name": null
    },
    {
        "t2_id": 73,
        "t1_id": 14,
        "name": "C.3. Sample of assessments tools for individual differences and multiple intelligence.",
        "subcategory_name": null
    },
    {
        "t2_id": 74,
        "t1_id": 14,
        "name": "C.4. Sample of class records.",
        "subcategory_name": null
    },
    {
        "t2_id": 75,
        "t1_id": 14,
        "name": "C.5. Copy of grading system, including of evidence that it has been approved.",
        "subcategory_name": null
    },
    {
        "t2_id": 76,
        "t1_id": 14,
        "name": "C.6. Evidence that course requirements are returned to students after they were evaluated and recorded.",
        "subcategory_name": null
    },
    {
        "t2_id": 77,
        "t1_id": 15,
        "name": "D.1. Policies on class attendance and discipline.",
        "subcategory_name": null
    },
    {
        "t2_id": 78,
        "t1_id": 15,
        "name": "D.2. Evidence that independent work/performance is encouraged and monitored such as student outputs.",
        "subcategory_name": null
    },
    {
        "t2_id": 79,
        "t1_id": 16,
        "name": "E.1. Policies that apply to student returnees, transferees and students with academic deficiencies including residency.",
        "subcategory_name": null
    },
    {
        "t2_id": 80,
        "t1_id": 16,
        "name": "E.2. Sample of copy of a Students Clearance before graduation.",
        "subcategory_name": null
    },
    {
        "t2_id": 81,
        "t1_id": 16,
        "name": "E.3. Sample of researches conducted by students.",
        "subcategory_name": null
    },
    {
        "t2_id": 82,
        "t1_id": 16,
        "name": "E.4. Policies on OJT, (Practice Teaching, RLE, Apprenticeship, Practicum, Etc.) if applicable.",
        "subcategory_name": null
    },
    {
        "t2_id": 83,
        "t1_id": 17,
        "name": "F.1. Administrative Manual.",
        "subcategory_name": null
    },
    {
        "t2_id": 84,
        "t1_id": 17,
        "name": "F.2. Evidence/s of dialogues conducted among the administration, faculty and students.",
        "subcategory_name": null
    },
    {
        "t2_id": 85,
        "t1_id": 17,
        "name": "F.3. Schedule of regular faculty consultation hours.",
        "subcategory_name": null
    },
    {
        "t2_id": 86,
        "t1_id": 17,
        "name": "F.4. A system of awards/recognition for graduating students with outstanding achievements.",
        "subcategory_name": null
    },
    {
        "t2_id": 87,
        "t1_id": 17,
        "name": "F.5. Results of a study on the licensure performance of graduates, if applicable.",
        "subcategory_name": null
    },
    {
        "t2_id": 88,
        "t1_id": 17,
        "name": "F.6. Evidence of administrative support to improve licensure performance of graduates if applicable.",
        "subcategory_name": null
    },
    {
        "t2_id": 89,
        "t1_id": 17,
        "name": "F.7. Conduct of a tracer study on the employability of graduates.",
        "subcategory_name": null
    },
    {
        "t2_id": 90,
        "t1_id": 17,
        "name": "F.8. Feedback from employers regarding performance of graduates.",
        "subcategory_name": null
    },
    {
        "t2_id": 91,
        "t1_id": 18,
        "name": "A.1. A Copy of the objectives of the SSP.",
        "subcategory_name": null
    },
    {
        "t2_id": 92,
        "t1_id": 18,
        "name": "A.2. Organizational Chart of the SSP.",
        "subcategory_name": null
    },
    {
        "t2_id": 93,
        "t1_id": 18,
        "name": "A.3. Functional Chart of the SSP.",
        "subcategory_name": null
    },
    {
        "t2_id": 94,
        "t1_id": 18,
        "name": "A.4. Profile of the SSP staff.",
        "subcategory_name": null
    },
    {
        "t2_id": 95,
        "t1_id": 18,
        "name": "A.5. Copy of the SSP Master Plan.",
        "subcategory_name": null
    },
    {
        "t2_id": 96,
        "t1_id": 18,
        "name": "A.6. Evaluation program to assess the effectiveness of the SSP.",
        "subcategory_name": null
    },
    {
        "t2_id": 97,
        "t1_id": 18,
        "name": "A.7. Inventory of physical facilities, equipment, supplies and materials for the SSP.",
        "subcategory_name": null
    },
    {
        "t2_id": 98,
        "t1_id": 19,
        "name": "B.1. Bulletin of Information",
        "subcategory_name": null
    },
    {
        "t2_id": 99,
        "t1_id": 19,
        "name": "B.2. Student Handbook.",
        "subcategory_name": null
    },
    {
        "t2_id": 100,
        "t1_id": 19,
        "name": "B.3. Data on student admission (enrolment trends, drop-out rate, transferees, course shifters, etc.)",
        "subcategory_name": null
    },
    {
        "t2_id": 101,
        "t1_id": 20,
        "name": "C.1. Profile of the Guidance Counseling Head",
        "subcategory_name": null
    },
    {
        "t2_id": 102,
        "t1_id": 20,
        "name": "C.2. Updated Student Profiles",
        "subcategory_name": null
    },
    {
        "t2_id": 103,
        "t1_id": 20,
        "name": "C.3.Policies of the confidentiality of students records",
        "subcategory_name": null
    },
    {
        "t2_id": 104,
        "t1_id": 20,
        "name": "C.4. A copy of Testing programs",
        "subcategory_name": null
    },
    {
        "t2_id": 105,
        "t1_id": 20,
        "name": "C.5. List of tests and evaluative tools used in Guidance and Counseling Services.",
        "subcategory_name": null
    },
    {
        "t2_id": 106,
        "t1_id": 20,
        "name": "C.6. List of students who availed services of the counseling service.",
        "subcategory_name": null
    },
    {
        "t2_id": 107,
        "t1_id": 20,
        "name": "C.7. Sample counseling referral form.",
        "subcategory_name": null
    },
    {
        "t2_id": 108,
        "t1_id": 20,
        "name": "C.8. List of prospective employers of graduates of a particular program.",
        "subcategory_name": null
    },
    {
        "t2_id": 109,
        "t1_id": 20,
        "name": "C.9. Sample of letters of employers inviting graduates of a particular program to apply.",
        "subcategory_name": null
    },
    {
        "t2_id": 110,
        "t1_id": 20,
        "name": "C.10. Alumni Directory and Officers of the Alumni Association.",
        "subcategory_name": null
    },
    {
        "t2_id": 111,
        "t1_id": 20,
        "name": "C.11. Linkage/s established with industries and prospective employer/s",
        "subcategory_name": null
    },
    {
        "t2_id": 112,
        "t1_id": 20,
        "name": "C.12 Copy of the instrument to evaluate the guidance program.",
        "subcategory_name": null
    },
    {
        "t2_id": 113,
        "t1_id": 21,
        "name": "D.1. Copies of the Health Services Program.",
        "subcategory_name": null
    },
    {
        "t2_id": 114,
        "t1_id": 21,
        "name": "D.2. Profile of the Medical/Dental Staff.",
        "subcategory_name": null
    },
    {
        "t2_id": 115,
        "t1_id": 21,
        "name": "D.3. Records of the Students who availed of Medical/Dental Services.",
        "subcategory_name": null
    },
    {
        "t2_id": 116,
        "t1_id": 21,
        "name": "D.4 Copy of sanitary permit for canteen operation.",
        "subcategory_name": "Food Services"
    },
    {
        "t2_id": 117,
        "t1_id": 21,
        "name": "D.5. Health Certificates of the canteen staff and food handlers.",
        "subcategory_name": "Food Services"
    },
    {
        "t2_id": 118,
        "t1_id": 21,
        "name": "D.6. Policies on the selection of athletes.",
        "subcategory_name": "Sports Development Program"
    },
    {
        "t2_id": 119,
        "t1_id": 21,
        "name": "D.7. Budget allocation for sports development.",
        "subcategory_name": "Sports Development Program"
    },
    {
        "t2_id": 120,
        "t1_id": 21,
        "name": "D.8. Inventory of facilities, equipment, supplies and materials provided to the Sports Services Units.",
        "subcategory_name": "Sports Development Program"
    },
    {
        "t2_id": 121,
        "t1_id": 21,
        "name": "D.9. Evidence of monitoring and evaluation of sports activities.",
        "subcategory_name": "Sports Development Program"
    },
    {
        "t2_id": 122,
        "t1_id": 21,
        "name": "D.10. Policies governing student publication.",
        "subcategory_name": null
    },
    {
        "t2_id": 123,
        "t1_id": 21,
        "name": "D.11. Composition of the Editorial Board, including advisers.",
        "subcategory_name": null
    },
    {
        "t2_id": 124,
        "t1_id": 21,
        "name": "D.12. Copies of the school paper published.",
        "subcategory_name": null
    },
    {
        "t2_id": 125,
        "t1_id": 21,
        "name": "D.13. Profile of the school paper’s advisers.",
        "subcategory_name": null
    },
    {
        "t2_id": 126,
        "t1_id": 21,
        "name": "D.14. Inventory of facilities, equipment, supplies and materials for the Student Publication Units.",
        "subcategory_name": null
    },
    {
        "t2_id": 127,
        "t1_id": 21,
        "name": "D.15. A Copy of the Socio-Cultural Development Program.",
        "subcategory_name": "Socio-Cultural Development Program"
    },
    {
        "t2_id": 128,
        "t1_id": 21,
        "name": "D.16. Schedule of Socio-Cultural activities regularly conducted",
        "subcategory_name": "Socio-Cultural Development Program"
    },
    {
        "t2_id": 129,
        "t1_id": 21,
        "name": "D.17. Copy of the financial assistance program ( scholarship, grant-in-aid, students loans, attendance to seminars, etc.",
        "subcategory_name": "Socio-Cultural Development Program"
    },
    {
        "t2_id": 130,
        "t1_id": 21,
        "name": "D.18. List of incentives and privileges to varsity athletes and member of cultural groups.",
        "subcategory_name": "Socio-Cultural Development Program"
    },
    {
        "t2_id": 131,
        "t1_id": 21,
        "name": "D.19. Policies on the operation of Student Dormitories.",
        "subcategory_name": "Housing Services"
    },
    {
        "t2_id": 132,
        "t1_id": 21,
        "name": "D.20. Profile of the Dormitory Head and Staff.",
        "subcategory_name": "Housing Services"
    },
    {
        "t2_id": 133,
        "t1_id": 21,
        "name": "D.21. Copy of Dormitory Rules and Regulations.",
        "subcategory_name": "Housing Services"
    },
    {
        "t2_id": 134,
        "t1_id": 21,
        "name": "D.22. Report on the monitoring and evaluation of private boarding house.",
        "subcategory_name": "Housing Services"
    },
    {
        "t2_id": 135,
        "t1_id": 22,
        "name": "E.1.",
        "subcategory_name": null
    },
    {
        "t2_id": 136,
        "t1_id": 22,
        "name": "E.2 Copy of the orientation program for scholars and grantees",
        "subcategory_name": null
    },
    {
        "t2_id": 137,
        "t1_id": 23,
        "name": "F.1. List of recognized students organizations, including their advisers.",
        "subcategory_name": null
    },
    {
        "t2_id": 138,
        "t1_id": 23,
        "name": "F.2. Sample of Constitution and By-Laws of student organizations.",
        "subcategory_name": null
    },
    {
        "t2_id": 139,
        "t1_id": 23,
        "name": "F.3. List of co-curricular and extra-curricular activities including relevant information’s.",
        "subcategory_name": null
    },
    {
        "t2_id": 140,
        "t1_id": 23,
        "name": "F.4. A system of incentives, awards/recognition for outstanding achievement in co-curricular and extra-curricular activities.",
        "subcategory_name": null
    },
    {
        "t2_id": 141,
        "t1_id": 23,
        "name": "F.5. Sample of Accomplishments Reports of recognized students organizations.",
        "subcategory_name": null
    },
    {
        "t2_id": 142,
        "t1_id": 24,
        "name": "A.1. Copy of the Institutional Research Agenda.",
        "subcategory_name": null
    },
    {
        "t2_id": 143,
        "t1_id": 24,
        "name": "A.2. Structure of the Research and Development Unit, including the profile of the Research Head.",
        "subcategory_name": null
    },
    {
        "t2_id": 144,
        "t1_id": 24,
        "name": "A.3. A copy of the research program of the program under survey.",
        "subcategory_name": null
    },
    {
        "t2_id": 145,
        "t1_id": 24,
        "name": "A.4. Evidence of participation of different stakeholders in the formulation of the research agenda.",
        "subcategory_name": null
    },
    {
        "t2_id": 146,
        "t1_id": 25,
        "name": "B.1. Copy of the Budget allocation for research.",
        "subcategory_name": null
    },
    {
        "t2_id": 147,
        "t1_id": 25,
        "name": "B.2. List of the linkages/networking with research funding agencies",
        "subcategory_name": null
    },
    {
        "t2_id": 148,
        "t1_id": 25,
        "name": "B.3. Inventory of research facilities, equipment and amenities",
        "subcategory_name": null
    },
    {
        "t2_id": 149,
        "t1_id": 25,
        "name": "B.4. Profile of the research personnel/staff.",
        "subcategory_name": null
    },
    {
        "t2_id": 150,
        "t1_id": 25,
        "name": "B.5. List of patents, licenses, copyrights and other research outputs, including income generated from each of them if any.",
        "subcategory_name": null
    },
    {
        "t2_id": 151,
        "t1_id": 25,
        "name": "B.6. Copy of the Research staff development program.",
        "subcategory_name": null
    },
    {
        "t2_id": 152,
        "t1_id": 25,
        "name": "B.7. List team/collaborative researches conducted.",
        "subcategory_name": null
    },
    {
        "t2_id": 153,
        "t1_id": 26,
        "name": "C.1. Copy of the Research Manual.",
        "subcategory_name": null
    },
    {
        "t2_id": 154,
        "t1_id": 26,
        "name": "C.2. Summary of faculty researches conducted.",
        "subcategory_name": null
    },
    {
        "t2_id": 155,
        "t1_id": 26,
        "name": "C.3. List of in-service training conducted to enhance faculty research capabilities of faculty.",
        "subcategory_name": null
    },
    {
        "t2_id": 156,
        "t1_id": 26,
        "name": "C.4. Report on in-house reviews conducted.",
        "subcategory_name": null
    },
    {
        "t2_id": 157,
        "t1_id": 26,
        "name": "C.5. Evidence/s that research result have been utilized.",
        "subcategory_name": null
    },
    {
        "t2_id": 158,
        "t1_id": 26,
        "name": "C.6. Policies pertaining to Intellectual Property Rights (IPR)",
        "subcategory_name": null
    },
    {
        "t2_id": 159,
        "t1_id": 27,
        "name": "D.1. Evidence of publication and dissemination of research results.",
        "subcategory_name": null
    },
    {
        "t2_id": 160,
        "t1_id": 27,
        "name": "D.2. List of dissemination activities conducted ( forum, conference, seminars, etc.)",
        "subcategory_name": null
    },
    {
        "t2_id": 161,
        "t1_id": 27,
        "name": "D.3. Copies of published articles.",
        "subcategory_name": null
    },
    {
        "t2_id": 162,
        "t1_id": 27,
        "name": "D.4. Linkage/s established for exchange of research publications.",
        "subcategory_name": null
    },
    {
        "t2_id": 163,
        "t1_id": 27,
        "name": "D.5 Composition of Technical Committee to edit research manuscripts and technical reports.",
        "subcategory_name": null
    },
    {
        "t2_id": 164,
        "t1_id": 27,
        "name": "D.6. List of the faculty who served as paper presenters, lectures, external evaluator, dissertation/thesis advisers, critic, etc., including relevant information.",
        "subcategory_name": null
    },
    {
        "t2_id": 165,
        "t1_id": 28,
        "name": "A.1. Copy of the Benchmark survey instrument.",
        "subcategory_name": null
    },
    {
        "t2_id": 166,
        "t1_id": 28,
        "name": "A.2. Evidence of complementation between the curriculum of the program under survey and its extensions program.",
        "subcategory_name": null
    },
    {
        "t2_id": 167,
        "t1_id": 28,
        "name": "A.3. List of linkages established with extension-oriented agencies.",
        "subcategory_name": null
    },
    {
        "t2_id": 168,
        "t1_id": 28,
        "name": "A.4. Copies of MOA or MOU with partner or collaborating GA’s, NGO’s and institutions.",
        "subcategory_name": null
    },
    {
        "t2_id": 169,
        "t1_id": 29,
        "name": "B.1. Evidence of extension planning sessions.",
        "subcategory_name": "Planning"
    },
    {
        "t2_id": 170,
        "t1_id": 29,
        "name": "B.2. Copy of the extension program , including relevant information.",
        "subcategory_name": "Planning"
    },
    {
        "t2_id": 171,
        "t1_id": 29,
        "name": "B.3. Organizational Structure of the Extension Unit.",
        "subcategory_name": "Implementing"
    },
    {
        "t2_id": 172,
        "t1_id": 29,
        "name": "B.4. Profile of the Unit Head and his/her Staff.",
        "subcategory_name": "Implementing"
    },
    {
        "t2_id": 173,
        "t1_id": 29,
        "name": "B.5. Operational Plan of the Extension Program, with focus on implementation strategies.",
        "subcategory_name": "Implementing"
    },
    {
        "t2_id": 174,
        "t1_id": 29,
        "name": "B.6. Rosters/Experts for extension projects, if necessary.",
        "subcategory_name": "Implementing"
    },
    {
        "t2_id": 175,
        "t1_id": 29,
        "name": "B.7. Evidence of transfer of appropriate technology to the target clientele.",
        "subcategory_name": "Implementing"
    },
    {
        "t2_id": 176,
        "t1_id": 29,
        "name": "B.8. Sample of packaged technologies/news/information disseminated to the clientele.",
        "subcategory_name": "Implementing"
    },
    {
        "t2_id": 177,
        "t1_id": 29,
        "name": "B.9. Copy of the Extension Manual.",
        "subcategory_name": "Implementing"
    },
    {
        "t2_id": 178,
        "t1_id": 29,
        "name": "B.10. Copy of the Monitoring and evaluation instrument/s",
        "subcategory_name": "Monitoring"
    },
    {
        "t2_id": 179,
        "t1_id": 29,
        "name": "B.11. Sample of accomplishments and terminal reports.",
        "subcategory_name": "Monitoring"
    },
    {
        "t2_id": 180,
        "t1_id": 29,
        "name": "B.12. Copy of the budgetary allocation for extension program.",
        "subcategory_name": "Funding and Other Sources"
    },
    {
        "t2_id": 181,
        "t1_id": 29,
        "name": "B.13. Evidences of outsourcing for fund augmentation.",
        "subcategory_name": "Funding and Other Sources"
    },
    {
        "t2_id": 182,
        "t1_id": 29,
        "name": "B.14. Evidence of outsourcing for technical assistance and service inputs from other agencies.",
        "subcategory_name": "Funding and Other Sources"
    },
    {
        "t2_id": 183,
        "t1_id": 30,
        "name": "C.1. Evidence of community participation in the planning and implementation of extension project/activities.",
        "subcategory_name": null
    },
    {
        "t2_id": 184,
        "t1_id": 30,
        "name": "C.2. Evidence of technology adoption, utilization and commercialization.",
        "subcategory_name": null
    },
    {
        "t2_id": 185,
        "t1_id": 30,
        "name": "C.3. Copy of a long-term Sustainable extension program e.g. community development projects, etc.",
        "subcategory_name": null
    },
    {
        "t2_id": 186,
        "t1_id": 30,
        "name": "C.4. List of collaborating agencies, including the nature of collaboration.",
        "subcategory_name": null
    },
    {
        "t2_id": 187,
        "t1_id": 31,
        "name": "A.1. Organizational Structure of the Library",
        "subcategory_name": null
    },
    {
        "t2_id": 188,
        "t1_id": 31,
        "name": "A.2. Profile and Functions of the Head Librarian.",
        "subcategory_name": null
    },
    {
        "t2_id": 189,
        "t1_id": 31,
        "name": "A.3. Composition of the library Advisory Committee, including their functions.",
        "subcategory_name": null
    },
    {
        "t2_id": 190,
        "t1_id": 32,
        "name": "B.1. Profile of the library staff/personnel.",
        "subcategory_name": null
    },
    {
        "t2_id": 191,
        "t1_id": 32,
        "name": "B.2.Evidence of the compliance and adequacy of library personnel.",
        "subcategory_name": null
    },
    {
        "t2_id": 192,
        "t1_id": 32,
        "name": "B.3. Copy of the library Staff Development Plan.",
        "subcategory_name": null
    },
    {
        "t2_id": 193,
        "t1_id": 32,
        "name": "B.4. Policies on library personnel compensation., privileges and fringe benefits.",
        "subcategory_name": null
    },
    {
        "t2_id": 194,
        "t1_id": 33,
        "name": "C.1. Policies and Collection Development",
        "subcategory_name": null
    },
    {
        "t2_id": 195,
        "t1_id": 33,
        "name": "C.2. Inventory and Core collections",
        "subcategory_name": null
    },
    {
        "t2_id": 196,
        "t1_id": 33,
        "name": "C.3. Evidence on the provision for non-print, digital and electronic resources.",
        "subcategory_name": null
    },
    {
        "t2_id": 197,
        "t1_id": 33,
        "name": "C.4. List of research book materials.",
        "subcategory_name": null
    },
    {
        "t2_id": 198,
        "t1_id": 33,
        "name": "C.5. Inventory of Filipiniana collection.",
        "subcategory_name": null
    },
    {
        "t2_id": 199,
        "t1_id": 33,
        "name": "C.6. Evidence of an accepted and standard classification system.",
        "subcategory_name": null
    },
    {
        "t2_id": 200,
        "t1_id": 33,
        "name": "C.7. Policies on preservation, care and upkeep of library resources.",
        "subcategory_name": null
    },
    {
        "t2_id": 201,
        "t1_id": 33,
        "name": "C.8. Evidence that library resources are provided.",
        "subcategory_name": null
    },
    {
        "t2_id": 202,
        "t1_id": 33,
        "name": "C.9. List of classified library holdings discarded or wedded-out books, serials, professional books and electronic resources.",
        "subcategory_name": null
    },
    {
        "t2_id": 203,
        "t1_id": 34,
        "name": "D.1. Schedule of library hours posted conspicuously.",
        "subcategory_name": null
    },
    {
        "t2_id": 204,
        "t1_id": 34,
        "name": "D.2. Copy of library rules and regulations posted conspicuously.",
        "subcategory_name": null
    },
    {
        "t2_id": 205,
        "t1_id": 34,
        "name": "D.3. display board where list of new book arrivals and other relevant information are posted.",
        "subcategory_name": null
    },
    {
        "t2_id": 206,
        "t1_id": 34,
        "name": "D.4. Evidence on the existence of an integrated library system (OPAC, internet CD Rom, database, e-library, etc.).",
        "subcategory_name": null
    },
    {
        "t2_id": 207,
        "t1_id": 34,
        "name": "D.5. Summarized statistical data on library resources utilization.",
        "subcategory_name": null
    },
    {
        "t2_id": 208,
        "t1_id": 35,
        "name": "E.1. Library floor plan showing the location of the different offices.",
        "subcategory_name": null
    },
    {
        "t2_id": 209,
        "t1_id": 35,
        "name": "E.2. Description of lightning, ventilation, safety and security condition.",
        "subcategory_name": null
    },
    {
        "t2_id": 210,
        "t1_id": 35,
        "name": "E.3. Inventory of library, furniture and other physical amenities.",
        "subcategory_name": null
    },
    {
        "t2_id": 211,
        "t1_id": 36,
        "name": "F.1. Copy of the general budgetary allocation for the library.",
        "subcategory_name": null
    },
    {
        "t2_id": 212,
        "t1_id": 36,
        "name": "F.2. Evidence of the head Librarian’s participation if budget preparation.",
        "subcategory_name": null
    },
    {
        "t2_id": 213,
        "t1_id": 36,
        "name": "F.3. Evidence that library fees are utilized for library purposes.",
        "subcategory_name": null
    },
    {
        "t2_id": 214,
        "t1_id": 37,
        "name": "G.1. List of the linkages established for exchange of materials, funding and technical assistance.",
        "subcategory_name": null
    },
    {
        "t2_id": 215,
        "t1_id": 38,
        "name": "A.1. Site Development Plan/Physical Plant Map displayed prominently in the campus.",
        "subcategory_name": null
    },
    {
        "t2_id": 216,
        "t1_id": 38,
        "name": "A.2. Evidence of land ownership.",
        "subcategory_name": null
    },
    {
        "t2_id": 217,
        "t1_id": 38,
        "name": "A.3. Vicinity Map.",
        "subcategory_name": null
    },
    {
        "t2_id": 218,
        "t1_id": 39,
        "name": "B.1. A copy of the Campus Development Plan.",
        "subcategory_name": null
    },
    {
        "t2_id": 219,
        "t1_id": 39,
        "name": "B.2. Description of mechanisms ensuring the following:",
        "subcategory_name": null
    },
    {
        "t2_id": 220,
        "t1_id": 40,
        "name": "C.1. Approved building plan, showing the location of the different buildings in the campus.",
        "subcategory_name": null
    },
    {
        "t2_id": 221,
        "t1_id": 40,
        "name": "C.2. Evidence that electrical lines are safely installed and periodically checked.",
        "subcategory_name": null
    },
    {
        "t2_id": 222,
        "t1_id": 40,
        "name": "C.3. Schedule of water potability testing and pest control inspection.",
        "subcategory_name": null
    },
    {
        "t2_id": 223,
        "t1_id": 40,
        "name": "C.4. PDF of the janitorial staff, including work schedule.",
        "subcategory_name": null
    },
    {
        "t2_id": 224,
        "t1_id": 41,
        "name": "D.1. Number of classroom utilized by the program under survey.",
        "subcategory_name": null
    },
    {
        "t2_id": 225,
        "t1_id": 41,
        "name": "D.2. Sample of Photographs of material resources inside the classroom.",
        "subcategory_name": null
    },
    {
        "t2_id": 226,
        "t1_id": 42,
        "name": "E.1. Photographs of offices function rooms.",
        "subcategory_name": null
    },
    {
        "t2_id": 227,
        "t1_id": 42,
        "name": "E.2. Inventory of equipment, amenities and supplies in function rooms , offices.",
        "subcategory_name": null
    },
    {
        "t2_id": 228,
        "t1_id": 42,
        "name": "E.3. Availability of toilets and storeroom, where needed.",
        "subcategory_name": null
    },
    {
        "t2_id": 229,
        "t1_id": 42,
        "name": "E.4. List of description of function rooms (administrative conference hall, multimedia room, etc.).",
        "subcategory_name": null
    },
    {
        "t2_id": 230,
        "t1_id": 42,
        "name": "E.5. File copies of approved request for the use of the function rooms.",
        "subcategory_name": null
    },
    {
        "t2_id": 231,
        "t1_id": 43,
        "name": "F.1. Lay-out of the Sports Center.",
        "subcategory_name": null
    },
    {
        "t2_id": 232,
        "t1_id": 43,
        "name": "F.2. Inventory of sports facilities.",
        "subcategory_name": null
    },
    {
        "t2_id": 233,
        "t1_id": 43,
        "name": "F.3. List of assembly halls.",
        "subcategory_name": null
    },
    {
        "t2_id": 234,
        "t1_id": 43,
        "name": "F.4. Copy of rules and regulations in the use of assembly halls/sports/athletics facilities.",
        "subcategory_name": null
    },
    {
        "t2_id": 235,
        "t1_id": 44,
        "name": "G.1. Floor plan of the medical and Dental Clinic.",
        "subcategory_name": null
    },
    {
        "t2_id": 236,
        "t1_id": 44,
        "name": "G.2. Qualification of the Medical and Dental Staff.",
        "subcategory_name": null
    },
    {
        "t2_id": 237,
        "t1_id": 44,
        "name": "G.3. Inventory of equipment, supplies an d other material resources.",
        "subcategory_name": null
    },
    {
        "t2_id": 238,
        "t1_id": 45,
        "name": "H.1. Floor Plan of the Student Center showing the location of different offices.",
        "subcategory_name": null
    },
    {
        "t2_id": 239,
        "t1_id": 45,
        "name": "H.2. Inventory of equipment, furniture and amenities at the Student Center",
        "subcategory_name": null
    },
    {
        "t2_id": 240,
        "t1_id": 46,
        "name": "I.1. Copy of the Permit to Operate conspicuously displayed.",
        "subcategory_name": null
    },
    {
        "t2_id": 241,
        "t1_id": 46,
        "name": "I.2. Display board where food/menu for the day, including prices are posted.",
        "subcategory_name": null
    },
    {
        "t2_id": 242,
        "t1_id": 46,
        "name": "I.3. Health Certificates of Canteen Staff and food handlers.",
        "subcategory_name": null
    },
    {
        "t2_id": 243,
        "t1_id": 46,
        "name": "I.4 Inventory of equipment furniture.",
        "subcategory_name": null
    },
    {
        "t2_id": 244,
        "t1_id": 47,
        "name": "J.1. Inventory of equipment furniture and amenities.",
        "subcategory_name": null
    },
    {
        "t2_id": 245,
        "t1_id": 48,
        "name": "K.1. Floor plan of Dormitories, showing entrance and exit points, conference hall, mess hall, Dorm Head’s office, etc.",
        "subcategory_name": null
    },
    {
        "t2_id": 246,
        "t1_id": 48,
        "name": "K.2. Certificate Occupancy.",
        "subcategory_name": null
    },
    {
        "t2_id": 247,
        "t1_id": 48,
        "name": "K.3 Evidence that a maintenance system exist.",
        "subcategory_name": null
    },
    {
        "t2_id": 248,
        "t1_id": 48,
        "name": "K.4. Requirements on admission of student, faculty and staff boarders.",
        "subcategory_name": null
    },
    {
        "t2_id": 249,
        "t1_id": 48,
        "name": "K.5. Copy of the house rules and regulations including strategies for dissemination.",
        "subcategory_name": null
    },
    {
        "t2_id": 250,
        "t1_id": 48,
        "name": "K.6. List of occupants, including vital information, about them.",
        "subcategory_name": null
    },
    {
        "t2_id": 251,
        "t1_id": 49,
        "name": "A.1. Building plan showing the location of laboratory rooms/shops used by the program under survey.",
        "subcategory_name": "General (for all laborattories)"
    },
    {
        "t2_id": 252,
        "t1_id": 49,
        "name": "A.2. Copy of the laboratory lay-out.",
        "subcategory_name": "General (for all laborattories)"
    },
    {
        "t2_id": 253,
        "t1_id": 49,
        "name": "A.3. Inventory of available equipment, gadgets, fixtures in every laboratory.",
        "subcategory_name": "General (for all laborattories)"
    },
    {
        "t2_id": 254,
        "t1_id": 49,
        "name": "A.4. Laboratory Manual",
        "subcategory_name": "General (for all laborattories)"
    },
    {
        "t2_id": 255,
        "t1_id": 49,
        "name": "A.5. First-aid Kit and Antidote Charts displayed conspicuously.",
        "subcategory_name": "General (for all laborattories)"
    },
    {
        "t2_id": 256,
        "t1_id": 49,
        "name": "A.6. List of safety and precautionary measures being implemented.",
        "subcategory_name": "General (for all laborattories)"
    },
    {
        "t2_id": 257,
        "t1_id": 49,
        "name": "A.7. Evidence of training conducted on the proper use of laboratories.",
        "subcategory_name": "General (for all laborattories)"
    },
    {
        "t2_id": 258,
        "t1_id": 49,
        "name": "A.8. Inventory of usable computer units and other equipment.",
        "subcategory_name": "Computer Laboratory, Multimedia Center"
    },
    {
        "t2_id": 259,
        "t1_id": 49,
        "name": "A.9. Guidelines in the use of computer laboratories.",
        "subcategory_name": "Computer Laboratory, Multimedia Center"
    },
    {
        "t2_id": 260,
        "t1_id": 49,
        "name": "A.10. PDF of the designated computer technician/s",
        "subcategory_name": "Computer Laboratory, Multimedia Center"
    },
    {
        "t2_id": 261,
        "t1_id": 49,
        "name": "A.11. Inventory of equipment, fixtures, apparatuses, supplies and materials.",
        "subcategory_name": "Natural Science/Technology/PE facilities"
    },
    {
        "t2_id": 262,
        "t1_id": 49,
        "name": "A.12. Availability of stockroom.",
        "subcategory_name": "Natural Science/Technology/PE facilities"
    },
    {
        "t2_id": 263,
        "t1_id": 49,
        "name": "A.13. Evidence on the availability of gas, water and electricity for practicum purposes.",
        "subcategory_name": "Natural Science/Technology/PE facilities"
    },
    {
        "t2_id": 264,
        "t1_id": 49,
        "name": "A.14. Guidelines in the use of equipment and apparatuses",
        "subcategory_name": "Natural Science/Technology/PE facilities"
    },
    {
        "t2_id": 265,
        "t1_id": 50,
        "name": "B.1. Inventory of available equipment with patent (state patent number), if any.",
        "subcategory_name": null
    },
    {
        "t2_id": 266,
        "t1_id": 50,
        "name": "B.2. List of fabricated tools and apparatuses, including relevant information.",
        "subcategory_name": null
    },
    {
        "t2_id": 267,
        "t1_id": 50,
        "name": "B.3. List of fabricated equipment with patent (state patent number), if any.",
        "subcategory_name": null
    },
    {
        "t2_id": 268,
        "t1_id": 51,
        "name": "C.1. System Descriptions",
        "subcategory_name": null
    },
    {
        "t2_id": 269,
        "t1_id": 52,
        "name": "D.1. Evidence of compliance on the requirements and operation of laboratories, if applicable.",
        "subcategory_name": null
    },
    {
        "t2_id": 270,
        "t1_id": 53,
        "name": "A.1. Organization Chart of the Institution displayed at the Administration Office.",
        "subcategory_name": null
    },
    {
        "t2_id": 271,
        "t1_id": 53,
        "name": "A.2. Copy of the Board Resolution approving the organizational structure and other relevant resolutions.",
        "subcategory_name": null
    },
    {
        "t2_id": 272,
        "t1_id": 53,
        "name": "A.3. Functional Chart.",
        "subcategory_name": null
    },
    {
        "t2_id": 273,
        "t1_id": 53,
        "name": "A.4. Composition of the Administrative Council Including its power and functions.",
        "subcategory_name": null
    },
    {
        "t2_id": 274,
        "t1_id": 53,
        "name": "A.5. Composition of Academic Council including its powers and function.",
        "subcategory_name": null
    },
    {
        "t2_id": 275,
        "t1_id": 53,
        "name": "A.6. College/University Code.",
        "subcategory_name": null
    },
    {
        "t2_id": 276,
        "t1_id": 53,
        "name": "A.7. System of communication flow.",
        "subcategory_name": null
    },
    {
        "t2_id": 277,
        "t1_id": 53,
        "name": "A.8. Administrative/Operational Manual.",
        "subcategory_name": null
    },
    {
        "t2_id": 278,
        "t1_id": 53,
        "name": "A.9. Qualification Standards for Administrative Personnel.",
        "subcategory_name": null
    },
    {
        "t2_id": 279,
        "t1_id": 54,
        "name": "B.1. Educational profile and functions of the academic administrators.",
        "subcategory_name": null
    },
    {
        "t2_id": 280,
        "t1_id": 55,
        "name": "C.1. Policies and guidelines on the different aspects of student life",
        "subcategory_name": null
    },
    {
        "t2_id": 281,
        "t1_id": 55,
        "name": "C.2. Evidence of students participation in planning and implementation of students activities.",
        "subcategory_name": null
    },
    {
        "t2_id": 282,
        "t1_id": 55,
        "name": "C.3. Evidence of good working relationship among the administration, faculty staff and students.",
        "subcategory_name": null
    },
    {
        "t2_id": 283,
        "t1_id": 56,
        "name": "D.1. Qualification of the Head of the FMO, including his/her functions.",
        "subcategory_name": null
    },
    {
        "t2_id": 284,
        "t1_id": 56,
        "name": "D.2. Guidelines in budget preparations.",
        "subcategory_name": null
    },
    {
        "t2_id": 285,
        "t1_id": 56,
        "name": "D.3. Evidence of participation of the academic unit in budget allocation.",
        "subcategory_name": null
    },
    {
        "t2_id": 286,
        "t1_id": 56,
        "name": "D.4. Statement of budget priorities.",
        "subcategory_name": null
    },
    {
        "t2_id": 287,
        "t1_id": 56,
        "name": "D.5. Plantilla of Administrative Personnel.",
        "subcategory_name": null
    },
    {
        "t2_id": 288,
        "t1_id": 57,
        "name": "E.1. Composition of the Supply Management Office including their qualifications, functions and responsibilities.",
        "subcategory_name": null
    },
    {
        "t2_id": 289,
        "t1_id": 57,
        "name": "E.2. Description of the system of supply management.",
        "subcategory_name": null
    },
    {
        "t2_id": 290,
        "t1_id": 57,
        "name": "E.3. Composition and functions of the Bids and Awards Committee.",
        "subcategory_name": null
    },
    {
        "t2_id": 291,
        "t1_id": 57,
        "name": "E.4. Evidence of compliance to RA 9184 ( Procurement of equipment, supplies and materials).",
        "subcategory_name": null
    },
    {
        "t2_id": 292,
        "t1_id": 57,
        "name": "E.5. File copies and annual inventories of serviceable and non-serviceable equipment.",
        "subcategory_name": null
    },
    {
        "t2_id": 293,
        "t1_id": 58,
        "name": "F.1. Compositions of the Records Managements Office, their qualifications and functions.",
        "subcategory_name": null
    },
    {
        "t2_id": 294,
        "t1_id": 58,
        "name": "F.2. Description of the records managements in the institution",
        "subcategory_name": null
    },
    {
        "t2_id": 295,
        "t1_id": 58,
        "name": "F.3. Description of the system of maintaining the confidentiality and security of official records.",
        "subcategory_name": null
    },
    {
        "t2_id": 296,
        "t1_id": 58,
        "name": "F.4. Updated records/files identified under Administration.",
        "subcategory_name": null
    },
    {
        "t2_id": 297,
        "t1_id": 59,
        "name": "G.1. Composition of Planning Unit, including their functions.",
        "subcategory_name": null
    },
    {
        "t2_id": 298,
        "t1_id": 59,
        "name": "G.2. Copy of the Development plan, long term and short term.",
        "subcategory_name": null
    },
    {
        "t2_id": 299,
        "t1_id": 59,
        "name": "G.3. Evidence of participatory financial management.",
        "subcategory_name": null
    },
    {
        "t2_id": 300,
        "t1_id": 59,
        "name": "G.4. Description of inter-office sharing resources ( facilities and equipment ).",
        "subcategory_name": null
    },
    {
        "t2_id": 301,
        "t1_id": 59,
        "name": "G.5. Copy of the Personnel Performance Evaluation instrument.",
        "subcategory_name": null
    },
    {
        "t2_id": 302,
        "t1_id": 59,
        "name": "G.6. Evidence on the use of the Personnel Evaluation results to improve performance and delivery of services.",
        "subcategory_name": null
    },
    {
        "t2_id": 303,
        "t1_id": 59,
        "name": "G.7 Annual Reports",
        "subcategory_name": null
    }
];


const dirt3 = [
    {
        "t3_id": 1,
        "t2_id": 19,
        "name": "A.3.1 educational qualification"
    },
    {
        "t3_id": 2,
        "t2_id": 19,
        "name": "A.3.2 length of academic experience"
    },
    {
        "t3_id": 3,
        "t2_id": 19,
        "name": "A.3.3 Field of specialization, if applicable"
    },
    {
        "t3_id": 4,
        "t2_id": 135,
        "name": "E.1.1. List of the scholarship available;"
    },
    {
        "t3_id": 5,
        "t2_id": 135,
        "name": "E.1.2. List of schools privileges of scholars(stipend, free or discounted tuition fees, food allowance, etc.);"
    },
    {
        "t3_id": 6,
        "t2_id": 135,
        "name": "E.1.3. Policies on the selection and retention of scholarship/grantees in different categories;"
    },
    {
        "t3_id": 7,
        "t2_id": 135,
        "name": "E.1.4. A mechanism for funds generation from sponsors, benevolent individuals, agencies, institutions, and organizations;"
    },
    {
        "t3_id": 8,
        "t2_id": 135,
        "name": "E.1.5. System of monitoring a grantee/scholar’s academic status."
    },
    {
        "t3_id": 9,
        "t2_id": 219,
        "name": "B.2.1 Traffic safety in and out of the campus."
    },
    {
        "t3_id": 10,
        "t2_id": 219,
        "name": "B.2.2 Waste management."
    },
    {
        "t3_id": 11,
        "t2_id": 219,
        "name": "B.2.3 Maintenance, repair and upkeep of property."
    },
    {
        "t3_id": 12,
        "t2_id": 219,
        "name": "B.2.4. Cleanliness and orderliness in the campus and"
    },
    {
        "t3_id": 13,
        "t2_id": 219,
        "name": "B.2.5. Security of the academic community inside the campus."
    },
    {
        "t3_id": 14,
        "t2_id": 268,
        "name": "C.1.1. Maintenance of cleanliness and orderliness in the laboratories."
    },
    {
        "t3_id": 15,
        "t2_id": 268,
        "name": "C.1.2. Replenishment of perishable materials;"
    },
    {
        "t3_id": 16,
        "t2_id": 268,
        "name": "C.1.3 Coding and Inventory;"
    },
    {
        "t3_id": 17,
        "t2_id": 268,
        "name": "C.1.4. Repairs and Calibrations."
    },
    {
        "t3_id": 18,
        "t2_id": 279,
        "name": "B.1.1. Dean/Director"
    },
    {
        "t3_id": 19,
        "t2_id": 279,
        "name": "B.1.2. Department Chair or his/her equivalent."
    }
];