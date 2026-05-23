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
          2Peter 1:20-21). Since it is from God, it is infallible therefore, the
          Bible is the word of God written by man in human words it is
          understandable. The whole Bible is completely the word of God,
          including each and every word (Exodus 24:4). Paul emphatically
          testified about this fact (1Cor. 2:13). Jesus said that not even the
          smallest part of a word or letter could be disappear until everything
          is accomplished (Matt. 5:18). There were warning on the adding and
          subtracting from the words of the prophecy (Jer. 26:2, Proverbs 30:6,
          Rev. 22:18-19).
          <br />
          A. In Old Testament Scriptures claim to have been written under the
          inspiration of God (Exodus 24:4, 2Samuel 23:2, 2King 17:13, Isaiah
          59:21, Jeremiah 1:7-9, Ezequiel 2;7; 3:4,10) and claim absolute
          perfection and authority (Deut. 27:26, Psalm 19:7; 33:4;119:89,160,
          Proverbs 30:5-6)
          <br />
          B. In the New Testament, The Lord Jesus Christ accepted the Old
          Testament as inspired and endorsed its teachings (Matt. 5:17-18;
          12:39-40; 19:4-6, Luke 24:44). He also asserted that His words are
          inspired (Luke 21:33, John 7:16; 14:10). Peter acknowledged Paul&apos;s
          writing as God&apos;s words (2Peter 3:15-16, 2Tim. 3:16). Paul and other
          apostles claimed they speak under God&apos;s inspiration (1Cor. 2:13,
          1Thes. 2:13, 1Pet. 1:12, 2Pet. 3:2, 1John 1:5, Rev.1:1-2; 21:5;
          22:6,18-19).
          <br />
          ii. The Bible contains no mistake or infallible (Psalm 12:6, Proverbs
          30:5). It is absolutely accurate when it refers to history and science.
          <br />
          A. Some example that testifies to the Bible&apos;s accuracy in history
          <br />
          1. Israel conquest of Jericho (Joshua 6) between 1952 and 1958, the
          city of Jericho was excavated. Archaeologists uncovered the ruins of
          the wall of the city and found that its walls indeed fell down
          (Joshua6:20). It ruins also show that it was destroyed by fire (Joshua
          6:24) in about 1500 BC the same century to which the Bible assigns this
          event to have happened.
          <br />
          2. Pontius Pilate was the governor of Judea when Jesus was crucified
          (Matt. 27:1-2, 11-26). In June 1961, Italian archaeologists excavated
          the old city of Caesarea. They found evidence that Pilate was indeed
          the governor of Judea between AD26 and AD36.
          <br />
          B. Some examples that testifies to the Bible&apos;s accuracy in science
          <br />
          1. The earth is not supported or carried by anything (Job 26:7). This
          is an amazing statement relating to science spoken about 2000BC which
          is contrary to pagan ideas during that time.
          <br />
          2. Stars cannot be counted (Jer.33:22) It is now known that there are
          over 100 billion of stars in our galaxy with probably billions of other
          galaxies. Most astronomers now agree that it is not humanly possible to
          count all the stars.
          <br />
          3. The earth is a sphere (Isaiah 40:22)
          <br />
          iii. Jesus Christ of Nazareth One Fold Assembly uphold and honor that
          Holy Bible is God&apos;s inspired written revelation, Accurate, True and
          Infallible therefore, our tenets, culture, and practices rely solely in
          the Holy Bible and considered that the Bible has the final authority in
          all matters concerning our faith and conduct (2Tim 3:16-17). All
          teachings must be tested and evaluated using the Word of God as
          standard (Deut. 13:1-4; Act 17:11, 1John 4:1). The Word of God should
          guide our actions, thoughts, and emotions (Psalm 119:9-11,105,133).
          Obedience to it shows that we indeed belong to Christ ( John
          15:10,14). We must study it faithfully and apply its teaching in our
          lives (James 1:22-25).
        </p>
      </DocSection>

      {/* II. ONE GOD */}
      <DocSection num="II" title="ONE GOD — APOSTOLIC DOCTRINE">
        <p>
          Jesus Christ of Nazareth one fold assembly believed that there is only
          one God (Deut. 6:4) creator of heaven and earth. He has revealed
          Himself to us his people in three manifestations and title as Father
          the ultimate Creator of the universe, the Son as a redeemer or savior,
          and the Holy Spirit as indwelling spirit in each of us for
          empowerment, sanctifies, and regeneration.
          <br />
          1. Three Titles and Functions of one God doctrine
          <br />
          A. Father- He is The Creator of heaven and earth and all things, He is
          the father of all humanity and heavenly creation. He is the alpha and
          omega and beside him there is no God (Isaiah 44:6). There was no other
          god formed before him; nor shall be there any after him (Isaiah 43:10).
          <br />
          i. The Natural Characteristic of God the Father
          <br />
          a. God is Spirit (John 4:24) He is not composed of material elements
          and does not have physical body, no flesh and bones (Luke 24:39).
          Therefore, He is not subject to limitations like human does (Acts
          7:48-49, 17:24-25). God is invisible, He cannot be seen, and no one
          had ever seen Him (Deut. 4:15-19, Exo. 33:20, John 1:18, 1Tim.1:17,
          6:16, Rom. 1:20, Col. 1:15).
          <br />
          b. God is Eternal He has no beginning or end (Psalm 90:2, 102:27,
          Deut. 32:40, Isaiah 57:15, Gen 21:33).
          <br />
          c. God is Unchanging He does not change as to Character and being
          (Isaiah 15:29, Mal. 3:6, Heb. 1:2, 13:8, James 1:17). His power (Rom.
          4:20-21). His plans and purpose (Psalm 33:11, Isaiah 46:10). His
          promises (1 King 8:56, 2Cor. 1:20, Heb. 6:18). His love and mercy
          (Psalm 103;17). And His justice (Gen. 18:25, Isa. 28:17)
          <br />
          d. God is all Powerful (Omnipotent) nothing is impossible with god
          (Mat. 19:26, Jer. 32:17, Rev. 4:11; 15:3; 19:6, Gen. 17:1, 18:14,
          Job 42:2, Heb. 1:1-4). God&apos;s Almighty power was shown in the following
          examples: In creation (Gen1:1), In sustaining all things by His
          powerful word (Heb. 1:3,) In the redemption of man (Luke 1:35,37) In
          miracles (Luke 9:43), In the salvation of sinners (1Cor. 2:5, 2Cor.
          4:7), In the fulfillment of His purpose for his kingdom (1Pet. 1:5).
          <br />
          e. God is present everywhere (Omnipresent) He is unlimited by space or
          time. He is present everywhere at all times (Gen. 28:15-16, Deut.
          4:39, Jos 2:11, Psalm 139:7-12, Amos 9:2-4, Acts 17:24,27-28). Yet
          His presence is revealed in a special manner in heaven (Deut. 26:15,
          2chro. 2:6, Acts 7:55-56). God is everywhere but He does not dwell
          everywhere. It is only when He enters into a personal relationship with
          a group or individual that He is then present in fellowship. (Isaiah
          43:2, 57:15, Mat. 18:20; 28:18-20, John 14:20-23, 2Thes. 1:9).
          <br />
          f. God knows everything (Omniscient). God knows all things whether be
          they are past, present or future. His knowledge and understanding is
          perfect and instantaneous not gradual. He did not acquire them from
          other source. (1King 8:39, Job 37:16, Psalm 33:13-14; 139:1-6,13-18;
          147:4-5, Proverbs 15:3,11, Isaiah 40:28; 44:7-8; 46:9-10, Mat.
          6:8,32; 10:29-30, Heb. 4:12-13). This perfect knowledge makes God
          incapable of making mistakes. God knows and sees what will happen in
          the future (Rom. 8:29-30, Acts 2:23; 2:31 Gal. 3:8, 1Pet. 1:2).
          Because God knows what will happen in the future, He is able to tell
          about them before they take place (prophecy)(Acts 3:18-24).
          <br />
          g. God is wise. God does the right things at the right time at the
          right way this is wisdom (Rom.8:28, 11:33, Dan. 2:20). God can do this
          because He has all power and knows everything. (Job 9:4, 12:13, Rom
          16:25-27, 1Cor. 1:18,21,24-25, Ephesian 3:10, James 1:5; 3:17).
          God&apos;s wisdom is shown through things He created (Psalm 104:24,
          Proverbs 3:19, Jer. 10:7, 12).
          <br />
          ii. The Moral Characteristic of God the Father
          <br />
          a. Perfect Holiness- Holiness is God&apos;s characteristic, which is the
          basis of all His actions. He cannot sin nor tolerate sin (Hab. 1:13,
          Isaiah 59:1-2, Psalm 92:15). He loves what is good and hates what is
          evil (Psalm 45:7). God wanted to be known as holy God (lev. 11:44-45,
          Isaiah 2:2; 6:20, Eze. 39:7). He is called the Holy One (Job 6:10,
          Psalm 22:3, Isaiah 40:25; 43:15, Eze. 39:7). In hebrew, Holy (qodesh)
          means &quot;separated&quot; He is separated from man in space(He is in heaven),
          in nature and character(He is perfect and divine), from his creatures
          because He is the Creator (Psalm 5:4, Isaiah 6:1-3, 57:15, 59:1-2,
          Exo 15:11, Rev. 4:8, 15:3-4). Seeing and understanding God&apos;s holiness
          will cause us to realize how bad sin really is, and this realization
          will lead us to confession and cleansing (Job 40:3-5; 42:1-6, Isaiah
          6:1-7). God demand holiness from His people (Lev. 11:44-45; 19:2, Heb
          12:10,14, 1Pet. 1:15-16).
          <br />
          b. Perfect Righteousness- is God&apos;s holiness manifested in His right
          dealing with His creatures (Gen. 18:25, Deu. 32:4, 2Chr. 12:6, Ezra
          9:15, Neh. 9:33, Psalm 11:7; 89:14, Isaiah 11:4-5, Dan. 9:7,14, Zep.
          3:5, Rev. 16:5-7, John 17:25). God righteousness is revealed when He
          clears the innocent and condemns the wicked (Gen. 2:17, Isaiah 11:3,
          Rom. 2:8-11, 2The. 1:8). He pardons the repentant (Psa. 51:14, 1John
          1:9). He punishes and judges His people (Dan. 9:7,14, Amos 3:2). He
          saves His People (Psa. 129:4, Isaiah 45:21, 24-25; 46:13). He gives
          reward (Deu. 7:9-13, Psalm 58:11, Mat. 25:21, Rom. 2:7, 2Tim. 4:8,
          Heb. 11:6,26). He gives victory to His faithful servants (Jos 1:6-9,
          Psa. 44:4-7, Isa. 50:4-9, 1Cor. 15:57). God grants righteousness to
          man (Rom. 1:16-17, 3:21-24, 4:5-6, 1Cor. 1:30, 2Cor. 5:21, 1Pet.
          2:24). God requires righteousness from His people (Eph. 4:21-24, 1Tim.
          6:11, 2Tim. 2:22). He wants us not only to avoid what is wrong, but
          also to do what is right.
          <br />
          c. Perfect Love- God is love (1John 4:8, 16). Love is His nature. Love
          moves God to give Himself to His creatures continually (Deu. 7:6-8,
          13; 10:15,18; Psa. 59:17; 63:3; 103:8-18; 136:1-5,26; Jer.31:3).
          This can be seen fully and perfectly in God&apos;s act of redeeming man
          through Jesus Christ death on the cross (John 3:16, 1John 4:8-10, Gal
          2:20, Deu. 7:6-9;12-13, John 14:23, 2Cor. 13:11). God&apos;s love involves
          the following; GOODNESS God blesses and cares for all His creatures
          (Job 38:41, Psa. 25:7-8; 34:8; 104:21; 145:7-9,15-16, Mat. 5:45;
          6:26, Mark 10:18, Acts 14:17, Rom. 2:4, James 1:5,17). GRACE is
          God&apos;s undeserved and unmerited favor given to sinful men (Exo. 34:6,
          Neh. 9:17, Psa. 86:15, Eph. 1:2,6-8; 2:5-8, Heb. 4:16, James 4:6).
          It includes God&apos;s patience towards sinful men (Exo. 34:6, Jer. 11:7,
          Rom. 2:4; 9:22, 1Pet. 3:20; 2Pet. 3:9,15). MERCY is God&apos;s pity on the
          miserable condition of the sinner because of sin (Deu. 4:31, Neh.
          9:31, Psa. 25:6; 78:38, Isa. 55:7; 63:9, Mic. 7:18, Mat. 18:26-27,
          Luke 6:35-36, Rom. 11:30-32, Eph. 2:4, Heb. 4:16, James 5:11, 1Pet.
          1:3, Jude 21). COMPASSION is God&apos;s sorrow for the sufferings of His
          people with the urge to help them (Exo. 34:6, Deu. 30:2, 2King 13:23,
          Psa. 86:15; 102:13; 103:8-18; 145:8-9, Lam. 3:22, Mat. 9:36; 14:14;
          15:32, Luke 15:20, 2Cor. 1:3, James 5:11). KINDNESS is God&apos;s act
          showing loving goodness to man (Psa. 18:50, Isa. 54:8,10; 57:16;
          63:7, Jer. 9:24; 31:3, Rom. 2:4; 11:22, Eph. 2:6-7, Tito 3:4-5). God
          also expects His people to show kindness to others (Luke 6:35, Col.
          3:12).
          <br />
          d. Perfect Faithfulness. God is absolutely Trustworthy, loyal,
          reliable, and true to his Word. His Word is truth, and He is faithful
          to His promises (Deu. 7:9; 32:4, Jos 21:45, 2Sam.7:28, 1King 8:56,
          2Chr. 6:15, Psa. 33:4; 36:5;89:2; 100:5; 146:6; Isa 25:1, 1Cor. 1:9;
          2Cor. 1:18-20, Heb. 10:23; 11:11, 1Pet. 4:19). God is also faithful
          towards Himself (2Tim. 2:13) and to His people (Psalm 91:4, Lam.3:22,
          1Cor. 10:13, 1The. 5:23-24, 2The. 3:3, 1John 1:9).
          <br />
          iii. The Works of God the Father
          <br />
          a. Creator- Through His Almighty power, God created the visible and
          invisible world. This includes the material universe (sun, moon, earth,
          plants, planets etc.) and the spiritual world (angels) (Gen. 1, 2; Psa.
          33:6, Col. 1:16). As the creature God, He owns everything (Psa. 24:1;
          50:9-12, Hag. 2:8). He has the rightful claim over everything He
          created. He made them all for His glory (Psa. 19:1; 148:1-14, Isa.
          43:7; 48:11, Rom. 11:36, Rev. 4:11). God&apos;s work of creation includes
          spiritual rebirth for those who accept Jesus Christ as savior. They
          become a new creation in Christ (John 3:3, 2Cor. 5:17, Gal. 6:15,
          Psa. 51:10, Eze. 36:25-27). God promises that He will create new
          heavens and a new earth a home of righteousness (Isa. 65:17-19;
          66:22-23, Rom. 8:18-21, 2Pet. 3:7-13, Rev. 21:1-5).
          <br />
          b. Sovereign Rule (Deu. 10:14,17; 2King 19:15, 1Chr. 29:11-12; 2Chr.
          20:6, Psa. 115:3, Isa. 45:9, Dan 2:20; 4:34-35, Mat. 20:15, Rom.
          9:14-21; 11:36, Eph.1:11, 1Tim. 6:15, Rev.4:11) God has the absolute
          right to govern and dispose of His creatures as He pleases (Isa. 45:9,
          2Chr.29:11, Mat. 20:15, Exe. 18:4). No one can direct God. He does
          whatever pleases Him (Dan. 4:35, Psa. 115:3, Rom. 9:15-16;18-21). God
          has the right by virtue of His infinite superiority, His absolute
          ownership of all things and absolute dependence of all things on Him
          for continuance.
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
          had human ancestry (Mat 1:1-17, Luke 3:23-38, Gal 4:4). Being in line
          of king David He is an heir to the throne of Israel (Luke 1:30-33).
          Being in line of Abraham, He is the promised seed to bless all the
          families of the Earth (Gen 22:17-18). He is the woman seed the will
          crush the serpent&apos;s head (Gen. 3:15). Jesus birth was a human birth
          but it was miraculous one. He did not have a human father (Luke
          1:34-37). Jesus grew up just like any other human in Nazareth (Luke
          2:39-40,51-52, Mat 13:54-56).
          <br />
          b. Jesus had human appearance and Limitations — Jesus appeared as a
          man and lived as an ordinary man (John 10:33,19:5). As a man Jesus
          experienced human limitations. He became physically tired (John 4:6),
          Hungry (Mark 11:12), Thirsty (John 19:28). Jesus experienced
          temptations (Mat 4:1-11), He is also experienced being strengthened by
          the Father in prayer (Luke 22:42-44). And the greatest proof of
          Christ humanity was the pain and death He suffered (1Pet 4:1, 1Cor
          15:3).
          <br />
          c. Jesus has Human name — Christ was named Jesus (Mat 1:21), a Greek
          form of the Jewish name &quot;Joshua&quot; or Yeshua this name means Savior.
          Jesus was also called son of David and the son of Abraham (Mat 1:1).
          The name often used by Jesus in the scripture to emphasize His humanity
          was Son of Man (Mat 26:64-65).
          <br />
          2) The Deity of Christ
          <br />
          a. Jesus did or does Things that only God has the right and ability to
          do. (1) Jesus Created everything (John 1:1-4, 10, Col 1:16-17, Heb.
          1:2,10). (2) He upholds and maintain the Universe (Heb 1:3, Col 1:17).
          (3)Jesus received Worship (Luke 24:51-52, John 5:23, 9:38, Heb 1:6,
          Rev 5:13-14). (4) Jesus forgives sins only God can forgive sins (Mar
          2:7) because Jesus is God, He forgive sins (Mat 9:2-6, Luke 5:21-24,
          Act 5:31, Col 3:13). (5) Jesus gives Life (John 5:31-30,10:10) He
          raised the dead (Luke 7:11-17, 8:40-56, John 11:1-44). In the last day
          Jesus will raise all the dead by His powerful word (John
          5:21-30,11:25, Phil 3:20-21). (6) Jesus will judge the living and the
          dead (john 5:22, Mat 25:31-46, Act 10:42, 17:31, 2Cor. 5:10, 2Tim
          4:1).
          <br />
          b. Jesus Has Natural and moral Characteristics that Only belong To
          God — The Lord Jesus is all powerful (Omnipotent) and Creator and
          sustainer of the universe (Mat 28:18, Col 1:17, Eph 3:9, Heb 1:2-3,
          Rev 3:14, John 1:3, 10, 1Cor 1:24, 8:6), 1Pet 3:22). Jesus is Present
          Everywhere (Omnipresent) (Mat 18:20, 28;20, John 14:20-23, Eph
          1:22-23, 1Cor 5:4). Jesus Christ knows Everything (Omniscient) (John
          16:30, 21:17, Col 2: 2-3). He knew the sinful life and thoughts of man
          (John 2:24-25, Luke 6:8). He knew what would take place at the end of
          the present age (Mat 24 and 25, Mark 13, Luke 21). The Lord Jesus is
          Eternal (John 1;1-3, Rom 1:20, John 17:3-5). The Lord Jesus does not
          change (immutable). His character and characteristics as God will never
          change (Heb 1:10-11, 13:8). His Moral characteristics is Perfect
          Holiness (luke 4:34, John 8:46, Act 4:27-30, 1Pet 2:22). Perfect
          Righteousness (1Cor 1:30, Heb 1:9, 1Pet 2:22). Perfect Love (Matt
          20:28, Luke 19:10, 1John 3:16.) Perfect Faithfulness (Rev. 1:5).
          <br />
          c. Jesus Has names that shows His Deity. (1) Son of God (Matt 3:17,
          17:5, John 5:17-18, 10:36). (2) Immanuel (Isa 7:14) This name means
          God with us (Matt 1:22-23) showing that the Lord Jesus is God who live
          for a period time among men (John 1:14). (3) Word of God (John 1:1-2,
          14). (4) God (Tit 2:13, John 1:18, 20:28). (5) Messiah or Christ
          meaning the Anointed One (Act 2:36). (6) Lord (luke 1:43, 2:11, John
          20:28, Act 16: 31). (7) Everlasting Father or father of Eternity
          (Isaiah 9:6). (8) Jehovah (Isaiah 6:1,5, 8-10 with John 12:39-41,
          Isaiah 40:3 with Matt 3:1-3, Zec 12:1,10 with Rev 1:7, Jer 23:5-6
          with 1Cor 1:30). (9) First And Last (Isaiah 44:6, 41:4, 48:12 with Rev
          1:17-18). (10) Alpha and Omega (Rev 1:7, 8, 22:13,16). (11) The I AM
          (Exo 3:14-15, John 8:56-58, Lev 24:12-16.).
          <br />
          3) The Union of Deity and Humanity in Jesus Christ
          <br />
          a. The Lord Jesus is God. He became man to reveal God and His demands
          (John 1:1, 14, 18, 7:16-17, 8:28-29, 12:44-50, 14: 7-11, Col 1:15,
          19, 2:29, Heb 1:3). The Lord Jesus is man yet He did not sin (Heb
          4:15, 1Pet 2:22). Being a perfect man without sin enables Him to
          represent man and their needs to God through intercession (Rom 8:34,
          1Tim 2:5, Heb 4:14-16, 7:24-25, 1John 2:1-2). When the Lord Jesus
          became man, He did not cease to be God (John 1:14, Phi 2:6-8, 1Tim
          3:16). He added human nature to His Divine nature. We may say that He
          is God who took upon Himself a human nature. Therefore, He is both God
          and man.
          <br />
          b. Lord Jesus needs to become a man in order to (1.) redeem man from
          sin (Gal 4:4-5, Heb 2:14-17, 1Pet 1:18-20, 1John 2:2, 3:5, 4:10). A
          perfect sacrifice has to be made for man&apos;s sins. But since God cannot
          die, He must become a man to save a man (Heb 2:9). (2.) To reveal the
          Father (John 14:7-11). (3) To provide us with a perfect example (1Pet
          2:21-25). The goal of Christian life is to become like Christ (Rom
          8:29). (4) To destroy the works of the devil and his kingdom (Heb
          2:14-15, 1John 3:8, John 13:31, 14:30, Rev 20:10-15).
          <br />
          4) The works of Jesus Christ
          <br />
          a. Jesus Christ Death — Christ voluntarily laid down His life in
          obedience to God&apos;s will (John 10:18, Mat 27:50). Christ is our
          substitute. He received the penalty for our sin and experienced
          separation from God because of it (Isaiah 53:4-6, Mar 15:34, 2Cor
          5:21). Through Christ death, God&apos;s anger aroused by sin was appeased
          (Rom 3::25-26, 5:9-11, Heb 9:11-12, 10:8-14).
          <br />
          b. Christ Resurrection — without the resurrection, Christ death would
          not be sufficient for our salvation (Rom 4:25, 1Cor15:14). Reasons why
          Christ Resurrection is important. (1) To show that God accepted
          Christ&apos;s sacrifice for man&apos;s sin (Act 2:24, 32, 3:15, 4:10, 5:30). (2)
          To confirm the Deity of Jesus (Rom 1:4). (3) To be our High priest in
          God&apos;s presence (Heb 9:24). He is our intercessor (Rom 8:34), Mediator
          (1Tim 2:5) and Advocate (1John 2:1). (4) To show God&apos;s great power to
          save, and power that will enable man to live and serve Him effectively
          (Phi 1:6, 3:10). (5) to guarantee the resurrection of those who die in
          Christ (John 5:28, 6:40, Rom 8:11, 1Cor 15:20-23, 1Th 4:14).
          <br />
          c. Christ&apos;s Ascension and Exaltation. Jesus ascended and returned to
          heaven (Act 1:9). Christ resurrection, ascension, and exaltation are
          important parts of the apostles preaching and teaching (Act 2:32-35,
          Eph 1:20, 1 Pet 3:21-22). Through Christ exaltation at the right hand
          of God, He received His proper place as Sovereign Lord ( Act 2:33-36,
          5:31, Eph 1:19-23, Heb 2: 14-18, 4:14-16). Benefits of Christ
          Exaltation: (1) He is present everywhere, filling the whole universe
          (Eph 4:10). This makes it possible for Him to be worshiped by all
          people (1Cor 1:2). (2) He has given gifts to His people (Eph 4: 8-13).
          This includes gifts for individuals (1Cor12:4-11) and for the church
          (Eph 4:8-13). (3) He has poured out the Holy Spirit upon His People
          (Act2:33). (4) He gives repentance and faith to man (Act 5:31, 11:18,
          2 Pet 1:1).
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
          realize how sinful it is not believe on Jesus Christ. (2) He convicts
          them to righteousness (John 16:10) the Holy Spirit shows men how
          sinful they are and that they can only be made righteous through faith
          in Jesus Christ. By going back to the Father, Jesus shows that He had
          already completed the work of providing righteousness to man. (3) He
          convicts them of judgment (John 16:11) The Holy Spirit causes men to
          realize that those who refuse to believe and receive righteousness from
          Jesus are already condemned. If Satan is condemned already, then they
          who are following him are surely condemned also.
          <br />
          B. (1) The Works of the Holy Spirit to the Believers. The Holy Spirit
          helps the believers become Christians through His work (John 3:5-7,
          Eph 2:5, Tit 3:5). He empowers us to be witnesses (Acts 1:8, 1Cor
          2:3-5). He teaches us (John 14:26, 15:26, 16:13). He intercedes on
          our behalf (Rom 8:26). He makes us victorious in our Christian life
          (Rom 8:1-14, Gal 5:16). He produces the fruits of the Spirit in us
          (Gal. 5:19-23). (2) The Baptism of the Holy Spirit (Acts 1:4-5,
          2:1-4). It is separate from salvation (John 20:20-22, compare with
          Luke 24:48-49 and Acts 1:4-8). It is separate from water Baptism (Acts
          8:14-17, 10:44-48). Its purpose: is to empower the believers for
          ministry (Luke 24:49, Acts 1:8). There is a need for continual filling
          with the Holy Spirit (Acts 4:31, Eph 5:18). (3) The symbols of the
          Holy Spirit FIRE (matt3:11) Fire is use to purify. DOVE (Matt 3:16)
          dove represent gentleness. OIL (1John 2:20, 1 King 19:16) Oil was used
          to anoint prophets and kings which shows the Lord&apos;s approval to serve
          Him. GIFT (Luke 11:13) the Holy Spirit is the Fathers gift to us.
          STREAM OF LIVING WATER (John 7:37-39) the Holy Spirit cause us to
          overflow with new life. SEAL OR DEPOSIT (2Cor 1:22, Eph 1:13-14) the
          Holy Spirit in us guarantees eternal life with God. BREATH OR WIND
          (John 20:22, Eze 37:9,14) The Holy Spirit gives life.
          <br />
          C. The work of Holy Spirit in relation to the Church (1) He dwells in
          the Church as God&apos;s habitation or temple (1Cor 3:16, 2Cor 6:16, Eph
          2:22). (2) He gives spiritual gifts to the Church (1Cor 12, 14). (3)
          He directs the Church and administers its work on earth (Acts 13:2-4,
          16:6-7, 15, 28-29).
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
