import React from "react";

export default function VchatshopPc() {
  return (
    <div>
      <div className="bg-radial-red text-center py-[20%] md:py-[5%] flex flex-col gap-8 justify-center items-center">
        <div className="project-title text-5xl lg:text-7xl">Vchatshop</div>
        <img
          src="/assets/images/vchatshop-pc-mobile.png"
          alt="Vchatshop"
          loading="lazy"
          className="w-2/4"
        />
      </div>
      <div className="mx-auto max-w-screen-lg px-4 lg:px-8 pb-8 pt-[20%] sm:pt-[10%] lg:pt-16 flex flex-col gap-8">
        <section id="overview">
          <div className="flex flex-col md:flex-row gap-8 md:gap-[10%]">
            <div className="flex flex-col gap-2 flex-1">
              <div>
                <span>My role: </span>
                <span className="text-des">Fullstack Developer</span>
              </div>
              <div>
                <span>Main tech: </span>
                <span className="text-des">
                  HTML, CSS, Javascript, Jquery, Boostrap, Laravel, PHP, MySQL
                </span>
              </div>
              <div>
                <span>Time line: </span>
                <span className="text-des">03/2024 - Present</span>
              </div>
              <div>
                <span>Note: </span>
                <span className="text-des">
                  I joined the Vchatshop e-commerce project in March 2024, after
                  the initial setup was completed, and have been contributing to
                  its development since then.
                </span>
              </div>
            </div>
            <div className="flex flex-col gap-2 flex-1">
              <div>Overview</div>
              <div className="text-des">
                VChatShop is a Vietnamese e-commerce platform offering diverse
                products, including fashion, electronics, and beauty items. It
                features frequent flash sales and discounts.
              </div>
              <div className="text-des">
                The user-friendly site supports brand partnerships and allows
                users to manage their own stores, with a focus on customer
                satisfaction through secure payment options and responsive
                support.
              </div>
            </div>
          </div>
        </section>
        <section id="Customer">
          <div>
            <div className="container-highlight">
              <div>I revamped the existing search function for Vchatshop, which was initially slow and struggled to handle a large number of products. I optimized it to enhance speed and prioritize displaying products with names closest to the search term at the top of the results</div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
