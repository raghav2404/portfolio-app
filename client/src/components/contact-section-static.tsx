import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { Mail, Phone, MapPin, Send, Linkedin, Github, Code, Globe, ExternalLink } from "lucide-react";

interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export default function ContactSectionStatic() {
  const [formData, setFormData] = useState<ContactFormData>({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.subject || !formData.message) {
      toast({
        title: "Please fill in all fields",
        description: "All fields are required to send a message.",
        variant: "destructive",
      });
      return;
    }

    // Create mailto link with form data
    const subject = encodeURIComponent(`Portfolio Contact: ${formData.subject}`);
    const body = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    );
    const mailtoLink = `mailto:raghavrastogi1990@gmail.com?subject=${subject}&body=${body}`;
    
    window.open(mailtoLink, '_blank');
    
    toast({
      title: "Opening email client",
      description: "Your default email application will open with the message pre-filled.",
    });
    
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  const handleInputChange = (field: keyof ContactFormData, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const socialLinks = [
    {
      href: "https://linkedin.com/in/raghav-rastogi-306206197",
      icon: <Linkedin size={20} />,
      color: "hover:border-[hsl(207,90%,54%)] hover:bg-[hsl(207,90%,54%)]/10",
      iconColor: "text-[hsl(207,90%,54%)]"
    },
    {
      href: "https://github.com/raghav2404",
      icon: <Github size={20} />,
      color: "hover:border-[hsl(142,76%,36%)] hover:bg-[hsl(142,76%,36%)]/10",
      iconColor: "text-[hsl(142,76%,36%)]"
    },
    {
      href: "https://leetcode.com/u/raghavrastogi1990/",
      icon: <Code size={20} />,
      color: "hover:border-[hsl(359,82%,59%)] hover:bg-[hsl(359,82%,59%)]/10",
      iconColor: "text-[hsl(359,82%,59%)]"
    },
    {
      href: "https://portfolioraghav24.netlify.app/",
      icon: <Globe size={20} />,
      color: "hover:border-purple-500 hover:bg-purple-500/10",
      iconColor: "text-purple-500"
    }
  ];

  return (
    <section id="contact" className="py-20 bg-[hsl(217,16%,12%)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Get In Touch</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[hsl(207,90%,54%)] to-[hsl(142,76%,36%)] mx-auto"></div>
          <p className="text-[hsl(215,20%,65%)] mt-6 max-w-2xl mx-auto">
            I'm always open to discussing new opportunities, interesting projects, or just having a chat about technology.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <Card className="bg-[hsl(220,13%,9%)] border-[hsl(216,7%,18%)]">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-6">Contact Information</h3>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <Mail className="text-[hsl(207,90%,54%)] mr-4" size={20} />
                    <div>
                      <p className="font-semibold">Email</p>
                      <a 
                        href="mailto:raghavrastogi1990@gmail.com" 
                        className="text-[hsl(215,20%,65%)] hover:text-[hsl(207,90%,54%)] transition-colors"
                      >
                        raghavrastogi1990@gmail.com
                      </a>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <Phone className="text-[hsl(142,76%,36%)] mr-4" size={20} />
                    <div>
                      <p className="font-semibold">Phone</p>
                      <a 
                        href="tel:+918318651126" 
                        className="text-[hsl(215,20%,65%)] hover:text-[hsl(142,76%,36%)] transition-colors"
                      >
                        +91 8318651126
                      </a>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <MapPin className="text-[hsl(359,82%,59%)] mr-4" size={20} />
                    <div>
                      <p className="font-semibold">Location</p>
                      <p className="text-[hsl(215,20%,65%)]">Lucknow, India</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card className="bg-[hsl(220,13%,9%)] border-[hsl(216,7%,18%)]">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-6">Social Links</h3>
                <div className="flex space-x-4">
                  {socialLinks.map((link, index) => (
                    <a
                      key={index}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`bg-[hsl(217,16%,12%)] p-3 rounded-lg border border-[hsl(216,7%,18%)] ${link.color} transition-all duration-300`}
                    >
                      <span className={link.iconColor}>{link.icon}</span>
                    </a>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
          
          {/* Contact Form */}
          <Card className="bg-[hsl(220,13%,9%)] border-[hsl(216,7%,18%)]">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold mb-6">Send Message</h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <Label htmlFor="name" className="block text-sm font-medium mb-2">Name</Label>
                    <Input
                      id="name"
                      type="text"
                      value={formData.name}
                      onChange={(e) => handleInputChange('name', e.target.value)}
                      className="bg-[hsl(217,16%,12%)] border-[hsl(216,7%,18%)] focus:border-[hsl(207,90%,54%)]"
                      placeholder="Your Name"
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="email" className="block text-sm font-medium mb-2">Email</Label>
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => handleInputChange('email', e.target.value)}
                      className="bg-[hsl(217,16%,12%)] border-[hsl(216,7%,18%)] focus:border-[hsl(207,90%,54%)]"
                      placeholder="your.email@example.com"
                      required
                    />
                  </div>
                </div>
                <div>
                  <Label htmlFor="subject" className="block text-sm font-medium mb-2">Subject</Label>
                  <Input
                    id="subject"
                    type="text"
                    value={formData.subject}
                    onChange={(e) => handleInputChange('subject', e.target.value)}
                    className="bg-[hsl(217,16%,12%)] border-[hsl(216,7%,18%)] focus:border-[hsl(207,90%,54%)]"
                    placeholder="Subject"
                    required
                  />
                </div>
                <div>
                  <Label htmlFor="message" className="block text-sm font-medium mb-2">Message</Label>
                  <Textarea
                    id="message"
                    rows={5}
                    value={formData.message}
                    onChange={(e) => handleInputChange('message', e.target.value)}
                    className="bg-[hsl(217,16%,12%)] border-[hsl(216,7%,18%)] focus:border-[hsl(207,90%,54%)] resize-none"
                    placeholder="Your message..."
                    required
                  />
                </div>
                <Button 
                  type="submit" 
                  className="w-full bg-gradient-to-r from-[hsl(207,90%,54%)] to-[hsl(142,76%,36%)] text-white hover:opacity-90 transition-opacity"
                >
                  <Send className="mr-2" size={16} />
                  Send via Email
                  <ExternalLink className="ml-2" size={16} />
                </Button>
              </form>
              <p className="text-[hsl(215,20%,65%)] text-sm text-center mt-4">
                This will open your default email client with the message pre-filled
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}