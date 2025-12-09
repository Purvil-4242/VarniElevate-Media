/**
 * Data Service for VarniElevate Media
 * Uses static JSON files for Services and Case Studies
 */

import { Service, CaseStudy } from "@/types/admin";
import servicesData from "@/data/services.json";
import caseStudiesData from "@/data/caseStudies.json";

// ==================== SERVICES ====================

/**
 * Get all services from static JSON
 */
export const getAllServices = async (): Promise<Service[]> => {
    try {
        // Simulate async operation for consistency
        return Promise.resolve(servicesData as Service[]);
    } catch (error) {
        console.error("Error fetching services:", error);
        return [];
    }
};

/**
 * Get a single service by ID
 */
export const getServiceById = async (id: string): Promise<Service | null> => {
    try {
        const service = servicesData.find((s) => s.id === id);
        return Promise.resolve(service as Service || null);
    } catch (error) {
        console.error("Error fetching service:", error);
        return null;
    }
};

// ==================== CASE STUDIES ====================

/**
 * Get all case studies from static JSON
 */
export const getAllCaseStudies = async (): Promise<CaseStudy[]> => {
    try {
        // Simulate async operation for consistency
        return Promise.resolve(caseStudiesData as CaseStudy[]);
    } catch (error) {
        console.error("Error fetching case studies:", error);
        return [];
    }
};

/**
 * Get a single case study by ID
 */
export const getCaseStudyById = async (id: string): Promise<CaseStudy | null> => {
    try {
        const caseStudy = caseStudiesData.find((cs) => cs.id === id);
        return Promise.resolve(caseStudy as CaseStudy || null);
    } catch (error) {
        console.error("Error fetching case study:", error);
        return null;
    }
};
