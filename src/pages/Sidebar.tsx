import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus, faFire, faBolt, faMagnifyingGlass, faMessage, faTag, faUser, faLink, faBookmark, faEye } from '@fortawesome/free-solid-svg-icons'
import { faReact, faNodeJs, faJs } from '@fortawesome/free-brands-svg-icons'
import React from 'react'

const Sidebar = () => {
    return (
        <div className="h-full fixed w-52 bg-gray-900 border-r border-gray-600">
            <div className="p-4 text-base">
                <ul className="flex flex-col gap-5">
                    {/* My Feed */}
                    <li className="flex flex-row gap-2 text-white items-center">
                        <button className="bg-green-700 rounded-md w-5 h-5">R</button>
                        <span className="text-gray-300 hover:text-white cursor-pointer">My feed</span>
                    </li>

                    {/* Custom Feed */}
                    <li className="flex flex-row gap-2 text-white items-center">
                        <FontAwesomeIcon icon={faPlus} className='h-4'/>
                        <span className="text-gray-300 hover:text-white cursor-pointer">Custom feed</span>
                    </li>

                    {/* Squads Section */}
                    <li>
                        <p className="text-gray-400 hover:text-white cursor-pointer">Squads</p>
                        <ul className="pt-3 space-y-2">
                            <li className="flex flex-row gap-2 text-gray-300 hover:text-white cursor-pointer">
                                <FontAwesomeIcon icon={faReact}  className='h-4'/>
                                <span>Public Squads</span>
                            </li>
                            <li className="flex flex-row gap-2 text-gray-300 hover:text-white cursor-pointer">
                                <FontAwesomeIcon icon={faNodeJs} className='h-4'/>
                                <span>Public Squads</span>
                            </li>
                            <li className="flex flex-row gap-2 text-gray-300 hover:text-white cursor-pointer">
                                <FontAwesomeIcon icon={faJs} className='h-4'/>
                                <span>JS</span>
                            </li>
                            <li className="flex flex-row gap-2 text-gray-300 hover:text-white cursor-pointer">
                                <FontAwesomeIcon icon={faPlus} className='h-4'/>
                                <span>New Squads</span>
                            </li>
                        </ul>
                    </li>

                    {/* Discover Section */}
                    <li>
                        <p className="text-gray-400 hover:text-white cursor-pointer">Discover</p>
                        <ul className="pt-3 space-y-2">
                            <li className="flex flex-row gap-2 text-gray-300 hover:text-white cursor-pointer">
                                <FontAwesomeIcon icon={faMagnifyingGlass} className='h-4'/>
                                <span>Explore</span>
                            </li>
                            <li className="flex flex-row gap-2 text-gray-300 hover:text-white cursor-pointer">
                                <FontAwesomeIcon icon={faMessage} className='h-4'/>
                                <span>Discussion</span>
                            </li>
                            <li className="flex flex-row gap-2 text-gray-300 hover:text-white cursor-pointer">
                                <FontAwesomeIcon icon={faTag} className='h-4'/>
                                <span>Tags</span>
                            </li>
                            <li className="flex flex-row gap-2 text-gray-300 hover:text-white cursor-pointer">
                                <FontAwesomeIcon icon={faUser} className='h-4'/>
                                <span>Leaderboard</span>
                            </li>
                        </ul>
                    </li>

                    {/* Submit Section */}
                    <li>
                        <p className="text-gray-400 hover:text-white cursor-pointer">Submit</p>
                        <ul className="pt-3 space-y-2">
                            <li className="flex flex-row gap-2 text-gray-300 hover:text-white cursor-pointer">
                                <FontAwesomeIcon icon={faLink} className='h-4'/>
                                <span>Submit a Link</span>
                            </li>
                            <li className="flex flex-row gap-2 text-gray-300 hover:text-white cursor-pointer">
                                <FontAwesomeIcon icon={faBookmark} className='h-4'/>
                                <span>Bookmark</span>
                            </li>
                            <li className="flex flex-row gap-2 text-gray-300 hover:text-white cursor-pointer">
                                <FontAwesomeIcon icon={faEye} className='h-4'/>
                                <span>History</span>
                            </li>
                        </ul>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Sidebar
