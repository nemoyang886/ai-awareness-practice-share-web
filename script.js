(() => {
  const q = (selector, root = document) => root.querySelector(selector);
  const qa = (selector, root = document) => Array.from(root.querySelectorAll(selector));

  const source = (label, url) => `<a class="source-note" href="${url}" target="_blank" rel="noreferrer">资料来源：${label}</a>`;

  const sectionBody = (number, title, desc, steps, close) => `
    <div class="section-layout">
      <div class="section-number reveal" style="--i:0">${number}</div>
      <div class="section-copy reveal" style="--i:1">
        <h1>${title}</h1>
        <p>${desc}</p>
        <div class="section-agenda">
          ${steps.map((step, index) => `
            <div class="section-agenda-item reveal" style="--i:${index + 2}">
              <b>${String(index + 1).padStart(2, "0")}</b>
              <strong>${step.title}</strong>
              <span>${step.desc}</span>
            </div>`).join("")}
        </div>
        <div class="section-output">${close}</div>
      </div>
    </div>`;

  const slides = [
    {
      type: "cover", module: "开场", color: "#65e3ca", title: "AI 认知科普与实操分享",
      body: `
        <img class="cover-image" src="images/ai-agent-hero.webp" alt="职场人士使用 AI Agent 推进工作" fetchpriority="high">
        <div class="cover-content">
          <div class="cover-label reveal" style="--i:0"><span>逐光自主早会</span><b>内部分享</b></div>
          <h1 class="cover-title reveal" style="--i:1"><span>AI 认知科普</span><span>与实操分享</span></h1>
          <p class="cover-deck reveal" style="--i:2">用生活化的方式，讲清 AI 是什么、怎么用，以及怎样真正帮助工作。</p>
          <div class="speaker-chip reveal" style="--i:3">
            <img src="images/leo-portrait.webp" alt="分享人杨威">
            <div><strong>杨威</strong><span>AI 工作流实践者｜人工智能应用工程师（高级）</span></div>
          </div>
        </div>`
    },
    {
      module: "开场", color: "#65e3ca", kicker: "开场小游戏", title: "你现在的 AI 使用水平在哪一级？",
      body: `
        <div class="level-test">
          <div class="level-instruction reveal" style="--i:0">
            <span>玩法</span>
            <strong>选择你已经能够稳定做到的最高一级</strong>
            <p>偶尔尝试过一次不算；不比较、不焦虑，只为找到下一步。</p>
          </div>
          <div class="level-grid" role="group" aria-label="AI 使用水平自测">
            <button class="level-choice reveal" style="--i:1" type="button" data-level="0"><b>Lv.0</b><strong>旁观者</strong><span>只听说过</span></button>
            <button class="level-choice reveal" style="--i:2" type="button" data-level="1"><b>Lv.1</b><strong>尝鲜者</strong><span>一问一答</span></button>
            <button class="level-choice reveal" style="--i:3" type="button" data-level="2"><b>Lv.2</b><strong>对话者</strong><span>会追问、补背景</span></button>
            <button class="level-choice reveal" style="--i:4" type="button" data-level="3"><b>Lv.3</b><strong>驯化师</strong><span>会约束与核验</span></button>
            <button class="level-choice reveal" style="--i:5" type="button" data-level="4"><b>Lv.4</b><strong>越境者</strong><span>跨专业做事情</span></button>
            <button class="level-choice reveal" style="--i:6" type="button" data-level="5"><b>Lv.5</b><strong>织网者</strong><span>有项目和流程</span></button>
            <button class="level-choice reveal" style="--i:7" type="button" data-level="6"><b>Lv.6</b><strong>召唤师</strong><span>用 Agent 执行</span></button>
            <button class="level-choice reveal" style="--i:8" type="button" data-level="7"><b>Lv.7</b><strong>铸造师</strong><span>会封装 Skill</span></button>
            <button class="level-choice reveal" style="--i:9" type="button" data-level="8"><b>Lv.8</b><strong>造物主</strong><span>搭自己的系统</span></button>
            <button class="level-choice reveal" style="--i:10" type="button" data-level="9"><b>Lv.9</b><strong>觉醒者</strong><span>人机原生协作</span></button>
            <button class="level-choice reveal" style="--i:11" type="button" data-level="10"><b>Lv.10</b><strong>一人军团</strong><span>放大个人判断力</span></button>
          </div>
          <div class="level-result reveal" id="levelResult" style="--i:12" aria-live="polite">
            <span>你的答案</span>
            <strong>先凭直觉选一级</strong>
            <p>今天不追求升级很多，只要找到一个能稳定向前的动作。</p>
            ${source("卡兹克《所有人用 AI 的水平分成了 10 个等级》", "https://mp.weixin.qq.com/s/GhTOhZO_zj8NfR1vPmPVww")}
          </div>
        </div>`
    },
    {
      module: "开场", color: "#65e3ca", kicker: "先听懂一个昵称", title: "为什么大家把桌面 Agent 叫“小龙虾”？",
      body: `
        <div class="lobster-origin">
          <div class="origin-card reveal" style="--i:0"><b>01</b><span>名字从哪来</span><h2>OpenClaw 的中文社区昵称</h2><p>Claw 是“爪、钳”的意思，加上红色龙虾形象，大家便把这类 Agent 亲切地叫作“龙虾”或“小龙虾”。</p></div>
          <div class="origin-card reveal" style="--i:1"><b>02</b><span>它不是什么</span><h2>不是一个统一的产品名称</h2><p>OpenClaw 是具体的开源项目；WorkBuddy 是腾讯推出的桌面 Agent 工作台。两者不能直接画等号。</p></div>
          <div class="origin-card accent reveal" style="--i:2"><b>03</b><span>今天怎么理解</span><h2>会伸出“钳子”干活的 AI</h2><p>它不仅回答问题，还能读取资料、规划步骤、调用工具、操作文件，并交付可以检查的成果。</p></div>
        </div>
        <div class="lobster-definition reveal" style="--i:3"><span>听懂目标</span><i>→</i><span>规划步骤</span><i>→</i><span>动手执行</span><i>→</i><span>交付成果</span><strong>这就是本次分享所说的“小龙虾”能力</strong></div>
        <div class="origin-sources reveal" style="--i:4">${source("OpenClaw 中文社区称呼说明", "https://openclawlaunch.com/zh/longxia-ai")}${source("WorkBuddy 官方产品介绍", "https://www.codebuddy.cn/docs/workbuddy/Overview")}</div>`
    },
    {
      module: "开场", color: "#65e3ca", kicker: "本次分享", title: "今天只解决四个问题",
      body: `
        <div class="outcome-grid compact-outcomes">
          <div class="outcome-card reveal" style="--i:0"><span class="card-number">01</span><h2>AI 是什么</h2><p>先建立一张听得懂的基础地图。</p></div>
          <div class="outcome-card reveal" style="--i:1"><span class="card-number">02</span><h2>工具怎么选</h2><p>看懂豆包、DeepSeek 与 WorkBuddy 的差别。</p></div>
          <div class="outcome-card reveal" style="--i:2"><span class="card-number">03</span><h2>工作怎么变</h2><p>理解 AI 对岗位和工作方法的真实影响。</p></div>
          <div class="outcome-card reveal" style="--i:3"><span class="card-number">04</span><h2>现在怎么用</h2><p>现场看一次从模糊想法到完整成果。</p></div>
        </div>
        <div class="lead-band reveal" style="--i:4">不追求记住所有名词，只希望分享结束时，你知道下一次该把什么工作交给 AI。</div>`
    },
    {
      module: "开场", color: "#65e3ca", kicker: "从生活开始", title: "其实，我们早就在使用 AI",
      body: `
        <div class="everyday-layout">
          <div class="everyday-lead reveal" style="--i:0"><strong>AI 不是突然出现的</strong><p>过去它藏在软件背后，现在它开始直接和我们对话、理解要求并生成内容。</p></div>
          <div class="everyday-list">
            <div class="everyday-item reveal" style="--i:1"><b>拍照</b><span>自动对焦、夜景增强、人像优化</span></div>
            <div class="everyday-item reveal" style="--i:2"><b>地图</b><span>路线规划、拥堵预测、到达时间</span></div>
            <div class="everyday-item reveal" style="--i:3"><b>输入</b><span>语音转文字、翻译和纠错</span></div>
            <div class="everyday-item reveal" style="--i:4"><b>推荐</b><span>短视频、电商和音乐内容匹配</span></div>
            <div class="everyday-item reveal" style="--i:5"><b>客服</b><span>识别问题并给出初步答复</span></div>
          </div>
        </div>
        <div class="lead-band reveal" style="--i:6">真正的新变化：AI 正从“软件里的一项功能”，变成“可以直接交代工作的伙伴”。</div>`
    },
    {
      type: "section", module: "基础概念", color: "#65e3ca", kicker: "第一部分", title: "先把几个词听明白",
      body: sectionBody("01", "建立一张简单的 AI 地图", "不用背技术定义。把大模型、提示词、上下文和 Agent 放进一个熟悉的工作场景里，就能知道它们分别负责什么。", [
        { title: "认识大脑", desc: "AI、大模型与具体模型是什么关系。" },
        { title: "学会交代", desc: "提示词和上下文怎样影响结果。" },
        { title: "看懂 Agent", desc: "从回答问题走向推进任务。" }
      ], "本部分带走：一套能向别人解释 AI 的生活化说法")
    },
    {
      module: "基础概念", color: "#65e3ca", kicker: "一张图看懂", title: "AI、大模型和 AI 工具不是一回事",
      body: `
        <div class="concept-map concept-arrow-map">
          <div class="concept-card reveal" style="--i:0"><span class="card-number">AI</span><h2>人工智能</h2><p>一个总称：让机器能够理解、判断、预测或生成内容。</p><div class="concept-formal">像“汽车行业”</div></div>
          <div class="concept-card reveal" style="--i:1"><span class="card-number">LLM</span><h2>大语言模型</h2><p>擅长处理语言的大脑，通过大量内容学习语言规律。</p><div class="concept-formal">像“发动机技术”</div></div>
          <div class="concept-card reveal" style="--i:2"><span class="card-number">APP</span><h2>AI 工具</h2><p>把模型包装成普通人可以直接使用的产品和界面。</p><div class="concept-formal">像“具体的一辆车”</div></div>
        </div>
        <div class="lead-band reveal" style="--i:3">我们平时打开的是 AI 工具，工具背后调用的是某一种模型。</div>`
    },
    {
      module: "基础概念", color: "#65e3ca", kicker: "关键区别", title: "搜索引擎找答案，大模型组织答案",
      body: `
        <div class="compare-grid search-compare">
          <div class="compare-panel reveal" style="--i:0"><span class="small-label">搜索引擎</span><h2>帮你找到已有页面</h2><p>你输入关键词，它返回网页、文章和信息来源。你需要自己阅读、判断和整理。</p><div class="micro-example">“武汉明天天气”</div></div>
          <div class="compare-middle reveal" style="--i:1">找资料<br><span>vs</span><br>做表达</div>
          <div class="compare-panel accent reveal" style="--i:2"><span class="small-label">大模型</span><h2>根据要求生成内容</h2><p>它结合你的问题和当前上下文，组织一份新的回答、方案或草稿。</p><div class="micro-example">“根据天气帮我准备出差清单”</div></div>
        </div>
        <div class="lead-band reveal" style="--i:3">大模型会生成看起来合理但不一定正确的内容，因此重要事实仍要回到可靠来源核验。</div>`
    },
    {
      module: "基础概念", color: "#65e3ca", kicker: "三个高频词", title: "Token、提示词和上下文分别是什么",
      body: `
        <div class="three-terms">
          <div class="term-block reveal" style="--i:0"><h2>Token</h2><strong>AI 阅读文字时的小片段</strong><p>内容越长，AI 需要处理的片段越多。今天只需要知道这个概念，不计算费用。</p></div>
          <div class="term-block reveal" style="--i:1"><h2>提示词</h2><strong>你交代给 AI 的任务说明</strong><p>把目标、背景、资料和交付要求说清楚，结果通常更稳定。</p></div>
          <div class="term-block reveal" style="--i:2"><h2>上下文</h2><strong>AI 当前能看到的背景</strong><p>前面对话、上传文件和个人规则，都可能影响它这一次的回答。</p></div>
        </div>
        <div class="lead-band reveal" style="--i:3">好结果不只取决于模型强不强，也取决于你有没有把背景和任务交代完整。</div>`
    },
    {
      module: "基础概念", color: "#65e3ca", kicker: "从问答到执行", title: "聊天 AI 回答问题，Agent 推进任务",
      body: `
        <div class="agent-loop">
          <div class="agent-core reveal" style="--i:0"><span>AGENT</span><strong>围绕一个目标持续工作</strong><p>不是多聊几轮，而是会读资料、做计划、调用工具并交付结果。</p></div>
          <div class="loop-row compact-loop">
            <div class="loop-step reveal" style="--i:1"><b>01</b><strong>听目标</strong><span>最后要得到什么</span></div>
            <div class="loop-step reveal" style="--i:2"><b>02</b><strong>读资料</strong><span>有哪些背景可用</span></div>
            <div class="loop-step reveal" style="--i:3"><b>03</b><strong>做计划</strong><span>拆成哪些步骤</span></div>
            <div class="loop-step reveal" style="--i:4"><b>04</b><strong>去执行</strong><span>生成或操作文件</span></div>
            <div class="loop-step reveal" style="--i:5"><b>05</b><strong>交结果</strong><span>让人检查和修改</span></div>
          </div>
        </div>`
    },
    {
      type: "practice", module: "基础概念", color: "#65e3ca", kicker: "认识 WorkBuddy", title: "WorkBuddy 是一个桌面 Agent 工作台",
      body: `
        <div class="image-layout workbuddy-layout">
          <figure class="shot reveal" style="--i:0"><div class="shot-frame"><img src="images/workbuddy-home.webp" alt="WorkBuddy 首页界面"></div><figcaption>左侧找任务，中间交代工作，右侧查看产物。</figcaption></figure>
          <div class="steps-panel">
            <div class="step-card reveal" style="--i:1"><b>不是只聊天</b><span>可以围绕任务持续修改和继续处理。</span></div>
            <div class="step-card reveal" style="--i:2"><b>不只给文字</b><span>能够生成文件、报告、清单和演示稿等产物。</span></div>
            <div class="step-card reveal" style="--i:3"><b>可以沉淀方法</b><span>资料、规则与 Skill 能够进入长期工作环境。</span></div>
            ${source("WorkBuddy 官方入门文档", "https://www.codebuddy.cn/docs/workbuddy/FirstTask")}
          </div>
        </div>`
    },
    {
      type: "section", module: "工具选择", color: "#72a7ff", kicker: "第二部分", title: "不同 AI 工具适合做什么",
      body: sectionBody("02", "没有最好的工具，只有合不合适", "同样都叫 AI 助手，产品定位可能完全不同。选择工具时，先看任务是临时问答、深度分析，还是需要长期推进和交付文件。", [
        { title: "轻量使用", desc: "临时问答、写作与多媒体创作。" },
        { title: "分析推理", desc: "拆解复杂问题与比较方案。" },
        { title: "完成工作", desc: "读取资料、操作文件并持续交付。" }
      ], "本部分带走：一张遇到不同任务时的工具选择表")
    },
    {
      type: "practice", module: "工具选择", color: "#72a7ff", kicker: "工具一", title: "豆包：适合轻量、直接和多媒体使用",
      body: `
        <div class="tool-showcase">
          <figure class="tool-shot reveal" style="--i:0"><img src="images/doubao-interface.webp" alt="豆包官方网页界面"></figure>
          <div class="tool-copy reveal" style="--i:1"><span class="tool-index">01</span><h2>把它当成随手可用的日常 AI 助手</h2><ul><li>快速问答和信息解释</li><li>写作、改写和内容灵感</li><li>图片、视频、翻译和录音转写等入口</li></ul>${source("豆包官方功能说明", "https://www.doubao.com/legal/feature_intro")}</div>
        </div>`
    },
    {
      type: "practice", module: "工具选择", color: "#72a7ff", kicker: "工具二", title: "DeepSeek：适合分析、推理和方案比较",
      body: `
        <div class="tool-showcase reverse">
          <figure class="tool-shot reveal" style="--i:0"><img src="images/deepseek-home.webp" alt="DeepSeek 官方网站"></figure>
          <div class="tool-copy reveal" style="--i:1"><span class="tool-index">02</span><h2>把它当成善于拆解问题的思考助手</h2><ul><li>复杂问题的结构化分析</li><li>多个方案的比较和取舍</li><li>逻辑梳理、代码与专业内容辅助</li></ul>${source("DeepSeek 官方网站", "https://www.deepseek.com/")}</div>
        </div>`
    },
    {
      type: "practice", module: "工具选择", color: "#72a7ff", kicker: "工具三", title: "WorkBuddy：适合把一件工作推进完成",
      body: `
        <div class="tool-showcase">
          <figure class="tool-shot reveal" style="--i:0"><img src="images/workbuddy-task.webp" alt="WorkBuddy 任务执行界面"></figure>
          <div class="tool-copy reveal" style="--i:1"><span class="tool-index">03</span><h2>把它当成可以操作资料和文件的桌面 Agent</h2><ul><li>读取本地资料与任务上下文</li><li>生成报告、表格、文档和 PPT 等产物</li><li>在已有任务基础上继续修改和扩展</li></ul>${source("WorkBuddy 任务管理文档", "https://www.codebuddy.cn/docs/workbuddy/Task-Management")}</div>
        </div>`
    },
    {
      module: "工具选择", color: "#72a7ff", kicker: "一张表完成选择", title: "先看任务，再决定打开哪个 AI",
      body: `
        <div class="choice-table reveal" style="--i:0">
          <div class="choice-row choice-head"><span>我的需求</span><span>推荐选择</span><span>判断理由</span></div>
          <div class="choice-row"><b>临时问一个问题</b><strong>豆包／DeepSeek</strong><span>快速，不需要建立复杂工作环境。</span></div>
          <div class="choice-row"><b>分析一个复杂问题</b><strong>DeepSeek</strong><span>适合拆解、比较与推理。</span></div>
          <div class="choice-row"><b>根据资料形成完整文件</b><strong>WorkBuddy</strong><span>可以围绕任务持续执行和交付。</span></div>
          <div class="choice-row"><b>让方法以后继续复用</b><strong>WorkBuddy + Skill</strong><span>把资料、规则与步骤沉淀下来。</span></div>
        </div>`
    },
    {
      type: "section", module: "工作影响", color: "#ffb45c", kicker: "第三部分", title: "AI 会怎样影响生活和工作",
      body: sectionBody("03", "重点不是取代，而是重新分工", "AI 更擅长快速生成、整理和重复执行；人仍然要决定目标、理解关系、做出判断并承担结果。", [
        { title: "工作角色变化", desc: "从亲自做完每一步，到定义目标和验收结果。" },
        { title: "能力结构变化", desc: "会提问只是开始，更重要的是会判断和沉淀。" },
        { title: "场景选择变化", desc: "从写一句话，走向完成一件真实工作。" }
      ], "本部分带走：找到一个适合自己岗位的 AI 切入口")
    },
    {
      module: "工作影响", color: "#ffb45c", kicker: "人与 AI 重新分工", title: "把重复劳动交出去，把判断力留下来",
      body: `
        <div class="photo-story">
          <img src="images/ai-teamwork.webp" alt="团队在会议室使用 AI 协同工作">
          <div class="photo-caption reveal" style="--i:0">
            <div><b>AI 更擅长</b><span>读取、整理、生成、比较和重复执行</span></div>
            <div><b>人更重要</b><span>定义目标、理解关系、判断质量和承担责任</span></div>
          </div>
        </div>`
    },
    {
      module: "工作影响", color: "#ffb45c", kicker: "未来更重要", title: "真正拉开差距的，是这四种能力",
      body: `
        <div class="capability-grid">
          <div class="capability-item reveal" style="--i:0"><b>01</b><h2>把问题说清楚</h2><p>知道自己究竟要解决什么。</p></div>
          <div class="capability-item reveal" style="--i:1"><b>02</b><h2>提供足够背景</h2><p>让 AI 知道对象、场景和限制。</p></div>
          <div class="capability-item reveal" style="--i:2"><b>03</b><h2>判断结果质量</h2><p>核对事实、语气、逻辑与可执行性。</p></div>
          <div class="capability-item reveal" style="--i:3"><b>04</b><h2>保存成功方法</h2><p>把一次好结果变成以后可重复使用的流程。</p></div>
        </div>
        <div class="lead-band reveal" style="--i:4">AI 时代的核心能力，不只是“会不会写提示词”，而是能不能把工作定义、判断并沉淀下来。</div>`
    },
    {
      module: "工作影响", color: "#ffb45c", kicker: "找到自己的入口", title: "先从一个高频、低风险的小任务开始",
      body: `
        <div class="scenario-map">
          <div class="scenario-column reveal" style="--i:0"><span>所有同事都能用</span><ul><li>会议纪要与行动清单</li><li>活动通知和执行方案</li><li>学习资料提炼</li><li>周报与汇报材料</li></ul></div>
          <div class="scenario-column reveal" style="--i:1"><span>客户服务场景</span><ul><li>面谈准备和问题清单</li><li>沟通记录整理</li><li>长期联系表达</li><li>活动邀约与复盘</li></ul></div>
          <div class="scenario-column accent reveal" style="--i:2"><span>今天建议先试</span><strong>把一份活动资料，变成通知、清单和后续安排。</strong><p>资料明确、结果可检查，也方便现场看到 AI 怎样推进工作。</p></div>
        </div>
        <div class="lead-band reveal" style="--i:3">公司内部资料、客户信息和重要事实，应遵守公司规定并由人复核后再使用。</div>`
    },
    {
      type: "section", module: "实操演示", color: "#65e3ca", kicker: "第四部分", title: "看一次 AI 怎样完成工作",
      body: sectionBody("04", "从一个模糊想法，到一套可交付成果", "现场使用同一个活动通知案例。先看模糊要求为什么只能得到普通答案，再补齐任务信息，让 WorkBuddy 形成完整产物。", [
        { title: "先看差异", desc: "一句模糊要求和一张清晰任务卡的结果不同。" },
        { title: "再看执行", desc: "WorkBuddy 读取资料、形成步骤并交付产物。" },
        { title: "最后验收", desc: "人检查内容、补充要求并决定是否使用。" }
      ], "本部分带走：一套以后交代 AI 工作时可以直接复用的六格任务卡")
    },
    {
      module: "实操演示", color: "#65e3ca", kicker: "先把任务说清楚", title: "同一句“帮我写通知”，结果为什么差很多",
      body: `
        <div class="before-after">
          <div class="brief-card weak reveal" style="--i:0"><span>模糊要求</span><blockquote>帮我写一个活动通知。</blockquote><p>AI 不知道对象、目的、时间、语气和最终格式，只能给出一份平均答案。</p></div>
          <div class="brief-card strong reveal" style="--i:1"><span>清晰任务</span><div class="six-grid"><b>目标</b><b>背景</b><b>资料</b><b>要求</b><b>输出</b><b>验收</b></div><p>信息完整以后，AI 才能理解“这份通知要解决什么问题”。</p></div>
        </div>
        <div class="lead-band reveal" style="--i:2">今天只记住六个字：目标、背景、资料、要求、输出、验收。</div>`
    },
    {
      type: "practice", module: "实操演示", color: "#65e3ca", kicker: "WorkBuddy 现场演示", title: "把一次需求变成六格任务卡，再交给 Agent",
      body: `
        <div class="demo-layout">
          <figure class="shot reveal" style="--i:0"><div class="shot-frame"><img src="images/workbuddy-task.webp" alt="WorkBuddy 中执行活动资料整理任务"></div><figcaption>在同一个任务中继续补充要求，WorkBuddy 会基于上下文持续修改。</figcaption></figure>
          <div class="demo-brief reveal" style="--i:1">
            <div><b>目标</b><span>让同事看懂活动并按时参加</span></div>
            <div><b>背景</b><span>公司内部活动，面向所有部门</span></div>
            <div><b>资料</b><span>活动时间、地点、流程与负责人</span></div>
            <div><b>要求</b><span>自然、清楚，不写空话</span></div>
            <div><b>输出</b><span>通知、执行清单、后续安排</span></div>
            <div><b>验收</b><span>信息完整，下一步动作明确</span></div>
          </div>
        </div>`
    },
    {
      type: "closing", module: "收束", color: "#65e3ca", kicker: "分享结束", title: "先让 AI 帮你完成一件真实的小事",
      body: `
        <div class="closing-layout share-closing">
          <div class="reveal" style="--i:0"><h1>不需要一次<br>学会所有 AI 工具</h1><p>先选一个高频、低风险、结果可检查的小任务。完成一次，再把有效的方法保存下来。</p></div>
          <div class="closing-steps">
            <div class="closing-step reveal" style="--i:1">听得懂：知道 AI、大模型和 Agent 的关系</div>
            <div class="closing-step reveal" style="--i:2">选得对：知道不同任务适合什么工具</div>
            <div class="closing-step reveal" style="--i:3">用得上：会用六格任务卡交代一件工作</div>
            <div class="closing-step accent reveal" style="--i:4">下一步：选择一个真实小任务，今天就试一次</div>
          </div>
        </div>`
    }
  ];

  const deck = q("#deck");
  const dots = q("#dots");
  const thumbGrid = q("#thumbGrid");
  const total = slides.length;
  let current = 0;

  function renderSlide(slide, index) {
    const page = String(index + 1).padStart(2, "0");
    if (slide.type === "cover") {
      return `<section class="slide cover-slide is-immersive" data-page="${index + 1}" style="--stage:${slide.color}"><div class="slide-inner">${slide.body}</div></section>`;
    }
    const classes = ["slide", `composition-${["offset", "split", "wide"][index % 3]}`];
    if (slide.type === "section") classes.push("section-slide", "dark");
    if (slide.type === "closing") classes.push("section-slide", "dark", "closing-slide");
    if (slide.type === "practice") classes.push("practice-slide");
    const title = slide.type === "section" || slide.type === "closing" ? "" : `<h1 class="slide-title reveal" style="--i:0">${slide.title}</h1>`;
    return `<section class="${classes.join(" ")}" data-page="${index + 1}" style="--stage:${slide.color}"><div class="slide-inner"><div class="slide-head"><span class="slide-kicker">${slide.kicker || slide.module}</span><span class="slide-page">${page}<i>/</i>${String(total).padStart(2, "0")}</span></div>${title}<div class="slide-body">${slide.body}</div></div></section>`;
  }

  deck.innerHTML = slides.map(renderSlide).join("");
  slides.forEach((slide, index) => {
    const dot = document.createElement("button");
    dot.type = "button";
    dot.setAttribute("aria-label", `跳到第 ${index + 1} 页`);
    dot.addEventListener("click", () => go(index));
    dots.appendChild(dot);

    const thumb = document.createElement("button");
    thumb.type = "button";
    thumb.className = "thumb-item";
    thumb.innerHTML = `<b>${String(index + 1).padStart(2, "0")}</b><small>${slide.module}</small><span>${slide.title}</span>`;
    thumb.addEventListener("click", () => { go(index); closeThumbs(); });
    thumbGrid.appendChild(thumb);
  });

  const slideNodes = qa(".slide");
  const dotNodes = qa("#dots button");
  const thumbNodes = qa(".thumb-item");
  const jumpInput = q("#jumpInput");
  const moduleLabel = q("#moduleLabel");
  const pageLabel = q("#pageLabel");
  const fullscreenButton = q("#fullscreenButton");
  q("#jumpTotal").textContent = `/ ${total}`;
  q("#thumbCount").textContent = `${total} 页`;
  pageLabel.textContent = `01 / ${String(total).padStart(2, "0")}`;

  const levelGuidance = [
    ["Lv.0 旁观者", "下一步：打开任意一个 AI 工具，完成你的第一次真实提问。"],
    ["Lv.1 尝鲜者", "下一步：结果不满意时别关掉，补充背景并追问一次。"],
    ["Lv.2 对话者", "下一步：加入参考资料、限制条件和明确的输出格式。"],
    ["Lv.3 驯化师", "下一步：选一个专业以外的小任务，借助 AI 跨出边界。"],
    ["Lv.4 越境者", "下一步：为高频任务建立固定项目、模板和资料入口。"],
    ["Lv.5 织网者", "下一步：从聊天工具跨到 Agent，让它连续完成多步任务。"],
    ["Lv.6 召唤师", "下一步：把一套反复使用的方法封装成自己的 Skill。"],
    ["Lv.7 铸造师", "下一步：加入检查与反馈循环，让一次成功可以持续复用。"],
    ["Lv.8 造物主", "下一步：连接资料、工具和工作流，形成稳定的个人 AI 系统。"],
    ["Lv.9 觉醒者", "下一步：沉淀自己的判断标准，并帮助团队改变协作方式。"],
    ["Lv.10 一人军团", "下一步：继续回答最重要的问题——你想用被放大的能力创造什么？"]
  ];

  qa(".level-choice").forEach((button) => {
    button.addEventListener("click", () => {
      const level = Number(button.dataset.level);
      const [title, guidance] = levelGuidance[level];
      qa(".level-choice").forEach((node) => node.classList.toggle("selected", node === button));
      const result = q("#levelResult");
      q("strong", result).textContent = title;
      q("p", result).textContent = guidance;
    });
  });

  function go(index, pushHash = true) {
    current = Math.max(0, Math.min(total - 1, index));
    slideNodes.forEach((node, i) => node.classList.toggle("is-active", i === current));
    dotNodes.forEach((node, i) => node.classList.toggle("active", i === current));
    thumbNodes.forEach((node, i) => node.classList.toggle("active", i === current));
    const slide = slides[current];
    document.documentElement.style.setProperty("--progress", `${((current + 1) / total) * 100}%`);
    document.documentElement.style.setProperty("--stage", slide.color);
    moduleLabel.textContent = slide.module;
    pageLabel.textContent = `${String(current + 1).padStart(2, "0")} / ${String(total).padStart(2, "0")}`;
    jumpInput.value = String(current + 1);
    if (pushHash) history.replaceState(null, "", `#${current + 1}`);
  }

  function openThumbs() {
    q("#thumbBackdrop").hidden = false;
    q("#thumbPanel").classList.add("open");
    q("#thumbPanel").setAttribute("aria-hidden", "false");
  }

  function closeThumbs() {
    q("#thumbBackdrop").hidden = true;
    q("#thumbPanel").classList.remove("open");
    q("#thumbPanel").setAttribute("aria-hidden", "true");
  }

  q("#thumbButton").addEventListener("click", openThumbs);
  q("#thumbClose").addEventListener("click", closeThumbs);
  q("#thumbBackdrop").addEventListener("click", closeThumbs);
  q("#jumpButton").addEventListener("click", () => go(Number(jumpInput.value) - 1));
  jumpInput.addEventListener("keydown", (event) => { if (event.key === "Enter") go(Number(jumpInput.value) - 1); });

  fullscreenButton.addEventListener("click", async () => {
    if (!document.fullscreenElement) await document.documentElement.requestFullscreen?.();
    else await document.exitFullscreen?.();
  });

  document.addEventListener("fullscreenchange", () => {
    fullscreenButton.textContent = document.fullscreenElement ? "退出全屏" : "全屏";
  });

  document.addEventListener("keydown", (event) => {
    if (event.target instanceof HTMLInputElement) return;
    if (event.key === "ArrowRight" || event.key === "PageDown" || event.key === " ") go(current + 1);
    if (event.key === "ArrowLeft" || event.key === "PageUp") go(current - 1);
    if (event.key === "Home") go(0);
    if (event.key === "End") go(total - 1);
    if (event.key === "Escape") q("#thumbPanel").classList.contains("open") ? closeThumbs() : openThumbs();
  });

  window.addEventListener("hashchange", () => {
    const page = Number(location.hash.slice(1));
    if (Number.isInteger(page) && page >= 1 && page <= total) go(page - 1, false);
  });

  const start = Number(location.hash.slice(1));
  go(Number.isInteger(start) && start >= 1 && start <= total ? start - 1 : 0, false);
})();
