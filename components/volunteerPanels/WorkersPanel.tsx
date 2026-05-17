"use client";

const WorkersPanel = () => {
  return (
    <div className="flex-1 flex flex-col items-center px-4 sm:px-8 lg:px-[60px] pt-8 lg:pt-[33px] pb-10 lg:pb-[60px]">

      <div className="text-center">
        <h2
          className="font-cormorant italic"
          style={{ fontSize: "clamp(28px, 6vw, 40px)", color: "#2D5016", fontWeight: 400, lineHeight: 1 }}
        >
          Workers
        </h2>
        <div style={{ width: 160, height: 1, background: "#2D5016", margin: "12px auto 0" }} />
        <p className="font-dm mt-3" style={{ fontSize: "clamp(12px, 3vw, 14px)", color: "#4A7C2F" }}>
          Serving faithfully behind the scenes for the glory of God.
        </p>
      </div>

      <div className="mt-10 lg:mt-[60px] w-full flex flex-col lg:flex-row lg:items-start lg:justify-center gap-6 lg:gap-0">

        <div className="w-full lg:w-[510px] lg:flex-shrink-0">
          <p className="font-dm" style={{ fontSize: "clamp(12px, 3vw, 14px)", color: "#4A7C2F", lineHeight: 1.8, letterSpacing: "0.03em" }}>
            Workers play a vital role in supporting the church through service, preparation,
            and practical tasks. They ensure that every ministry and activity runs smoothly
            and effectively. Through their dedication, they help create a welcoming and
            orderly environment for worship and fellowship. Their faithful service reflects
            humility, teamwork, and commitment to God's work.
          </p>

          <div
            className="mt-10 lg:mt-[77px] w-full"
            style={{ background: "#FFFFFF", border: "1px solid #82B657", borderTopLeftRadius: 15, borderBottomLeftRadius: 25, borderTopRightRadius: 30, borderBottomRightRadius: 30, padding: "14px 20px" }}
          >
            <p className="font-dm italic" style={{ fontSize: "clamp(11px, 2.5vw, 13px)", color: "#4A7C2F", lineHeight: 1.6, letterSpacing: "0.03em" }}>
              Whatever you do, work at it with all your heart, as working for the Lord, not
              for human masters. Colossians 3:23
            </p>
          </div>
        </div>

        <div
          className="w-full lg:w-[258px] lg:flex-shrink-0 lg:ml-[40px] lg:-mt-[21px]"
          style={{ height: "clamp(180px, 40vw, 293px)", border: "1px solid #82B657", borderRadius: 30, background: "#FFFFFF" }}
        />
      </div>
    </div>
  );
};

export default WorkersPanel;
