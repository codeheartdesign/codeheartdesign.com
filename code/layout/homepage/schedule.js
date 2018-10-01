import React, { Fragment } from 'react';
import PropTypes from 'prop-types';


/**
 * The Schedule component
 */
const Schedule = ({ headline, schedule, _relativeURL, _ID }) => (
	<Fragment>
		<h3 class="schedule-headline">{ headline }</h3>
		{
			schedule.map( ( item, i ) =>
				<Fragment key={ i }>
					<div className="schedule-time">
						{ item.from }
						<span> - { item.to }</span>
					</div>
					<div className="schedule-body gridgap">
						{ item.title && <span className="schedule-title">{ item.title }</span> }
						{ item.img && <img className="schedule-img" src={ _relativeURL(`/assets/img/${ item.img }`, _ID) } alt={ item.name } /> }
						<div className="schedule-details">
							{ item.name && <p className="schedule-name">{ item.name }</p> }
							{ item.role && <p className="schedule-role">{ item.role }</p> }
							{ item.description && <div className="schedule-description">{ item.description }</div> }
						</div>
					</div>
				</Fragment>
			)
		}
	</Fragment>
);

Schedule.propTypes = {
	/**
	 * headline: Schedule
	 */
	headline: PropTypes.string.isRequired,

	/**
	 * schedule:
	 *   - svg: atlassian
	 *     alt: Atlassian Gold Sponsors of Code Heart Design
	 *     url: https://www.atlassian.com/
	 *   - img: https://via.placeholder.com/130x30
	 *     alt: Lendi Gold Sponsors of Code Heart Design
	 *     url: https://www.lendi.com.au/
	 */
	schedule: PropTypes.arrayOf(
		PropTypes.shape({
			svg: PropTypes.string,
			img: PropTypes.string,
			alt: PropTypes.string.isRequired,
			url: PropTypes.string.isRequired,
		})
	).isRequired,
};

Schedule.defaultProps = {};

export default Schedule;
