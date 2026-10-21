var __defProp = Object.defineProperty;
var __name = (target, value) => __defProp(target, "name", { value, configurable: true });

// src/templates.ts
var WELCOME_HTML = {
  "fox-and-fern": `<!doctype html>
<!--
  Fox & Fern Books \u2014 Welcome email
  \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
  Trigger:    new subscriber confirms double opt-in (Fox & Fern topic)
  Subject:    Welcome to Fox & Fern Books \u2014 here's how this works
  Pre-header: Bright, uncluttered workbooks for Pre-K through 6th grade \u2014 and a little something for being here.
  Sender:     Fox & Fern Books <hello@foxandfernbooks.com>

  Merge tags (Zoho Campaigns):
    $[FNAME]$            first name (optional, blank-safe)
    $[UNSUBSCRIBE]$       Zoho-generated unsubscribe URL
    $[VIEWASWEBPAGE]$     Browser-fallback URL
    $[UPDATEPROFILE]$     "Manage which imprints I hear from" link

  Replace the {{TOKENS}} below before pasting into Zoho if any are still present.
-->
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>Welcome to Fox &amp; Fern Books</title>
    <style>
      /* Inlined for email-client safety; keep it simple, no JS, no external CSS. */
      body { margin: 0; padding: 0; background: #faf2dc; font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif; color: #243c2f; -webkit-text-size-adjust: 100%; }
      a { color: #88381b; }
      .wrap { width: 100%; padding: 24px 0; }
      .container { max-width: 560px; margin: 0 auto; background: #fdf9ef; border-radius: 14px; padding: 32px 28px; }
      .display { font-family: 'Fraunces', Georgia, serif; }
      .eyebrow { font-size: 11px; letter-spacing: 0.25em; text-transform: uppercase; color: #a94924; font-weight: 700; }
      h1 { font-family: 'Fraunces', Georgia, serif; font-size: 28px; line-height: 1.15; margin: 14px 0 8px; color: #243c2f; }
      p  { font-size: 16px; line-height: 1.6; margin: 12px 0; color: #2e4a3a; }
      .btn { display: inline-block; background: #a94924; color: #fdf9ef !important; text-decoration: none; padding: 12px 24px; border-radius: 8px; font-weight: 700; }
      .footer { font-size: 12px; color: #506e4b; padding: 24px 28px; max-width: 560px; margin: 16px auto 0; }
      .divider { height: 1px; background: #ecdcb1; margin: 24px 0; border: 0; }
      .grade-grid { width: 100%; border-collapse: collapse; }
      .grade-grid td { padding: 6px 8px; font-size: 14px; color: #2e4a3a; border-bottom: 1px solid #ecdcb1; }
      .grade-grid td:first-child { font-weight: 700; color: #88381b; width: 38%; }
    </style>
  </head>
  <body>
    <div class="wrap">
      <div class="container">

        <!-- Brand mark \u2014 uses the wordmark already deployed on foxandfernbooks.com/brand/ -->
        <div style="text-align:center; margin-bottom: 8px;">
          <img src="https://foxandfernbooks.com/brand/wordmark.png" alt="Fox &amp; Fern Books" width="220" style="max-width:60%; height:auto; display:inline-block;" />
        </div>

        <p class="eyebrow" style="text-align:center; margin-top: 18px;">Welcome aboard</p>
        <h1 style="text-align:center;">Glad you're here, $[FNAME|reader]$.</h1>

        <p>You just signed up for Fox &amp; Fern Books release alerts. We make warm,
          uncluttered workbooks for Pre-K through 6th grade \u2014 the kind kids actually
          open. Here's what to expect from us:</p>

        <table class="grade-grid" role="presentation" cellpadding="0" cellspacing="0">
          <tr><td>What you'll get</td><td>An email when a new title ships. Maybe one per month, often less.</td></tr>
          <tr><td>What you won't</td><td>Sales blasts, surveys, partner promos, or anything you didn't ask for.</td></tr>
          <tr><td>How to opt out</td><td><a href="$[UNSUBSCRIBE]$">One click</a>, anytime. We don't make that hard.</td></tr>
        </table>

        <hr class="divider" />

        <p><strong>Our current series \u2014 Summer Bridge.</strong> Twelve weeks of short,
          confidence-building daily practice that bridges the summer slide. One workbook
          per grade band, Pre-K through 6th. We just put the seventh title (Pre-K \u2192 K) in
          KDP review.</p>

        <p style="text-align:center; margin: 24px 0;">
          <a class="btn" href="https://foxandfernbooks.com/books">Browse the seven workbooks \u2192</a>
        </p>

        <hr class="divider" />

        <p style="font-size:14px; color:#506e4b;">
          Fox &amp; Fern Books is part of <strong><a href="https://lanternlearn.com" style="color:#88381b;">Lantern Learn</a></strong>, an independent
          educational publisher. If you also want to hear from our sister imprints \u2014
          <em><a href="https://hollyandhare.com" style="color:#88381b;">Holly &amp; Hare</a></em> (gifted prep, critical thinking) or <em><a href="https://rocketandraven.com" style="color:#88381b;">Rocket &amp; Raven</a></em>
          (NGSS-aligned STEM) \u2014 you can <a href="$[UPDATEPROFILE]$">tune your preferences here</a>.
        </p>

        <p style="font-size:14px;">\u2014 The Fox &amp; Fern team<br/>
          <a href="mailto:hello@foxandfernbooks.com">hello@foxandfernbooks.com</a></p>
      </div>

      <div class="footer">
        <p>You're receiving this because you signed up at
          <a href="https://foxandfernbooks.com">foxandfernbooks.com</a>.
          <a href="$[UNSUBSCRIBE]$">Unsubscribe</a> \xB7
          <a href="$[UPDATEPROFILE]$">Manage preferences</a> \xB7
          <a href="$[VIEWASWEBPAGE]$">View in browser</a></p>
        <p>Lantern Learn \xB7 530 E Lake Dr, Gainesville, GA 30506</p>
      </div>
    </div>
  </body>
</html>
`,
  "holly-and-hare": `<!doctype html>
<!--
  Holly & Hare \u2014 Welcome email
  Trigger:    new subscriber confirms double opt-in (Holly & Hare topic)
  Subject:    Welcome to Holly & Hare \u2014 workbooks for thinkers
  Sender:     Holly & Hare <hello@hollyandhare.com>
-->
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>Welcome to Holly &amp; Hare</title>
    <style>
      body { margin: 0; padding: 0; background: #f1eee2; font-family: 'Crimson Text', Georgia, serif; color: #15233f; }
      a { color: #214a35; }
      .wrap { width: 100%; padding: 24px 0; }
      .container { max-width: 560px; margin: 0 auto; background: #f5f1e2; border-radius: 8px; padding: 36px 32px; border-top: 3px solid #c9a859; border-bottom: 3px solid #c9a859; }
      .display { font-family: 'Cardo', 'Georgia', serif; }
      .eyebrow { font-size: 11px; letter-spacing: 0.3em; text-transform: uppercase; color: #7c6629; font-weight: 700; font-family: 'Inter', sans-serif; }
      h1 { font-family: 'Cardo', Georgia, serif; font-size: 30px; line-height: 1.15; margin: 14px 0 8px; color: #15233f; font-weight: 700; }
      p { font-size: 16px; line-height: 1.7; margin: 14px 0; color: #1a2c4f; }
      .italic { font-style: italic; color: #283f6a; }
      .btn { display: inline-block; background: #1a2c4f; color: #f5f1e2 !important; text-decoration: none; padding: 12px 28px; border-radius: 4px; font-family: 'Inter', sans-serif; font-weight: 600; }
      .footer { font-size: 12px; color: #3f5687; padding: 24px 28px; max-width: 560px; margin: 16px auto 0; font-family: 'Inter', sans-serif; }
      .roman { font-family: 'Cardo', Georgia, serif; font-size: 22px; color: #214a35; font-weight: 700; }
      ul { padding-left: 20px; }
      li { margin: 8px 0; line-height: 1.6; }
    </style>
  </head>
  <body>
    <div class="wrap">
      <div class="container">

        <div style="text-align:center; margin-bottom: 14px;">
          <img src="https://hollyandhare.com/brand/wordmark.png" alt="Holly &amp; Hare" width="280" style="max-width:75%; height:auto; display:inline-block;" />
        </div>

        <p class="eyebrow" style="text-align:center;">A Lantern Learn imprint</p>
        <h1 style="text-align:center;">Welcome, $[FNAME|reader]$.</h1>

        <p class="italic" style="text-align:center; font-size: 18px;">Quiet design.
          Tough problems. Satisfying "I figured it out" moments.</p>

        <p>You signed up for release alerts from Holly &amp; Hare. We make rigorous
          workbooks for kids ready to think hard \u2014 the ones who finish early, ask the
          next question, and want something more.</p>

        <p><strong>Three things you should know:</strong></p>
        <ul>
          <li><span class="roman">i.</span> &nbsp; You'll hear from us <strong>only when a new title ships</strong>.
            No newsletter chatter, no sales blasts.</li>
          <li><span class="roman">ii.</span> &nbsp; Our current series \u2014 <em>Gifted &amp; Talented Puzzle Prep</em>
            (Grades 3\u20135) \u2014 is calibrated to the reasoning frameworks behind CogAT\xAE, NNAT\xAE,
            and similar tests. We're independent practice, not affiliated with those
            test publishers, and we say so on every page that matters.</li>
          <li><span class="roman">iii.</span> &nbsp; You can unsubscribe in <a href="$[UNSUBSCRIBE]$">one click</a>.</li>
        </ul>

        <p style="text-align:center; margin: 28px 0;">
          <a class="btn" href="https://hollyandhare.com/books">Browse our books \u2192</a>
        </p>

        <p style="font-size: 14px; color: #3f5687;">
          Holly &amp; Hare is part of <strong><a href="https://lanternlearn.com" style="color:#214a35;">Lantern Learn</a></strong>. If you also want
          everyday workbook practice for younger readers (<em><a href="https://foxandfernbooks.com" style="color:#214a35;">Fox &amp; Fern</a></em>) or
          NGSS-aligned STEM (<em><a href="https://rocketandraven.com" style="color:#214a35;">Rocket &amp; Raven</a></em>), you can
          <a href="$[UPDATEPROFILE]$">add those to your preferences</a>.
        </p>

        <p style="font-size:14px;">\u2014 The Holly &amp; Hare team<br/>
          <a href="mailto:hello@hollyandhare.com">hello@hollyandhare.com</a></p>
      </div>

      <div class="footer">
        <p>You're receiving this because you signed up at
          <a href="https://hollyandhare.com">hollyandhare.com</a>.
          <a href="$[UNSUBSCRIBE]$">Unsubscribe</a> \xB7
          <a href="$[UPDATEPROFILE]$">Manage preferences</a> \xB7
          <a href="$[VIEWASWEBPAGE]$">View in browser</a></p>
        <p>Lantern Learn \xB7 530 E Lake Dr, Gainesville, GA 30506</p>
      </div>
    </div>
  </body>
</html>
`,
  "rocket-and-raven": `<!doctype html>
<!--
  Rocket & Raven \u2014 Welcome email
  Trigger:    new subscriber confirms double opt-in (Rocket & Raven topic)
  Subject:    Welcome to Rocket & Raven \u2014 launch sequence engaged
  Sender:     Rocket & Raven Press <hello@rocketandraven.com>
-->
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>Welcome to Rocket &amp; Raven</title>
    <style>
      body { margin: 0; padding: 0; background: #0b1226; font-family: 'Inter', -apple-system, sans-serif; color: #e5edff; }
      a { color: #3aa9ff; }
      .wrap { width: 100%; padding: 24px 0; }
      .container { max-width: 560px; margin: 0 auto; background: #14213d; border: 1px solid rgba(58,169,255,0.3); border-radius: 12px; padding: 36px 32px; }
      .display { font-family: 'Orbitron', 'Exo 2', sans-serif; }
      .eyebrow { font-size: 11px; letter-spacing: 0.35em; text-transform: uppercase; color: #3aa9ff; font-weight: 700; }
      h1 { font-family: 'Orbitron', 'Exo 2', sans-serif; font-size: 24px; line-height: 1.25; margin: 14px 0 8px; color: #e5edff; text-transform: uppercase; letter-spacing: 0.04em; font-weight: 700; }
      p { font-size: 16px; line-height: 1.65; margin: 14px 0; color: #c4d3ee; }
      .btn { display: inline-block; background: #3aa9ff; color: #0b1226 !important; text-decoration: none; padding: 12px 28px; border-radius: 6px; font-family: 'Orbitron', sans-serif; font-weight: 700; text-transform: uppercase; letter-spacing: 0.18em; font-size: 13px; }
      .footer { font-size: 12px; color: #9bb0d3; padding: 24px 28px; max-width: 560px; margin: 16px auto 0; }
      .pillar { padding: 14px 16px; border: 1px solid rgba(58,169,255,0.2); border-radius: 6px; margin: 12px 0; background: #0e1830; }
      .pillar-num { font-family: 'Orbitron', sans-serif; color: #3aa9ff; font-size: 13px; letter-spacing: 0.2em; font-weight: 700; }
      .pillar-title { font-family: 'Orbitron', sans-serif; color: #e5edff; font-size: 14px; font-weight: 700; margin: 4px 0 6px; text-transform: uppercase; letter-spacing: 0.05em; }
      .pillar-body { font-size: 14px; color: #c4d3ee; margin: 0; line-height: 1.55; }
      .neon { color: #5dff6e; }
    </style>
  </head>
  <body>
    <div class="wrap">
      <div class="container">

        <div style="text-align:center; margin-bottom: 14px;">
          <img src="https://rocketandraven.com/brand/wordmark.png" alt="Rocket &amp; Raven Press" width="180" style="max-width:50%; height:auto; display:inline-block;" />
        </div>

        <p class="eyebrow" style="text-align:center;">A Lantern Learn imprint</p>
        <h1 style="text-align:center;">Launch sequence engaged.</h1>

        <p>You signed up for release alerts from Rocket &amp; Raven Press. We make
          NGSS-aligned, phenomenon-based STEM workbooks for elementary kids \u2014 built so
          children figure things out, not just memorize them.</p>

        <p><strong style="color:#e5edff;">What that looks like in our books:</strong></p>

        <div class="pillar">
          <div class="pillar-num">01 \xB7</div>
          <div class="pillar-title">Phenomenon-first</div>
          <p class="pillar-body">Every week opens with a real, observable puzzle \u2014
            "Why do puddles disappear?" \u2014 not a topic in a textbook.</p>
        </div>

        <div class="pillar">
          <div class="pillar-num">02 \xB7</div>
          <div class="pillar-title">Five-day 5E</div>
          <p class="pillar-body">Engage \u2192 Explore \u2192 Explain \u2192 Elaborate \u2192 Evaluate,
            mapped Mon\u2013Fri. The same NGSS framework professional teachers use.</p>
        </div>

        <div class="pillar">
          <div class="pillar-num">03 \xB7</div>
          <div class="pillar-title">Honest language</div>
          <p class="pillar-body">No anthropomorphism, no "water wants to flow." We
            name how the world actually works, in language a kid can hold.</p>
        </div>

        <p style="text-align:center; margin: 28px 0;">
          <a class="btn" href="https://rocketandraven.com/books">Browse Science Launch \u2192</a>
        </p>

        <p style="font-size: 14px; color: #9bb0d3;">
          You'll hear from us <strong style="color:#e5edff;">when a new title ships</strong>.
          No newsletter chatter. <a href="$[UNSUBSCRIBE]$">Unsubscribe in one click</a>.
        </p>

        <p style="font-size: 14px; color: #9bb0d3;">
          Rocket &amp; Raven is part of <strong style="color:#e5edff;"><a href="https://lanternlearn.com" style="color:#3aa9ff;">Lantern Learn</a></strong>.
          You can also subscribe to our sister imprints \u2014 <em><a href="https://foxandfernbooks.com" style="color:#3aa9ff;">Fox &amp; Fern</a></em> (everyday
          workbooks, Pre-K to 6th) or <em><a href="https://hollyandhare.com" style="color:#3aa9ff;">Holly &amp; Hare</a></em> (gifted prep, critical thinking) \u2014
          via your <a href="$[UPDATEPROFILE]$">preferences page</a>.
        </p>

        <p style="font-size:14px;">\u2014 The Rocket &amp; Raven team<br/>
          <a href="mailto:hello@rocketandraven.com">hello@rocketandraven.com</a></p>
      </div>

      <div class="footer">
        <p>You're receiving this because you signed up at
          <a href="https://rocketandraven.com">rocketandraven.com</a>.
          <a href="$[UNSUBSCRIBE]$">Unsubscribe</a> \xB7
          <a href="$[UPDATEPROFILE]$">Manage preferences</a> \xB7
          <a href="$[VIEWASWEBPAGE]$">View in browser</a></p>
        <p>Lantern Learn \xB7 530 E Lake Dr, Gainesville, GA 30506</p>
      </div>
    </div>
  </body>
</html>
`,
  "lantern-learn": `<!doctype html>
<!--
  Lantern Learn \u2014 Welcome email (umbrella subscribers)
  Trigger:    new subscriber confirms double opt-in (Lantern Learn umbrella topic)
  Subject:    Welcome to Lantern Learn \u2014 three imprints, one mission
  Sender:     Lantern Learn <hello@lanternlearn.com>
-->
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>Welcome to Lantern Learn</title>
    <style>
      body { margin: 0; padding: 0; background: #faf6e9; font-family: 'Inter', -apple-system, sans-serif; color: #19243b; }
      a { color: #8c6826; }
      .wrap { width: 100%; padding: 24px 0; }
      .container { max-width: 560px; margin: 0 auto; background: #fbf8ec; border-radius: 14px; padding: 32px 28px; border: 1px solid #f1ead0; }
      .display { font-family: 'Fraunces', Georgia, serif; }
      .eyebrow { font-size: 11px; letter-spacing: 0.25em; text-transform: uppercase; color: #8c6826; font-weight: 700; }
      h1 { font-family: 'Fraunces', Georgia, serif; font-size: 28px; line-height: 1.15; margin: 14px 0 8px; color: #19243b; }
      p { font-size: 16px; line-height: 1.6; margin: 12px 0; color: #27395a; }
      .btn { display: inline-block; background: #1f2d4a; color: #fbf8ec !important; text-decoration: none; padding: 12px 24px; border-radius: 8px; font-weight: 600; }
      .footer { font-size: 12px; color: #3f5374; padding: 24px 28px; max-width: 560px; margin: 16px auto 0; }
      .imprint-card { padding: 14px; border-radius: 10px; margin: 12px 0; }
      .imprint-card h3 { font-family: 'Fraunces', Georgia, serif; font-size: 18px; margin: 0 0 4px; }
      .imprint-card p { margin: 4px 0; font-size: 14px; }
      .fox    { background: #fdf2eb; }
      .holly  { background: #f1eee2; }
      .rocket { background: #0b1226; color: #e5edff; }
      .rocket h3, .rocket p, .rocket a { color: #e5edff !important; }
      .rocket a { color: #3aa9ff !important; }
    </style>
  </head>
  <body>
    <div class="wrap">
      <div class="container">

        <div style="text-align:center; margin-bottom: 18px;">
          <!-- Inline lantern icon (matches header on lanternlearn.com) -->
          <span style="font-family: 'Fraunces', Georgia, serif; font-size: 32px; color: #19243b; font-weight: 600;">
            Lantern Learn
          </span>
        </div>

        <p class="eyebrow" style="text-align:center;">Welcome aboard</p>
        <h1 style="text-align:center;">Books that meet kids where they are.</h1>

        <p>You signed up for release alerts from Lantern Learn \u2014 the umbrella for our
          three independent imprints. Here's the quick tour:</p>

        <div class="imprint-card fox">
          <h3 style="color:#a94924;"><a href="https://foxandfernbooks.com" style="color:#a94924; text-decoration:none;">Fox &amp; Fern Books</a></h3>
          <p>Bright, uncluttered workbooks for Pre-K through 6th grade. Summer Bridge,
            phonics, math, handwriting. Pages kids actually want to open.<br/>
            <a href="https://foxandfernbooks.com" style="color:#88381b;">foxandfernbooks.com \u2192</a></p>
        </div>

        <div class="imprint-card holly">
          <h3 style="color:#1a2c4f;"><a href="https://hollyandhare.com" style="color:#1a2c4f; text-decoration:none;">Holly &amp; Hare</a></h3>
          <p>Rigorous workbooks for kids ready to think hard \u2014 gifted prep, critical
            thinking, test prep. Quiet design, tough problems.<br/>
            <a href="https://hollyandhare.com" style="color:#214a35;">hollyandhare.com \u2192</a></p>
        </div>

        <div class="imprint-card rocket">
          <h3><a href="https://rocketandraven.com" style="color:#e5edff; text-decoration:none;">Rocket &amp; Raven</a></h3>
          <p>NGSS-aligned, phenomenon-based STEM workbooks. 12 weeks of real science per
            grade. Authored with classroom teachers.<br/>
            <a href="https://rocketandraven.com">rocketandraven.com \u2192</a></p>
        </div>

        <p>Right now you're set to receive the <strong>umbrella newsletter</strong> only \u2014
          which means a short note when something noteworthy happens across all three
          imprints (a new imprint launches, a sale across all). You can also opt into a
          specific imprint's release alerts:</p>

        <p style="text-align:center; margin: 24px 0;">
          <a class="btn" href="$[UPDATEPROFILE]$">Tune your preferences \u2192</a>
        </p>

        <p style="font-size:14px; color:#3f5374;">\u2014 The Lantern Learn team<br/>
          <a href="mailto:hello@lanternlearn.com">hello@lanternlearn.com</a></p>
      </div>

      <div class="footer">
        <p>You're receiving this because you signed up at
          <a href="https://lanternlearn.com">lanternlearn.com</a>.
          <a href="$[UNSUBSCRIBE]$">Unsubscribe</a> \xB7
          <a href="$[UPDATEPROFILE]$">Manage preferences</a> \xB7
          <a href="$[VIEWASWEBPAGE]$">View in browser</a></p>
        <p>Lantern Learn \xB7 530 E Lake Dr, Gainesville, GA 30506</p>
      </div>
    </div>
  </body>
</html>
`
};

