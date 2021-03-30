import { useEffect } from "react";
import { Container } from "react-bootstrap";
import { getSession } from "next-auth/client";
import { useRouter } from "next/router";

export default function HomePage() {
  const router = useRouter();

  useEffect(() => {
    getSession().then((session) => {
      if (!session) {
        router.push("/login");
      }
    });
  }, [router]);

  return (
    <Container className="py-5">
      <h1> Home Content here! </h1>
      <p>Hello world!</p>
    </Container>
  );
}

// export async function getServerSideProps(context) {
//   const session = await getSession({ req: context.req });

//   if (!session) {
//     return {
//       redirect: {
//         destination: '/login',
//         permanent: false,
//       },
//     };
//   }

//   return {
//     props: { session },
//   };
// }
