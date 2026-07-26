"use client";
import Link from "next/link";
import type { FieldItem as FieldItemType } from "@/types/field";

interface FieldItemProps {
  item: FieldItemType;
  showDivider?: boolean;
}

const FieldItem = ({ item, showDivider = true }: FieldItemProps) => {
  return (
    <>
      <div className="field__single">
        <h3 className="fraunces italic title-lg fw-4">
          <Link href={item.href}>{item.title}</Link>
        </h3>

        <div
          className="field-thumb d-none d-md-block"
          style={{
            backgroundImage: `url(${item.image.src.src})`,
          }}
        />
      </div>

      {showDivider && <span className="divide-cs"></span>}
    </>
  );
};

export default FieldItem;
