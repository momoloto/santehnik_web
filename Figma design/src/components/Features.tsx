import { Clock, Shield, Wallet, Users, ThumbsUp, Wrench } from "lucide-react";

export function Features() {
  const features = [
    {
      icon: Shield,
      title: "Гарантия качества",
      description: "Даем гарантию на все виды работ и используемые материалы.",
    },
    {
      icon: Wallet,
      title: "Доступные цены",
      description: "Честные цены без скрытых платежей. Оплата после выполнения работ.",
    },
    {
      icon: Users,
      title: "Опытные мастера",
      description: "Сертифицированные специалисты с опытом работы более 10 лет.",
    },
    {
      icon: ThumbsUp,
      title: "Качественные материалы",
      description: "Используем только проверенные материалы от надежных производителей.",
    },
    {
      icon: Wrench,
      title: "Полный комплекс услуг",
      description: "От мелкого ремонта до капитальной замены всей системы.",
    },
    {
      icon: Clock,
      title: "Быстрый выезд",
      description: "Выезжаем в течение часа после звонка. Работаем без выходных.",
    },
  ];

  return (
    <section className="py-12 md:py-20 bg-gradient-to-br from-blue-50 to-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
          <h2 className="mb-4">Почему выбирают нас</h2>
          <p className="text-muted-foreground text-lg">
            Мы заботимся о каждом клиенте и гарантируем высокое качество услуг
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div key={index} className="text-center">
                <div className="inline-flex p-4 bg-white rounded-full shadow-md mb-4">
                  <Icon className="h-8 w-8 text-primary" />
                </div>
                <h3 className="mb-2">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </div>
            );
          })}
        </div>

        {/* Stats */}
        <div className="mt-16 md:mt-20 grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { value: "10+", label: "Лет на рынке" },
            { value: "5000+", label: "Довольных клиентов" },
            { value: "24/7", label: "Работаем без выходных" },
            { value: "100%", label: "Гарантия качества" },
          ].map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-primary mb-2">{stat.value}</div>
              <p className="text-sm text-muted-foreground">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
