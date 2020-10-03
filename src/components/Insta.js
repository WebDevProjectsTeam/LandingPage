import React from "react";

const Insta = () => {

    const getIG = (d, s, id) => {
        var js; 
        if (d.getElementById(id)) {
            return;
        } 
        js = d.createElement(s); 
        js.id = id; 
        js.src = "https://embedsocial.com/embedscript/in.js"; 
        d.getElementsByTagName("head")[0].appendChild(js);
    }

  return (
    <div className="w-screen md:w-full mt-12">

      <div className="embedsocial-instagram w-full" data-ref="652f3481e7b639b624a98ee2f1074fc903b0267b"></div>
      <script>{getIG(document, "script", "EmbedSocialInstagramScript")}</script>

    </div>
  );
};

export default Insta;
