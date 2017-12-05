var content = {
  main: {
    pIndex: `
      <div class="content">
        <div class="name">
          王先生
        </div>
        <div class="setting">
          <img src="img/setting.png" alt="setting" id="pSetting">
        </div>
        <div class="detail">
          <ul>
            <li> 血糖：200mg/dl </li>
            <li> 吃藥時間：01:30 p.m. </li>
            <li> 重要資訊：你沒救了 </li>
          </ul>
        </div>
      </div>
      <div class="btnarea">
        <div id="pHealth" class="mainbtn">
          <img src="img/healthm.png" alt="healthm">
          <p> 健康管理 </p>
        </div>
        <div id="pNews" class="mainbtn">
          <img src="img/news.png" alt="news">
          <p> 最新消息 </p>
        </div>
        <div id="pGps" class="mainbtn">
            <img src="img/gps.png" alt="gps">
            <p> GPS定位 </p>
        </div>
        <div id="pGames" class="mainbtn">
            <img src="img/games.png" alt="games">
            <p> 遊戲 </p>
        </div>
        <div id="pEmergency" class="mainbtnLast">
            <img src="img/emergency.png" alt="emergency">
            <div> 緊急通報 </div>
        </div>
      </div>`,
    pSetting: `
    <div class="info">
      <div id="settingbg">
      <div class="setTitle">設定</div>
      <div class="setcontent">
        <div class="setCheckbox">
          <label for="parentsSet">
            親屬設定開啟
          </label>
          <input type="checkbox" name="parentsSet">
        </div>
        <div class="setparentsarea">
          <div class="setParents">
            王大姊
          </div>
          <div class="setParents">
            王小弟
          </div>
        </div>
      </div>
      <div id="version">
        <small> 版本 Beta v1.0 </small>
      </div>
      </div>
    </div>
    <div class="footer">
      <div> <span>回首頁</span> </div>
    </div>`,
    pHealth: `
    <div class="info">
      <div id="pill" class="hmsection">
        <img src="img/pill.png" alt="pill">
        <div>用藥提醒</div>
      </div>
      <div id="scope" class="hmsection">
        <img src="img/stethoscope.png" alt="stethoscope">
        <div>回診提醒</div>
      </div>
      <div id="heartbeat" class="hmsection">
        <img src="img/heartbeat.png" alt="heartbeat">
        <div>健康資訊</div>
      </div>
    </div>
    <div class="footer">
      <div> <span>回首頁</span> </div>
    </div>

    <div id="p4Pill" class="p4HMDetail" style="display: none;"></div>
    <div id="p4Scope" class="p4HMDetail" style="display: none;"></div>
    <div id="p4Heart" class="p4HMDetail" style="display: none;"></div>`,
    pNews: `
    <div class="newstitle">
      <p>最新消息</p>
    </div>
    <div class="newsarea">
      <div class="newsbox">
        <div class="subtitle">
          <div class="postdate">2017/11/25(六)</div>
          <div class="summary">環保時尚綠消費</div>
        </div>
        <div class="contentimg">
          <img src="" alt="newsimg">
        </div>
      </div>
      <div class="newsbox">
        <div class="subtitle">
          <div class="postdate">2017/12/02(六)</div>
          <div class="summary">嘉義花火音樂節</div>
        </div>
        <div class="contentimg">
          <img src="" alt="newsimg">
        </div>
      </div>
      <div class="newsbox">
        <div class="subtitle">
          <div class="postdate">2017/12/09(六)</div>
          <div class="summary">黑客松打比賽！</div>
        </div>
        <div class="contentimg">
          <img src="" alt="newsimg">
        </div>
      </div>
    </div>
    <div class="footer">
      <div> <span>回首頁</span> </div>
    </div>`,
    pGps: `
    <div class="info">
      <div class="maparea">
        <img src="img/map.png" alt="">
      </div>
      <div class="btnshowarea">
        <div class="btnshow">
          設定<br>自家點
        </div>
        <div class="btnshow">
          改變<br>自家點
        </div>
      </div>
    </div>
    <div class="footer">
      <div> <span>回首頁</span> </div>
    </div>`,
    pGames: `
    <div class="info">
      <div class="gamesarea">
        <div class="games">
          <p>遊戲一</p>
        </div>
        <div class="games">
          <p>遊戲二</p>
        </div>
      </div>
    </div>
    <div class="footer">
      <div> <span>回首頁</span> </div>
    </div>`,
    pEmergency: `
    <div class="info">
      <div class="emergencyTitle">
        <p>緊急通報</p>
      </div>

      <div class="emergencyContent">
        <div class="pBoxSection">
          <label for="emergency">
            設定電話
          </label>
          <input type="text" name="emergency">
          <div id="saveTelBtn">儲存</div>
        </div>
        <div class="pBoxSection">
          <label id="isSave">
            已儲存電話
          </label>
          <input type="text" name="isSave" placeholder="尚未設定" disabled="disabled">
        </div>
        <div class="pBoxSection">
          <div class="importantBtn">
            緊急通話
            <img src="img/phone.png" alt="phone">
          </div>
        </div>
      </div>
    </div>
    <div class="footer">
      <div> <span>回首頁</span> </div>
    </div>`
  },
  sub: {
    p4Pill: `
      <div class="pageTitle"> 用藥提醒 </div>
      <div class="pageContent">
        <div class="pBoxSection">
          <span>一天</span>
            <select name="perday" id="">
              <option value="1">一</option>
              <option value="2">二</option>
              <option value="3">三</option>
              <option value="4">四</option>
            </select>
          <span>次</span>
        </div>
        <div class="pBoxSection">
          <span>飯</span>
          <select name="beforeafter" id="">
            <option value="1">前</option>
            <option value="2">後</option>
          </select>
        </div>
        <div class="pBoxSection">
          <div class="clickbtn">
            拍攝藥品
            <img src="img/camara.png" alt="c">
          </div>
        </div>
        <div class="pBoxSectionBtn">
          <div class="clickbtn backHealth">取消</div>
          <div class="clickbtn backHealth">確定</div>
        </div>
      </div>`,
    p4Scope: `
      <div class="pageTitle"> 回診提醒 </div>
      <div class="pageContent">
        <div class="pBoxSection">
          <label for="scopeDate">選擇日期</label>
          <input type="date" name="scopeDate">
        </div>
        <div class="pBoxSectionBtn">
          <div class="clickbtn backHealth">取消</div>
          <div class="clickbtn backHealth">確定</div>
        </div>
      </div>`,
    p4Heart: `
      <div class="pageTitle"> 健康資訊 </div>
      <div class="pageContent">
        <div class="pBoxSection">
          <label for="sugar">血糖 :</label>
          <input type="text" name="sugar">
        </div>
        <div class="pBoxSection">
          <label for="lipids">血脂 :</label>
          <input type="text" name="lipids">
        </div>
        <div class="pBoxSection">
          <div class="unit">(單位 : mg/dl)</div>
        </div>
        <div class="pBoxSectionBtn">
          <div class="clickbtn backHealth">取消</div>
          <div class="clickbtn backHealth">確定</div>
        </div>
      </div>`
  }
};

