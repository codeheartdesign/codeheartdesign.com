import React, { Fragment } from 'react';
import PropTypes from 'prop-types';


/**
 * The Schedule component
 */
const Schedule = ({ headline, schedule, _relativeURL, _ID, _parseMD, _self }) => (
	<Fragment>
		<h3 className="row-h contentHeadline schedule-headline" id={ _self.split('/').slice(-1).join('').replace('.md', '') } tabIndex="0">{ headline }</h3>
		<ul className="row list">
			{
				schedule.map( ( item, i ) =>
					<li className="content gridgap schedule-item" key={ i }>
						<div className="schedule-time">
							{ item.from }
							<span className="muted"> - { item.to }</span>
						</div>
						<div className="schedule-body gridgap">
							{ item.title && <span className="schedule-title">{ item.title }</span> }
							{ item.img && <img className="schedule-img" src={ _relativeURL(`/assets/img/${ item.img }`, _ID) } alt={ item.name } /> }
							<div className="schedule-details">
								{
									item.name &&
										<p className="schedule-name">
											{ item.keynote ? <span className="schedule-keynote">Keynote</span> : null }
											{ item.name }
										</p>
								}
								{ item.role && <p className="schedule-role">{ item.role }</p> }
								{ item.description && <div className="schedule-description">{ _parseMD( item.description ) }</div> }
							</div>
						</div>
					</li>
				)
			}
		</ul>
	</Fragment>
);

Schedule.propTypes = {
	/**
	 * headline: Schedule
	 */
	headline: PropTypes.string.isRequired,

	/**
	 * schedule:
	 *   - from: "12:00pm"
	 *     to: "12:30pm"
	 *     title: Doors open + welcome
	 *   - from: "12:30pm"
	 *     to: "1:30pm"
	 *     name: Speaker Name
	 *     img: picture.jpg
	 *     role: Role description / Company Name ltd.
	 *     description: |
	 *       Description about the person
	 *       with markdown support
	 *   - from: "12:30pm"
	 *     to: "1:30pm"
	 *     name: Speaker Name
	 *     img: picture.jpg
	 *     role: Role description / Company Name ltd.
	 *     description: |
	 *       Description about the person
	 *       with markdown support
	 */
	schedule: PropTypes.arrayOf(
		PropTypes.shape({
			from: PropTypes.string.isRequired,
			to: PropTypes.string.isRequired,
			title: PropTypes.string,
			name: PropTypes.string,
			img: PropTypes.string,
			role: PropTypes.string,
			description: PropTypes.string,
		})
	).isRequired,
};

Schedule.defaultProps = {};

export default Schedule;
