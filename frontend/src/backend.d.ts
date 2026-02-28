import type { Principal } from "@icp-sdk/core/principal";
export interface Some<T> {
    __kind__: "Some";
    value: T;
}
export interface None {
    __kind__: "None";
}
export type Option<T> = Some<T> | None;
export interface BlogPost {
    id: string;
    title: string;
    content: string;
    createdAt: Timestamp;
    author: string;
    updatedAt: Timestamp;
    excerpt: string;
}
export type Timestamp = bigint;
export interface ContactMessage {
    id: string;
    subject: string;
    name: string;
    createdAt: Timestamp;
    email: string;
    message: string;
}
export interface Grievance {
    id: string;
    referenceNumber: string;
    name: string;
    createdAt: Timestamp;
    description: string;
    email: string;
    category: GrievanceCategory;
}
export interface ConsultationRequest {
    id: string;
    cityState: string;
    fullName: string;
    utmSource?: string;
    selectedService: string;
    timestamp: Timestamp;
    phoneNumber: string;
}
export interface UserProfile {
    name: string;
    email: string;
}
export enum GrievanceCategory {
    safety = "safety",
    other = "other",
    noise = "noise",
    maintenance = "maintenance",
    cleanliness = "cleanliness"
}
export enum UserRole {
    admin = "admin",
    user = "user",
    guest = "guest"
}
export interface backendInterface {
    assignCallerUserRole(user: Principal, role: UserRole): Promise<void>;
    createBlogPost(title: string, content: string, excerpt: string, author: string): Promise<string>;
    getBlogPost(id: string): Promise<BlogPost>;
    getCallerUserProfile(): Promise<UserProfile | null>;
    getCallerUserRole(): Promise<UserRole>;
    getUserProfile(user: Principal): Promise<UserProfile | null>;
    isCallerAdmin(): Promise<boolean>;
    listBlogPosts(): Promise<Array<BlogPost>>;
    listConsultationRequests(): Promise<Array<ConsultationRequest>>;
    listContactMessages(): Promise<Array<ContactMessage>>;
    listGrievances(): Promise<Array<Grievance>>;
    saveCallerUserProfile(profile: UserProfile): Promise<void>;
    signUpWithInternetIdentity(): Promise<Principal>;
    submitConsultationRequest(fullName: string, phoneNumber: string, selectedService: string, cityState: string, utmSource: string | null): Promise<string>;
    submitContactMessage(name: string, email: string, subject: string, message: string): Promise<string>;
    submitGrievance(name: string, email: string, category: GrievanceCategory, description: string): Promise<string>;
}
