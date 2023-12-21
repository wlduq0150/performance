import { ApiProperty, ApiPropertyOptional } from "@nestjs/swagger";
import { IsDate, IsNumber, IsString } from "class-validator";

export class CreateShowDto {

    @IsString()
    @ApiProperty({ description: '공연 이름' })
    name: string;

    @IsString()
    @ApiProperty({ description: '공연 이름' })
    description: string;

    @IsDate()
    @ApiProperty({ description: '공연 날짜' })
    date: Date;

    @IsString()
    @ApiProperty({ description: '공연 시간' })
    time: string;

    @IsString()
    @ApiProperty({ description: '공연 장소' })
    place: string;

    @IsString()
    @ApiPropertyOptional({ description: '공연 이미지' })
    thumbnail?: string;

    @IsString()
    @ApiProperty({ description: '공연 분류' })
    category: string;

    @IsNumber()
    @ApiProperty({ description: '총 좌석 수' })
    totalSeat: number;

}
