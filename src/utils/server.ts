import { createServerClient } from "@supabase/ssr";
import { parse, serialize } from "cookie";

export function createClient({ req }: { req?: any }) {
  // Função para obter os cookies apropriados com base na solicitação (req)
  const getCookie = (name: string) => {
    const cookie = req?.headers?.cookie;
    if (!cookie) return undefined;
    const cookies = parse(cookie);
    return cookies[name];
  };

  // Função para definir um cookie
  const setCookie = (name: string, value: string, options: any) => {
    const stringValue =
      typeof value === "object" ? "j:" + JSON.stringify(value) : String(value);

    let cookieString = serialize(name, String(stringValue), options);

    if (req && req.res) {
      const prevCookie = req.res.getHeader("Set-Cookie") || [];
      const prevCookieArray = Array.isArray(prevCookie)
        ? prevCookie
        : [prevCookie];
      prevCookieArray.push(cookieString);
      req.res.setHeader("Set-Cookie", prevCookieArray);
    }
  };

  // Função para remover um cookie
  const removeCookie = (name: string, options: any) => {
    setCookie(name, "", { ...options, maxAge: -1 });
  };

  return createServerClient(
    import.meta.env.VITE_PUBLIC_SUPABASE_URL!,
    import.meta.env.VITE_PUBLIC_SUPABASE_ANON_KEY!,
    {
      cookies: {
        get: getCookie,
        set: setCookie,
        remove: removeCookie,
      },
    }
  );
}
