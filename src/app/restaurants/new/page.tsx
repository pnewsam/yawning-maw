"use client";

import { useState } from "react";
import { Plus, Loader } from "lucide-react";
import {
  Button,
  Label,
  Input,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui";

type AutocompletePrediction = {
  description: string;
  place_id: string;
};

export default function NewRestaurantPage() {
  const [query, setQuery] = useState("");
  const [loading, setLoading] = useState(false);
  const [predictions, setPredictions] = useState<AutocompletePrediction[]>([]);

  const onClickSearch = async () => {
    setLoading(true);
    const res = await fetch(`/api/googlePlaces/autocomplete?query=${query}`);
    const data = await res.json();
    console.log(data);
    setLoading(false);
    setPredictions(data.predictions);
  };

  if (process.env.NODE_ENV !== "development") {
    return null;
  }

  return (
    <div className="CONTENT">
      <h1 className="text-stone-700 font-bold font-display text-4xl py-8">
        Add a New Restaurant
      </h1>
      <Label className="block font-semibold mb-2">
        Search for a Google Place
      </Label>

      <div className="flex gap-2 mb-4">
        <Input
          value={query}
          placeholder="Enter a query"
          onChange={(e) => {
            setQuery(e.target.value);
          }}
        />
        <Button
          variant="default"
          onClick={onClickSearch}
          disabled={loading || query.length === 0}
        >
          {loading ? (
            <span className="animate-spin">
              <Loader className="w-4 h-4" />
            </span>
          ) : (
            <span>Search</span>
          )}
        </Button>
      </div>

      <Table className="border mb-12">
        <TableHeader className="bg-stone-100">
          <TableRow>
            <TableHead className="font-semibold">Place ID</TableHead>
            <TableHead className="font-semibold">Description</TableHead>
            <TableHead className="font-semibold">Add</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {predictions.length === 0 && (
            <TableRow className="min-h-[200px]">
              <TableCell colSpan={3}>No results found.</TableCell>
            </TableRow>
          )}
          {predictions.map((result) => {
            return (
              <TableRow key={result.place_id}>
                <TableCell>{result.place_id}</TableCell>
                <TableCell>{result.description}</TableCell>
                <TableCell>
                  <Button size="sm" className="text-xs gap-2">
                    Add Restaurant
                    <Plus className="w-4 h-4" />
                  </Button>
                </TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </div>
  );
}
