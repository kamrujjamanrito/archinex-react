"use client";

import { useEffect } from "react";

import { fieldData } from "@/public/data/field-data";

import { initField } from "@/animations/field";

import FieldItem from "@/components/widgets/FieldItem";

const Field = () => {
  useEffect(() => {
    return initField();
  }, []);

  return (
    <section className="field pt-140 pb-140 bg-alt">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="field__wrapper">
              <div className="field__inner">
                {fieldData.items.map((item, index) => (
                  <FieldItem
                    key={item.title}
                    item={item}
                    showDivider={index !== fieldData.items.length - 1}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Field;