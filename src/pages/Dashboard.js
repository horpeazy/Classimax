import React, { useRef, useState, useMemo } from 'react';
import Pagination from '../components/Pagination';
import { adsData } from '../data';

const Dashboard = () => {
    const [ads, setAds] = useState(adsData.my_ads);
    const [showModal, setShowModal] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const active = useRef(1);
    const delete_id = useRef(null);
    let PageSize = 5;

    const currentTableData = useMemo(() => {
        const firstPageIndex = (currentPage - 1) * PageSize;
        const lastPageIndex = firstPageIndex + PageSize;
        return ads.slice(firstPageIndex, lastPageIndex);
    }, [currentPage, ads, PageSize]);

    const deleteProduct = (id) => {
        const entries = Object.entries(adsData);
        for (const [category, products] of entries) {
            adsData[category] = products.filter((product) => product.id !== id);
        }
        refreshData(active.current);
        setShowModal(false);
    }

    const refreshData = (category) => {
        switch (category) {
            case 1:
                setAds(adsData.my_ads);
                break;
            case 2:
                setAds(adsData.favourite_ads);
                break;
            case 3:
                setAds(adsData.archived_ads);
                break;
            case 4:
                setAds(adsData.pending_ads);
                break;
            default:
                break;
        }
    }

    const switchCategory = (category) => {
        setCurrentPage(1);
        active.current = category
        refreshData(category);
    }

    const handleDelete = (e, product_id) => {
        e.preventDefault()
        setShowModal(true);
        delete_id.current = product_id;
    }
    return (
        <section className="dashboard">
            <div className="dashboard-wrapper">
                <div className="dashboard-left-panel">
                    <div className="user-info">
                        <div className="profile-image">
                            <img src="./images/user/user-thumb.jpg" alt="profile-img"/>
                        </div>
                        <h5>Iyamu Hope</h5>
                        <p>Joined February 06, 2017</p>
                        <a className="btn edit-btn" href="/">
                            Edit Profile
                        </a>
                    </div>
                    <div className="dashboard-sections">
                        <ul>
                            <li className={active.current === 1 ? 'active': ''} onClick={() => {switchCategory(1)}}>
                                <i className="fa fa-user"></i>
                                My Ads
                                <span>{adsData.my_ads.length}</span>
                            </li>
                            <li className={active.current === 2 ? 'active': ''} onClick={() => {switchCategory(2)}}>
                                <i className="fa fa-bookmark-o"></i>
                                Favourite Ads
                                <span>{adsData.favourite_ads.length}</span>
                            </li>
                            <li className={active.current === 3 ? 'active': ''} onClick={() => {switchCategory(3)}}>
                                <i className="fa fa-file-archive-o"></i>
                                Archived Ads
                                <span>{adsData.archived_ads.length}</span>
                            </li>
                            <li  className={active.current === 4 ? 'active': ''} onClick={() => {switchCategory(4)}}>
                                <i className="fa fa-bolt"></i>
                                Pending Approval
                                <span>{adsData.pending_ads.length}</span>
                            </li>
                            <li>
                                <i className="fa fa-cog"></i>
                                Logout   
                            </li>
                            <li>
                                <i className="fa fa-power-off"></i>
                                Delete Account
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="dashboard-right-wrapper">
                    <div className="dashboard-right-panel">
                        <h3>My Ads</h3>
                        <table>
                            <thead>
                                <tr>
                                    <th>image</th>
                                    <th>product title</th>
                                    <th>category</th>
                                    <th>action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {currentTableData.map((data) => {
                                    return (
                                        <tr key={data.id}>
                                            <td className='image-td'>
                                                <img src={data.image} alt={data.name}/>
                                            </td>
                                            <td className='product-title'>
                                                <h4>{data.name}</h4>
                                                <div>
                                                    <strong>Ad ID:</strong>
                                                    <span>{data.ad_id}</span>
                                                </div>
                                                <div>
                                                    <strong>Posted on:</strong>
                                                    <time>{data.date_posted}</time>
                                                </div>
                                                <div>
                                                    <strong>Status</strong>
                                                    <span className={data.status}>{data.status}</span>
                                                </div>
                                                <div>
                                                    <strong>Location</strong>
                                                    <span>{data.location}</span>
                                                </div>
                                            </td>
                                            <td className='product-category'>{data.category}</td>
                                            <td>
                                                    <ul className='action'>
                                                        <li>
                                                            <a href={`/product/${data.id}`} className='action-btn fa-eye-wrapper'>
                                                                <i className='fa fa-eye'></i>
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href={`/edit/${data.id}`} className='action-btn fa-pencil-wrapper'>
                                                                <i className='fa fa-pencil'></i>
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href='/' className='action-btn fa-trash-wrapper' 
                                                                onClick={(e) => {handleDelete(e, data.id)}}>
                                                                <i className='fa fa-trash'></i>
                                                            </a>
                                                        </li>
                                                    </ul>
                                            </td>
                                        </tr>
                                    )
                                })}  
                            </tbody>
                        </table>
                        {currentTableData.length === 0 && <div className='empty-ads'>No Ad to display</div>}
                    </div>
                    <Pagination
                        className="pagination-bar"
                        currentPage={currentPage}
                        totalCount={ads.length}
                        pageSize={PageSize}
                        onPageChange={page => setCurrentPage(page)}
                    />
                </div>
            </div>
            {showModal && 
            <div className='modal'>
                <div className='modal-wrapper'>
                    <h4>Are you sure you want to delete this ad?</h4>
                    <button className='yes-btn' onClick={() => {deleteProduct(delete_id.current)}}>Yes</button>
                    <button className='no-btn' onClick={() => {setShowModal(false)}}>
                        No
                    </button>
                </div>
            </div>
            }
        </section>
    )
}

export default Dashboard;