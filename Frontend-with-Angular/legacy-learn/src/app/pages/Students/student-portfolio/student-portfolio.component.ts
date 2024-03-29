import { Component, OnInit } from '@angular/core';
import { Course } from '../../../../models/Interfaces/Course';
import { AddCourseModalComponent } from '../add-course-modal/add-course-modal.component';
import { FormsModule } from '@angular/forms';
import {
  faCheck,
  faLessThan,
  faXmark,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { RouterLink } from '@angular/router';
import { NgClass } from '@angular/common';
import { GpaProgressComponent } from '../../../components/gpa-progress/gpa-progress.component';
import { HomeNavigationComponent } from '../../../components/home-navigation/home-navigation.component';


@Component({
  selector: 'app-student-portfolio',
  standalone: true,
  imports: [
    RouterLink,
    AddCourseModalComponent,
    FormsModule,
    FontAwesomeModule,
    NgClass,
    GpaProgressComponent,
    HomeNavigationComponent
  ],
  templateUrl: './student-portfolio.component.html',
  styleUrl: './student-portfolio.component.css',
})
export class StudentPortfolioComponent implements OnInit {
  courses: Course[] = []; // Array to store course data
  showModal: boolean = false; // Flag to control modal visibility
  cgpa!: number; // CGPA property to store calculated value
  editingCourseIndex: number | null = null; // Track the index of the course being edited
  trackingIndex: number = 1;
  check = faCheck;
  cancel = faXmark;
  isGpaCalculated: boolean = false;

  constructor() {}

  ngOnInit() {
    const storedCourses = localStorage.getItem('courses');
    if (storedCourses) {
      this.courses = JSON.parse(storedCourses);
    }
  }

  saveCoursesToLocalStorage() {
    localStorage.setItem('courses', JSON.stringify(this.courses));
  }

  openAddCourseModal() {
    this.showModal = true; // Open the modal on button click
  }

  closeCourseModal() {
    this.showModal = false;
  }

  addCourse(course: Course) {
    course.grade = this.calculateGrade(course.score);
    this.trackingIndex++;
    this.courses.push(course); // Add new course to the array
    this.cgpa = 0;
    this.showModal = false; // Close the modal after adding
    this.isGpaCalculated = false;
    this.saveCoursesToLocalStorage();
  }

  calculateGrade(score: number): string {
    if (score >= 70) {
      return 'A';
    } else if (score >= 60) {
      return 'B';
    } else if (score >= 50) {
      return 'C';
    } else if (score >= 45) {
      return 'D';
    } else if (score >= 40) {
      return 'E';
    } else {
      return 'F';
    }
  }

  calculateCGPA(): number {
    this.isGpaCalculated=true;
    let totalCreditPoints = 0;
    let totalQualityPoints = 0;

    for (const course of this.courses) {
      const gradePoints = this.getGradePoints(course.score);
      if (gradePoints !== null) {
        totalCreditPoints += course.unit;
        totalQualityPoints += gradePoints * course.unit;
      }
    }

    this.cgpa =
      totalCreditPoints > 0 ? totalQualityPoints / totalCreditPoints : 0;
    return totalCreditPoints > 0 ? totalQualityPoints / totalCreditPoints : 0; // Calculate CGPA if totalCreditPoints is non-zero, otherwise return 0
  }

  getGradePoints(score: number): number {
    if (score >= 70) {
      return 5.0;
    } else if (score >= 60) {
      return 4.0;
    } else if (score >= 50) {
      return 3.0;
    } else if (score >= 45) {
      return 2.0;
    } else if (score >= 40) {
      return 1.0;
    } else if (score >= 1) {
      return (score / 39) * 0.99;
    } else {
      return 0; // Return null for scores below 1
    }
  }

  deleteCourse(course: Course) {
    const courseIndex = this.courses.findIndex((c) => c === course); //find the index of that course
    if (courseIndex !== -1) {
      this.courses.splice(courseIndex, 1); //remove that course from the array
      this.isGpaCalculated=false;
      this.cgpa = 0; // invalidatee cgpa
    }
  }

  editCourse(course: Course, index: number) {
    this.editingCourseIndex = index; // Set the editing course index
    // Consider creating a copy of the course to avoid modifying the original object
    this.courses[index] = { ...course }; // Optional: Create a copy for editing
  }

  saveCourse(course: Course) {
    if (this.editingCourseIndex !== null && this.editingCourseIndex >= 0) {
      this.courses[this.editingCourseIndex].score = course.score; // Update score directly
      this.courses[this.editingCourseIndex].grade = this.calculateGrade(
        course.score
      ); // Recalculate grade
      this.editingCourseIndex = null;
      this.isGpaCalculated=false;
      this.cgpa = 0; // Invalidate CGPA after course edit
      this.saveCoursesToLocalStorage();
    }
  }
  
}
