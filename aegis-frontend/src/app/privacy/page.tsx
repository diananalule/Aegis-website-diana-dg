export default function PrivacyPage() {
  return (
    <div className="container px-4 py-12 md:px-6 md:py-24 bg-gray-950">
      <div className="mx-auto max-w-3xl">
        <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl mb-6 text-white">プライバシーポリシー</h1>

        <div className="prose prose-invert max-w-none">
          <p className="text-gray-300">
            Aegis Co., Ltd.（以下、「当社」）は、お客様の個人情報保護の重要性を認識し、
            個人情報の保護に関する法律（個人情報保護法）及びその他の関連法令を遵守し、
            お客様の個人情報の適切な取り扱いと保護に努めます。
          </p>

          <h2 className="text-2xl font-bold mt-8 mb-4 text-white">1. 個人情報の定義</h2>
          <p className="text-gray-300">
            本プライバシーポリシーにおいて、個人情報とは、個人情報保護法第2条第1項に定める「個人情報」を指します。
            すなわち、生存する個人に関する情報であって、当該情報に含まれる氏名、生年月日その他の記述等により特定の個人を識別することができるもの
            （他の情報と容易に照合することができ、それにより特定の個人を識別することができることとなるものを含む）、
            または個人識別符号が含まれるものをいいます。
          </p>

          <h2 className="text-2xl font-bold mt-8 mb-4 text-white">2. 個人情報の収集方法</h2>
          <p className="text-gray-300">当社は、以下の方法により個人情報を取得します。</p>
          <ul className="list-disc pl-6 mt-2 text-gray-300">
            <li>当社ウェブサイトの問い合わせフォーム</li>
            <li>メール、電話、FAXでのお問い合わせ</li>
            <li>名刺の交換</li>
            <li>契約の締結</li>
            <li>セミナー、イベントへの参加申込み</li>
            <li>アンケートへの回答</li>
          </ul>

          <h2 className="text-2xl font-bold mt-8 mb-4 text-white">3. 収集する個人情報の項目</h2>
          <p className="text-gray-300">当社が収集する個人情報の項目は以下の通りです。</p>
          <ul className="list-disc pl-6 mt-2 text-gray-300">
            <li>氏名</li>
            <li>会社名</li>
            <li>部署名</li>
            <li>役職</li>
            <li>住所</li>
            <li>電話番号</li>
            <li>メールアドレス</li>
            <li>ウェブサイトでの行動履歴（Cookie等を用いて収集する情報）</li>
          </ul>

          <h2 className="text-2xl font-bold mt-8 mb-4 text-white">4. 個人情報の利用目的</h2>
          <p className="text-gray-300">当社は、収集した個人情報を以下の目的で利用します。</p>
          <ul className="list-disc pl-6 mt-2 text-gray-300">
            <li>お問い合わせへの対応</li>
            <li>サービスの提供</li>
            <li>契約の履行</li>
            <li>新サービスの開発</li>
            <li>セミナー、イベントの案内</li>
            <li>アンケート調査</li>
            <li>マーケティング活動</li>
            <li>当社ウェブサイトの改善</li>
          </ul>

          <h2 className="text-2xl font-bold mt-8 mb-4 text-white">5. 個人情報の第三者提供</h2>
          <p className="text-gray-300">
            当社は、以下のいずれかに該当する場合を除き、個人情報を第三者に提供することはありません。
          </p>
          <ul className="list-disc pl-6 mt-2 text-gray-300">
            <li>お客様の同意がある場合</li>
            <li>法令に基づく場合</li>
            <li>
              人の生命、身体または財産の保護のために必要がある場合であって、お客様の同意を得ることが困難であるとき
            </li>
            <li>
              公衆衛生の向上または児童の健全な育成の推進のために特に必要がある場合であって、お客様の同意を得ることが困難であるとき
            </li>
            <li>
              国の機関もしくは地方公共団体またはその委託を受けた者が法令の定める事務を遂行することに対して協力する必要がある場合であって、お客様の同意を得ることにより当該事務の遂行に支障を及ぼすおそれがあるとき
            </li>
          </ul>

          <h2 className="text-2xl font-bold mt-8 mb-4 text-white">6. 個人情報の安全管理</h2>
          <p className="text-gray-300">
            当社は、個人情報の漏洩、滅失またはき損を防止するため、適切なセキュリティ対策を実施し、個人情報の安全管理に努めます。
          </p>

          <h2 className="text-2xl font-bold mt-8 mb-4 text-white">7. 個人情報の開示・訂正・利用停止等</h2>
          <p className="text-gray-300">
            お客様は、当社に対して個人情報の開示、訂正、追加、削除、利用停止または消去を請求することができます。
            請求を行う場合は、下記の連絡先までご連絡ください。
          </p>

          <h2 className="text-2xl font-bold mt-8 mb-4 text-white">8. お問い合わせ窓口</h2>
          <p className="text-gray-300">個人情報の取り扱いに関するお問い合わせは、下記の窓口までご連絡ください。</p>
          <p className="mt-2 text-gray-300">
            Aegis Co., Ltd.
            <br />
            個人情報保護管理者: 総務部長
            <br />
            住所: 〒150-0002 東京都渋谷区渋谷1-1-1 渋谷ビル10F
            <br />
            電話番号: 03-1234-5678
            <br />
            メールアドレス: privacy@aegis-co.jp
          </p>

          <h2 className="text-2xl font-bold mt-8 mb-4 text-white">9. プライバシーポリシーの変更</h2>
          <p className="text-gray-300">
            当社は、必要に応じて本プライバシーポリシーを変更することがあります。
            変更した場合には、当社ウェブサイトに掲載することにより公表します。
          </p>

          <p className="mt-8 text-gray-300">
            制定日: 2023年4月1日
            <br />
            最終更新日: 2023年4月1日
          </p>
        </div>
      </div>
    </div>
  )
}

