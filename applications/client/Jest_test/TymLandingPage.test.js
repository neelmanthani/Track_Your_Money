/**
 * @jest-environment jsdom
 */
import renderer from 'react-test-renderer';
import TymLandingPage from '../src/TrackYourMoney/pages/TymLandingPage';
import {BrowserRouter as Router} from 'react-router-dom';


it('changes the class when hovered', () => {
  const component = renderer.create(
    <Router>
    <TymLandingPage></TymLandingPage>
    </Router>,
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();

});