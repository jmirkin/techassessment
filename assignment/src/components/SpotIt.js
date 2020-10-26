import React from "react";
import { Link } from "react-router-dom";

import spotItImage from "../resources/spotIt.jpg";
import homeScreenImage from "../resources/home-screen.png";
import gameScreenImage from "../resources/game-screen.png";
import scoreScreenImage from "../resources/score-screen.png";

export default function SpotIt(props) {
  return (
    <div style={{ listStyle: "none", margin: 20 }}>
      <h3>SpotIt - Recreate a version of the game SpotIt / Dobble.</h3>
      <section style={{ height: "500px", overflowY: "auto" }}>
        <div className="spacer">
          <div className="bold">Description</div>
          <div>
            Spot it! consists of 57 cards, with 8 symbols per card from the 57
            available. Each card is decorated with universal images or words for
            early readers, including sight words. There is only one identical
            symbol in common between each card, it is up to you to find out
            which one.
          </div>
        </div>
        <div className="spacer">
          <div className="bold">Object of the game</div>
          <div>
            No matter the game, you always need to be the fastest to spot the
            identical symbol between two cards, name it out loud and then take
            the card, place it or discard it depending on the rules of the
            mini-game you're currently playing.
          </div>
        </div>
        {/*<div className="spacer">
        <div className="bold">Game play</div>
        <div>
          On go, each player flips (at the same time) one of the cards around
          the middle card. The players must find the identical symbol between
          the middle card and the cards which have just been revealed. As soon
          as a player finds an identical symbol, he or she names it, gains the
          card in question and sets it aside (be careful: you must never take
          the middle card).
        </div>
      </div>
      <div className="spacer">
        <div className="bold">End of the game</div>
        <div>
          As soon as all the revealed cards have been taken, the players place
          the middle card at the bottom of the draw pile and start a new round.
          The players keep the cards gained. When there are no longer any cards
          to be drawn, the mini-game stops and the winner is whoever gained the
          most cards.
        </div>
      </div>*/}
        <div className="spacer">
          <div className="bold">Basic Game play</div>
          <div>
            The User will be one player and the Computer will be the second
            player. Both the user and the computer will receive a card and the
            middle card will be flipped over. <br />
            <br />
            Each 10 second round consists of three cards that will be displayed:
            one play card for the computer, one play card for the human player
            and one draw card in the middle. During those ten seconds, each
            player must try and find the matching image between their card and
            the draw card. Once a match is found, the player must click the
            matching image on their own card. The round is then over and the
            draw card becomes the winning player's card for the next round.
            <br />
            <br /> Once all 57 cards have been played, the score is displayed
            and an option to Restart the game appears.
          </div>
        </div>
        <div className="spacer">
          <div className="bold">Expectations</div>
          <div>
            There should be a home screen where the user can choose from a
            number of options what they would like to do.
            <ol>
              <li>Home</li>
              <li>See the rules</li>
              <li>Logout (once the user has logged in)</li>
            </ol>
          </div>
          <div>
            <img
              src={homeScreenImage}
              alt="home-screen"
              style={{ margin: 12, width: 400 }}
            />
          </div>
          <div>
            The user is required to enter their username in order to play the
            game. Whilst playing, the user won't need to enter their name again
            unless they Logout which will take them to the home screen to login
            again.
          </div>
          <div>
            The Cards will be randomly shuffled so that each game is different.
            <br />
            Each card should show its 8 pictures, each picture with a randomly
            selected angle.
          </div>
          <div>
            <img
              src={gameScreenImage}
              alt="game-screen"
              style={{ margin: 12, width: 400 }}
            />
          </div>
          <div>The current score should be noted somewhere on the page</div>
          <div>
            The winner should displayed at the end of the game with a restart
            button.
          </div>
          <div>
            <img
              src={scoreScreenImage}
              alt="score-screen"
              style={{ margin: 12, width: 400 }}
            />
          </div>
        </div>
        <div>The styling of the app is up to you.</div>
        <div>You can use create-react-app as a base for the app if you want.</div>
        <div className="spacer list">
          <div className="bold">Resources</div>
          <div>
            <li>
              A file (8Items.json) has been provided with an array containing 57
              combinations of 8 numbers that have one matching number with any
              other array entry.
            </li>

            <li>
              An image sprite has been provided (resources/spotIt.jpg) with all
              the images needed for the 8 pictures per card version. Along with
              image is a css file providing approximate background positions for
              each picture (the images can be cur off a little for this
              exercise).
            </li>
            <div>
              <img
                src={spotItImage}
                alt="spot it sprite"
                style={{ margin: 12, width: 150 }}
              />
            </div>

            <li>
              A useInterval and useTimeout hook have been provided if needed in
              customHooks.js. (If you want to create them on your own - extra
              credit)
            </li>
          </div>
        </div>
        <div className="spacer list">
          <div className="bold">
            Further enhancements - choose any if you have time
          </div>

          <li>Adding animation to the cards</li>

          <li>
            Providing an option for user defined number of items per card. For
            example: kids mode with less images per card or expert version with
            more than 8 images/words/numbers per card <br />
            This can be produced through the algorithm found in
            "scripts/spotItAlgorithm"
          </li>

          <li>Allowing for multi player mode.</li>

          <li>
            A score board listing the highest 10 scores with the name of the
            user who achieved this score
          </li>
        </div>
      </section>
      {/*<li className="italic back-to-link">
        <Link to="/section-3">Back to Project descriptions (Section 3)</Link>
      </li>*/}
    </div>
  );
}
