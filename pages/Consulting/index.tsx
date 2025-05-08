import { motion } from "framer-motion";
import Head from "next/head";
import Image from "next/image";
import React from "react";
import ServiceSection from "./service-section/service-setion";
import Header from "../components/Header";

const ConsultingPage: React.FC = () => {
  return (
    <>
      <Head>
        <title>highkey consulting</title>
        <link rel="icon" href="/ico-feather.ico" sizes="48x48" />
      </Head>

      <Header title="Consulting Services" />

      <div className="flex justify-center items-center  bg-gray-100 ">
        <div className="mx-auto  px-6 lg:px-[5rem] 2xl:px-[17rem] pt-20  ">
          <p className="text-xl mb-8 text-center">
            Whether you’re seeking support for a one time project or ongoing
            support we’ve got you covered with experience across industries like
            retail, beauty, entertainment, education, hospitality, food +
            beverage, healthcare, legal, construction and more. From a small one
            team show to a large enterprise size production, let us be a
            resource to propel your growth.
          </p>

          <div className="space-y-16">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{
                opacity: 1,
                transition: { duration: 1 },
              }}
              viewport={{ once: true }}
            >
              <ServiceSection
                title="COMMUNICATIONS STRATEGY"
                description="We offer customized communication strategy services to help your organization create impactful messages that connect with your audience, build trust, and encourage engagement—aligned with your brand’s values, goals, and story."
                // offers={[
                //   "Brand Messaging: Define your core message, voice, and tone to ensure consistency and authenticity across all platforms.",
                //   "Audience Analysis: Identify and understand your target audience to create messages that truly connect and inspire action.",
                //   "Content Strategy: Develop a roadmap for creating impactful content that supports your business objectives and strengthens your brand narrative.",
                //   "Crisis Communication: Prepare for and navigate challenging situations with clear, empathetic, and effective communication plans.",
                //   "Internal Communications: Foster alignment and engagement within your team through transparent and inspiring internal messaging.",
                //   "Channel Optimization: Determine the best platforms and tactics to reach your audience, whether through social media, PR, email, or other channels.",
                // ]}
                // approach="We take a creative, values-based approach to communications, ensuring your strategy not only reflects your brand’s identity but also empowers your organization to stand out in a crowded marketplace. By blending strategic thinking with authentic storytelling, we help you communicate with clarity, confidence, and purpose."
                imageUrl="/images/services/strategy.jpg"
                reverse={false}
                url="/Consulting/communications-strategy"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{
                opacity: 1,
                transition: { duration: 1 },
              }}
              viewport={{ once: true }}
            >
              <ServiceSection
                title="MARKETING/STORYTELLING"
                description="We help your business stand out by crafting authentic marketing and storytelling strategies that captivate your audience, build emotional connections, and bring your unique brand story to life."
                // offers={[
                //   "Brand Story Development: Uncover the heart of your brand and create a compelling narrative that reflects your values, mission, and vision.",
                //   "Content Creation: Develop high-quality, engaging content—from blog posts and social media campaigns to videos and visuals—that tells your story and resonates with your audience.",
                //   "Campaign Strategy: Design and execute marketing campaigns that align with your goals, whether it’s increasing brand awareness, driving sales, or building customer loyalty.",
                //   "Audience Engagement: Identify your target audience and craft messages that speak directly to their needs, desires, and pain points.",
                //   "Storytelling Workshops: Empower your team with the tools and techniques to become confident storytellers, ensuring your brand’s voice remains consistent and impactful.",
                //   "Digital Marketing: Leverage the power of digital platforms—social media, email, SEO, and more—to amplify your story and reach the right people at the right time.",
                // ]}
                // approach="We take a values-based, creative approach to marketing and storytelling, ensuring your brand’s message is not only heard but felt. By blending strategic thinking with authentic storytelling, we help you connect with your audience on a deeper level, turning customers into advocates and ideas into action."
                imageUrl="/images/services/marketing.jpg"
                reverse={true}
                url="/Consulting/marketing-storytelling"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{
                opacity: 1,
                transition: { duration: 1 },
              }}
              viewport={{ once: true }}
            >
              <ServiceSection
                title="GRAPHIC DESIGN"
                description="We create graphic designs that visually express your brand’s story and values, forging meaningful connections and lasting impressions—whether through a full rebrand or a single standout piece."
                // offers={[
                //   "Brand Identity Design: Develop a cohesive visual identity, including logos, color palettes, typography, and brand guidelines that reflect your essence and resonate with your audience.",
                //   "Marketing Materials: Design eye-catching brochures, flyers, posters, and banners that align with your brand and effectively communicate your message.",
                //   "Digital Design: Create engaging social media graphics, website elements, email templates, and digital ads that captivate and convert.",
                //   "Presentation/Deck Design: Transform your ideas into visually compelling presentations that inspire and inform, whether for internal meetings, client pitches, or conferences.",
                //   "Illustration & Custom Art: Add a unique touch to your brand with custom illustrations or artwork that sets you apart and reinforces your identity.",
                // ]}
                // approach="We take a collaborative, values-driven approach to design, ensuring every element we create aligns with your brand’s mission and vision. By combining strategic thinking with artistic flair, we deliver designs that are not only visually stunning but also purposeful and impactful."
                imageUrl="/images/services/event.jpg"
                reverse={false}
                url="/Consulting/graphic-design"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{
                opacity: 1,
                transition: { duration: 1 },
              }}
              viewport={{ once: true }}
            >
              <ServiceSection
                title="BRAND ACTIVATIONS AND EVENT PLANNING"
                description="We design brand activations and events that create memorable experiences, bringing your brand to life and building lasting connections through engaging and immersive moments."
                // offers={[
                //   "Concept Development: Brainstorm and design unique, on-brand activation ideas that align with your goals and resonate with your target audience.",
                //   "Event Planning & Execution: Manage every detail of your event, from venue selection and logistics to vendor coordination and on-site management, ensuring a seamless experience.",
                //   "Immersive Experiences: Create interactive, multi-sensory experiences that immerse attendees in your brand’s story and values.",
                //   "Pop-Up Activations: Design temporary, attention-grabbing pop-ups that generate buzz, drive foot traffic, and create shareable moments.",
                //   "Digital & Hybrid Events: Plan and execute virtual or hybrid events that engage remote audiences through innovative technology and creative programming.",
                //   "Sponsorship Integration: Seamlessly integrate sponsors and partners into your activations, adding value for all stakeholders.",
                //   "Post-Event Engagement: Develop strategies to extend the impact of your activation, from social media campaigns to follow-up content that keeps the conversation going.",
                // ]}
                // approach="We take a creative, detail-oriented, and audience-focused approach to brand activations and event planning. By blending strategic thinking with innovative design and flawless execution, we ensure your event not only meets but exceeds expectations. Our goal is to create experiences that spark emotion, build community, and amplify your brand’s presence."
                imageUrl="/images/services/3.jpg"
                reverse={true}
                postionImage="top"
                url="/Consulting/brand-activations-event-planning"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{
                opacity: 1,
                transition: { duration: 1 },
              }}
              viewport={{ once: true }}
            >
              <ServiceSection
                title="BRAND STRATEGY"
                description="We help you define and elevate your brand’s identity and impact through a thoughtful, values-driven strategy that builds strong emotional connections and long-term success."
                // offers={[
                //   "Brand Discovery: Dive deep into your business’s core values, mission, and vision to uncover what makes your brand unique and meaningful.",
                //   "Brand Positioning: Define your place in the market, identify your target audience, and craft a compelling value proposition that sets you apart from competitors.",
                //   "Brand Identity Development: Create a cohesive visual and verbal identity, including logos, color palettes, typography, messaging, and tone of voice, that reflects your essence and resonates with your audience.",
                //   "Brand Storytelling: Develop a narrative that authentically communicates your brand’s journey, purpose, and impact, fostering emotional connections with your customers.",
                //   "Brand Architecture: Streamline and structure your brand portfolio, ensuring clarity and consistency across products, services, or sub-brands.",
                //   "Brand Experience Design: Map out every touchpoint of your customer journey, ensuring your brand delivers a consistent, memorable, and impactful experience at every interaction.",
                // ]}
                // approach="We take a holistic, creative, and values-driven approach to brand strategy, ensuring your brand is not only visually compelling but also strategically sound. By blending insights, storytelling, and design, we help you build a brand that inspires trust, loyalty, and growth."
                imageUrl="/images/services/brand.jpg"
                reverse={false}
                url="/Consulting/brand-strategy"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{
                opacity: 1,
                transition: { duration: 1 },
              }}
              viewport={{ once: true }}
            >
              <ServiceSection
                title="PERSONAL BRANDING"
                description="We help you define and amplify your personal brand to stand out, build trust, and unlock opportunities—authentically reflecting your values, expertise, and goals"
                // offers={[
                //   "Brand Discovery: Uncover your core values, strengths, and unique differentiators to create a personal brand that truly represents who you are and what you stand for.",
                //   "Brand Positioning: Define your niche, target audience, and key messaging to establish yourself as a thought leader or go-to expert in your field.",
                //   "Visual Identity: Develop a cohesive and professional visual identity, including headshots, color palettes, typography, and design elements that reflect your personal brand.",
                //   "Online Presence: Optimize your digital footprint, including LinkedIn, social media profiles, and personal websites, to ensure consistency and impact across all platforms.",
                //   "Content Strategy: Create a plan for sharing your expertise through blogs, articles, videos, or social media posts that reinforce your brand and engage your audience.",
                //   "Networking & Visibility: Develop strategies to increase your visibility, build meaningful connections, and position yourself for speaking engagements, media opportunities, or collaborations.",
                // ]}
                // approach="We take a personalized, values-driven approach to personal branding, ensuring your brand is authentic, compelling, and aligned with your goals. By combining strategic insights with creative execution, we help you build a personal brand that opens doors, fosters trust, and amplifies your influence."
                imageUrl="/images/services/personal_brand.jpg"
                reverse={true}
                url="/Consulting/personal-branding"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{
                opacity: 1,
                transition: { duration: 1 },
              }}
              viewport={{ once: true }}
            >
              <ServiceSection
                title="DIVERSITY, EQUITY + INCLUSION"
                description="We help organizations create inclusive and equitable workplaces through tailored DEI strategies, fostering environments where everyone feels valued and empowered for long-term success."
                // offers={[
                //   "DEI Audits & Assessments: Conduct comprehensive reviews of your organization’s policies, practices, and culture to identify areas for improvement and growth.",
                //   "Strategic DEI Planning: Develop customized DEI strategies and roadmaps that align with your organization’s values, goals, and unique needs.",
                //   "Training & Workshops: Facilitate engaging, interactive sessions on topics such as unconscious bias, inclusive leadership, cultural competency, and allyship to empower your team.",
                //   "Inclusive Recruitment & Retention: Design strategies to attract, hire, and retain diverse talent, ensuring your workforce reflects the communities you serve.",
                //   "Employee Resource Groups (ERGs): Support the creation and growth of ERGs to foster belonging, amplify underrepresented voices, and drive cultural change.",
                //   "Policy Review & Development: Help you create and implement policies that promote equity and inclusion across all levels of your organization.",
                //   "Metrics & Accountability: Establish measurable goals and track progress to ensure your DEI initiatives are effective and sustainable.",
                // ]}
                // approach="We take a holistic, empathetic, and action-oriented approach to DEI, recognizing that every organization’s journey is unique. By combining data-driven insights with practical solutions, we help you create a culture where diversity is celebrated, equity is prioritized, and inclusion is woven into the fabric of your organization."
                imageUrl="/images/services/lgtb.jpg"
                reverse={false}
                url="/Consulting/diversity-equity-inclusion"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{
                opacity: 1,
                transition: { duration: 1 },
              }}
              viewport={{ once: true }}
            >
              <ServiceSection
                title="GEN Z CONSUMER STRATEGY"
                description="We craft strategies that help your brand connect with Gen Z by aligning with their values of authenticity, inclusivity, and purpose—building meaningful relationships and lasting loyalty."
                // offers={[
                //   "Gen Z Insights & Research: Dive deep into the values, behaviors, and preferences of Gen Z to understand what drives their decisions and how your brand can authentically engage with them.",
                //   "Brand Alignment: Ensure your brand’s mission, values, and messaging align with Gen Z’s expectations for transparency, social responsibility, and inclusivity.",
                //   "Content & Social Media Strategy: Develop engaging, platform-specific content that speaks Gen Z’s language, leveraging trends, humor, and storytelling to capture their attention.",
                //   "Experiential Marketing: Create immersive, interactive experiences—both online and offline—that resonate with Gen Z’s desire for authenticity and connection.",
                //   "Influencer & Community Partnerships: Collaborate with Gen Z influencers and micro-influencers who authentically represent your brand and can amplify your message to their engaged audiences.",
                //   "Purpose-Driven Campaigns: Design campaigns that highlight your brand’s commitment to social and environmental causes, aligning with Gen Z’s passion for making a positive impact.",
                // ]}
                // approach="We take a data-driven, creative, and values-based approach to Gen Z consumer strategy, ensuring your brand not only captures their attention but also earns their trust and loyalty. By blending cultural insights with innovative marketing tactics, we help you build a genuine connection with this influential generation."
                imageUrl="/images/services/gen_z.jpg"
                reverse={true}
                postionImage="top"
                url="/Consulting/gen-z-consumer-strategy"
              />
            </motion.div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ConsultingPage;
