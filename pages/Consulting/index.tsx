import React from "react";
import Image from "next/image";
import ServiceSection from "./service-section/service-setion";
import { motion } from "framer-motion";

const fadeInVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 1 } },
};
const ConsultingPage: React.FC = () => {
  return (
    <div className="bg-gray-100 min-h-screen ">
      <div className="mx-auto  px-6 lg:px-[20rem] pt-20 lg:pt-28 pb-16   mt-10">
        <h1 className="text-4xl font-bold mb-8 text-center">
          CONSULTING SERVICES
        </h1>
        <div className="border-t-2 border-gray-300 my-8"></div>
        <p className="text-lg mb-8 text-center">
          Whether you’re seeking support for a one time project or ongoing
          support we’ve got you covered with experience across industries like
          retail, beauty, entertainment, education, hospitality, food +
          beverage, healthcare, legal, construction and more. From a small one
          team show to a large enterprise size production, let us be a resource
          to propel your growth.
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
              description="Our communications strategy services are designed to help your organization craft and deliver compelling messages that resonate with your audience, build trust, and drive meaningful engagement. We work closely with you to develop a tailored approach that aligns with your brand’s values, goals, and unique story."
              offers={[
                "Brand Messaging: Define your core message, voice, and tone to ensure consistency and authenticity across all platforms.",
                "Audience Analysis: Identify and understand your target audience to create messages that truly connect and inspire action.",
                "Content Strategy: Develop a roadmap for creating impactful content that supports your business objectives and strengthens your brand narrative.",
                "Crisis Communication: Prepare for and navigate challenging situations with clear, empathetic, and effective communication plans.",
                "Internal Communications: Foster alignment and engagement within your team through transparent and inspiring internal messaging.",
                "Channel Optimization: Determine the best platforms and tactics to reach your audience, whether through social media, PR, email, or other channels.",
              ]}
              approach="We take a creative, values-based approach to communications, ensuring your strategy not only reflects your brand’s identity but also empowers your organization to stand out in a crowded marketplace. By blending strategic thinking with authentic storytelling, we help you communicate with clarity, confidence, and purpose."
              imageUrl="/images/consulting/communications.jpg"
              reverse={false}
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
              description="Our marketing and storytelling services are designed to help your business stand out by crafting and sharing a narrative that captivates your audience, builds emotional connections, and drives meaningful engagement. We believe that every brand has a unique story to tell, and we specialize in bringing that story to life through creative, authentic, and strategic marketing."
              offers={[
                "Brand Story Development: Uncover the heart of your brand and create a compelling narrative that reflects your values, mission, and vision.",
                "Content Creation: Develop high-quality, engaging content—from blog posts and social media campaigns to videos and visuals—that tells your story and resonates with your audience.",
                "Campaign Strategy: Design and execute marketing campaigns that align with your goals, whether it’s increasing brand awareness, driving sales, or building customer loyalty.",
                "Audience Engagement: Identify your target audience and craft messages that speak directly to their needs, desires, and pain points.",
                "Storytelling Workshops: Empower your team with the tools and techniques to become confident storytellers, ensuring your brand’s voice remains consistent and impactful.",
                "Digital Marketing: Leverage the power of digital platforms—social media, email, SEO, and more—to amplify your story and reach the right people at the right time.",
              ]}
              approach="We take a values-based, creative approach to marketing and storytelling, ensuring your brand’s message is not only heard but felt. By blending strategic thinking with authentic storytelling, we help you connect with your audience on a deeper level, turning customers into advocates and ideas into action."
              imageUrl="/images/consulting/marketing.jpg"
              reverse={true}
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
              description="Our graphic design services are crafted to help your brand visually communicate its unique story, values, and personality. We believe that powerful design goes beyond aesthetics—it’s about creating meaningful connections with your audience and leaving a lasting impression. Whether you need a complete brand overhaul or a single standout piece, we’re here to bring your vision to life with creativity and precision."
              offers={[
                "Brand Identity Design: Develop a cohesive visual identity, including logos, color palettes, typography, and brand guidelines that reflect your essence and resonate with your audience.",
                "Marketing Materials: Design eye-catching brochures, flyers, posters, and banners that align with your brand and effectively communicate your message.",
                "Digital Design: Create engaging social media graphics, website elements, email templates, and digital ads that captivate and convert.",
                "Presentation/Deck Design: Transform your ideas into visually compelling presentations that inspire and inform, whether for internal meetings, client pitches, or conferences.",
                "Illustration & Custom Art: Add a unique touch to your brand with custom illustrations or artwork that sets you apart and reinforces your identity.",
              ]}
              approach="We take a collaborative, values-driven approach to design, ensuring every element we create aligns with your brand’s mission and vision. By combining strategic thinking with artistic flair, we deliver designs that are not only visually stunning but also purposeful and impactful."
              imageUrl="/images/consulting/graphic-design.jpg"
              reverse={false}
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
              description="Our brand activations and event planning services are designed to create unforgettable experiences that bring your brand to life and forge deep connections with your audience. Whether it’s a product launch, pop-up event, or immersive experience, we specialize in crafting moments that captivate, engage, and leave a lasting impression."
              offers={[
                "Concept Development: Brainstorm and design unique, on-brand activation ideas that align with your goals and resonate with your target audience.",
                "Event Planning & Execution: Manage every detail of your event, from venue selection and logistics to vendor coordination and on-site management, ensuring a seamless experience.",
                "Immersive Experiences: Create interactive, multi-sensory experiences that immerse attendees in your brand’s story and values.",
                "Pop-Up Activations: Design temporary, attention-grabbing pop-ups that generate buzz, drive foot traffic, and create shareable moments.",
                "Digital & Hybrid Events: Plan and execute virtual or hybrid events that engage remote audiences through innovative technology and creative programming.",
                "Sponsorship Integration: Seamlessly integrate sponsors and partners into your activations, adding value for all stakeholders.",
                "Post-Event Engagement: Develop strategies to extend the impact of your activation, from social media campaigns to follow-up content that keeps the conversation going.",
              ]}
              approach="We take a creative, detail-oriented, and audience-focused approach to brand activations and event planning. By blending strategic thinking with innovative design and flawless execution, we ensure your event not only meets but exceeds expectations. Our goal is to create experiences that spark emotion, build community, and amplify your brand’s presence."
              imageUrl="/images/consulting/event-planning.jpg"
              reverse={true}
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
              description="Our brand strategy services are designed to help you define, refine, and elevate your brand’s identity, positioning, and impact in the marketplace. We believe that a strong brand is more than just a logo or a tagline—it’s the heart and soul of your business, the story you tell, and the emotional connection you build with your audience. Through a thoughtful, values-based approach, we help you create a brand that stands out, resonates deeply, and drives long-term success."
              offers={[
                "Brand Discovery: Dive deep into your business’s core values, mission, and vision to uncover what makes your brand unique and meaningful.",
                "Brand Positioning: Define your place in the market, identify your target audience, and craft a compelling value proposition that sets you apart from competitors.",
                "Brand Identity Development: Create a cohesive visual and verbal identity, including logos, color palettes, typography, messaging, and tone of voice, that reflects your essence and resonates with your audience.",
                "Brand Storytelling: Develop a narrative that authentically communicates your brand’s journey, purpose, and impact, fostering emotional connections with your customers.",
                "Brand Architecture: Streamline and structure your brand portfolio, ensuring clarity and consistency across products, services, or sub-brands.",
                "Brand Experience Design: Map out every touchpoint of your customer journey, ensuring your brand delivers a consistent, memorable, and impactful experience at every interaction.",
              ]}
              approach="We take a holistic, creative, and values-driven approach to brand strategy, ensuring your brand is not only visually compelling but also strategically sound. By blending insights, storytelling, and design, we help you build a brand that inspires trust, loyalty, and growth."
              imageUrl="/images/consulting/brand-strategy.jpg"
              reverse={false}
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
              description="Our personal branding services are designed to help you define, develop, and amplify your unique professional identity. In today’s competitive landscape, your personal brand is your most powerful asset—it’s how you stand out, build trust, and create opportunities. Whether you’re an entrepreneur, executive, or creative professional, we’ll work with you to craft a personal brand that authentically reflects your values, expertise, and aspirations."
              offers={[
                "Brand Discovery: Uncover your core values, strengths, and unique differentiators to create a personal brand that truly represents who you are and what you stand for.",
                "Brand Positioning: Define your niche, target audience, and key messaging to establish yourself as a thought leader or go-to expert in your field.",
                "Visual Identity: Develop a cohesive and professional visual identity, including headshots, color palettes, typography, and design elements that reflect your personal brand.",
                "Online Presence: Optimize your digital footprint, including LinkedIn, social media profiles, and personal websites, to ensure consistency and impact across all platforms.",
                "Content Strategy: Create a plan for sharing your expertise through blogs, articles, videos, or social media posts that reinforce your brand and engage your audience.",
                "Networking & Visibility: Develop strategies to increase your visibility, build meaningful connections, and position yourself for speaking engagements, media opportunities, or collaborations.",
              ]}
              approach="We take a personalized, values-driven approach to personal branding, ensuring your brand is authentic, compelling, and aligned with your goals. By combining strategic insights with creative execution, we help you build a personal brand that opens doors, fosters trust, and amplifies your influence."
              imageUrl="/images/consulting/personal-branding.jpg"
              reverse={true}
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
              description="Our Diversity, Equity, and Inclusion (DEI) services are designed to help organizations build more inclusive, equitable, and thriving workplaces. We believe that diversity is a strength, and fostering an environment where everyone feels valued, respected, and empowered is essential for long-term success. Through tailored strategies and actionable insights, we guide businesses in creating meaningful change that benefits both their teams and their bottom line."
              offers={[
                "DEI Audits & Assessments: Conduct comprehensive reviews of your organization’s policies, practices, and culture to identify areas for improvement and growth.",
                "Strategic DEI Planning: Develop customized DEI strategies and roadmaps that align with your organization’s values, goals, and unique needs.",
                "Training & Workshops: Facilitate engaging, interactive sessions on topics such as unconscious bias, inclusive leadership, cultural competency, and allyship to empower your team.",
                "Inclusive Recruitment & Retention: Design strategies to attract, hire, and retain diverse talent, ensuring your workforce reflects the communities you serve.",
                "Employee Resource Groups (ERGs): Support the creation and growth of ERGs to foster belonging, amplify underrepresented voices, and drive cultural change.",
                "Policy Review & Development: Help you create and implement policies that promote equity and inclusion across all levels of your organization.",
                "Metrics & Accountability: Establish measurable goals and track progress to ensure your DEI initiatives are effective and sustainable.",
              ]}
              approach="We take a holistic, empathetic, and action-oriented approach to DEI, recognizing that every organization’s journey is unique. By combining data-driven insights with practical solutions, we help you create a culture where diversity is celebrated, equity is prioritized, and inclusion is woven into the fabric of your organization."
              imageUrl="/images/consulting/dei.jpg"
              reverse={false}
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
              description="Our Gen Z consumer strategy services are designed to help your brand connect with one of the most influential and dynamic generations today. Gen Z values authenticity, inclusivity, and purpose, and they expect brands to align with their beliefs and lifestyles. We specialize in crafting strategies that resonate with this unique audience, helping you build meaningful relationships and drive long-term loyalty."
              offers={[
                "Gen Z Insights & Research: Dive deep into the values, behaviors, and preferences of Gen Z to understand what drives their decisions and how your brand can authentically engage with them.",
                "Brand Alignment: Ensure your brand’s mission, values, and messaging align with Gen Z’s expectations for transparency, social responsibility, and inclusivity.",
                "Content & Social Media Strategy: Develop engaging, platform-specific content that speaks Gen Z’s language, leveraging trends, humor, and storytelling to capture their attention.",
                "Experiential Marketing: Create immersive, interactive experiences—both online and offline—that resonate with Gen Z’s desire for authenticity and connection.",
                "Influencer & Community Partnerships: Collaborate with Gen Z influencers and micro-influencers who authentically represent your brand and can amplify your message to their engaged audiences.",
                "Purpose-Driven Campaigns: Design campaigns that highlight your brand’s commitment to social and environmental causes, aligning with Gen Z’s passion for making a positive impact.",
              ]}
              approach="We take a data-driven, creative, and values-based approach to Gen Z consumer strategy, ensuring your brand not only captures their attention but also earns their trust and loyalty. By blending cultural insights with innovative marketing tactics, we help you build a genuine connection with this influential generation."
              imageUrl="/images/consulting/gen-z.jpg"
              reverse={true}
            />
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default ConsultingPage;
