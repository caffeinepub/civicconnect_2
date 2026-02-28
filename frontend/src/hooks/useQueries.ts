import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { useActor } from './useActor';
import type { BlogPost, ConsultationRequest, UserProfile, GrievanceCategory, CustomerProfile, ServiceRequest } from '../backend';

export function useGetCallerUserProfile() {
  const { actor, isFetching: actorFetching } = useActor();

  const query = useQuery<UserProfile | null>({
    queryKey: ['currentUserProfile'],
    queryFn: async () => {
      if (!actor) throw new Error('Actor not available');
      return actor.getCallerUserProfile();
    },
    enabled: !!actor && !actorFetching,
    retry: false,
  });

  return {
    ...query,
    isLoading: actorFetching || query.isLoading,
    isFetched: !!actor && query.isFetched,
  };
}

export function useSaveUserProfile() {
  const { actor } = useActor();
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (profile: UserProfile) => {
      if (!actor) throw new Error('Actor not available');
      return actor.saveCallerUserProfile(profile);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['currentUserProfile'] });
    },
  });
}

export function useSignUp() {
  const { actor } = useActor();
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async () => {
      if (!actor) throw new Error('Actor not available');
      return actor.signUpWithInternetIdentity();
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['currentUserProfile'] });
    },
  });
}

export function useListBlogPosts() {
  const { actor, isFetching } = useActor();

  return useQuery<BlogPost[]>({
    queryKey: ['blogPosts'],
    queryFn: async () => {
      if (!actor) return [];
      return actor.listBlogPosts();
    },
    enabled: !!actor && !isFetching,
  });
}

export function useGetBlogPost(id: string) {
  const { actor, isFetching } = useActor();

  return useQuery<BlogPost>({
    queryKey: ['blogPost', id],
    queryFn: async () => {
      if (!actor) throw new Error('Actor not available');
      return actor.getBlogPost(id);
    },
    enabled: !!actor && !isFetching && !!id,
  });
}

export function useSubmitContactMessage() {
  const { actor } = useActor();
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (data: { name: string; email: string; subject: string; message: string }) => {
      if (!actor) throw new Error('Actor not available');
      return actor.submitContactMessage(data.name, data.email, data.subject, data.message);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['contactMessages'] });
    },
  });
}

export function useSubmitGrievance() {
  const { actor } = useActor();
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (data: { name: string; email: string; category: GrievanceCategory; description: string }) => {
      if (!actor) throw new Error('Actor not available');
      return actor.submitGrievance(data.name, data.email, data.category, data.description);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['grievances'] });
    },
  });
}

export function useSubmitConsultationRequest() {
  const { actor } = useActor();
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (data: {
      fullName: string;
      phoneNumber: string;
      selectedService: string;
      cityState: string;
      utmSource?: string | null;
    }) => {
      if (!actor) throw new Error('Actor not available');
      return actor.submitConsultationRequest(
        data.fullName,
        data.phoneNumber,
        data.selectedService,
        data.cityState,
        data.utmSource ?? null
      );
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['consultationRequests'] });
    },
  });
}

export function useListConsultationRequests() {
  const { actor, isFetching } = useActor();

  return useQuery<ConsultationRequest[]>({
    queryKey: ['consultationRequests'],
    queryFn: async () => {
      if (!actor) return [];
      return actor.listConsultationRequests();
    },
    enabled: !!actor && !isFetching,
  });
}

// --- Customer Portal Hooks ---

export function useSignupCustomer() {
  const { actor } = useActor();

  return useMutation({
    mutationFn: async (data: {
      fullName: string;
      mobileNumber: string;
      email: string;
      businessName: string;
      password: string;
    }) => {
      if (!actor) throw new Error('Actor not available');
      const result = await actor.signupCustomer(
        data.fullName,
        data.mobileNumber,
        data.email,
        data.businessName,
        data.password
      );
      if (result.__kind__ === 'err') {
        throw new Error(result.err);
      }
      return result.ok;
    },
  });
}

export function useLoginCustomer() {
  const { actor } = useActor();

  return useMutation({
    mutationFn: async (data: { email: string; password: string }) => {
      if (!actor) throw new Error('Actor not available');
      const result = await actor.loginCustomer(data.email, data.password);
      if (result.__kind__ === 'err') {
        throw new Error(result.err);
      }
      return result.ok as CustomerProfile;
    },
  });
}

export function useCustomerProfile(customerId: string | null) {
  const { actor, isFetching } = useActor();

  return useQuery<CustomerProfile | null>({
    queryKey: ['customerProfile', customerId],
    queryFn: async () => {
      if (!actor || !customerId) return null;
      return actor.getCustomerProfile(customerId);
    },
    enabled: !!actor && !isFetching && !!customerId,
  });
}

export function useSubmitServiceRequest() {
  const { actor } = useActor();
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (data: { serviceName: string; notes: string }) => {
      // Read customerId from active session
      const SESSION_KEY = 'ymw_customer_session';
      let customerId: string | null = null;
      try {
        const raw = sessionStorage.getItem(SESSION_KEY);
        if (raw) {
          const parsed = JSON.parse(raw);
          customerId = parsed?.customerId ?? null;
        }
      } catch {
        customerId = null;
      }

      if (!customerId) {
        throw new Error('No active session. Please log in.');
      }

      if (!actor) throw new Error('Actor not available');

      const result = await actor.submitServiceRequest(customerId, data.serviceName, data.notes);
      if (result.__kind__ === 'err') {
        throw new Error(result.err);
      }
      return result.ok;
    },
    onSuccess: () => {
      // Invalidate service requests for the current session's customer
      const SESSION_KEY = 'ymw_customer_session';
      try {
        const raw = sessionStorage.getItem(SESSION_KEY);
        if (raw) {
          const parsed = JSON.parse(raw);
          const customerId = parsed?.customerId;
          if (customerId) {
            queryClient.invalidateQueries({ queryKey: ['serviceRequestsByCustomer', customerId] });
          }
        }
      } catch {
        // ignore
      }
    },
  });
}

export function useGetServiceRequestsByCustomer(customerId: string | null) {
  const { actor, isFetching } = useActor();

  return useQuery<ServiceRequest[]>({
    queryKey: ['serviceRequestsByCustomer', customerId],
    queryFn: async () => {
      if (!actor || !customerId) return [];
      return actor.getServiceRequestsByCustomer(customerId);
    },
    enabled: !!actor && !isFetching && !!customerId,
  });
}

export function useGetAllCustomers() {
  const { actor, isFetching } = useActor();

  return useQuery<CustomerProfile[]>({
    queryKey: ['allCustomers'],
    queryFn: async () => {
      if (!actor) return [];
      return actor.getAllCustomers();
    },
    enabled: !!actor && !isFetching,
    retry: false,
  });
}

export function useGetAllServiceRequests() {
  const { actor, isFetching } = useActor();

  return useQuery<ServiceRequest[]>({
    queryKey: ['allServiceRequests'],
    queryFn: async () => {
      if (!actor) return [];
      return actor.getAllServiceRequests();
    },
    enabled: !!actor && !isFetching,
    retry: false,
  });
}
