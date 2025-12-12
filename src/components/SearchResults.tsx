import React, { useState, useMemo } from 'react';
import { Grid, List, SlidersHorizontal, ArrowUpDown } from 'lucide-react';
import ISPCard from './ISPCard';
import { isps } from '../data';
import type { ISP, ConnectionType, SortOption } from '../types';
import { useApp } from '../contexts/AppContext';

interface SearchResultsProps {
  cityId?: string;
  cityName?: string;
}

const SearchResults: React.FC<SearchResultsProps> = ({ cityId, cityName }) => {
  const { planType } = useApp();
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [showFilters, setShowFilters] = useState(false);
  
  // Filter states
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 3000]);
  const [minSpeed, setMinSpeed] = useState(0);
  const [connectionTypes, setConnectionTypes] = useState<ConnectionType[]>([]);
  const [minCoverage, setMinCoverage] = useState(0);
  const [sortBy, setSortBy] = useState<SortOption['value']>('relevance');

  // Sort options
  const sortOptions: SortOption[] = [
    { value: 'relevance', label: 'Relevance' },
    { value: 'coverage', label: 'Best Coverage' },
    { value: 'price-low', label: 'Price: Low to High' },
    { value: 'price-high', label: 'Price: High to Low' },
    { value: 'speed', label: 'Fastest Speed' },
    { value: 'rating', label: 'Highest Rated' },
  ];

  // Filter ISPs based on selected city and filters
  const filteredAndSortedISPs = useMemo(() => {
    let filtered = isps.filter(isp => {
      // Filter by city coverage
      if (cityId) {
        const coverage = isp.coverage.find(c => c.cityId === cityId);
        if (!coverage) return false;
        
        // Filter by minimum coverage
        if (coverage.coveragePercentage < minCoverage) return false;
      }

      // Filter by plan type
      const hasPlans = isp.plans.some(plan => {
        if (planType === 'both') return true;
        return plan.type === planType;
      });
      if (!hasPlans) return false;

      // Get relevant plans for filtering
      const relevantPlans = isp.plans.filter(plan => {
        if (planType === 'both') return true;
        return plan.type === planType;
      });

      // Filter by price range
      const hasPlansInPriceRange = relevantPlans.some(
        plan => plan.price >= priceRange[0] && plan.price <= priceRange[1]
      );
      if (!hasPlansInPriceRange) return false;

      // Filter by minimum speed
      const hasPlansWithSpeed = relevantPlans.some(plan => plan.speed >= minSpeed);
      if (!hasPlansWithSpeed) return false;

      // Filter by connection type
      if (connectionTypes.length > 0) {
        const hasPlansWithConnectionType = relevantPlans.some(plan =>
          connectionTypes.includes(plan.connectionType)
        );
        if (!hasPlansWithConnectionType) return false;
      }

      return true;
    });

    // Sort ISPs
    filtered.sort((a, b) => {
      const aCoverage = cityId ? a.coverage.find(c => c.cityId === cityId) : null;
      const bCoverage = cityId ? b.coverage.find(c => c.cityId === cityId) : null;

      switch (sortBy) {
        case 'coverage':
          return (bCoverage?.coveragePercentage || 0) - (aCoverage?.coveragePercentage || 0);
        
        case 'price-low': {
          const aMinPrice = Math.min(...a.plans.map(p => p.price));
          const bMinPrice = Math.min(...b.plans.map(p => p.price));
          return aMinPrice - bMinPrice;
        }
        
        case 'price-high': {
          const aMaxPrice = Math.max(...a.plans.map(p => p.price));
          const bMaxPrice = Math.max(...b.plans.map(p => p.price));
          return bMaxPrice - aMaxPrice;
        }
        
        case 'speed': {
          const aMaxSpeed = Math.max(...a.plans.map(p => p.speed));
          const bMaxSpeed = Math.max(...b.plans.map(p => p.speed));
          return bMaxSpeed - aMaxSpeed;
        }
        
        case 'rating':
          return b.rating - a.rating;
        
        default: // relevance
          return (bCoverage?.coveragePercentage || 0) - (aCoverage?.coveragePercentage || 0);
      }
    });

    return filtered;
  }, [cityId, planType, priceRange, minSpeed, connectionTypes, minCoverage, sortBy]);

  const handleConnectionTypeToggle = (type: ConnectionType) => {
    setConnectionTypes(prev =>
      prev.includes(type) ? prev.filter(t => t !== type) : [...prev, type]
    );
  };

  const clearFilters = () => {
    setPriceRange([0, 3000]);
    setMinSpeed(0);
    setConnectionTypes([]);
    setMinCoverage(0);
  };

  const activeFiltersCount = [
    priceRange[0] > 0 || priceRange[1] < 3000 ? 1 : 0,
    minSpeed > 0 ? 1 : 0,
    connectionTypes.length > 0 ? 1 : 0,
    minCoverage > 0 ? 1 : 0,
  ].reduce((a, b) => a + b, 0);

  if (!cityId) {
    return (
      <div className="container-custom py-16 text-center">
        <p className="text-neutral-500 dark:text-neutral-400">
          Please select a city to view available ISPs
        </p>
      </div>
    );
  }

  return (
    <div id="search-results" className="bg-neutral-50 dark:bg-dark-bg py-12">
      <div className="container-custom">
        {/* Header */}
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-neutral-900 dark:text-dark-text mb-2">
            Internet Providers in {cityName}
          </h2>
          <p className="text-neutral-600 dark:text-neutral-400">
            Found {filteredAndSortedISPs.length} provider{filteredAndSortedISPs.length !== 1 ? 's' : ''} available in your area
          </p>
        </div>

        {/* Controls */}
        <div className="flex flex-col sm:flex-row gap-4 mb-8">
          {/* View Toggle */}
          <div className="flex items-center space-x-2 bg-white dark:bg-dark-surface border border-neutral-200 dark:border-dark-border rounded-lg p-1">
            <button
              onClick={() => setViewMode('grid')}
              className={`p-2 rounded transition-colors ${
                viewMode === 'grid'
                  ? 'bg-primary-600 text-white'
                  : 'text-neutral-600 dark:text-neutral-400 hover:bg-neutral-100 dark:hover:bg-neutral-800'
              }`}
              title="Grid view"
            >
              <Grid className="w-5 h-5" />
            </button>
            <button
              onClick={() => setViewMode('list')}
              className={`p-2 rounded transition-colors ${
                viewMode === 'list'
                  ? 'bg-primary-600 text-white'
                  : 'text-neutral-600 dark:text-neutral-400 hover:bg-neutral-100 dark:hover:bg-neutral-800'
              }`}
              title="List view"
            >
              <List className="w-5 h-5" />
            </button>
          </div>

          {/* Filters Button */}
          <button
            onClick={() => setShowFilters(!showFilters)}
            className="btn btn-outline relative"
          >
            <SlidersHorizontal className="w-5 h-5 mr-2" />
            Filters
            {activeFiltersCount > 0 && (
              <span className="absolute -top-2 -right-2 w-6 h-6 bg-primary-600 text-white text-xs rounded-full flex items-center justify-center">
                {activeFiltersCount}
              </span>
            )}
          </button>

          {/* Sort */}
          <div className="flex-1 flex items-center space-x-2">
            <ArrowUpDown className="w-5 h-5 text-neutral-500 dark:text-neutral-400" />
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value as SortOption['value'])}
              className="flex-1 px-4 py-2 border border-neutral-300 dark:border-dark-border rounded-md bg-white dark:bg-dark-surface text-neutral-900 dark:text-dark-text focus:outline-none focus:ring-2 focus:ring-primary-600"
            >
              {sortOptions.map(option => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Filters Panel */}
        {showFilters && (
          <div className="card p-6 mb-8 animate-slideInUp">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-lg font-semibold text-neutral-900 dark:text-dark-text">Filters</h3>
              {activeFiltersCount > 0 && (
                <button
                  onClick={clearFilters}
                  className="text-sm text-primary-600 hover:text-primary-700 font-medium"
                >
                  Clear all
                </button>
              )}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {/* Price Range */}
              <div>
                <label className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-2">
                  Monthly Price: ₨{priceRange[0]} - ₨{priceRange[1]}
                </label>
                <input
                  type="range"
                  min="0"
                  max="3000"
                  step="100"
                  value={priceRange[1]}
                  onChange={(e) => setPriceRange([0, parseInt(e.target.value)])}
                  className="w-full"
                />
              </div>

              {/* Minimum Speed */}
              <div>
                <label className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-2">
                  Minimum Speed: {minSpeed} Mbps
                </label>
                <input
                  type="range"
                  min="0"
                  max="1000"
                  step="50"
                  value={minSpeed}
                  onChange={(e) => setMinSpeed(parseInt(e.target.value))}
                  className="w-full"
                />
              </div>

              {/* Connection Type */}
              <div>
                <label className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-2">
                  Connection Type
                </label>
                <div className="space-y-2">
                  {(['Fiber', 'Cable', 'Wireless', 'DSL'] as ConnectionType[]).map(type => (
                    <label key={type} className="flex items-center space-x-2 cursor-pointer">
                      <input
                        type="checkbox"
                        checked={connectionTypes.includes(type)}
                        onChange={() => handleConnectionTypeToggle(type)}
                        className="rounded border-neutral-300 text-primary-600 focus:ring-primary-600"
                      />
                      <span className="text-sm text-neutral-700 dark:text-neutral-300">{type}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Minimum Coverage */}
              <div>
                <label className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-2">
                  Min Coverage: {minCoverage}%
                </label>
                <input
                  type="range"
                  min="0"
                  max="100"
                  step="10"
                  value={minCoverage}
                  onChange={(e) => setMinCoverage(parseInt(e.target.value))}
                  className="w-full"
                />
              </div>
            </div>
          </div>
        )}

        {/* Results */}
        {filteredAndSortedISPs.length === 0 ? (
          <div className="text-center py-16">
            <p className="text-neutral-500 dark:text-neutral-400 mb-4">
              No ISPs found matching your criteria
            </p>
            {activeFiltersCount > 0 && (
              <button onClick={clearFilters} className="btn btn-primary">
                Clear Filters
              </button>
            )}
          </div>
        ) : (
          <div
            className={
              viewMode === 'grid'
                ? 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'
                : 'space-y-6'
            }
          >
            {filteredAndSortedISPs.map(isp => {
              const coverage = isp.coverage.find(c => c.cityId === cityId);
              return (
                <ISPCard
                  key={isp.id}
                  isp={isp}
                  coverage={coverage}
                  onViewDetails={() => {
                    // TODO: Navigate to ISP detail page
                    console.log('View details for', isp.name);
                  }}
                />
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
};

export default SearchResults;
