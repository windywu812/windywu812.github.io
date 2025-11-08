import { experiences } from "../data/portfolio";
import { useState } from "react";

type Experience = {
  title: string;
  company: string;
  location: string;
  period: string;
  description: string[];
};

export default function Experience() {
  const [selectedExp, setSelectedExp] = useState<Experience>(experiences[0]);

  // Parse date to get year and month
  const parseDate = (dateStr: string) => {
    const [month, year] = dateStr.split(" ");
    const monthIndex = [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ].indexOf(month);
    return { year: parseInt(year), month: monthIndex };
  };

  // Get all unique years from experiences
  let allYears = Array.from(
    new Set(
      experiences.flatMap((exp) => {
        const [start, end] = exp.period.split(" - ");
        const startYear = parseDate(start).year;
        const endYear =
          end === "Present" ? new Date().getFullYear() : parseDate(end).year;
        const yearRange = [];
        for (let y = startYear; y <= endYear; y++) {
          yearRange.push(y);
        }
        return yearRange;
      })
    )
  );

  // Remove duplicates and sort descending (most recent first)
  const years = Array.from(new Set(allYears)).sort((a, b) => b - a);

  // Calculate position and duration for each experience
  const getExpPosition = (exp: Experience) => {
    const [start, end] = exp.period.split(" - ");
    const startDate = parseDate(start);
    const now = new Date();
    const endDate =
      end === "Present"
        ? { year: now.getFullYear(), month: now.getMonth() }
        : parseDate(end);

    const startIndex = years.indexOf(startDate.year);
    const endIndex = years.indexOf(endDate.year);

    // Calculate position based on month within the year
    const startOffset = startDate.month / 12;
    const endOffset = (endDate.month + 1) / 12; // +1 to include the end month fully

    const verticalGap = 0; // 8px gap between experiences

    // Since years are descending (2025, 2024, 2023...), endIndex is smaller (closer to top)
    // Top position should be the END date (more recent, smaller index)
    const top = (endIndex + (1 - endOffset)) * 100 + verticalGap;

    // Height spans from end date to start date, minus gap
    const height =
      (startIndex - endIndex) * 100 +
      startOffset * 100 +
      endOffset * 100 -
      verticalGap * 2;

    return { top, height: Math.max(height, 60) };
  };

  // Detect overlaps and assign columns
  const expColumns: number[] = [];

  for (let expIndex = 0; expIndex < experiences.length; expIndex++) {
    const currentExp = experiences[expIndex];
    const [start, end] = currentExp.period.split(" - ");
    const startDate = parseDate(start);
    const now = new Date();
    const endDate =
      end === "Present"
        ? { year: now.getFullYear(), month: now.getMonth() }
        : parseDate(end);

    const startTime = startDate.year * 12 + startDate.month;
    const endTime = endDate.year * 12 + endDate.month;

    // Track which columns are occupied by overlapping experiences
    const occupiedColumns: number[] = [];

    // Check for overlaps with previous experiences
    for (let i = 0; i < expIndex; i++) {
      const otherExp = experiences[i];
      const [otherStart, otherEnd] = otherExp.period.split(" - ");
      const otherStartDate = parseDate(otherStart);
      const otherEndDate =
        otherEnd === "Present"
          ? { year: now.getFullYear(), month: now.getMonth() }
          : parseDate(otherEnd);

      const otherStartTime = otherStartDate.year * 12 + otherStartDate.month;
      const otherEndTime = otherEndDate.year * 12 + otherEndDate.month;

      // Check if periods overlap
      if (startTime <= otherEndTime && endTime >= otherStartTime) {
        occupiedColumns.push(expColumns[i]);
      }
    }

    // Find the first available column
    let column = 0;
    while (occupiedColumns.includes(column)) {
      column++;
    }

    expColumns.push(column);
  }

  // Calculate maximum columns needed
  const maxColumns = Math.max(...expColumns, 0) + 1;

  const columnWidth = maxColumns > 1 ? 100 / maxColumns : 100;

  return (
    <section className="min-h-screen w-full md:w-4/5 mx-auto flex items-center justify-center px-4 md:px-6 py-20">
      <div className="w-full flex flex-col">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold gradient-purple-pink mb-6 md:mb-8">
          Professional History
        </h2>

        <div className="flex-1 flex flex-col lg:flex-row gap-4 md:gap-6 min-h-0">
          {/* Timeline Section */}
          <div className="flex-1 flex gap-3 md:gap-4 min-h-0 glass rounded-xl md:rounded-2xl p-3 md:p-4 max-h-[60vh] lg:max-h-[70vh]">
            {/* Scrollable container for both years and calendar */}
            <div className="flex gap-3 md:gap-4 overflow-y-auto flex-1">
              {/* Year Labels (Y-axis) - scrolls with content */}
              <div className="shrink-0 min-w-10 md:min-w-[60px]">
                <div
                  className="relative"
                  style={{ height: `${years.length * 100 + 128}px` }}
                >
                  {years.map((year, index) => (
                    <div
                      key={year}
                      className="absolute flex items-center justify-center text-xs md:text-sm font-semibold text-gray-400 w-full"
                      style={{
                        top: `${index * 100}px`,
                        height: "100px",
                      }}
                    >
                      {year}
                    </div>
                  ))}
                </div>
              </div>

              {/* Calendar Grid */}
              <div className="flex-1 relative pr-2 md:pr-4">
                <div
                  className="relative pb-32"
                  style={{ height: `${years.length * 100 + 128}px` }}
                >
                  {/* Grid lines */}
                  {years.map((year, index) => (
                    <div
                      key={year}
                      className="absolute left-0 right-0 border-t border-white/5"
                      style={{ top: `${index * 100}px` }}
                    />
                  ))}

                  {/* Experience bars */}
                  {experiences.map((exp, index) => {
                    const position = getExpPosition(exp);
                    const column = expColumns[index];
                    const horizontalGap = 0; // 16px gap between columns
                    const columnWidthPercent = columnWidth;

                    return (
                      <button
                        key={index}
                        onClick={() => setSelectedExp(exp)}
                        className={`absolute rounded-md md:rounded-lg border-2 transition-all duration-300 hover:scale-[1.02] cursor-pointer p-2 md:p-3 ${
                          selectedExp === exp
                            ? "glass border-purple-500 shadow-lg shadow-purple-500/20 z-20"
                            : "glass border-white/20 hover:border-purple-400 z-10"
                        }`}
                        style={{
                          top: `${position.top}px`,
                          height: `${position.height}px`,
                          left: `calc(${column * columnWidthPercent}% + ${
                            horizontalGap * column
                          }px)`,
                          width: `calc(${columnWidthPercent}% - ${horizontalGap}px)`,
                        }}
                      >
                        <div className="text-left h-full flex flex-col justify-center">
                          <p className="text-xs md:text-sm font-bold text-white line-clamp-2">
                            {exp.title}
                          </p>
                          <p className="text-[10px] md:text-xs text-gray-400 line-clamp-1">
                            {exp.company}
                          </p>
                        </div>
                      </button>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>

          {/* Details Panel */}
          <div className="w-full lg:w-96 glass rounded-xl md:rounded-2xl p-4 md:p-6 overflow-y-auto max-h-[40vh] lg:max-h-[70vh]">
            <div className="space-y-3 md:space-y-4">
              <div>
                <h3 className="text-lg md:text-xl lg:text-2xl font-bold text-white">
                  {selectedExp.title}
                </h3>
                <div className="flex flex-col md:flex-row md:items-center gap-1 md:gap-2 text-gray-300 mt-2">
                  <span className="font-semibold text-sm md:text-base">{selectedExp.company}</span>
                  {selectedExp.location && (
                    <>
                      <span className="text-gray-500 hidden md:inline">•</span>
                      <span className="text-gray-400 text-xs md:text-sm">
                        {selectedExp.location}
                      </span>
                    </>
                  )}
                </div>
                <p className="text-xs md:text-sm text-purple-400 font-mono mt-2">
                  {selectedExp.period}
                </p>
              </div>

              <div className="border-t border-white/10 pt-3 md:pt-4">
                <ul className="space-y-2 md:space-y-3">
                  {selectedExp.description.map((desc, i) => (
                    <li key={i} className="text-gray-400 flex gap-2 md:gap-3 text-xs md:text-sm">
                      <span className="text-purple-400 mt-1 shrink-0">▹</span>
                      <span>{desc}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
