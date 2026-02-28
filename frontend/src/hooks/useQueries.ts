import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { useActor } from './useActor';
import type { BlogPost, ConsultationRequest, UserProfile, GrievanceCategory } from '../backend';

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
