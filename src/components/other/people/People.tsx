import React from 'react'
import { OurTeamSection, Body } from './componentStyles'
import Person from './person/Person';
import { PeopleType, PersonType } from '../../../utils/types/peopleTypes';

const People = ({ content }: { content: PeopleType }) => {
  const { title, everyone } = content;

  function splitIntoTwos(everyone:PersonType[]) {
    const resultArray = [];
    const numPairs = Math.ceil(everyone.length / 2);
    let pairCount = 0;

    for (let i = 0; i < everyone.length; i += 2) {
      pairCount++;
      resultArray.push(
        <React.Fragment key={i}>
          <div className="tmm_container">
            <Person person={everyone[i]} />
            {i + 1 < everyone.length && (
              <Person person={everyone[i + 1]} isSecondInPair={true} />
            )}
          </div>
          {pairCount !== numPairs && (
            <span className="tmm_columns_containers_desktop"></span>
          )}
        </React.Fragment>
      );
    }
    return resultArray;
  }

  const pairs = splitIntoTwos(everyone);

  return (
    <>
      <OurTeamSection>
        <div className="title-search-category-container">
          <h1>{title}</h1>
        </div>
        <Body>
          <div id="content-inside" className="container no-sidebar">
            <div id="primary" className="content-area">
              <main id="main" className="site-main" role="main">
                <article id="post-109" className="post-109 page type-page status-publish hentry">
                  <div className="entry-content">
                    <div className="tmm tmm_boardofdirectors">
                      <div className="tmm_2_columns tmm_wrap tmm_plugin_f">
                        {/* <div>Hello there from main</div> */}
                        {
                          pairs.map((pair) => (pair))}
                      </div>
                    </div>
                  </div>
                </article>
              </main>
            </div>
          </div>
        </Body>
      </OurTeamSection>
    </>
  )
}

export default People;