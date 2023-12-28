import React from "react";

function Popular_News() {
    return (
        <section className="container mt-4">
            <div className="row my-5">
                <hr />
                <div className="col-md-6">
                    <div className="table-responsive-md">
                        <table className="table">
                            <thead>
                                <tr>
                                    <th scope="col">인기뉴스</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr style={{ cursor: 'pointer' }} >
                                    <th scope="row" className="col-2">1.</th>
                                    <td className="col-10">과기부, 챗GPT에 의한 디지털 대응 &lsquo;디지털 신질서 로드맵&rsquo; 만든다</td>
                                </tr>
                                <tr style={{ cursor: 'pointer' }} >
                                    <th scope="row" className="col-2">2.</th>
                                    <td className="col-10">세계 최대 모바일 전시회 MWC23…한국 신기술 널리 알린다.</td>
                                </tr>
                                <tr style={{ cursor: 'pointer' }} >
                                    <th scope="row" className="col-2">3.</th>
                                    <td className="col-10">챗GPT, 韓 반도체 반사이익 될까...급선무는</td>
                                </tr>
                                <tr style={{ cursor: 'pointer' }} >
                                    <th scope="row" className="col-2">4.</th>
                                    <td className="col-10">&ldquo;챗GPT 시작으로 AI 시대 본격화...반도체 수요 킬러 앱 될 것&rdquo;</td>
                                </tr>
                                <tr style={{ cursor: 'pointer' }} >
                                    <th scope="row" className="col-2">5.</th>
                                    <td className="col-10">네이버 개발자 컨퍼런스 개막… 초대규모AI 하이퍼클로바X 7월 공개</td>
                                </tr>
                                <tr style={{ cursor: 'pointer' }} >
                                    <th scope="row" className="col-2">6.</th>
                                    <td className="col-10">리벨리온, &lsquo;챗GPT 원천기술 지원&rsquo; AI 반도체 &lsquo;아톰&rsquo; 국내최초 출시</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>

                <div className="col-md-6">
                    <div className="table-responsive-md">
                        <table className="table">
                            <thead>
                                <tr>
                                    <th scope="col">최신뉴스</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr style={{ cursor: 'pointer' }} >
                                    <th scope="row" className="col-2">1.</th>
                                    <td className="col-10">네이버, 신사옥 1784 찾은 사우디 장관과 AI·디지털트윈 협력 논의</td>
                                </tr>
                                <tr style={{ cursor: 'pointer' }} >
                                    <th scope="row" className="col-2">2.</th>
                                    <td className="col-10">당근, &lsquo;모임&rsquo; 데이터 알아본 동네 인기모임 트렌드</td>
                                </tr>
                                <tr style={{ cursor: 'pointer' }} >
                                    <th scope="row" className="col-2">3.</th>
                                    <td className="col-10">IBS, 양자나노과학 연구단, 세계최초 신개념 양자컴퓨터 초읽기</td>
                                </tr>
                                <tr style={{ cursor: 'pointer' }} >
                                    <th scope="row" className="col-2">4.</th>
                                    <td className="col-10">구글, 창립 25주년 맞아...검색부터 생성형 AI까지의 여정 되집어 본다</td>
                                </tr>
                                <tr style={{ cursor: 'pointer' }} >
                                    <th scope="row" className="col-2">5.</th>
                                    <td className="col-10">세계1위 가상자산거래소 바이낸스 흔들리나…경영진 줄사퇴</td>
                                </tr>
                                <tr style={{ cursor: 'pointer' }} >
                                    <th scope="row" className="col-2">6.</th>
                                    <td className="col-10">웹툰협회·구글플레이, 글로벌 성공을 위한 중장기 협력안 발표</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
                <hr />
            </div>
        </section>
    )
} 
export default Popular_News