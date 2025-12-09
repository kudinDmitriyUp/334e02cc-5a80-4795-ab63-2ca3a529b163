"use client"

import { Crown, Gift, Mail, MapPin, Phone, Sparkles, Star } from "lucide-react";
import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarLayoutFloatingOverlay from '@/components/navbar/NavbarLayoutFloatingOverlay/NavbarLayoutFloatingOverlay';
import HeroSplitGlobeKpi from '@/components/sections/hero/HeroSplitGlobeKpi';
import FeatureCardTwenty from '@/components/sections/feature/FeatureCardTwenty';
import ProductCardSeven from '@/components/sections/product/ProductCardSeven';
import PricingCardFive from '@/components/sections/pricing/PricingCardFive';
import TestimonialCardTwo from '@/components/sections/testimonial/TestimonialCardTwo';
import FaqDouble from '@/components/sections/faq/FaqDouble';
import FooterSplit from '@/components/sections/footer/FooterSplit';

export default function LandingPage() {
  return (
    <ThemeProvider
      defaultButtonVariant="icon-arrow"
      defaultTextAnimation="entrance-slide"
      borderRadius="rounded"
      contentWidth="medium"
      sizing="mediumSizeExtraLargeSpacing"
      background="dotGrid"
      cardStyle="gradient-radial"
      primaryButtonStyle="flat"
      secondaryButtonStyle="outline"
      headingFontWeight="extrabold"
    >
      <div id="nav" data-section="nav">
        <NavbarLayoutFloatingOverlay
          brandName="Silly Bands Store"
          navItems={[
            { name: "Home", id: "hero" },
            { name: "Products", id: "products" },
            { name: "Featured", id: "featured" },
            { name: "FAQ", id: "faq" },
            { name: "Contact", id: "contact" }
          ]}
          button={{
            text: "Shop Now",
            href: "#products"
          }}
        />
      </div>

      <div id="hero" data-section="hero">
        <HeroSplitGlobeKpi
          title="Collect, Trade, Have Fun with Silly Bands"
          description="Discover our amazing collection of colorful silly bands in all shapes and sizes. Build your collection today with exclusive designs available nowhere else."
          kpis={[
            { value: "50K+", label: "Happy Collectors" },
            { value: "500+", label: "Unique Designs" },
            { value: "Free", label: "Fast Shipping" }
          ]}
          tag="Ultimate Collection"
          tagIcon={Sparkles}
          buttons={[
            { text: "Browse Collection", href: "#products" },
            { text: "View Bundles", href: "#pricing" }
          ]}
          globePosition="right"
        />
      </div>

      <div id="featured" data-section="featured">
        <FeatureCardTwenty
          title="Premium Silly Band Collections"
          description="Explore our hand-curated selection of premium silly bands featuring vibrant colors, unique shapes, and collectible designs. Each set is carefully packaged to bring joy to collectors of all ages."
          images={[
            { id: 1, imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1765297963441-okt3t0wa.jpg", imageAlt: "Colorful silly band bracelets" },
            { id: 2, imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1765297964155-nb4ybtop.jpg", imageAlt: "Rainbow silicone bands" },
            { id: 3, imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1765297964773-ozmattvb.jpg", imageAlt: "Fun animal shaped bands" }
          ]}
          tag="Featured Collection"
          tagIcon={Star}
          buttons={[
            { text: "Shop Featured", href: "#products" }
          ]}
          textboxLayout="default"
          useInvertedBackground="noInvert"
        />
      </div>

      <div id="products" data-section="products">
        <ProductCardSeven
          title="Shop Our Collection"
          description="Browse thousands of silly bands in our complete online store. Find rare designs, limited editions, and exclusive items."
          products={[
            {
              id: "1",
              name: "Neon Starter Pack",
              price: "$9.99",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1765297965608-fo459wo4.jpg",
              imageAlt: "Neon silly bands set"
            },
            {
              id: "2",
              name: "Animal Kingdom Set",
              price: "$12.99",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1765297966441-hhja4vx2.jpg",
              imageAlt: "Animal shaped silly bands"
            },
            {
              id: "3",
              name: "Glow Party Bundle",
              price: "$14.99",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1765297966956-trr61asi.jpg",
              imageAlt: "Glow in dark bands"
            },
            {
              id: "4",
              name: "Shimmer Collection",
              price: "$11.99",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1765297967486-9dwn9lt4.jpg",
              imageAlt: "Metallic shimmer bands"
            }
          ]}
          gridVariant="uniform-all-items-equal"
          animationType="slide-up"
          containerStyle="default"
          textboxLayout="default"
          useInvertedBackground="noInvert"
          carouselMode="buttons"
        />
      </div>

      <div id="pricing" data-section="pricing">
        <PricingCardFive
          title="Bundle Deals"
          description="Get more silly bands and save big with our exclusive bundle packages"
          plans={[
            {
              id: "starter",
              tag: "Starter Pack",
              tagIcon: Gift,
              price: "$24.99",
              period: "/pack",
              description: "Perfect for new collectors getting started with their collection",
              button: {
                text: "Add to Cart",
                href: "#contact"
              },
              featuresTitle: "What's Included:",
              features: [
                "100 assorted silly bands",
                "Collector guide",
                "Free shipping",
                "30-day guarantee"
              ]
            },
            {
              id: "collector",
              tag: "Collector Pro",
              tagIcon: Sparkles,
              price: "$49.99",
              period: "/pack",
              description: "For serious collectors who want rare and exclusive designs",
              button: {
                text: "Add to Cart",
                href: "#contact"
              },
              featuresTitle: "What's Included:",
              features: [
                "250 premium silly bands",
                "5 rare limited editions",
                "Deluxe storage case",
                "Free shipping worldwide",
                "Lifetime collector status"
              ]
            },
            {
              id: "ultimate",
              tag: "Ultimate Collection",
              tagIcon: Crown,
              price: "$99.99",
              period: "/pack",
              description: "The complete silly bands experience for the ultimate fan",
              button: {
                text: "Add to Cart",
                href: "#contact"
              },
              featuresTitle: "What's Included:",
              features: [
                "500 assorted silly bands",
                "10 exclusive rare designs",
                "Premium storage organizer",
                "Trading guide book",
                "Priority support",
                "Free worldwide shipping",
                "Quarterly new releases"
              ]
            }
          ]}
          variant="card"
          animationType="slide-up"
          textboxLayout="default"
          useInvertedBackground="noInvert"
        />
      </div>

      <div id="testimonials" data-section="testimonials">
        <TestimonialCardTwo
          title="What Collectors Say"
          description="Join thousands of happy silly band collectors who trust us for quality and selection"
          testimonials={[
            {
              id: "1",
              name: "Emma Johnson",
              role: "Collector",
              testimonial: "The best collection I've seen online! Fast shipping and amazing quality bands. I found rare designs I've been searching for everywhere.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1765297968160-gm90amhc.jpg",
              imageAlt: "Emma Johnson"
            },
            {
              id: "2",
              name: "Marcus Chen",
              role: "Collector",
              testimonial: "This store is incredible. The selection is massive and the prices are fair. Already ordered three times and recommended to all my friends.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1765297968982-9qxxe5dg.jpg",
              imageAlt: "Marcus Chen"
            },
            {
              id: "3",
              name: "Sophie Martinez",
              role: "Serious Collector",
              testimonial: "Finally found a reliable place to get authentic silly bands. Their customer service is fantastic and every order arrives perfect.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1765297969696-gnkxb4dl.jpg",
              imageAlt: "Sophie Martinez"
            },
            {
              id: "4",
              name: "Alex Williams",
              role: "Collector",
              testimonial: "Love the bundles! Great value for money and the exclusive designs are worth every penny. Shipping was incredibly fast.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1765297970412-778yr6x4.jpg",
              imageAlt: "Alex Williams"
            },
            {
              id: "5",
              name: "Jordan Taylor",
              role: "Collector",
              testimonial: "The most organized silly band store ever. Easy to browse, great descriptions, and the bands are exactly as pictured. Perfect experience.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1765297970909-h53v4e3v.jpg",
              imageAlt: "Jordan Taylor"
            },
            {
              id: "6",
              name: "Riley Anderson",
              role: "Young Collector",
              testimonial: "My kid absolutely loves the silly bands from this store. Quality is amazing and we've gotten multiple orders. Highly recommend!",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1765297971613-ilb2yq9h.jpg",
              imageAlt: "Riley Anderson"
            }
          ]}
          animationType="slide-up"
          containerStyle="default"
          textboxLayout="default"
          useInvertedBackground="noInvert"
          carouselMode="buttons"
        />
      </div>

      <div id="faq" data-section="faq">
        <FaqDouble
          title="Frequently Asked Questions"
          description="Find answers to common questions about our silly bands, shipping, and policies"
          faqs={[
            {
              id: "1",
              title: "Are your silly bands authentic?",
              content: "Yes, all our silly bands are 100% authentic and sourced directly from trusted manufacturers. We guarantee quality on every product we sell."
            },
            {
              id: "2",
              title: "How long does shipping take?",
              content: "Standard shipping takes 5-7 business days within the US. We also offer expedited 2-3 day shipping options for all orders."
            },
            {
              id: "3",
              title: "Do you ship internationally?",
              content: "Yes! We ship to over 150 countries worldwide. International shipping typically takes 10-15 business days depending on location."
            },
            {
              id: "4",
              title: "What's your return policy?",
              content: "We offer a 30-day money-back guarantee on all purchases. If you're not satisfied, simply contact us for a full refund or exchange."
            },
            {
              id: "5",
              title: "Are the bands suitable for all ages?",
              content: "Our silly bands are safe for all ages 3+. They're made from non-toxic materials and meet all safety standards."
            },
            {
              id: "6",
              title: "How do I track my order?",
              content: "Each order includes a tracking number sent to your email. You can track your package in real-time from the moment it ships."
            }
          ]}
          animationType="smooth"
          textboxLayout="default"
          useInvertedBackground="noInvert"
        />
      </div>

      <div id="contact" data-section="contact">
        <FooterSplit
          logoText="Silly Bands Store"
          title="Your Ultimate Destination for Silly Band Collection and Trading"
          columns={[
            {
              title: "Shop",
              items: [
                { label: "All Products", href: "#products" },
                { label: "Featured Items", href: "#featured" },
                { label: "Bundles", href: "#pricing" },
                { label: "New Arrivals", href: "#products" }
              ]
            },
            {
              title: "Support",
              items: [
                { label: "Contact Us", href: "#contact" },
                { label: "FAQ", href: "#faq" },
                { label: "Shipping Info", href: "#faq" },
                { label: "Returns", href: "#faq" }
              ]
            },
            {
              title: "Company",
              items: [
                { label: "About Us", href: "#" },
                { label: "Privacy Policy", href: "#" },
                { label: "Terms of Service", href: "#" },
                { label: "Blog", href: "#" }
              ]
            }
          ]}
          contactItems={[
            { icon: Phone, text: "(555) 123-4567" },
            { icon: Mail, text: "support@sillybands.store" },
            { icon: MapPin, text: "123 Fun Street, Rainbow City, RC 12345" }
          ]}
        />
      </div>
    </ThemeProvider>
  );
}