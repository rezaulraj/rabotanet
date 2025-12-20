import React, { useEffect, useState } from "react";
import {
  Building2,
  Users,
  Briefcase,
  FileText,
  ShieldCheck,
  Globe,
  Target,
  CheckCircle,
  TrendingUp,
  HeadphonesIcon,
  Wrench,
  ChefHat,
  Truck,
  Factory,
  Paintbrush,
  HardHat,
  Car,
  Cog,
  Gauge,
  Thermometer,
  Leaf,
  Sparkles,
} from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import ModeForm from "../../components/ModeForm";

const Services = () => {
  const { t } = useTranslation();
  const [isVisible, setIsVisible] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  // Services data - now using translations
  const services = [
    {
      id: 1,
      title: t("services.services1.title"),
      description: t("services.services1.description"),
      benefits: [
        t("services.services1.benefits.benefit1"),
        t("services.services1.benefits.benefit2"),
        t("services.services1.benefits.benefit3"),
        t("services.services1.benefits.benefit4"),
      ],
      icon: <Globe className="w-8 h-8" />,
      image:
        "https://images.unsplash.com/photo-1590402494587-44b71d7772f6?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      color: "from-blue-500 to-cyan-500",
    },
    {
      id: 2,
      title: t("services.services2.title"),
      description: t("services.services2.description"),
      benefits: [
        t("services.services2.benefits.benefit1"),
        t("services.services2.benefits.benefit2"),
        t("services.services2.benefits.benefit3"),
        t("services.services2.benefits.benefit4"),
      ],
      icon: <Building2 className="w-8 h-8" />,
      image:
        "https://images.unsplash.com/photo-1542744095-fcf48d80b0fd?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      color: "from-emerald-500 to-teal-500",
    },
    {
      id: 3,
      title: t("services.services3.title"),
      description: t("services.services3.description"),
      benefits: [
        t("services.services3.benefits.benefit1"),
        t("services.services3.benefits.benefit2"),
        t("services.services3.benefits.benefit3"),
        t("services.services3.benefits.benefit4"),
      ],
      icon: <Briefcase className="w-8 h-8" />,
      image:
        "https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      color: "from-violet-500 to-purple-500",
    },
    {
      id: 4,
      title: t("services.services4.title"),
      description: t("services.services4.description"),
      benefits: [
        t("services.services4.benefits.benefit1"),
        t("services.services4.benefits.benefit2"),
        t("services.services4.benefits.benefit3"),
        t("services.services4.benefits.benefit4"),
      ],
      icon: <FileText className="w-8 h-8" />,
      image:
        "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      color: "from-amber-500 to-orange-500",
    },
    {
      id: 5,
      title: t("services.services5.title"),
      description: t("services.services5.description"),
      benefits: [
        t("services.services5.benefits.benefit1"),
        t("services.services5.benefits.benefit2"),
        t("services.services5.benefits.benefit3"),
        t("services.services5.benefits.benefit4"),
      ],
      icon: <ShieldCheck className="w-8 h-8" />,
      image:
        "https://images.unsplash.com/photo-1553877522-43269d4ea984?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      color: "from-rose-500 to-pink-500",
    },
    {
      id: 6,
      title: t("services.services6.title"),
      description: t("services.services6.description"),
      benefits: [
        t("services.services6.benefits.benefit1"),
        t("services.services6.benefits.benefit2"),
        t("services.services6.benefits.benefit3"),
        t("services.services6.benefits.benefit4"),
      ],
      icon: <Target className="w-8 h-8" />,
      image:
        "https://etimg.etb2bimg.com/thumb/msid-102333040,imgsize-82640,width-1200,height=627,overlay-ethr,resizemode-75/trends/hiring-for-white-collar-jobs-in-india-falls-19-in-july-report.jpg",
      color: "from-indigo-500 to-blue-500",
    },
  ];

  const features = [
    {
      icon: <Users className="w-6 h-6" />,
      title: t("services.features.feature1.title"),
      description: t("services.features.feature1.description"),
    },
    {
      icon: <CheckCircle className="w-6 h-6" />,
      title: t("services.features.feature2.title"),
      description: t("services.features.feature2.description"),
    },
    {
      icon: <TrendingUp className="w-6 h-6" />,
      title: t("services.features.feature3.title"),
      description: t("services.features.feature3.description"),
    },
    {
      icon: <HeadphonesIcon className="w-6 h-6" />,
      title: t("services.features.feature4.title"),
      description: t("services.features.feature4.description"),
    },
  ];

  // Industries data from JSON
  const industries = [
    {
      name: t("services.industries.industry1.name"),
      icon: <HardHat className="w-6 h-6" />,
      color: "bg-orange-50 border-orange-100",
      textColor: "text-orange-600",
      jobs: [
        t("services.industries.industry1.jobs.job1"),
        t("services.industries.industry1.jobs.job2"),
        t("services.industries.industry1.jobs.job3"),
        t("services.industries.industry1.jobs.job4"),
        t("services.industries.industry1.jobs.job5"),
        t("services.industries.industry1.jobs.job6"),
      ],
      expert: t("services.industries.industry1.experience"),
    },
    {
      name: t("services.industries.industry2.name"),
      icon: <Gauge className="w-6 h-6" />,
      color: "bg-yellow-50 border-yellow-100",
      textColor: "text-yellow-600",
      jobs: [
        t("services.industries.industry2.jobs.job1"),
        t("services.industries.industry2.jobs.job2"),
        t("services.industries.industry2.jobs.job3"),
        t("services.industries.industry2.jobs.job4"),
        t("services.industries.industry2.jobs.job5"),
        t("services.industries.industry2.jobs.job6"),
      ],
      expert: t("services.industries.industry2.experience"),
    },
    {
      name: t("services.industries.industry3.name"),
      icon: <Thermometer className="w-6 h-6" />,
      color: "bg-cyan-50 border-cyan-100",
      textColor: "text-cyan-600",
      jobs: [
        t("services.industries.industry3.jobs.job1"),
        t("services.industries.industry3.jobs.job2"),
        t("services.industries.industry3.jobs.job3"),
        t("services.industries.industry3.jobs.job4"),
        t("services.industries.industry3.jobs.job5"),
        t("services.industries.industry3.jobs.job6"),
      ],
      expert: t("services.industries.industry3.experience"),
    },
    {
      name: t("services.industries.industry4.name"),
      icon: <Sparkles className="w-6 h-6" />,
      color: "bg-gray-50 border-gray-100",
      textColor: "text-gray-600",
      jobs: [
        t("services.industries.industry4.jobs.job1"),
        t("services.industries.industry4.jobs.job2"),
        t("services.industries.industry4.jobs.job3"),
        t("services.industries.industry4.jobs.job4"),
        t("services.industries.industry4.jobs.job5"),
        t("services.industries.industry4.jobs.job6"),
      ],
      expert: t("services.industries.industry4.experience"),
    },
    {
      name: t("services.industries.industry5.name"),
      icon: <Car className="w-6 h-6" />,
      color: "bg-red-50 border-red-100",
      textColor: "text-red-600",
      jobs: [
        t("services.industries.industry5.jobs.job1"),
        t("services.industries.industry5.jobs.job2"),
        t("services.industries.industry5.jobs.job3"),
        t("services.industries.industry5.jobs.job4"),
        t("services.industries.industry5.jobs.job5"),
        t("services.industries.industry5.jobs.job6"),
      ],
      expert: t("services.industries.industry5.experience"),
    },
    {
      name: t("services.industries.industry6.name"),
      icon: <Paintbrush className="w-6 h-6" />,
      color: "bg-purple-50 border-purple-100",
      textColor: "text-purple-600",
      jobs: [
        t("services.industries.industry6.jobs.job1"),
        t("services.industries.industry6.jobs.job2"),
        t("services.industries.industry6.jobs.job3"),
        t("services.industries.industry6.jobs.job4"),
        t("services.industries.industry6.jobs.job5"),
        t("services.industries.industry6.jobs.job6"),
      ],
      expert: t("services.industries.industry6.experience"),
    },
    {
      name: t("services.industries.industry7.name"),
      icon: <Factory className="w-6 h-6" />,
      color: "bg-blue-50 border-blue-100",
      textColor: "text-blue-600",
      jobs: [
        t("services.industries.industry7.jobs.job1"),
        t("services.industries.industry7.jobs.job2"),
        t("services.industries.industry7.jobs.job3"),
        t("services.industries.industry7.jobs.job4"),
        t("services.industries.industry7.jobs.job5"),
        t("services.industries.industry7.jobs.job6"),
      ],
      expert: t("services.industries.industry7.experience"),
    },
    {
      name: t("services.industries.industry8.name"),
      icon: <Truck className="w-6 h-6" />,
      color: "bg-emerald-50 border-emerald-100",
      textColor: "text-emerald-600",
      jobs: [
        t("services.industries.industry8.jobs.job1"),
        t("services.industries.industry8.jobs.job2"),
        t("services.industries.industry8.jobs.job3"),
        t("services.industries.industry8.jobs.job4"),
        t("services.industries.industry8.jobs.job5"),
        t("services.industries.industry8.jobs.job6"),
      ],
      expert: t("services.industries.industry8.experience"),
    },
    {
      name: t("services.industries.industry9.name"),
      icon: <Wrench className="w-6 h-6" />,
      color: "bg-indigo-50 border-indigo-100",
      textColor: "text-indigo-600",
      jobs: [
        t("services.industries.industry9.jobs.job1"),
        t("services.industries.industry9.jobs.job2"),
        t("services.industries.industry9.jobs.job3"),
        t("services.industries.industry9.jobs.job4"),
        t("services.industries.industry9.jobs.job5"),
        t("services.industries.industry9.jobs.job6"),
      ],
      expert: t("services.industries.industry9.experience"),
    },
    {
      name: t("services.industries.industry10.name"),
      icon: <Leaf className="w-6 h-6" />,
      color: "bg-green-50 border-green-100",
      textColor: "text-green-600",
      jobs: [
        t("services.industries.industry10.jobs.job1"),
        t("services.industries.industry10.jobs.job2"),
        t("services.industries.industry10.jobs.job3"),
        t("services.industries.industry10.jobs.job4"),
        t("services.industries.industry10.jobs.job5"),
        t("services.industries.industry10.jobs.job6"),
      ],
      expert: t("services.industries.industry10.experience"),
    },
    {
      name: t("services.industries.industry11.name"),
      icon: <Cog className="w-6 h-6" />,
      color: "bg-sky-50 border-sky-100",
      textColor: "text-sky-600",
      jobs: [
        t("services.industries.industry11.jobs.job1"),
        t("services.industries.industry11.jobs.job2"),
        t("services.industries.industry11.jobs.job3"),
        t("services.industries.industry11.jobs.job4"),
        t("services.industries.industry11.jobs.job5"),
        t("services.industries.industry11.jobs.job6"),
      ],
      expert: t("services.industries.industry11.experience"),
    },
    {
      name: t("services.industries.industry12.name"),
      icon: <ChefHat className="w-6 h-6" />,
      color: "bg-rose-50 border-rose-100",
      textColor: "text-rose-600",
      jobs: [
        t("services.industries.industry12.jobs.job1"),
        t("services.industries.industry12.jobs.job2"),
        t("services.industries.industry12.jobs.job3"),
        t("services.industries.industry12.jobs.job4"),
        t("services.industries.industry12.jobs.job5"),
        t("services.industries.industry12.jobs.job6"),
      ],
      expert: t("services.industries.industry12.experience"),
    },
  ];

  const jobCategories = [
    {
      title: t("services.jobCategories.category1.title"),
      description: t("services.jobCategories.category1.description"),
      count: t("services.jobCategories.category1.count"),
      icon: "🏗️",
      animation: "hover:animate-bounce",
    },
    {
      title: t("services.jobCategories.category2.title"),
      description: t("services.jobCategories.category2.description"),
      count: t("services.jobCategories.category2.count"),
      icon: "⚡",
      animation: "hover:animate-pulse",
    },
    {
      title: t("services.jobCategories.category3.title"),
      description: t("services.jobCategories.category3.description"),
      count: t("services.jobCategories.category3.count"),
      icon: "🏭",
      animation: "hover:animate-spin-slow",
    },
    {
      title: t("services.jobCategories.category4.title"),
      description: t("services.jobCategories.category4.description"),
      count: t("services.jobCategories.category4.count"),
      icon: "🚚",
      animation: "hover:animate-bounce",
    },
    {
      title: t("services.jobCategories.category5.title"),
      description: t("services.jobCategories.category5.description"),
      count: t("services.jobCategories.category5.count"),
      icon: "🔧",
      animation: "hover:animate-pulse",
    },
    {
      title: t("services.jobCategories.category6.title"),
      description: t("services.jobCategories.category6.description"),
      count: t("services.jobCategories.category6.count"),
      icon: "🍽️",
      animation: "hover:animate-spin-slow",
    },
  ];

  const inDemandPositions = [
    {
      role: t("services.inDemandPositions.position1.role"),
      icon: "⚡",
      level: t("services.inDemandPositions.position1.level"),
      color: "from-yellow-500 to-amber-500",
    },
    {
      role: t("services.inDemandPositions.position2.role"),
      icon: "❄️",
      level: t("services.inDemandPositions.position2.level"),
      color: "from-cyan-500 to-blue-500",
    },
    {
      role: t("services.inDemandPositions.position3.role"),
      icon: "🔨",
      level: t("services.inDemandPositions.position3.level"),
      color: "from-orange-500 to-red-500",
    },
    {
      role: t("services.inDemandPositions.position4.role"),
      icon: "🔥",
      level: t("services.inDemandPositions.position4.level"),
      color: "from-red-500 to-pink-500",
    },
    {
      role: t("services.inDemandPositions.position5.role"),
      icon: "🚛",
      level: t("services.inDemandPositions.position5.level"),
      color: "from-emerald-500 to-green-500",
    },
    {
      role: t("services.inDemandPositions.position6.role"),
      icon: "🔧",
      level: t("services.inDemandPositions.position6.level"),
      color: "from-blue-500 to-indigo-500",
    },
    {
      role: t("services.inDemandPositions.position7.role"),
      icon: "🏭",
      level: t("services.inDemandPositions.position7.level"),
      color: "from-gray-500 to-gray-700",
    },
    {
      role: t("services.inDemandPositions.position8.role"),
      icon: "💧",
      level: t("services.inDemandPositions.position8.level"),
      color: "from-sky-500 to-cyan-500",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#F4F4F2] to-white py-22 overflow-hidden">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative overflow-hidden bg-gradient-to-r from-[#DB4F3C] via-[#E55B47] to-[#DB4F3C] py-20 px-4"
      >
        <div className="absolute inset-0 bg-black/10" />
        <div className="relative container mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            {t("services.hero.title")}
          </h1>
          <p className="text-xl text-white/90 max-w-3xl mx-auto mb-8">
            {t("services.hero.description")}
          </p>
          <motion.div
            className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm rounded-full px-6 py-3"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
            <span className="text-white font-semibold">
              {t("services.hero.stats")}
            </span>
          </motion.div>
        </div>
      </motion.div>

      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              whileHover={{ y: -5, scale: 1.02 }}
              className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100"
            >
              <div
                className={`w-12 h-12 rounded-lg bg-gradient-to-r ${services[index]?.color} flex items-center justify-center mb-4`}
              >
                <div className="text-white">{feature.icon}</div>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-600">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <div className="inline-block px-4 py-2 bg-[#DB4F3C]/10 rounded-full mb-4">
            <span className="text-[#DB4F3C] font-semibold">
              {t("services.categories.heading")}
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            {t("services.categories.title")}
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            {t("services.categories.description")}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {jobCategories.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              whileHover={{ scale: 1.03, rotate: [0, -1, 1, -1, 0] }}
              className={`bg-white rounded-xl p-6 border border-gray-200 hover:border-[#DB4F3C] transition-all duration-300 hover:shadow-xl ${category.animation}`}
            >
              <div className="flex items-start gap-4">
                <motion.div
                  className="text-3xl"
                  animate={{ rotate: [0, 360] }}
                  transition={{
                    duration: 20,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                >
                  {category.icon}
                </motion.div>
                <div>
                  <div className="flex items-center gap-3 mb-2">
                    <h3 className="text-xl font-bold text-gray-900">
                      {category.title}
                    </h3>
                    {/* <motion.span
                      className="px-3 py-1 bg-[#DB4F3C]/10 text-[#DB4F3C] text-sm font-semibold rounded-full"
                      whileHover={{ scale: 1.1 }}
                    >
                      {category.count} {t("services.categories.professionals")}
                    </motion.span> */}
                  </div>
                  <p className="text-gray-600">{category.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <div className="container mx-auto px-4 py-8 pb-16">
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-2 bg-[#DB4F3C]/10 rounded-full mb-4">
            <span className="text-[#DB4F3C] font-semibold">
              {t("services.ourServices.heading")}
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            {t("services.ourServices.title")}
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            {t("services.ourServices.description")}
          </p>
        </div>

        <div className="space-y-20">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className={`flex flex-col lg:flex-row items-center gap-12 ${
                index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
              }`}
            >
              <div className="lg:w-1/2">
                <div className={`inline-flex items-center gap-3 mb-6`}>
                  <div
                    className={`w-14 h-14 rounded-xl bg-gradient-to-r ${service.color} flex items-center justify-center`}
                  >
                    <div className="text-white">{service.icon}</div>
                  </div>
                  <h3 className="text-2xl md:text-3xl font-bold text-gray-900">
                    {service.title}
                  </h3>
                </div>

                <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                  {service.description}
                </p>

                <div className="space-y-4">
                  <h4 className="text-lg font-semibold text-gray-900">
                    {t("services.ourServices.keyBenefits")}
                  </h4>
                  <ul className="space-y-3">
                    {service.benefits.map((benefit, benefitIndex) => (
                      <motion.li
                        key={benefitIndex}
                        className="flex items-start gap-3"
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: benefitIndex * 0.1 }}
                      >
                        <div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                          <CheckCircle className="w-4 h-4 text-green-600" />
                        </div>
                        <span className="text-gray-700">{benefit}</span>
                      </motion.li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="lg:w-1/2">
                <div className="relative group">
                  <div className="absolute -inset-4 bg-gradient-to-r from-transparent via-white/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl" />
                  <div className="relative rounded-2xl overflow-hidden shadow-2xl transform transition-transform duration-300 group-hover:scale-[1.02]">
                    <div className="aspect-[4/3] bg-gradient-to-br from-gray-200 to-gray-300">
                      <img
                        src={service.image}
                        alt={service.title}
                        className="w-full h-full object-cover"
                      />
                    </div>

                    <div
                      className={`absolute bottom-0 left-0 right-0 h-2 bg-gradient-to-r ${service.color}`}
                    />
                  </div>

                  <div
                    className={`absolute -bottom-4 -right-4 bg-white rounded-xl shadow-xl p-4 border border-gray-100 transform transition-transform duration-300 group-hover:-translate-y-2 ${
                      index % 2 === 0 ? "" : "lg:left-4 lg:right-auto"
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <div
                        className={`w-10 h-10 rounded-lg bg-gradient-to-r ${service.color} flex items-center justify-center`}
                      >
                        <TrendingUp className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <div className="text-lg font-bold text-gray-900">
                          95%+
                        </div>
                        <div className="text-sm text-gray-600">
                          {t("services.ourServices.successRate")}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <div className="container mx-auto px-4 py-16">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <div className="inline-block px-4 py-2 bg-[#DB4F3C]/10 rounded-full mb-4">
            <span className="text-[#DB4F3C] font-semibold">
              {t("services.industryFocus.heading")}
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            {t("services.industryFocus.title")}
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            {t("services.industryFocus.description")}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {industries.map((industry, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05, duration: 0.4 }}
              whileHover={{
                y: -8,
                rotate: [0, -1, 1, -1, 0],
                transition: { duration: 0.5 },
              }}
              className={`${industry.color} border rounded-xl p-5 hover:shadow-xl transition-all duration-300 group cursor-pointer`}
            >
              <div className="flex items-center gap-3 mb-4">
                <motion.div
                  className={`p-2 rounded-lg ${industry.textColor} bg-white shadow-sm`}
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                >
                  {industry.icon}
                </motion.div>
                <h3 className={`font-bold text-lg ${industry.textColor}`}>
                  {industry.name}
                </h3>
              </div>

              <div className="space-y-2">
                {industry.jobs.slice(0, 4).map((job, jobIndex) => (
                  <motion.div
                    key={jobIndex}
                    className="flex items-center gap-2"
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: jobIndex * 0.1 }}
                  >
                    <div
                      className={`w-1.5 h-1.5 rounded-full ${industry.textColor.replace(
                        "text-",
                        "bg-"
                      )}/50`}
                    />
                    <span className="text-gray-700 text-sm">{job}</span>
                  </motion.div>
                ))}
              </div>

              <motion.div
                className="mt-4 pt-4 border-t border-gray-300"
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3, duration: 0.5 }}
              >
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-600">
                    {t("services.industryFocus.experience")}
                  </span>
                  <span className="text-sm font-bold text-gray-800">
                    {industry.expert}
                  </span>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>

      <div className="bg-gradient-to-r from-gray-50 to-white border-y border-gray-200 py-16">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              {t("services.inDemand.title")}
            </h3>
            <p className="text-gray-600 max-w-2xl mx-auto">
              {t("services.inDemand.description")}
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {inDemandPositions.map((job, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.4 }}
                whileHover={{
                  scale: 1.05,
                  rotateY: 180,
                  transition: { duration: 0.6 },
                }}
                className="relative bg-white rounded-xl p-5 border border-gray-200 hover:shadow-2xl transition-all duration-300 group"
                style={{ perspective: "1000px" }}
              >
                <div className="flex items-start justify-between mb-4">
                  <motion.div
                    className="text-3xl"
                    animate={{
                      rotate: [0, 10, -10, 10, 0],
                      y: [0, -5, 5, -5, 0],
                    }}
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                      repeatDelay: 2,
                    }}
                  >
                    {job.icon}
                  </motion.div>
                  <motion.span
                    className={`px-3 py-1 text-xs font-semibold rounded-full bg-gradient-to-r ${job.color} text-white`}
                    whileHover={{ scale: 1.1 }}
                  >
                    {job.level}
                  </motion.span>
                </div>
                <h4 className="font-bold text-gray-900 mb-2 text-lg">
                  {job.role}
                </h4>
                <div className="flex items-center justify-between text-sm text-gray-600">
                  <span>{t("services.inDemand.category")}</span>
                  <span className="font-bold text-gray-800">
                    {t("services.inDemand.professional")}
                  </span>
                </div>

                <motion.div
                  className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#DB4F3C] to-transparent"
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5, duration: 0.8 }}
                />
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      <div className="bg-gradient-to-r from-gray-900 to-gray-800 rounded-3xl mx-4 lg:mx-8 my-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-6xl mx-auto px-8 py-16 text-center"
        >
          <motion.div
            className="inline-flex items-center gap-3 bg-white/10 backdrop-blur-sm rounded-full px-6 py-3 mb-6"
            whileHover={{ scale: 1.05 }}
          >
            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
            <span className="text-white font-semibold">
              {t("services.cta.stats")}
            </span>
          </motion.div>

          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            {t("services.cta.title")}
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            {t("services.cta.description")}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.button
              onClick={() => setIsOpen(true)}
              className="px-8 py-4 bg-white text-gray-900 font-bold rounded-full hover:bg-gray-100 transition-colors duration-300 shadow-lg"
              whileHover={{ scale: 1.05, y: -3 }}
              whileTap={{ scale: 0.95 }}
            >
              {t("services.cta.contactButton")}
            </motion.button>
            <motion.a
              href="/career"
              className="px-8 py-4 border-2 border-white text-white font-bold rounded-full hover:bg-white/10 transition-colors duration-300"
              whileHover={{ scale: 1.05, y: -3 }}
              whileTap={{ scale: 0.95 }}
            >
              {t("services.cta.viewButton")}
            </motion.a>
          </div>
        </motion.div>
      </div>

      {/* Modal Form */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            key="modal"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <ModeForm isOpen={isOpen} setIsOpen={setIsOpen} />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Services;
