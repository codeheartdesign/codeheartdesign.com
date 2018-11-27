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
					<li id={ item.name ? item.name.toLowerCase().replace(/ /g, '-') : null } className="content gridgap schedule-item" key={ i } itemProp="subEvent" itemScope itemType="http://schema.org/Event">
						<meta itemProp="url" content="https://codeheartdesign.com/"/>
						<meta itemProp="startDate" content={ item.startDate }/>
						<meta itemProp="endDate" content={ item.endDate }/>
						<meta itemProp="name" content={ item.name }/>
						<div itemProp="location" itemScope itemType="http://schema.org/Place">
							<meta itemProp="name" content="Domain HQ"/>
							<div itemProp="address" itemScope itemType="http://schema.org/PostalAddress">
								<div itemProp="hasMap"><link itemProp="sameAs" itemType="https://schema.org/Map" href="https://schema.org/Map" href="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3312.8332099442673!2d151.19176671638658!3d-33.86818908065652!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6b12ae36929b8279%3A0x5f882e03d383cc12!2s55+Pyrmont+St%2C+Pyrmont+NSW+2009!5e0!3m2!1sen!2sau!4v1542081236238"/></div>
							</div>
						</div>
						<div className="schedule-time">
							{ item.from }
							<span className="muted"> - { item.to }</span>
						</div>
						<div className="schedule-body gridgap">
							{ item.title && <span className="schedule-title" itemProp="name">{ _parseMD( item.title ) }</span> }
							{ item.img &&
								<div className="schedule-img">
									<div className="schedule-img-wrapper">
										<img itemProp="image" src={ _relativeURL(`/assets/img/${ item.img }`, _ID) } alt={ item.name } />
										{ item.keynote ? <span className="schedule-keynote">Keynote</span> : null }
									</div>
								</div>
							}
							{ item.name &&
								<div className="schedule-details">
									{
										item.name &&
											<div itemProp="performer" itemScope itemType="http://schema.org/Person">
												<p className="schedule-name" itemProp="name">{ item.name }</p>
											</div>
									}
									{ item.role && <p className="schedule-role">{ item.role }</p> }
									{ item.description && <div className="schedule-description" itemProp="description">{ _parseMD( item.description ) }</div> }
								</div>
							}
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
	 *     startDate: 2018-11-30T12:00
	 *     to: "12:30pm"
	 *     endDate: 2018-11-30T12:30
	 *     title: Doors open + welcome
	 *   - from: "12:30pm"
	 *     startDate: 2018-11-30T12:30
	 *     to: "1:30pm"
	 *     endDate: 2018-11-30T13:30
	 *     name: Speaker Name
	 *     img: picture.jpg
	 *     role: Role description / Company Name ltd.
	 *     description: |
	 *       Description about the person
	 *       with markdown support
	 *   - from: "7:00pm"
	 *     startDate: 2018-11-30T19:00
	 *     to: "8:30pm"
	 *     endDate: 2018-11-30T20:30
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
			startDate: PropTypes.string.isRequired,
			to: PropTypes.string.isRequired,
			endDate: PropTypes.string.isRequired,
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
