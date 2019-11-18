const VueLoaderPlugin = require('vue-loader/lib/plugin');
const path = require('path'); // 경로 불러오는 것

module.exports = { // 노드에 모듈을 만듬, 이안에 웹팩 모든 설정을 넣으면 됨.
    mode:'development', // 배포할건지 개발한건지
    devtool: 'eval', // 개발할때는 eval, 배포할때는 hid,den-source-map
    resolve: {
        extensions: ['.js', '.vue'], // 이걸 하면 import할때 확장자를 넣어줄 필요가 없다.
    },
    entry: { // 스크립트를 모인것 중에서 대표적인 스크립트
        app : path.join(__dirname, 'main.js'), // app은 하나로 합친 스크립트 이름
    },
    module: { // 웹팩의 핵심 // entry로 처리하다가 이상한거 나오면 loader를 실행
        rules: [{ // 합칠때 어떻게 합칠지를 설정해주는 것
            test: /\.vue$/, // .vue로 끝나는 파일은 vue-loader를 사용하겠다, 정규표현식
            loader: 'vue-loader', // npm i vue-loader
        },{
            test: /\.css$/, 
            use: [ // loader와 user는 똑같은 기능
                'vue-style-loader',
                'css-loader',
            ]
        }],
    },
    plugins: [
        new VueLoaderPlugin(),
    ],
    output: {
        filename: '[name].js', // 출력할 파일 이름(최종결과)
        path: path.join(__dirname, 'dist'), // 폴더 경로
        publicPath: '/dist', // webpack-dev-server 세팅시 필요
    },
};

// entry, module, plugins, output이 주 설정 나머지는 부가적인 설정