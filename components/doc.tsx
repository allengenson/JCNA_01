import React from "react";

// ── HELPER COMPONENTS ────────────────────────────────────────────────
function DocSection({
  num,
  title,
  children,
}: {
  num: string;
  title: string;
  children?: React.ReactNode;
}) {
  return (
    <div style={{ marginBottom: "20px" }}>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "10px",
          marginBottom: "10px",
          paddingBottom: "6px",
          borderBottom: "1px solid #D4E8BE",
        }}
      >
        <span
          style={{
            background: "#2D5016",
            color: "#fff",
            borderRadius: "6px",
            padding: "2px 9px",
            fontSize: "11px",
            fontWeight: 700,
            flexShrink: 0,
          }}
        >
          {num}
        </span>
        <span style={{ fontWeight: 700, fontSize: "14px", color: "#2D5016" }}>
          {title}
        </span>
      </div>
      <div style={{ paddingLeft: "4px" }}>{children}</div>
    </div>
  );
}

function SubSection({
  letter,
  title,
  children,
}: {
  letter: string;
  title: string;
  children?: React.ReactNode;
}) {
  return (
    <div
      style={{
        marginBottom: "12px",
        paddingLeft: "8px",
        borderLeft: "3px solid #C5D9A0",
      }}
    >
      <p
        style={{
          margin: "0 0 4px",
          fontWeight: 600,
          color: "#2D5016",
          fontSize: "13px",
        }}
      >
        {letter}. {title}
      </p>
      <div style={{ paddingLeft: "4px" }}>{children}</div>
    </div>
  );
}

