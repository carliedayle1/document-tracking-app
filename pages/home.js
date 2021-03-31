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
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse id
        aliquet lacus, sed tempus dolor. Vivamus vel lobortis enim, a malesuada
        lectus. Phasellus finibus velit sit amet massa iaculis, non molestie
        urna efficitur. Morbi efficitur tortor eget tempus mattis. Curabitur
        odio lorem, hendrerit sed commodo et, congue in odio. Pellentesque id
        justo egestas, euismod urna eu, aliquam augue. Maecenas rutrum fermentum
        accumsan. Sed id dui tristique, pretium metus in, placerat ipsum. Etiam
        eget suscipit diam. Cras placerat nisl ut mauris bibendum, id fringilla
        velit suscipit. In molestie mauris ut nisl efficitur venenatis. Fusce
        nec fringilla metus, vel consectetur dolor. Pellentesque commodo eget
        ipsum malesuada porta. Phasellus malesuada molestie erat, at elementum
        arcu. Sed laoreet malesuada metus id interdum. Nam sollicitudin
        facilisis mattis. Nullam mollis turpis dolor, et vestibulum dolor
        condimentum ut. Nullam bibendum interdum arcu, a imperdiet nibh bibendum
        et. Curabitur sit amet nisi vel arcu venenatis efficitur vitae sed
        tortor. Nam id pharetra erat. In nec aliquam libero, quis tempor urna.
        Aenean fermentum velit vel justo commodo, nec gravida odio finibus. Sed
        gravida ante vel tortor fringilla lacinia. Sed quam neque, sodales in
        dolor eu, pulvinar mattis dolor. Quisque tempor eget erat a viverra.
        Integer nec maximus mi. Morbi bibendum suscipit nibh, vel ullamcorper
        nunc pharetra id. Proin elit sapien, convallis in lacus at, posuere
        dignissim risus. In eleifend odio consectetur ipsum pretium suscipit.
        Cras scelerisque, urna fringilla venenatis consequat, odio dui luctus
        mi, ut scelerisque sem lorem sed eros. Quisque feugiat ultricies
        porttitor. Maecenas pharetra ipsum non elit finibus, et eleifend nunc
        interdum. Quisque orci nulla, posuere eget mi vitae, bibendum egestas
        felis. Proin suscipit justo quis scelerisque pulvinar. Sed volutpat ex
        augue, a rutrum tortor rutrum ac. Nullam sed feugiat dolor. Cras euismod
        tincidunt volutpat. Nam tellus elit, eleifend quis blandit ullamcorper,
        tincidunt ut purus. Donec mollis hendrerit elementum. Suspendisse porta
        orci id turpis euismod, sed blandit velit efficitur. Phasellus nibh
        lacus, pellentesque a risus et, egestas pulvinar arcu. Sed vitae enim a
        est sollicitudin sodales. Proin sed fringilla justo. Nulla sollicitudin
        sagittis risus nec posuere. In hac habitasse platea dictumst. Duis justo
        magna, finibus vitae venenatis eget, efficitur id leo. Proin quis neque
        a metus aliquet porta. Mauris in quam convallis, efficitur massa sed,
        gravida tortor. Vestibulum sit amet purus bibendum mauris dictum
        tincidunt. Praesent finibus odio ut nibh eleifend, ut feugiat felis
        aliquam. Pellentesque eu nulla est. Vestibulum sodales velit eget
        viverra accumsan. Donec tellus dui, gravida sit amet est a, hendrerit
        facilisis lectus. Vestibulum ante ipsum primis in faucibus orci luctus
        et ultrices posuere cubilia curae; Aenean consectetur pellentesque urna
        nec luctus. Donec volutpat a ante et hendrerit. Mauris commodo semper ex
        id vehicula. Proin fringilla volutpat nisl, ac finibus velit luctus ut.
        Sed lobortis, metus et mattis tempus, arcu ante malesuada nunc, id
        blandit leo augue dapibus risus. Aliquam rutrum tincidunt nisi eget
        viverra. Aliquam accumsan est sit amet porta vehicula. Suspendisse
        potenti. Cras suscipit vel tortor eu consequat. Aliquam erat volutpat.
        Nulla facilisi. Quisque ullamcorper aliquam pulvinar. Cras congue
        facilisis scelerisque. Curabitur eu placerat ante. Morbi at molestie
        nisl. Proin nunc turpis, maximus cursus ornare eget, fringilla ut augue.
        Suspendisse potenti. Vestibulum et velit congue, vestibulum nibh ac,
        dignissim nisl. Quisque et risus est. Ut vitae diam urna. In nec ipsum
        sit amet urna hendrerit porta ultrices nec purus. Aenean scelerisque sem
        orci, nec finibus nunc ornare vitae. Praesent felis lacus, suscipit eget
        dictum vel, porttitor id ante. Morbi eu arcu efficitur, varius velit
        non, ullamcorper quam. Mauris vel nibh purus. Ut tempus risus tellus, id
        accumsan neque dignissim nec. Curabitur eleifend diam nec sodales
        scelerisque. Sed at eros ligula. Vestibulum vel diam vitae lectus
        egestas imperdiet. Nunc ante enim, sagittis sed consequat id, volutpat
        sit amet urna. Maecenas convallis nec erat sit amet aliquet. Aenean nec
        feugiat felis. Vestibulum volutpat porta massa id blandit. Curabitur ac
        nulla tempus, dignissim ex id, posuere ipsum. Maecenas interdum leo
        vitae nisl mollis feugiat. Donec nec velit leo. Integer condimentum
        metus aliquam urna consectetur fermentum. Pellentesque habitant morbi
        tristique senectus et netus et malesuada fames ac turpis egestas. Ut eu
        tortor ac lacus pulvinar blandit eu id ipsum. Nam ac aliquam felis, eget
        dictum mauris. Sed ipsum turpis, efficitur sed elit eu, dictum sodales
        turpis. Praesent scelerisque ipsum at leo porta, sit amet semper massa
        pulvinar. Maecenas magna sem, blandit non orci in, molestie ullamcorper
        est. Aenean ut pharetra arcu. Morbi sollicitudin sollicitudin odio non
        convallis. Ut ornare rhoncus efficitur. Curabitur erat sem, tempus at
        sapien eu, malesuada convallis eros. Quisque nec ante ac arcu eleifend
        convallis. Nulla eget aliquet turpis. Nam augue nulla, hendrerit at
        dapibus hendrerit, feugiat in justo. Ut scelerisque imperdiet justo, et
        pulvinar est aliquam ac. Mauris tincidunt augue vitae odio luctus, ac
        viverra nulla eleifend. Suspendisse arcu enim, posuere vitae facilisis
        ut, ultricies vitae quam. Vestibulum varius quam sapien, in pharetra
        massa imperdiet et. Integer vitae hendrerit elit. Quisque arcu nibh,
        pellentesque et maximus vitae, euismod quis nisi. Nam a finibus elit.
        Donec ac ultrices purus. Vivamus semper massa eget volutpat ultricies.
        Aenean vel tristique quam. Sed purus lorem, tincidunt at ante sed,
        pellentesque scelerisque velit. Cras vulputate risus porttitor sapien
        vulputate lobortis. Nunc lacinia iaculis eros, sit amet aliquet ipsum
        tempor vel. Cras eu commodo libero. Nunc sodales gravida malesuada.
        Vestibulum egestas nulla at nibh pellentesque, et bibendum arcu
        tincidunt. Fusce feugiat, justo at commodo malesuada, tortor orci
        pretium felis, in pulvinar mauris est eget sem. Aliquam justo sem,
        pharetra non ultricies vitae, bibendum sed lorem. Etiam sodales id lacus
        venenatis euismod. Aenean non tincidunt diam. Suspendisse sed dictum
        lectus, eget tempor dolor. Etiam pellentesque nisl sit amet lectus
        laoreet tincidunt. Nam rhoncus ipsum nisl, quis tincidunt odio
        condimentum vel. Suspendisse vel rhoncus urna, id iaculis lacus. Fusce
        et ultricies ligula. Nunc hendrerit risus quam, imperdiet finibus tortor
        egestas at. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        Pellentesque convallis sem eget lorem dictum tincidunt. Nam auctor,
        ligula et blandit tincidunt, ex arcu ornare mi, nec aliquam nisl lorem
        vel sapien. Nullam luctus ultrices elit, at sollicitudin nisi posuere
        eget. Sed vel blandit ipsum. Quisque laoreet ligula sollicitudin,
        lacinia erat et, auctor ante. Cras eget sem vitae neque molestie
        porttitor sit amet eget lectus. Nam fermentum turpis a luctus lobortis.
        Pellentesque ut dictum augue, eget pharetra enim. In eget ultricies
        augue. Aenean euismod dui diam, aliquam aliquam nibh molestie sit amet.
        Ut iaculis dolor id facilisis iaculis. Vestibulum fermentum urna ut erat
        fermentum pharetra. Curabitur malesuada, velit in viverra feugiat, leo
        risus dignissim quam, sit amet mattis arcu erat quis dolor. Ut laoreet
        magna a sem rhoncus, sit amet fringilla libero fermentum. Cras
        vestibulum accumsan ornare. Ut a quam non nulla pulvinar mollis. Donec
        posuere, felis at porttitor accumsan, urna enim interdum ante, ac
        efficitur risus sem nec sapien. Etiam sed arcu vitae tortor dignissim
        porta. Etiam congue odio at orci tincidunt interdum. Cras eu eleifend
        sem, ut egestas ex. Duis eu orci et ante tempor tempus at ac dolor.
        Vestibulum suscipit sem at ligula molestie rhoncus. Quisque eleifend
        aliquam metus, ut bibendum ex pellentesque vel. Sed ex nunc, gravida
        luctus ultrices at, vestibulum ac odio. Suspendisse et justo feugiat,
        ornare eros non, lacinia orci. Phasellus elementum egestas pellentesque.
        Aliquam erat volutpat. Aliquam scelerisque tellus ut varius mattis.
        Fusce nec molestie orci. Donec a velit magna. Integer sollicitudin est
        eget lorem cursus, ac interdum diam luctus. Sed eu mi magna. Nunc
        gravida nec orci nec ullamcorper. Nam sollicitudin faucibus lectus, et
        condimentum arcu malesuada eu. Cras tincidunt congue mattis. Quisque
        ornare, arcu ac tristique tristique, arcu enim congue ex, eu bibendum
        sapien urna eu felis. Curabitur iaculis semper maximus. Integer placerat
        scelerisque metus, dictum venenatis ex pulvinar a. Duis hendrerit sem at
        est elementum, vel tempus purus dictum. Quisque convallis malesuada
        dolor. Nulla tristique mi eget ultricies pellentesque. Aliquam non
        interdum nulla, nec condimentum lorem. Suspendisse at ex dictum,
        scelerisque velit quis, lacinia neque. Proin ultrices urna lorem, ac
        sodales urna fringilla at. Phasellus facilisis enim vitae venenatis
        auctor. In hac habitasse platea dictumst. Donec gravida vitae risus
        aliquet sagittis. Vestibulum sed nisi enim. Morbi vel sollicitudin arcu,
        laoreet sollicitudin lectus. Donec molestie velit ut enim tempor, et
        fermentum dui facilisis. Quisque fringilla interdum neque et mattis.
        Donec vitae tellus vitae risus venenatis faucibus. Interdum et malesuada
        fames ac ante ipsum primis in faucibus. Pellentesque mauris nunc, ornare
        eu leo id, laoreet volutpat ante. Aliquam sit amet nulla hendrerit,
        laoreet metus nec, viverra quam. Duis vehicula interdum urna non
        pellentesque. Duis luctus tristique magna, vel hendrerit risus tristique
        quis. Nam tempus sed lacus ut ullamcorper. Aliquam ac luctus odio. In
        mattis massa in nibh pretium, vel volutpat velit pretium. Praesent
        finibus, massa in ullamcorper vehicula, ante nulla dapibus enim, sit
        amet posuere felis mi et ante. Nunc posuere, metus vitae commodo
        maximus, tortor nunc sollicitudin felis, eu aliquam tellus est quis
        ante. Cras vestibulum, lorem a auctor dictum, lectus dolor sodales
        purus, vitae venenatis lectus libero at lorem. Vestibulum mollis feugiat
        lorem a finibus. Vestibulum et rhoncus lacus. Praesent semper finibus
        semper. Duis pulvinar ipsum eu feugiat luctus. Nullam eu arcu nec turpis
        iaculis sollicitudin. Donec dictum odio eget tortor elementum, at
        imperdiet massa mattis. Nullam at facilisis ipsum. Pellentesque faucibus
        accumsan erat vitae fringilla. Aenean a faucibus sem. Donec at est ut
        velit condimentum pellentesque quis vel nulla. Nullam eleifend sit amet
        nibh id vulputate. Phasellus et lacus eros. Suspendisse potenti.
        Vestibulum a placerat orci, nec vestibulum augue. Ut varius ex vitae leo
        pretium ultricies. Integer egestas ultrices tellus eu iaculis. In hac
        habitasse platea dictumst. Nam tincidunt, urna quis placerat vestibulum,
        diam lacus commodo purus, pretium mattis dolor eros a felis. Cras porta
        libero eu arcu volutpat molestie. Nullam vitae ex pretium, commodo nibh
        eget, mollis nulla. Vivamus ipsum nibh, vulputate fringilla consectetur
        nec, elementum eget leo. Nullam ac nisi tempor, tristique eros
        porttitor, viverra velit. Donec nec massa quis velit gravida elementum
        nec quis massa. Sed condimentum eu purus ac bibendum. Sed et consequat
        est. Sed quis erat ut arcu scelerisque accumsan posuere sit amet lacus.
        Aenean nibh lacus, scelerisque eleifend mi nec, condimentum hendrerit
        ipsum. Nulla efficitur sollicitudin dui, vitae sollicitudin elit euismod
        et. Nunc convallis eu quam in elementum. Duis mi lacus, iaculis sed
        tempor tristique, congue sed felis. Fusce a interdum odio, sed pretium
        nulla. Morbi nec velit quis enim mollis facilisis. In lobortis, nisi a
        porttitor pharetra, dolor augue imperdiet ante, in fermentum tortor diam
        et lectus. Nam lobortis nisl eros, a elementum nibh fringilla at. Fusce
        a lectus orci. Nunc congue nibh ipsum, at ultricies dui viverra non.
        Integer placerat, ligula non efficitur interdum, tortor leo placerat
        enim, vel gravida tortor lorem quis nunc. Vivamus facilisis elit ac
        purus facilisis, nec semper ipsum molestie. Nunc id mi posuere,
        tincidunt nisl eget, rhoncus est. Quisque a libero ante. Sed elementum
        sapien nec felis imperdiet tincidunt. Sed euismod diam nec fermentum
        suscipit. Vestibulum volutpat tincidunt luctus. Quisque ac arcu rutrum,
        ornare nunc tincidunt, rutrum tortor. Nulla velit lorem, lacinia sed
        dolor ac, vestibulum aliquet turpis.
      </p>
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
