DROP TABLE IF EXISTS campaigns;

CREATE TABLE campaigns (
  id SERIAL PRIMARY KEY,
  name TEXT,
  status TEXT,
  clicks INTEGER,
  cost REAL,
  impressions INTEGER
);

INSERT INTO campaigns (name, status, clicks, cost, impressions) VALUES
('Summer Sale', 'Active', 150, 45.99, 1000),
('Black Friday', 'Paused', 320, 89.50, 2500),
('Winter Clearance', 'Active', 90, 25.75, 800),
('New Year Bash', 'Paused', 410, 120.00, 3200),
('Flash Sale', 'Active', 220, 60.10, 1500),
('Diwali Offer', 'Paused', 180, 50.40, 1300),
('Cyber Monday', 'Active', 300, 95.25, 2700),
('Valentine Promo', 'Paused', 75, 20.00, 600),
('Holi Hungama', 'Active', 260, 70.80, 1600),
('Back to School', 'Paused', 145, 33.60, 900);
