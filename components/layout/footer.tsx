'use client';

import React from 'react';
import Link from 'next/link';
import { Mail, Phone, MapPin, ArrowRight } from 'lucide-react';
import { FaLinkedin, FaTwitter } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="relative border-t border-border/60 mt-24 glass-header">
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 py-16 md:py-20">
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-16">
          {/* Brand Section */}
          <div className="md:col-span-3">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-9 h-9 bg-primary rounded-md flex items-center justify-center">
                <span className="text-white font-bold text-sm">SDV</span>
              </div>
              <div>
                <h3 className="font-semibold text-foreground text-sm">SDV EDUTECH</h3>
                <p className="text-xs text-muted-foreground">Enterprise Solutions</p>
              </div>
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed mb-6">
              Transforming enterprises through innovative technology and digital solutions.
            </p>
            <div className="flex gap-3">
              <a href="#" className="w-9 h-9 rounded-full border border-border hover:border-primary hover:bg-primary/5 flex items-center justify-center transition-all text-foreground hover:text-primary">
                <FaLinkedin className="w-4 h-4" />
              </a>
              <a href="#" className="w-9 h-9 rounded-full border border-border hover:border-primary hover:bg-primary/5 flex items-center justify-center transition-all text-foreground hover:text-primary">
                <FaTwitter className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Services Links */}
          <div className="md:col-span-2">
            <h4 className="font-semibold text-foreground text-sm mb-6">Services</h4>
            <ul className="space-y-3">
              <li><Link href="/services" className="text-muted-foreground hover:text-primary transition-colors text-sm flex items-center gap-2 group">Survey Management<ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" /></Link></li>
              <li><Link href="/services" className="text-muted-foreground hover:text-primary transition-colors text-sm flex items-center gap-2 group">GIS Solutions<ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" /></Link></li>
              <li><Link href="/services" className="text-muted-foreground hover:text-primary transition-colors text-sm flex items-center gap-2 group">Software Development<ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" /></Link></li>
              <li><Link href="/services" className="text-muted-foreground hover:text-primary transition-colors text-sm flex items-center gap-2 group">Training Programs<ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" /></Link></li>
            </ul>
          </div>

          {/* Company Links */}
          <div className="md:col-span-2">
            <h4 className="font-semibold text-foreground text-sm mb-6">Company</h4>
            <ul className="space-y-3">
              <li><Link href="/about" className="text-muted-foreground hover:text-primary transition-colors text-sm flex items-center gap-2 group">About Us<ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" /></Link></li>
              <li><Link href="/clients" className="text-muted-foreground hover:text-primary transition-colors text-sm flex items-center gap-2 group">Clients<ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" /></Link></li>
              <li><Link href="/careers" className="text-muted-foreground hover:text-primary transition-colors text-sm flex items-center gap-2 group">Careers<ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" /></Link></li>
              <li><Link href="/contact" className="text-muted-foreground hover:text-primary transition-colors text-sm flex items-center gap-2 group">Contact<ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" /></Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="md:col-span-3">
            <h4 className="font-semibold text-foreground text-sm mb-6">Get in Touch</h4>
            <div className="space-y-4">
              <div className="flex gap-3">
                <Mail className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                <a href="mailto:info@sdvedutech.com" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                  info@sdvedutech.com
                </a>
              </div>
              <div className="flex gap-3">
                <Phone className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                <a href="tel:+919876543210" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                  +91 98765 43210
                </a>
              </div>
              <div className="flex gap-3">
                <MapPin className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                <span className="text-muted-foreground text-sm">
                  New Delhi, India
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-border mb-8"></div>

        {/* Bottom Footer */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-muted-foreground text-xs">
            &copy; 2024 SDV EDUTECH. All rights reserved.
          </p>
          <div className="flex gap-8">
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors text-xs">Privacy Policy</a>
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors text-xs">Terms of Service</a>
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors text-xs">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
