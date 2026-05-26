/* ============================================================
   PACKAGE DATA SCHEMA
   CSV-importable structure with standard fields
   ============================================================ */

export interface PackageData {
  id: string;
  category: "golf" | "fishing" | "sailing" | "diving" | "beer-whiskey" | "custom";
  name: string;
  location: string;
  state: "VIC" | "NSW" | "QLD" | "SA" | "TAS" | "WA" | "NT" | "ACT";
  pricePerPerson: number;
  minGroupSize: number;
  maxGroupSize?: number;
  duration: number; // in nights
  description: string;
  highlights: string[]; // Array of key features
  itinerary: ItineraryDay[];
  included: string[];
  image?: string;
  createdAt?: string;
  updatedAt?: string;
}

export interface ItineraryDay {
  day: number;
  title: string;
  description: string;
  activities?: string[];
}

// CSV Header mapping for import
export const CSV_HEADERS = [
  "id",
  "category",
  "name",
  "location",
  "state",
  "pricePerPerson",
  "minGroupSize",
  "maxGroupSize",
  "duration",
  "description",
  "highlights", // Pipe-separated: "Feature 1|Feature 2|Feature 3"
  "itinerary", // JSON string or pipe-separated with day numbers
  "included", // Pipe-separated: "Included 1|Included 2"
  "image",
];

// Example CSV format
export const EXAMPLE_CSV = `id,category,name,location,state,pricePerPerson,minGroupSize,maxGroupSize,duration,description,highlights,itinerary,included,image
golf-vic-murray,golf,Murray River Ultimate,Murray River,VIC,499,8,,2,Championship golf course with luxury accommodation,36 Holes Championship Golf|Custom Polos & Merch|Bar Tab Included|Organised Comp & Prizes,"Day 1: Arrive and settle in|Day 2: 18 holes championship golf|Day 3: 18 holes and farewell",2 Nights Luxury Accommodation|36 Holes Championship Golf|Golf Carts & Bar Tab Included|Custom Polos & Merch Pack|Organised Comp & Prizes|Welcome Drinks|Gourmet Dinners|Professional Photography,
golf-nsw-hunter,golf,Hunter Valley Golf Escape,Hunter Valley,NSW,549,6,12,2,Premium golf courses with wine country views,2 Championship Courses|Wine Tasting Included|5-Star Resort|Pro Shop Credit,"Day 1: Arrive at resort|Day 2: 18 holes with wine tasting|Day 3: 18 holes and lunch",2 Nights Luxury Resort|2 Championship Courses|Wine Tasting Included|5-Star Resort|Pro Shop Credit|Gourmet Dinners,
fishing-qld-gold,fishing,Gold Coast Deep Sea Charter,Gold Coast,QLD,550,6,12,2,Deep sea fishing adventure with charter boat,8-Hour Private Boat Charter|All Bait & Tackle|BBQ Seafood Dinner|Biggest Catch Trophy,"Day 1: Arrive and settle|Day 2: 8-hour deep sea charter|Day 3: Depart",2 Nights Waterfront Villa|8-Hour Private Boat Charter|All Bait Tackle & Guide|BBQ Seafood Dinner|Biggest Catch Trophy`;

// Parse CSV string to PackageData array
export function parsePackageCSV(csvContent: string): PackageData[] {
  const lines = csvContent.trim().split("\n");
  if (lines.length < 2) throw new Error("CSV must contain header and at least one data row");

  const headers = lines[0].split(",").map((h) => h.trim());
  const packages: PackageData[] = [];

  for (let i = 1; i < lines.length; i++) {
    const values = parseCSVLine(lines[i]);
    if (values.length === 0) continue;

    const row: Record<string, string> = {};
    headers.forEach((header, index) => {
      row[header] = values[index] || "";
    });

    try {
      const pkg: PackageData = {
        id: row.id,
        category: row.category as PackageData["category"],
        name: row.name,
        location: row.location,
        state: row.state as PackageData["state"],
        pricePerPerson: parseInt(row.pricePerPerson),
        minGroupSize: parseInt(row.minGroupSize),
        maxGroupSize: row.maxGroupSize ? parseInt(row.maxGroupSize) : undefined,
        duration: parseInt(row.duration),
        description: row.description,
        highlights: row.highlights.split("|").map((h) => h.trim()),
        itinerary: parseItinerary(row.itinerary),
        included: row.included.split("|").map((i) => i.trim()),
        image: row.image || undefined,
        createdAt: new Date().toISOString(),
      };

      packages.push(pkg);
    } catch (error) {
      console.error(`Error parsing row ${i}:`, error);
      throw new Error(`Invalid data in row ${i}: ${error instanceof Error ? error.message : "Unknown error"}`);
    }
  }

  return packages;
}

// Parse itinerary from pipe-separated format
function parseItinerary(itineraryStr: string): ItineraryDay[] {
  if (!itineraryStr) return [];

  return itineraryStr.split("|").map((item, index) => {
    const trimmed = item.trim();
    // Format: "Day 1: Description" or just "Description"
    const dayMatch = trimmed.match(/^Day (\d+):\s*(.*)/);

    if (dayMatch) {
      return {
        day: parseInt(dayMatch[1]),
        title: `Day ${dayMatch[1]}`,
        description: dayMatch[2],
      };
    }

    return {
      day: index + 1,
      title: `Day ${index + 1}`,
      description: trimmed,
    };
  });
}

// Helper to parse CSV line respecting quoted fields
function parseCSVLine(line: string): string[] {
  const result: string[] = [];
  let current = "";
  let inQuotes = false;

  for (let i = 0; i < line.length; i++) {
    const char = line[i];
    const nextChar = line[i + 1];

    if (char === '"') {
      if (inQuotes && nextChar === '"') {
        current += '"';
        i++; // Skip next quote
      } else {
        inQuotes = !inQuotes;
      }
    } else if (char === "," && !inQuotes) {
      result.push(current.trim());
      current = "";
    } else {
      current += char;
    }
  }

  result.push(current.trim());
  return result;
}

// Validate package data
export function validatePackageData(pkg: Partial<PackageData>): string[] {
  const errors: string[] = [];

  if (!pkg.id) errors.push("ID is required");
  if (!pkg.category) errors.push("Category is required");
  if (!pkg.name) errors.push("Name is required");
  if (!pkg.location) errors.push("Location is required");
  if (!pkg.state) errors.push("State is required");
  if (!pkg.pricePerPerson || pkg.pricePerPerson <= 0) errors.push("Price must be greater than 0");
  if (!pkg.minGroupSize || pkg.minGroupSize <= 0) errors.push("Min group size must be greater than 0");
  if (!pkg.duration || pkg.duration <= 0) errors.push("Duration must be greater than 0");
  if (!pkg.description) errors.push("Description is required");
  if (!pkg.highlights || pkg.highlights.length === 0) errors.push("At least one highlight is required");
  if (!pkg.included || pkg.included.length === 0) errors.push("At least one included item is required");

  return errors;
}
