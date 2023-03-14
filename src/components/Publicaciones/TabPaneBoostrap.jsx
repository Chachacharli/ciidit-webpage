import React from "react";
import {PUBLIS} from '../../Json/PUBLIS'


import '../../styles/publicaciones.css'
const LetParaf = (props) =>{


    return(
        <>
            { props.arr.datos.map((elem, idx) =>{
                return(

                    <><a href={elem.url} className="paper-text"> {idx +1}. {elem.tittle}</a> <br /><br /></>
                                     
                )
            })}
        </>
    )
}



export const TabPaneBoostrap = ()=>{
    return(
        
        <div className="tab-content" id="v-pills-tabContent">
            <div className="tab-pane fade show active" id="v-pills-home-0" role="tabpanel" aria-labelledby="v-pills-home-tab" tabIndex="0">
                <LetParaf arr={PUBLIS[0]}> </LetParaf>
            </div>
            <div className="tab-pane fade" id="v-pills-home-1" role="tabpanel" aria-labelledby="v-pills-profile-tab" tabIndex="0">
                <LetParaf arr={PUBLIS[1]}> </LetParaf>
            </div>
            <div className="tab-pane fade" id="v-pills-home-2" role="tabpanel" aria-labelledby="v-pills-profile-tab" tabIndex="0">
                <LetParaf arr={PUBLIS[2]}> </LetParaf>
            </div>
            <div className="tab-pane fade" id="v-pills-home-3" role="tabpanel" aria-labelledby="v-pills-profile-tab" tabIndex="0">
                <LetParaf arr={PUBLIS[3]}> </LetParaf>
            </div>
            <div className="tab-pane fade" id="v-pills-home-4" role="tabpanel" aria-labelledby="v-pills-profile-tab" tabIndex="0">
                <LetParaf arr={PUBLIS[4]}> </LetParaf>
            </div>
            <div className="tab-pane fade" id="v-pills-home-5" role="tabpanel" aria-labelledby="v-pills-profile-tab" tabIndex="0">
                <LetParaf arr={PUBLIS[5]}> </LetParaf>
            </div>
            <div className="tab-pane fade" id="v-pills-home-6" role="tabpanel" aria-labelledby="v-pills-profile-tab" tabIndex="0">
                <LetParaf arr={PUBLIS[6]}> </LetParaf>
            </div>
            <div className="tab-pane fade" id="v-pills-home-7" role="tabpanel" aria-labelledby="v-pills-profile-tab" tabIndex="0">
                <LetParaf arr={PUBLIS[7]}> </LetParaf>
            </div>
            <div className="tab-pane fade" id="v-pills-home-8" role="tabpanel" aria-labelledby="v-pills-profile-tab" tabIndex="0">
                <LetParaf arr={PUBLIS[8]}> </LetParaf>
            </div>
            <div className="tab-pane fade" id="v-pills-home-9" role="tabpanel" aria-labelledby="v-pills-profile-tab" tabIndex="0">
                <LetParaf arr={PUBLIS[9]}> </LetParaf>
            </div>
            <div className="tab-pane fade" id="v-pills-home-10" role="tabpanel" aria-labelledby="v-pills-profile-tab" tabIndex="0">
                <LetParaf arr={PUBLIS[10]}> </LetParaf>
            </div>


        </div>
    )
}