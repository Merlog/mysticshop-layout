
import StaticPage from "../components/StaticPage";
import Zpet from "../components/Zpet";

export default function StavKartyPage() {
  return (
    <>
      <Zpet to="BuyCards" />
      <StaticPage >
        <h1>Card condition h1</h1>
        <h2>Card condition h2</h2>
        <h3>Card condition h3</h3>
        <h4>Card condition h4</h4>

        <ul>
          <li>Mint (M)</li>
          <li>Near Mint (NM)</li>
          <li>Excellent (EX)</li>
          <li>Good (GD)</li>
          <li>Light Played (LP)</li>
          <li>Played (PL)</li>
          <li>Poor</li>
        </ul>

        <h2>Additional Information</h2>
        <p>
          The grading of Magic cards sometimes leads to conflict among buyers and sellers, mainly because grading is not an exact science. One person might consider a card to be still Near Mint while the next one thinks it is in Excellent condition. To some extent these conflicts are inevitable, but to help minimize the chance for misunderstandings we have put together a guide to help you grade your cards correctly.

        </p>
        <p>

          Historically the grading system that Magic uses today comes from the grading of baseball cards. The Inquest Gamer magazine adopted the Baseball cards grading system for Magic cards as early as 1995. Early on the accepted grades were Mint, Near Mint, Excellent, Very Good, Good, Fair, and Poor. Over time Magic's grading system has evolved to reflect the needs of Magic players. Over time especially at the lower end the large range of grades was replaced with a smaller number of grades. In the most extreme cases the six grades from Excellent to Fair were condensed into the grades Slightly Played and Played.

</p>
        <p>
          Generally the use of Played, Slightly Played, and Heavily Played is uncommon in Europe, but has become the standard way of describing cards in the USA. In Europe the grading system is still largely a remainder of the PSA grading system for baseball cards, however the names have changed a bit. Fair and Very Good are grades that are used just very rarely these days. The MKM grading system tries to image the way cards are usually graded in Europe, and uses Mint, Near Mint, Excellent, Good, Light Played, Played, and Poor.

          As "a picture is worth a thousand words", we provide also some sample pictures that can help you identify the right condition for your card.

</p>

        <h2>

          Mint (M)

</h2>
        <p>
          A mint card is in perfect condition; no excuses. This means, that the front is in perfect condition, there are no scratches on the surface, and the surface is perfectly clean. For the back it means, that the card is indistinguishable from cards of a newly openend booster. If a card has a signature or a Grand Prix stamp it can never be graded Mint, even if the card stock is otherwise in Mint condition.

          In most cases it doesn't make sense to grade a card as Mint. For in print cards the value of a Mint card is just about the same as that of a Near Mint card, but the grading standards are way higher. On the other hand really old cards (1993-94) may command a high premium if they are in actual Mint condition. Thus 'Mint' is mainly a grading for cards where there is a high collectors' interest. For cards that are sold mostly for playing purpose a Near Mint grading will usually do.

</p>
      </StaticPage>
    </>
  );
}
