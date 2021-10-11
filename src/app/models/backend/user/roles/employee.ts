export interface Employee {
    specialization: Specialization;
    skills: Skill[];
    qualification: Qualification;
    expectedSalary: number;
    experiences: Experience[];
}

interface Specialization {
    id: string;
    name: string;
}

interface Skill {
    id: string;
    name: string;
}

interface Qualification {
    id: string;
    name: string;
}

interface Experience {
    companyName: string;
    period: Period;
}

interface Period {
    from: number;
    to: number;
}

