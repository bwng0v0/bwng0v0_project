import styles from './blog.module.css';

let a = Boolean('undefined')

const list = [
    { title: "1asdfasdfasdasdfasdfasdfasdadasdasdasdasdasdasdfas", text: "1asdfasdfasdfasdfasdfasdfasfdasdfasdfasdfasdfasdfasdf", footer: "2024년 7월 6일" },
    { title: "백준 21312번 문제 뭐할지 주사위굴리기", text: "맵을 활용한 브루트포싱 문제풀이설명, 문자열 두개의 순서가 일치하는가 = index의 대소관계가 일치하는가로 생각하여현우가 말한 답의 모든쌍에 대해, i와 j의 인덱스 대소관계 = 정답의 i,j 문자열 인덱스의 대소관계가 일치하는지를 확인하고 점수를 카운팅했다. 여기서 arr[i],arr[j]문자열 두개를 들고 정답에서의 각 인덱스 2개를 가져와야했기에string으로 int를 가져오는 맵을 사용하정답에서의 각 인덱스 2개를 가져와야했기에string으로 int를 가져오는 맵을 사용정답에서의 각 인덱스 2개를 가져와야했기에string으로 int를 가져오는 맵을 사용정답에서의 각 인덱스 2개를 가져와야했기에string으로 int를 가져오는 맵을 사용", footer: "2024년 7월 6일" },
    { title: "3", text: "한글한글한글한글한글한글한글한글한글한글한글한글한글한글한글한글한글한글한글한글한글한글한글한글한글한글한글한글한글한글한글한글한글한글한글한글한글한글한글한글", footer: "2024년 7월 6일" },
    { title: "4", text: "engengengengengengengengengengengengengengengengengengengengengengengengengengengengengengengengengengengengengv", footer: "2024년 7월 6일" },
    { title: "5", text: "5", footer: "2024년 7월 6일" },
    { title: "6", text: "6", footer: "2024년 7월 6일" },
    { title: "7", text: "7", footer: "2024년 7월 6일" },
];

export default function blog() {
    return (
        <div className={styles.contents}>
            {/* <div className={styles.item}>
                <div className={styles.image}></div>
                <div className={styles.textbox}>
                <div className={styles.title}><h1>백준 230223번 사다리타기 게임</h1></div>
                <div className={styles.text}>asdfasdfasdfasdf</div>
                <div className={styles.itemfooter} ></div>
                </div>
            </div> */}
            {list.map((post, index) => (
                <div key={index} className={styles.item}>
                    <div className={styles.image}></div>
                    <div className={styles.textbox}>
                        <div>
                        <h1 className={styles.title}>{post.title}</h1>
                        <p className={styles.text}>{post.text}</p>
                        </div>
                        <div className={styles.itemfooter}>{post.footer}</div>
                    </div>
                </div>)
            )}

        </div>
    )
}