import React from 'react';

export interface SpecItem {
  label: string;
  value: string;
  unit?: string;
  description?: string;
}

export interface FeatureProps {
  title: string;
  description: string;
  icon?: React.ReactNode;
}