// src/worker.ts
var IMPRINTS = [
  {
    audienceKey: "fox-and-fern",
    senderName: "Fox & Fern Books",
    senderEmail: "hello@foxandfernbooks.com",
    welcomeSubject: "Welcome to Fox & Fern Books \u2014 here's how this works",
    hostname: "foxandfernbooks.com",
    siteUrl: "https://foxandfernbooks.com",
    shortName: "Fox & Fern Books",
    blurb: "Bright, uncluttered workbooks for Pre-K through 6th grade."
  },
  {
    audienceKey: "holly-and-hare",
    senderName: "Holly & Hare",
    senderEmail: "hello@hollyandhare.com",
    welcomeSubject: "Welcome to Holly & Hare \u2014 workbooks for thinkers",
    hostname: "hollyandhare.com",
    siteUrl: "https://hollyandhare.com",
    shortName: "Holly & Hare",
    blurb: "Rigorous workbooks for kids ready to think hard \u2014 gifted prep, critical thinking."
  },
  {
    audienceKey: "rocket-and-raven",
    senderName: "Rocket & Raven Press",
    senderEmail: "hello@rocketandraven.com",
    welcomeSubject: "Welcome to Rocket & Raven \u2014 launch sequence engaged",
    hostname: "rocketandraven.com",
    siteUrl: "https://rocketandraven.com",
    shortName: "Rocket & Raven Press",
    blurb: "NGSS-aligned, phenomenon-based STEM workbooks for elementary kids."
  },
  {
    audienceKey: "lantern-learn",
    senderName: "Lantern Learn",
    senderEmail: "hello@lanternlearn.com",
    welcomeSubject: "Welcome to Lantern Learn \u2014 three imprints, one mission",
    hostname: "lanternlearn.com",
    siteUrl: "https://lanternlearn.com",
    shortName: "Lantern Learn (umbrella)",
    blurb: "Cross-imprint announcements only \u2014 sales, new imprint launches, big news."
  }
];
var IMPRINT_FROM_HOSTNAME = {};
for (const cfg of IMPRINTS) {
  IMPRINT_FROM_HOSTNAME[cfg.hostname] = cfg;
  IMPRINT_FROM_HOSTNAME[`www.${cfg.hostname}`] = cfg;
}
var IMPRINT_FROM_KEY = {};
for (const cfg of IMPRINTS) IMPRINT_FROM_KEY[cfg.audienceKey] = cfg;
var RATE_LIMIT_WINDOW_S = 3600;
var RATE_LIMIT_MAX_PER_IP = 5;
var EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
var WORKER_BASE = "https://emailpreferences.lanternlearn.com";
var worker_default = {
  async fetch(req, env) {
    const url = new URL(req.url);
    if (req.method === "OPTIONS") return cors(new Response(null, { status: 204 }), req, env);
    if (req.method === "GET" && url.pathname === "/unsubscribe") {
      return handleUnsubscribe(url, env);
    }
    if (req.method === "GET" && url.pathname === "/preferences") {
      return handlePreferencesGet(url, env);
    }
    if (req.method === "POST" && url.pathname === "/preferences") {
      return handlePreferencesPost(req, env);
    }
    if (req.method !== "POST") return cors(text("Method Not Allowed", 405), req, env);
    return handleSubscribe(req, env);
  }
};
async function handleSubscribe(req, env) {
  const referer = req.headers.get("Referer") || "";
  const refererUrl = safeURL(referer);
  let data;
  try {
    data = await req.formData();
  } catch {
    return cors(text("Bad form", 400), req, env);
  }
  const email = String(data.get("email") ?? "").trim().toLowerCase();
  const honey = String(data.get("company") ?? "").trim();
  const originField = String(data.get("origin") ?? "").trim().toLowerCase();
  if (honey) return cors(redirectBack(refererUrl, "ok"), req, env);
  if (!EMAIL_RE.test(email)) return cors(redirectBack(refererUrl, "invalid"), req, env);
  const hostname = (originField || refererUrl?.hostname || "").toLowerCase();
  const imprint = IMPRINT_FROM_HOSTNAME[hostname];
  if (!imprint) return cors(redirectBack(refererUrl, "unknown-origin"), req, env);
  const ip = req.headers.get("CF-Connecting-IP") || "unknown";
  if (await isRateLimited(env, ip)) return cors(redirectBack(refererUrl, "rate"), req, env);
  let audienceMap;
  try {
    audienceMap = JSON.parse(env.RESEND_AUDIENCE_IDS);
  } catch {
    return cors(text("Server config error: bad RESEND_AUDIENCE_IDS", 500), req, env);
  }
  const audienceId = audienceMap[imprint.audienceKey];
  if (!audienceId) return cors(text(`No Resend audience for ${imprint.audienceKey}`, 500), req, env);
  try {
    await resendAddContact(env, audienceId, email);
  } catch (e) {
    console.error("Resend addContact error", e);
    return cors(redirectBack(refererUrl, "sub-error"), req, env);
  }
  try {
    await resendSendWelcome(env, imprint, email);
  } catch (e) {
    console.error("Resend send welcome error", e);
  }
  return cors(redirectBack(refererUrl, "ok"), req, env);
}
__name(handleSubscribe, "handleSubscribe");
async function handleUnsubscribe(url, env) {
  const email = (url.searchParams.get("e") || "").trim().toLowerCase();
  const imprintKey = (url.searchParams.get("i") || "").trim().toLowerCase();
  const token = (url.searchParams.get("t") || "").trim().toLowerCase();
  if (!EMAIL_RE.test(email) || !imprintKey || !token) {
    return html(simplePage("That unsubscribe link is malformed.", false), 400);
  }
  const imprint = IMPRINT_FROM_KEY[imprintKey];
  if (!imprint) {
    return html(simplePage("Unknown imprint.", false), 400);
  }
  const expected = await unsubscribeToken(email, imprintKey, env.RESEND_API_KEY);
  if (token !== expected) {
    return html(simplePage("That unsubscribe link is invalid or expired.", false), 400);
  }
  let audienceMap;
  try {
    audienceMap = JSON.parse(env.RESEND_AUDIENCE_IDS);
  } catch {
    return html(simplePage("Server configuration error.", false), 500);
  }
  const audienceId = audienceMap[imprintKey];
  if (!audienceId) return html(simplePage("No matching audience.", false), 500);
  try {
    await resendDeleteContact(env, audienceId, email);
  } catch (e) {
    console.error("Resend unsubscribe error", e);
    return html(simplePage(`We hit an error trying to unsubscribe you. Please email hello@${imprint.hostname} and we'll handle it manually.`, false), 500);
  }
  const prefsToken = await preferencesToken(email, env.RESEND_API_KEY);
  const prefsUrl = `${WORKER_BASE}/preferences?e=${encodeURIComponent(email)}&t=${prefsToken}`;
  const msg = `You're unsubscribed from ${imprint.shortName}. We won't email you again from this list. <a href="${prefsUrl}" style="color:inherit;">Manage preferences for the other imprints \u2192</a>`;
  return html(simplePage(msg, true), 200);
}
__name(handleUnsubscribe, "handleUnsubscribe");
async function handlePreferencesGet(url, env) {
  const email = (url.searchParams.get("e") || "").trim().toLowerCase();
  const token = (url.searchParams.get("t") || "").trim().toLowerCase();
  if (!EMAIL_RE.test(email) || !token) return html(simplePage("Invalid preferences link.", false), 400);
  const expected = await preferencesToken(email, env.RESEND_API_KEY);
  if (token !== expected) return html(simplePage("That preferences link is invalid or expired.", false), 400);
  let audienceMap;
  try {
    audienceMap = JSON.parse(env.RESEND_AUDIENCE_IDS);
  } catch {
    return html(simplePage("Server configuration error.", false), 500);
  }
  const status = await readMembership(env, audienceMap, email);
  return html(preferencesPage(email, token, status), 200);
}
__name(handlePreferencesGet, "handlePreferencesGet");
async function readMembership(env, audienceMap, email) {
  const status = {};
  await Promise.all(
    IMPRINTS.map(async (cfg) => {
      const aid = audienceMap[cfg.audienceKey];
      if (!aid) {
        status[cfg.audienceKey] = false;
        return;
      }
      const r = await fetch(
        `https://api.resend.com/audiences/${aid}/contacts/${encodeURIComponent(email)}`,
        { headers: { "Authorization": `Bearer ${env.RESEND_API_KEY}` } }
      );
      if (r.status === 404) {
        status[cfg.audienceKey] = false;
        return;
      }
      if (r.ok) {
        const d = await r.json();
        status[cfg.audienceKey] = d.unsubscribed === false;
      } else {
        status[cfg.audienceKey] = false;
      }
    })
  );
  return status;
}
__name(readMembership, "readMembership");
async function handlePreferencesPost(req, env) {
  let data;
  try {
    data = await req.formData();
  } catch {
    return html(simplePage("Bad form submission.", false), 400);
  }
  const email = String(data.get("email") || "").trim().toLowerCase();
  const token = String(data.get("token") || "").trim().toLowerCase();
  if (!EMAIL_RE.test(email) || !token) return html(simplePage("Invalid request.", false), 400);
  const expected = await preferencesToken(email, env.RESEND_API_KEY);
  if (token !== expected) return html(simplePage("That preferences link is invalid or expired.", false), 400);
  let audienceMap;
  try {
    audienceMap = JSON.parse(env.RESEND_AUDIENCE_IDS);
  } catch {
    return html(simplePage("Server configuration error.", false), 500);
  }
  for (const cfg of IMPRINTS) {
    const aid = audienceMap[cfg.audienceKey];
    if (!aid) continue;
    const rawVal = data.get(cfg.audienceKey);
    const wants = rawVal === "on" || rawVal === "true" || rawVal === "1";
    try {
      if (wants) {
        await resendAddContact(env, aid, email);
      } else {
        await resendDeleteContact(env, aid, email);
      }
    } catch (e) {
      console.error(`pref update failed for ${cfg.audienceKey}`, e);
    }
    await new Promise((res) => setTimeout(res, 550));
  }
  const fresh = await readMembership(env, audienceMap, email);
  return html(preferencesPage(email, token, fresh, "\u2713 Preferences saved."), 200);
}
__name(handlePreferencesPost, "handlePreferencesPost");
function safeURL(s) {
  try {
    return new URL(s);
  } catch {
    return null;
  }
}
__name(safeURL, "safeURL");
function text(body, status = 200) {
  return new Response(body, { status, headers: { "Content-Type": "text/plain; charset=utf-8" } });
}
__name(text, "text");
function html(body, status = 200) {
  return new Response(body, { status, headers: { "Content-Type": "text/html; charset=utf-8" } });
}
__name(html, "html");
function redirectBack(referer, status) {
  if (!referer) return text(`Subscription ${status}`, 200);
  const dest = new URL(referer);
  dest.searchParams.set("subscribed", status);
  dest.hash = "";
  return Response.redirect(dest.toString(), 303);
}
__name(redirectBack, "redirectBack");
function cors(res, req, env) {
  const origin = req.headers.get("Origin") || "";
  const allowed = (env.ALLOWED_ORIGINS || "").split(",").map((s) => s.trim()).filter(Boolean);
  const allowOrigin = allowed.includes(origin) ? origin : "";
  const h = new Headers(res.headers);
  if (allowOrigin) h.set("Access-Control-Allow-Origin", allowOrigin);
  h.set("Vary", "Origin");
  h.set("Access-Control-Allow-Methods", "POST, GET, OPTIONS");
  h.set("Access-Control-Allow-Headers", "Content-Type");
  return new Response(res.body, { status: res.status, statusText: res.statusText, headers: h });
}
__name(cors, "cors");
async function isRateLimited(env, ip) {
  const key = `rl:${ip}`;
  const cur = await env.RATE_LIMIT.get(key);
  const count = cur ? parseInt(cur, 10) : 0;
  if (count >= RATE_LIMIT_MAX_PER_IP) return true;
  await env.RATE_LIMIT.put(key, String(count + 1), { expirationTtl: RATE_LIMIT_WINDOW_S });
  return false;
}
__name(isRateLimited, "isRateLimited");
async function hmacHex(message, secret, bytes = 8) {
  const enc = new TextEncoder();
  const key = await crypto.subtle.importKey(
    "raw",
    enc.encode(secret),
    { name: "HMAC", hash: "SHA-256" },
    false,
    ["sign"]
  );
  const sig = await crypto.subtle.sign("HMAC", key, enc.encode(message));
  return Array.from(new Uint8Array(sig)).slice(0, bytes).map((b) => b.toString(16).padStart(2, "0")).join("");
}
__name(hmacHex, "hmacHex");
function unsubscribeToken(email, imprintKey, secret) {
  return hmacHex(`${email}:${imprintKey}`, secret);
}
__name(unsubscribeToken, "unsubscribeToken");
function preferencesToken(email, secret) {
  return hmacHex(`${email}:preferences`, secret);
}
__name(preferencesToken, "preferencesToken");
function buildUnsubscribeUrl(email, imprintKey, token) {
  const u = new URL(WORKER_BASE + "/unsubscribe");
  u.searchParams.set("e", email);
  u.searchParams.set("i", imprintKey);
  u.searchParams.set("t", token);
  return u.toString();
}
__name(buildUnsubscribeUrl, "buildUnsubscribeUrl");
function buildPreferencesUrl(email, token) {
  const u = new URL(WORKER_BASE + "/preferences");
  u.searchParams.set("e", email);
  u.searchParams.set("t", token);
  return u.toString();
}
__name(buildPreferencesUrl, "buildPreferencesUrl");
async function resendFetch(url, init) {
  for (let attempt = 0; attempt < 3; attempt++) {
    const r = await fetch(url, init);
    if (r.status !== 429) return r;
    const retryAfter = parseInt(r.headers.get("Retry-After") || "0", 10);
    const waitMs = retryAfter > 0 ? retryAfter * 1e3 : 600 * (attempt + 1);
    await new Promise((res) => setTimeout(res, waitMs));
  }
  return fetch(url, init);
}
__name(resendFetch, "resendFetch");
async function resendAddContact(env, audienceId, email) {
  const r = await resendFetch(`https://api.resend.com/audiences/${audienceId}/contacts`, {
    method: "POST",
    headers: {
      "Authorization": `Bearer ${env.RESEND_API_KEY}`,
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ email, unsubscribed: false })
  });
  if (!r.ok && r.status !== 422) {
    throw new Error(`Resend addContact ${r.status}: ${await r.text()}`);
  }
}
__name(resendAddContact, "resendAddContact");
async function resendDeleteContact(env, audienceId, email) {
  const r = await resendFetch(
    `https://api.resend.com/audiences/${audienceId}/contacts/${encodeURIComponent(email)}`,
    {
      method: "DELETE",
      headers: { "Authorization": `Bearer ${env.RESEND_API_KEY}` }
    }
  );
  if (!r.ok && r.status !== 404) {
    throw new Error(`Resend delete ${r.status}: ${await r.text()}`);
  }
}
__name(resendDeleteContact, "resendDeleteContact");
async function resendSendWelcome(env, imprint, email) {
  const rawHtml = WELCOME_HTML[imprint.audienceKey];
  if (!rawHtml) {
    console.warn(`No welcome template for ${imprint.audienceKey}`);
    return;
  }
  const unsubT = await unsubscribeToken(email, imprint.audienceKey, env.RESEND_API_KEY);
  const prefsT = await preferencesToken(email, env.RESEND_API_KEY);
  const unsubUrl = buildUnsubscribeUrl(email, imprint.audienceKey, unsubT);
  const prefsUrl = buildPreferencesUrl(email, prefsT);
  const bodyHtml = rawHtml.replace(/\$\[FNAME\|reader\]\$/g, "there").replace(/\$\[FNAME\]\$/g, "").replace(/\$\[UNSUBSCRIBE\]\$/g, unsubUrl).replace(/\$\[UPDATEPROFILE\]\$/g, prefsUrl).replace(/\s*·\s*<a href="\$\[VIEWASWEBPAGE\]\$">[^<]*<\/a>/g, "").replace(/<a href="\$\[VIEWASWEBPAGE\]\$">[^<]*<\/a>\s*·?\s*/g, "");
  const r = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      "Authorization": `Bearer ${env.RESEND_API_KEY}`,
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      from: `${imprint.senderName} <${imprint.senderEmail}>`,
      to: email,
      subject: imprint.welcomeSubject,
      html: bodyHtml,
      headers: {
        "List-Unsubscribe": `<${unsubUrl}>, <mailto:${imprint.senderEmail}?subject=Unsubscribe>`,
        "List-Unsubscribe-Post": "List-Unsubscribe=One-Click",
        "X-Imprint": imprint.audienceKey
      }
    })
  });
  if (!r.ok) {
    throw new Error(`Resend send ${r.status}: ${await r.text()}`);
  }
}
__name(resendSendWelcome, "resendSendWelcome");
function simplePage(messageHtml, success) {
  const accent = success ? "#3a7d4e" : "#c0392b";
  return `<!doctype html>
<html lang="en"><head>
<meta charset="utf-8" />
<meta name="viewport" content="width=device-width,initial-scale=1" />
<title>${success ? "Done" : "Hmm"}</title>
<style>
  body { margin:0; padding:0; background:#fdf9ef; color:#243c2f;
         font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Inter,sans-serif;
         display:flex; align-items:center; justify-content:center; min-height:100vh; }
  .card { max-width:520px; padding:32px 28px; background:#fff;
          border-radius:14px; box-shadow:0 4px 24px rgba(0,0,0,0.06); text-align:center; }
  h1 { margin:0 0 12px; font-size:22px; color:${accent}; }
  p { margin:8px 0; line-height:1.6; font-size:15px; }
  a { color:${accent}; }
</style></head><body>
<div class="card">
  <h1>${success ? "\u2713 Done." : "Hmm."}</h1>
  <p>${messageHtml}</p>
  <p style="font-size:13px; color:#888; margin-top:24px;">
    Lantern Learn \xB7 530 E Lake Dr, Gainesville, GA 30506
  </p>
</div></body></html>`;
}
__name(simplePage, "simplePage");
function preferencesPage(email, token, status, flash) {
  const rows = IMPRINTS.map((cfg) => {
    const checked = status[cfg.audienceKey] ? " checked" : "";
    return `
      <label class="opt">
        <input type="checkbox" name="${cfg.audienceKey}"${checked} />
        <div class="opt-text">
          <div class="opt-name"><a href="${cfg.siteUrl}" target="_blank" rel="noopener">${escapeHtml(cfg.shortName)} \u2197</a></div>
          <div class="opt-blurb">${escapeHtml(cfg.blurb)}</div>
        </div>
      </label>`;
  }).join("");
  const flashBanner = flash ? `<div class="flash">${escapeHtml(flash)}</div>` : "";
  return `<!doctype html>
<html lang="en"><head>
<meta charset="utf-8" />
<meta name="viewport" content="width=device-width,initial-scale=1" />
<title>Email preferences \u2014 Lantern Learn</title>
<style>
  body { margin:0; padding:0; background:#fdf9ef; color:#243c2f;
         font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Inter,sans-serif; }
  .wrap { max-width:560px; margin:40px auto; padding:0 20px; }
  .card { background:#fff; border-radius:14px; box-shadow:0 4px 24px rgba(0,0,0,0.06);
          padding:32px 28px; }
  h1 { margin:0 0 6px; font-size:22px; font-family:'Fraunces',Georgia,serif; color:#1f2d4a; }
  .subtitle { margin:0 0 22px; color:#506e4b; font-size:14px; }
  .email { font-weight:700; color:#1f2d4a; }
  .flash { background:#e7f5ec; color:#1f6b3c; padding:10px 14px; border-radius:8px;
           margin-bottom:18px; font-size:14px; }
  .opt { display:flex; gap:14px; align-items:flex-start; padding:14px; border:1px solid #eadfbb;
         border-radius:10px; margin-bottom:10px; cursor:pointer; background:#fdfaf0; }
  .opt:hover { background:#fcf6e4; }
  .opt input { margin-top:3px; flex-shrink:0; transform:scale(1.2); accent-color:#1f2d4a; }
  .opt-text { flex:1; }
  .opt-name { font-weight:700; font-size:15px; }
  .opt-name a { color:#1f2d4a; text-decoration:none; }
  .opt-name a:hover { text-decoration:underline; }
  .opt-blurb { color:#506e4b; font-size:13px; margin-top:3px; line-height:1.5; }
  .actions { margin-top:22px; display:flex; gap:10px; align-items:center; }
  button { background:#1f2d4a; color:#fff; border:0; padding:11px 22px; font-size:15px;
           font-weight:600; border-radius:8px; cursor:pointer; }
  button:hover { background:#152033; }
  .help { color:#888; font-size:13px; margin-top:18px; line-height:1.5; }
  .footer { color:#888; font-size:12px; text-align:center; margin-top:18px; }
</style></head><body>
<div class="wrap">
  <div class="card">
    <h1>Email preferences</h1>
    <p class="subtitle">Choose which Lantern Learn imprints you'd like to hear from.<br/>
      <span class="email">${escapeHtml(email)}</span></p>
    ${flashBanner}
    <form method="POST" action="/preferences">
      <input type="hidden" name="email" value="${escapeHtml(email)}" />
      <input type="hidden" name="token" value="${escapeHtml(token)}" />
      ${rows}
      <div class="actions">
        <button type="submit">Save preferences</button>
      </div>
    </form>
    <p class="help">Saving with all four boxes unchecked is the same as unsubscribing from everything.
      You can return to this page any time using the link in any email we send you.</p>
  </div>
  <p class="footer">Lantern Learn \xB7 530 E Lake Dr, Gainesville, GA 30506</p>
</div>
</body></html>`;
}
__name(preferencesPage, "preferencesPage");
function escapeHtml(s) {
  return s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#39;");
}
__name(escapeHtml, "escapeHtml");
export {
  worker_default as default
};
//# sourceMappingURL=worker.js.map