// ── DOCTRINE CONTENT ─────────────────────────────────────────────────
export default function DoctrineContent() {
  return (
    <div style={{ color: "#4A7C2F", fontSize: "13px", lineHeight: 1.9 }}>
      <p style={{ margin: "0 0 16px" }}>
        We uphold the Holy Bible as inspired, infallible, and the absolute
        authority over all faith and conduct. Our full doctrinal framework
        includes:
      </p>

      {/* I. HOLY BIBLE */}
      <DocSection num="I" title="THE HOLY BIBLE">
        <p>
          i. The Bible was inspired by God, this means that the Holy Spirit gave
          the authors the thought and words that God wanted them to write. He
          guided them in choosing the words to use in writing (2Tim. 3:16,
          2Peter 1:20-21).
          <br />
          A. In Old Testament Scriptures claim to have been written under the
          inspiration of God (Exodus 24:4, 2Samuel 23:2, 2King 17:13, Isaiah
          59:21, Jeremiah 1:7-9, Ezequiel 2;7; 3:4,10) and claim absolute
          perfection and authority (Deut. 27:26, Psalm 19:7; 33:4;119:89,160,
          Proverbs 30:5-6)
          <br />
          B. In the New Testament, The Lord Jesus Christ accepted the Old
          Testament as inspired and endorsed its teachings (Matt. 5:17-18;
          12:39-40; 19:4-6, Luke 24:44). 
          <br />
          ii. The Bible contains no mistake or infallible (Psalm 12:6, Proverbs
          30:5). It is absolutely accurate when it refers to history and science.
          <br />
          A. Some example that testifies to the Bible&apos;s accuracy in history
          <br />
          1. Israel conquest of Jericho (Joshua 6) between 1952 and 1958, the
          city of Jericho was excavated. 
          <br />
          2. Pontius Pilate was the governor of Judea when Jesus was crucified
          (Matt. 27:1-2, 11-26). 
          <br />
          B. Some examples that testifies to the Bible&apos;s accuracy in science
          <br />
          1. The earth is not supported or carried by anything (Job 26:7). 
          <br />
          2. Stars cannot be counted (Jer.33:22). 
          <br />
          3. The earth is a sphere (Isaiah 40:22)
          <br />
          iii. Jesus Christ of Nazareth One Fold Assembly uphold and honor that
          Holy Bible is God&apos;s inspired written revelation, Accurate, True and
          Infallible therefore, our tenets, culture, and practices rely solely in
          the Holy Bible and considered that the Bible has the final authority in
          all matters concerning our faith and conduct (2Tim 3:16-17).
        </p>
      </DocSection>

      {/* II. ONE GOD */}
      <DocSection num="II" title="ONE GOD — APOSTOLIC DOCTRINE">
        <p>
          Jesus Christ of Nazareth one fold assembly believed that there is only
          one God (Deut. 6:4) creator of heaven and earth. 
          <br />
          1. Three Titles and Functions of one God doctrine
          <br />
          A. Father- He is The Creator of heaven and earth and all things, He is
          the father of all humanity and heavenly creation.
          <br />
          i. The Natural Characteristic of God the Father
          <br />
          a. God is Spirit (John 4:24) He is not composed of material elements
          and does not have physical body, no flesh and bones (Luke 24:39).
          <br />
          b. God is Eternal He has no beginning or end (Psalm 90:2, 102:27,
          Deut. 32:40, Isaiah 57:15, Gen 21:33).
          <br />
          c. God is Unchanging He does not change as to Character and being
          (Isaiah 15:29, Mal. 3:6, Heb. 1:2, 13:8, James 1:17). 
          <br />
          d. God is all Powerful (Omnipotent) nothing is impossible with god
          (Mat. 19:26, Jer. 32:17, Rev. 4:11; 15:3; 19:6, Gen. 17:1, 18:14,
          Job 42:2, Heb. 1:1-4). 
          <br />
          e. God is present everywhere (Omnipresent) He is unlimited by space or
          time.
          <br />
          f. God knows everything (Omniscient). God knows all things whether be
          they are past, present or future.
          <br />
          g. God is wise. God does the right things at the right time at the
          right way this is wisdom (Rom.8:28, 11:33, Dan. 2:20).
          <br />
          ii. The Moral Characteristic of God the Father
          <br />
          a. Perfect Holiness- Holiness is God&apos;s characteristic, which is the
          basis of all His actions.
          <br />
          b. Perfect Righteousness- is God&apos;s holiness manifested in His right
          dealing with His creatures (Gen. 18:25, Deu. 32:4, 2Chr. 12:6, Ezra
          9:15, Neh. 9:33, Psalm 11:7; 89:14, Isaiah 11:4-5, Dan. 9:7,14, Zep.
          3:5, Rev. 16:5-7, John 17:25).
          <br />
          c. Perfect Love- God is love (1John 4:8, 16). Love is His nature.
          <br />
          d. Perfect Faithfulness. God is absolutely Trustworthy, loyal,
          reliable, and true to his Word.
          <br />
          iii. The Works of God the Father
          <br />
          a. Creator- Through His Almighty power, God created the visible and
          invisible world.
          <br />
          b. Sovereign Rule (Deu. 10:14,17; 2King 19:15, 1Chr. 29:11-12; 2Chr.
          20:6, Psa. 115:3, Isa. 45:9, Dan 2:20; 4:34-35, Mat. 20:15, Rom.
          9:14-21; 11:36, Eph.1:11, 1Tim. 6:15, Rev.4:11) God has the absolute
          right to govern and dispose of His creatures as He pleases (Isa. 45:9,
          2Chr.29:11, Mat. 20:15, Exe. 18:4). 
          <br />
          iv. The Name/Title use of God the Father in old testament In the old
          testament times the name of God is hidden. He has called in different
          titles like:
          <br />
          a. Compound Titles of God Jehovah: Jehovah-Jireh
          (Provider-Gen.22:14), Jehovah-Raphi (Healer-Exo. 15:26, Psa. 103:2-3,
          Jer. 33:6), Jehovah-Nissi(Banner-Exo.17:15), Jehovah-Shalom(Peace-
          Judges 6:24), Jehovah-Ra-ah (Shepherd-Psalm 23),
          Jehovah-Tsidkenu(Righteousness-Jer. 23:6; 33:15-16),
          Jehovah-Shammah(present-Eze. 48:35)
          <br />
          b. Elohim plural of Eloah not plurality of persons but plurality of
          attributes, power and majesty (Gen.1:1, Deut. 5:6, Psalm 97:9, 1King
          8:23).
          <br />
          c. El Shaddai (God Almighty) (Gen. 17:1; 35:11, Exo. 6:2-3)
          <br />
          B. Son of God / Son of Man / Jesus Christ — Jesus Christ the Son of
          God is the visible expression of the invisible image of God (Col.1:15).
          There was a union of deity with humanity in the Lord Jesus Christ. He
          is the God who became flesh (John 1:1-3, 14; 14:9, Col 1:15; 2:9,
          1Tim 3:16, Heb 1:3). God reveal himself as man through Jesus Christ in
          order to redeem or save humanity.
          <br />
          1) The humanity of Jesus Christ
          <br />
          a. Jesus had human ancestry and human development — Lord Jesus Christ
          had human ancestry (Mat 1:1-17, Luke 3:23-38, Gal 4:4). 
          <br />
          b. Jesus had human appearance and Limitations — Jesus appeared as a
          man and lived as an ordinary man (John 10:33,19:5). 
          <br />
          c. Jesus has Human name — Christ was named Jesus (Mat 1:21), a Greek
          form of the Jewish name &quot;Joshua&quot; or Yeshua this name means Savior.
         
          <br />
          2) The Deity of Christ
          <br />
          a. Jesus did or does Things that only God has the right and ability to
          do. 
          <br />
          b. Jesus Has Natural and moral Characteristics that Only belong To
          God. — The Lord Jesus is all powerful (Omnipotent) and Creator and
          sustainer of the universe (Mat 28:18, Col 1:17, Eph 3:9, Heb 1:2-3,
          Rev 3:14, John 1:3, 10, 1Cor 1:24, 8:6), 1Pet 3:22).
          <br />
          c. Jesus Has names that shows His Deity. (1) Son of God (Matt 3:17,
          17:5, John 5:17-18, 10:36). (2) Immanuel (Isa 7:14) This name means
          God with us (Matt 1:22-23) showing that the Lord Jesus is God who live
          for a period time among men (John 1:14).
          <br />
          3) The Union of Deity and Humanity in Jesus Christ
          <br />
          a. The Lord Jesus is God. He became man to reveal God and His demands
          (John 1:1, 14, 18, 7:16-17, 8:28-29, 12:44-50, 14: 7-11, Col 1:15,
          19, 2:29, Heb 1:3). 
          <br />
          b. Lord Jesus needs to become a man in order to (1.) redeem man from
          sin (Gal 4:4-5, Heb 2:14-17, 1Pet 1:18-20, 1John 2:2, 3:5, 4:10). 
          <br />
          4) The works of Jesus Christ
          <br />
          a. Jesus Christ Death — Christ voluntarily laid down His life in
          obedience to God&apos;s will (John 10:18, Mat 27:50).
          <br />
          b. Christ Resurrection — without the resurrection, Christ death would
          not be sufficient for our salvation (Rom 4:25, 1Cor15:14).
          <br />
          c. Christ&apos;s Ascension and Exaltation. Jesus ascended and returned to
          heaven (Act 1:9). 
          <br />
          C. Holy Spirit/Ghost — Jesus Christ of Nazareth One fold Assembly
          believes that Holy Spirit is not other person in the Godhead but rather
          the Spirit of God and the Spirit of Jesus Christ (Rom 8:9, 1John 4:2,
          Acts 16:7). The Holy Spirit is dwell in the heart and life of all
          believers for sanctification and purification as well as empowerment.
          <br />
          The Works of the Holy Spirit
          <br />
          A. The works of the Holy Spirit to the Unbelievers (John 16:8-11). (1)
          He convicts them of sin (John 16:8-9) the Holy Spirit causes men to
          realize how sinful it is not believe on Jesus Christ.
          <br />
          B. (1) The Works of the Holy Spirit to the Believers. The Holy Spirit
          helps the believers become Christians through His work (John 3:5-7,
          Eph 2:5, Tit 3:5).
          <br />
          C. The work of Holy Spirit in relation to the Church (1) He dwells in
          the Church as God&apos;s habitation or temple (1Cor 3:16, 2Cor 6:16, Eph
          2:22). 
          <br />
          2. The name of One God
          <br />
          3. Issues and concerns about one God doctrine
        </p>
      </DocSection>

      {/* III. FALL OF MAN */}
      <DocSection num="III" title="THE FALL OF MAN / SIN" />

      {/* IV. SALVATION */}
      <DocSection num="IV" title="SALVATION — GRACE, FAITH, AND WORKS">
        <SubSection letter="A" title="Justification">
          A. Justification
          <br />
          B. Sanctification
          <br />
          C. Glorification
        </SubSection>
      </DocSection>

      {/* V. DIVINE HEALING */}
      <DocSection num="V" title="DIVINE HEALING" />

      {/* VI. CHURCH AND MISSION */}
      <DocSection num="VI" title="THE CHURCH AND ITS MISSION">
        <p style={{ margin: 0 }}>
          A. Fivefold Ministries
          <br />
          B. Discipleship
          <br />
          C. Evangelism
          <br />
          D. Holiness
          <br />
          E. Restoration of Israel salvation
        </p>
      </DocSection>

      {/* VII. CHURCH ORDINANCES */}
      <DocSection num="VII" title="CHURCH ORDINANCES">
        <p style={{ margin: 0 }}>
          A. The Lord Supper
          <br />
          B. Child Dedication
          <br />
          C. Baptism
          <br />
          D. Matrimony
          <br />
          E. Blessings (property, house, car etc.)
        </p>
      </DocSection>

      {/* VIII. CULTURE & PRACTICES */}
      <DocSection num="VIII" title="CHURCH CULTURE AND PRACTICES">
        <p style={{ margin: 0 }}>
          A. Prayer and Fasting
          <br />
          B. Giving (tithes, offering, first fruit, charity)
          <br />
          C. Dress code
          <br />
          D. Food
          <br />
          E. Day of Church worship or rest
        </p>
      </DocSection>

      {/* IX. CORE VALUES */}
      <DocSection num="IX" title="THE CHURCH CORE VALUES">
        <p style={{ margin: 0 }}>
          A. Love · B. Joy · C. Peace · D. Honesty · E. Kindness · F. Respect ·
          G. Self-control · H. Gentleness · I. Obedience
        </p>
      </DocSection>

      {/* X. BAPTISM */}
      <DocSection num="X" title="BAPTISM">
        <SubSection letter="A" title="Baptism of Water">
          A. Baptism of Water
          <br />
          B. Baptism of Holy Spirit
          <br />
          C. Baptism of fire
        </SubSection>
      </DocSection>

      {/* XI. RAPTURE */}
      <DocSection num="XI" title="THE RAPTURE" />

      {/* XII. RESURRECTION */}
      <DocSection num="XII" title="THE RESURRECTION" />

      {/* XIII. JUDGMENT */}
      <DocSection num="XIII" title="JUDGMENT">
        <SubSection
          letter="A"
          title="Seat of Christ / Bema — Judgment of Believers"
        >
          A. Set of Christ (BEMA) (the Judgment of the Believers)
          <br />
          B. The Judgment of the Nation/Living ( Millennial Kingdom of Christ)
          <br />
          C. Final Judgment (White throne Judgment /Judgment of the
          Unbelievers)
          <br />
          D. New Heaven and New Earth
        </SubSection>
      </DocSection>
    </div>
  );
}
