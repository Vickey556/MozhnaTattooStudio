-- 1. Таблиця Майстрів (Artists)
CREATE TABLE IF NOT EXISTS artists (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    name TEXT NOT NULL,
    role TEXT NOT NULL,
    description TEXT,
    image_url TEXT,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- 2. Таблиця Портфоліо (Portfolio)
CREATE TABLE IF NOT EXISTS portfolio (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    title TEXT,
    description TEXT,
    category TEXT,
    type TEXT NOT NULL CHECK (type IN ('tattoo', 'piercing')),
    image_url TEXT NOT NULL,
    artist_id UUID REFERENCES artists(id) ON DELETE SET NULL,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- 3. Таблиця Відгуків (Reviews)
CREATE TABLE IF NOT EXISTS reviews (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    author_name TEXT NOT NULL,
    text TEXT NOT NULL,
    rating INTEGER NOT NULL CHECK (rating >= 1 AND rating <= 5),
    date DATE NOT NULL DEFAULT CURRENT_DATE,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- Встановлюємо політику відкритого читання (RLS - Row Level Security)
ALTER TABLE artists ENABLE ROW LEVEL SECURITY;
ALTER TABLE portfolio ENABLE ROW LEVEL SECURITY;
ALTER TABLE reviews ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Allow public read access on artists" ON artists FOR SELECT USING (true);
CREATE POLICY "Allow public read access on portfolio" ON portfolio FOR SELECT USING (true);
CREATE POLICY "Allow public read access on reviews" ON reviews FOR SELECT USING (true);

-- Заповнюємо початковими даними майстрів, щоб сайт не був порожнім
INSERT INTO artists (name, role, description, image_url) VALUES 
('Надя', 'Майстер тату', 'Спеціаліст з художнього татуювання, графіки та мінімалізму.', '/MozhnaTattooStudio/masters/nadya.jpg'),
('Влад', 'Майстер пірсингу', 'Професійний пірсер, майстер з бодімодифікацій та мікродермалів.', '/MozhnaTattooStudio/masters/vlad.jpg'),
('Анна', 'Майстер тату', 'Спеціалізується на кольоровому реалізмі та перекритті старих робіт.', '/MozhnaTattooStudio/masters/anna.jpg'),
('Олена', 'Майстер пірсингу', 'Майстер з проколів вух, носа та складних композицій пірсингу.', '/MozhnaTattooStudio/masters/elena.jpg');
