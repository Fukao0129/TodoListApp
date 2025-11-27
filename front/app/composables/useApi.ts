import type { FetchOptions, FetchError } from "ofetch";
import type { AsyncData } from "nuxt/app";

export const useApi = () => {
  const runtimeConfig = useRuntimeConfig();
  const csrfToken = useCookie("XSRF-TOKEN").value || "";

  const commonOptions = {
    baseURL: runtimeConfig.public.apiUrl,
    credentials: "include" as const,
    headers: {
      "Content-Type": "application/json",
      "X-XSRF-TOKEN": decodeURIComponent(csrfToken),
    },
  };

  // ofetchのmethodはstring型、useFetchや$fetchの引数のmethodはenum型なので仕方なく
  type NormalizedFetchOptions = Omit<FetchOptions, "method"> & {
    method?: "GET" | "POST" | "PUT" | "DELETE";
  };

  /** useFetchのラッパー */
  const useCustomFetch = <T>(uri: string, option?: FetchOptions) => {
    const options = {
      ...commonOptions,
      ...option,
    } as NormalizedFetchOptions;

    return useFetch(uri, {
      ...options,
    }) as AsyncData<T, FetchError>;
  };

  /** $fetchのラッパー */
  const callApi = (uri: string, option: FetchOptions) => {
    const options = {
      ...commonOptions,
      ...option,
    } as NormalizedFetchOptions;

    return $fetch(uri, {
      ...options,
    });
  };

  return { useCustomFetch, callApi };
};
