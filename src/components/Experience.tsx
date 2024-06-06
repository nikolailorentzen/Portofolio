import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faUpRightFromSquare } from "@fortawesome/free-solid-svg-icons"
import ExperienceItem from "./ExperienceItem"
import { useTranslation } from 'react-i18next';

const Experience = () => {
    const { t } = useTranslation();

    return (
        <section id="experience">

            <div className="flex items-end justify-between">
                <p className="text-lg text-slate-200 tracking-tight pt-5 sm:pt-20 uppercase">{t('experience')}</p>
                <a href="/resume.pdf" target="_blank">
                    <div className="flex gap-1 items-center group cursor-pointer pr-1">
                        <p className="text-slate-400 text-md font-thin group-hover:text-slate-200 group-hover:pr-1 group-hover:text-teal-300 all-transitions duration-200">{t('viewResume')}</p>
                        <FontAwesomeIcon icon={faUpRightFromSquare} className="text-slate-400 text-sm font-thin group-hover:text-teal-300 group-hover:scale-105 group-hover:pb-1 all-transitions duration-200" />
                    </div>
                </a>
            </div>

            <hr className="border-slate-500 pb-5"/>

            <ExperienceItem 
                year={"2024 | " + t('spring')}
                title={t('kristianiaUniversityCollege')}
                subtitle={t("FrontendAndMobileDevelopment")}
                description={t("education.sixthSemester")}
                skills={["VUE", "VUETIFY3", ".NET MAUI", "DEVOPS", "AGILE", "FIGMA"]}
            />

            <ExperienceItem 
                year={"2023 | " + t('autumn')}
                title={t('kristianiaUniversityCollege')}
                subtitle={t("FrontendAndMobileDevelopment")}
                description={t("education.fifthSemester")}
                skills={["SWIFT", "REACT NATIVE", "TYPESCRIPT", "AGILE"]}
            />

            <ExperienceItem 
                year={"2023 | " + t('spring')}
                title={t('kristianiaUniversityCollege')}
                subtitle={t("FrontendAndMobileDevelopment")}
                description={t("education.fourthSemester")}
                skills={["REACT", "CSS3", t("agile"), "PYTHON", "UNITY"]}
            />

            <ExperienceItem 
                year={"2022 | " + t('autumn')}
                title={t('kristianiaUniversityCollege')}
                subtitle={t("FrontendAndMobileDevelopment")}
                description={t("education.thirdSemester")}
                skills={["REACT", "BOOTSTRAP", ".NET", "C#", "API", "KOTLIN", "ANDROID"]}
            />

            <ExperienceItem 
                year={"2022 | " + t('spring')}
                title={t('kristianiaUniversityCollege')}
                subtitle={t("FrontendAndMobileDevelopment")}
                description={t("education.secondSemester")}
                skills={["JAVA", t("objectOrientedProgramming"), "FIGMA"]}
            />

            <ExperienceItem 
                year={"2021 | " + t('autumn')}
                title={t('kristianiaUniversityCollege')}
                subtitle={t("FrontendAndMobileDevelopment")}
                description={t("education.firstSemester")}
                skills={["JS", "HTML", "CSS3", "SQL", t("databases")]}
            />

        </section>
    )
}

export default Experience
