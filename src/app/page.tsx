"use client";

import { Award, Coffee, Heart, Leaf, Mail } from "lucide-react";
import { ThemeProvider } from "@/providers/ThemeProvider";
import NavbarLayoutFloatingOverlay from '@/components/navbar/NavbarLayoutFloatingOverlay/NavbarLayoutFloatingOverlay';
import HeroSplit from '@/components/sections/hero/HeroSplit';
import TextSplitAbout from '@/components/sections/about/TextSplitAbout';
import FeatureCardTwo from '@/components/sections/feature/FeatureCardTwo';
import ProductCardTwo from '@/components/sections/product/ProductCardTwo';
import TestimonialCardOne from '@/components/sections/testimonial/TestimonialCardOne';
import FaqSplitText from '@/components/sections/faq/FaqSplitText';
import ContactSplit from '@/components/sections/contact/ContactSplit';
import FooterBaseReveal from '@/components/sections/footer/FooterBaseReveal';

export default function Home() {
  return (
    <ThemeProvider
      defaultButtonVariant="icon-arrow"
      defaultTextAnimation="entrance-slide"
      borderRadius="sharp"
    >
      <div id="nav" data-section="nav">
        <NavbarLayoutFloatingOverlay
          navItems={[
            { name: "About", id: "about" },
            { name: "Menu", id: "product" },
            { name: "Story", id: "feature" },
            { name: "Reviews", id: "testimonial" },
            { name: "Contact", id: "contact" }
          ]}
          brandName="Brew & Bean"
          button={{
            text: "Order Now",
            href: "https://order.brewandbean.com"
          }}
        />
      </div>

      <div id="hero" data-section="hero">
        <HeroSplit
          title="Exceptional Coffee, Every Cup"
          description="Experience the perfect blend of premium beans and expert craftsmanship at Brew & Bean. From our signature roasts to handcrafted specialty drinks."
          tag="Premium Coffee"
          tagIcon={Coffee}
          buttons={[
            {
              text: "Order Now",
              href: "https://order.brewandbean.com"
            },
            {
              text: "View Menu",
              href: "product"
            }
          ]}
          imageSrc="https://images.pexels.com/photos/5198144/pexels-photo-5198144.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
          imageAlt="Cozy coffee shop interior with warm lighting"
          imagePosition="right"
        />
      </div>

      <div id="about" data-section="about">
        <TextSplitAbout
          title="Our Story"
          description={[
            "Founded in 2018, Brew & Bean began as a passion project to bring exceptional coffee to our community.",
            "We source our beans directly from sustainable farms around the world, ensuring every cup tells a story of quality and care."
          ]}
          buttons={[
            {
              text: "Learn More",
              href: "feature"
            }
          ]}
        />
      </div>

      <div id="feature" data-section="feature">
        <FeatureCardTwo
          title="What Makes Us Special"
          description="Every cup we serve reflects our commitment to quality, sustainability, and community"
          features={[
            {
              title: "Premium Beans",
              description: "Hand-selected beans from the world's finest coffee regions, roasted to perfection in small batches",
              icon: Coffee
            },
            {
              title: "Expert Craftsmanship",
              description: "Our skilled baristas are trained to extract the perfect flavors from every bean",
              icon: Award
            },
            {
              title: "Sustainable Sourcing",
              description: "Direct trade relationships with farmers ensure fair prices and environmental responsibility",
              icon: Leaf
            },
            {
              title: "Community Focus",
              description: "A welcoming space where neighbors become friends over exceptional coffee",
              icon: Heart
            }
          ]}
        />
      </div>

      <div id="product" data-section="product">
        <ProductCardTwo
          title="Signature Drinks"
          description="Discover our carefully crafted menu of premium coffee beverages"
          products={[
            {
              id: "1",
              brand: "Brew & Bean",
              name: "House Blend Espresso",
              price: "$4.50",
              rating: 5,
              reviewCount: "2.4k",
              imageSrc: "https://images.pexels.com/photos/2347380/pexels-photo-2347380.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Rich espresso shot in ceramic cup"
            },
            {
              id: "2",
              brand: "Brew & Bean",
              name: "Signature Latte",
              price: "$5.75",
              rating: 5,
              reviewCount: "3.1k",
              imageSrc: "https://images.pexels.com/photos/2559312/pexels-photo-2559312.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Latte with beautiful heart foam art"
            },
            {
              id: "3",
              brand: "Brew & Bean",
              name: "Artisan Cold Brew",
              price: "$4.25",
              rating: 5,
              reviewCount: "1.8k",
              imageSrc: "https://images.pexels.com/photos/1695052/pexels-photo-1695052.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Cold brew coffee with ice"
            }
          ]}
        />
      </div>

      <div id="testimonial" data-section="testimonial">
        <TestimonialCardOne
          title="What Our Customers Say"
          description="Real feedback from coffee lovers who choose Brew & Bean"
          testimonials={[
            {
              id: "1",
              name: "Sarah Mitchell",
              role: "Marketing Director",
              company: "TechStart Inc",
              rating: 5,
              imageSrc: "https://images.pexels.com/photos/5244025/pexels-photo-5244025.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Sarah Mitchell smiling"
            },
            {
              id: "2",
              name: "James Rodriguez",
              role: "Freelance Designer",
              company: "Creative Studios",
              rating: 5,
              imageSrc: "https://images.pexels.com/photos/16756653/pexels-photo-16756653.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "James Rodriguez with coffee"
            },
            {
              id: "3",
              name: "Emily Chen",
              role: "Local Business Owner",
              company: "Chen & Associates",
              rating: 5,
              imageSrc: "https://images.pexels.com/photos/6973116/pexels-photo-6973116.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Emily Chen friendly smile"
            },
            {
              id: "4",
              name: "Michael Thompson",
              role: "Software Engineer",
              company: "Innovation Labs",
              rating: 5,
              imageSrc: "https://images.pexels.com/photos/12885861/pexels-photo-12885861.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Michael Thompson professional"
            }
          ]}
        />
      </div>

      <div id="faq" data-section="faq">
        <FaqSplitText
          sideTitle="Frequently Asked Questions"
          sideDescription="Everything you need to know about our coffee and services"
          faqs={[
            {
              id: "1",
              title: "What makes your coffee special?",
              content: "We source premium beans directly from sustainable farms and roast them in small batches to ensure peak freshness and flavor in every cup."
            },
            {
              id: "2",
              title: "Do you offer dairy-free alternatives?",
              content: "Absolutely! We offer oat milk, almond milk, soy milk, and coconut milk as alternatives to dairy for all our beverages."
            },
            {
              id: "3",
              title: "Can I order online for pickup?",
              content: "Yes, you can place orders through our website or mobile app for convenient pickup. Orders are typically ready within 10-15 minutes."
            },
            {
              id: "4",
              title: "Do you offer coffee subscriptions?",
              content: "We offer monthly coffee bean subscriptions with free delivery. Choose from our signature blends or rotate through different single-origin options."
            }
          ]}
        />
      </div>

      <div id="contact" data-section="contact">
        <ContactSplit
          tag="Stay Connected"
          tagIcon={Mail}
          title="Never Miss Our Latest Blends"
          description="Subscribe to our newsletter for updates on new coffee arrivals, seasonal specials, and exclusive member offers."
          inputPlaceholder="Enter your email address"
          buttonText="Subscribe"
          termsText="We respect your privacy. Unsubscribe anytime with one click."
          imageSrc="https://images.pexels.com/photos/1137745/pexels-photo-1137745.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
          imageAlt="Modern coffee shop interior with counter"
          mediaPosition="right"
        />
      </div>

      <div id="footer" data-section="footer">
        <FooterBaseReveal
          columns={[
            {
              title: "Menu",
              items: [
                { label: "Espresso Drinks", href: "product" },
                { label: "Cold Brew", href: "product" },
                { label: "Specialty Lattes", href: "product" },
                { label: "Seasonal Specials", href: "product" }
              ]
            },
            {
              title: "About",
              items: [
                { label: "Our Story", href: "about" },
                { label: "Coffee Origins", href: "feature" },
                { label: "Sustainability", href: "feature" },
                { label: "Careers", href: "https://careers.brewandbean.com" }
              ]
            },
            {
              title: "Contact",
              items: [
                { label: "Visit Us", href: "contact" },
                { label: "Order Online", href: "https://order.brewandbean.com" },
                { label: "Catering", href: "https://catering.brewandbean.com" },
                { label: "Support", href: "contact" }
              ]
            }
          ]}
          copyrightText="© 2025 | Brew & Bean Coffee"
        />
      </div>
    </ThemeProvider>
  );
}