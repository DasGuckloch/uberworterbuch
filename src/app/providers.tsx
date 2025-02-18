'use client';

import dynamic from 'next/dynamic';
import posthog from 'posthog-js';
import { PostHogProvider as PHProvider } from 'posthog-js/react';
import { useEffect } from 'react';

export function PostHogProvider({ children }: { children: any }) {
    useEffect(() => {
        posthog.init(process.env.NEXT_PUBLIC_POSTHOG_KEY as any, {
            api_host: process.env.NEXT_PUBLIC_POSTHOG_HOST,
            capture_pageview: false, // Disable automatic pageview capture, as we capture manually
            capture_pageleave: true, // Enable pageleave capture
        });
    }, []);

    return (
        <PHProvider client={posthog}>
            <PostHogPageView />
            {children}
        </PHProvider>
    );
}

const PostHogPageView = dynamic(() => import('./post-hog-page-view'), {
    ssr: false,
});
