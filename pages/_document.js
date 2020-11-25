import Document, { Head, Main, NextScript } from 'next/document';
import { ServerStyleSheet } from 'styled-components';

export default class MyDocument extends Document {
    static getInitialProps({ renderPage }) {
        // Step 1: Create an instance of ServerStyleSheet
        const sheet = new ServerStyleSheet();

        // Step 2: Retrieve styles from components in the page
        const page = renderPage(App => props => sheet.collectStyles(<App {...props} />));

        // Step 3: Extract the styles as <style> tags
        const styleTags = sheet.getStyleElement();

        // Step 4: Pass styleTags as a prop
        return { ...page, styleTags };
    }
   
    render() {
        return (
            <html lang="ko">
                <Head>
                    <meta charset="utf-8" />
                    <title>React Practice</title>
                    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1" />
                    {/* 스타일시트 링크 */}
                    {/* 웹폰트 importing */}
                    {/* 메타 설정 */}
                </Head>
                <body>
                    <Main /> {/* Router에 해당하는 페이지가 렌더링 되는 부분 */}
                    <NextScript /> {/* Next 관련된 JS 파일 */}
                </body>
            </html>
        )
    }
}