import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { useActor } from './useActor';
import type { BlogPost, ContactMessage, Grievance, GrievanceCategory, UserProfile } from '../backend';

// ─── User Profile ────────────────────────────────────────────────────────────

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

// ─── Sign Up ─────────────────────────────────────────────────────────────────

export function useSignUp() {
  const { actor } = useActor();

  return useMutation({
    mutationFn: async () => {
      if (!actor) throw new Error('Actor not available');
      return actor.signUpWithInternetIdentity();
    },
  });
}

// ─── Blog Posts ───────────────────────────────────────────────────────────────

export function useListBlogPosts() {
  const { actor, isFetching: actorFetching } = useActor();

  return useQuery<BlogPost[]>({
    queryKey: ['blogPosts'],
    queryFn: async () => {
      if (!actor) return [];
      return actor.listBlogPosts();
    },
    enabled: !!actor && !actorFetching,
  });
}

export function useGetBlogPost(id: string) {
  const { actor, isFetching: actorFetching } = useActor();

  return useQuery<BlogPost>({
    queryKey: ['blogPost', id],
    queryFn: async () => {
      if (!actor) throw new Error('Actor not available');
      return actor.getBlogPost(id);
    },
    enabled: !!actor && !actorFetching && !!id,
  });
}

// ─── Contact ──────────────────────────────────────────────────────────────────

export function useSubmitContactMessage() {
  const { actor } = useActor();

  return useMutation<string, Error, { name: string; email: string; subject: string; message: string }>({
    mutationFn: async ({ name, email, subject, message }) => {
      if (!actor) throw new Error('Actor not available');
      return actor.submitContactMessage(name, email, subject, message);
    },
  });
}

// ─── Grievance ────────────────────────────────────────────────────────────────

export function useSubmitGrievance() {
  const { actor } = useActor();

  return useMutation<string, Error, { name: string; email: string; category: GrievanceCategory; description: string }>({
    mutationFn: async ({ name, email, category, description }) => {
      if (!actor) throw new Error('Actor not available');
      return actor.submitGrievance(name, email, category, description);
    },
  });
}

// ─── Admin ────────────────────────────────────────────────────────────────────

export function useListContactMessages() {
  const { actor, isFetching: actorFetching } = useActor();

  return useQuery<ContactMessage[]>({
    queryKey: ['contactMessages'],
    queryFn: async () => {
      if (!actor) throw new Error('Actor not available');
      return actor.listContactMessages();
    },
    enabled: !!actor && !actorFetching,
  });
}

export function useListGrievances() {
  const { actor, isFetching: actorFetching } = useActor();

  return useQuery<Grievance[]>({
    queryKey: ['grievances'],
    queryFn: async () => {
      if (!actor) throw new Error('Actor not available');
      return actor.listGrievances();
    },
    enabled: !!actor && !actorFetching,
  });
}
