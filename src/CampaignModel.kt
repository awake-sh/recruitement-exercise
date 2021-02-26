package be.proxistore.service.campaign.api

import java.time.LocalDateTime
import java.time.LocalTime
import kotlin.random.Random

data class Segment(
    val value: String
)

data class CampaignId(
    val value: String
)

data class Campaign(
    val id: CampaignId,
    val details: CampaignDetails,
    val statistics: CampaignStatistics,
    val diffusion: Diffusion,
    val targets: CampaignTargets
)

data class CampaignTargets(
    val segments: Set<Segment> = setOf()
)

data class Diffusion(
    val period: Period = Period(),
    val slots: CampaignDiffusionSlots = CampaignDiffusionSlots()
)

data class CampaignStatistics(
    val views: CampaignViewStatistics = CampaignViewStatistics(),
    val clicks: CampaignClicks = CampaignClicks(),
)

data class CampaignDetails(
    val name: String,
    val source: Source = Source.ADVERTISER,
    val status: CampaignStatus = CampaignStatus.DRAFT,
    val budget: Amount = Amount(value = 0, currency = Currency.EUR),
)

data class CampaignViewStatistics(
    val expected: CounterByDevices = CounterByDevices(),
    val effective: CounterByDevices = CounterByDevices(),
    val unique: CounterByDevices = CounterByDevices()
)

data class CampaignClicks(
    val count: Long = 0L,
    val unique: Long = 0L
)

data class CounterByDevices(
    val counts: Map<Device, Long> = mapOf()
)

enum class Device {
    MOBILE, DESKTOP, TABLET, OTHER
}

enum class CampaignStatus {
    DRAFT, RUNNING, CANCELLED, FINISHED
}

enum class Currency {
    EUR, USD
}

enum class Source {
    ADVERTISER, RETAILER, MEDIA_AGENCY
}

data class Amount(
    val value: Long = 0L,
    val currency: Currency = Currency.EUR
)

data class Period(
    val from: LocalDateTime = LocalDateTime.now(),
    val to: LocalDateTime = LocalDateTime.now()
)


enum class TimeSlot(val from: LocalTime, to: LocalTime) {

    TS_00_08(from = LocalTime.of(0, 0), to = LocalTime.of(8, 0)),
    TS_00_09(from = LocalTime.of(0, 0), to = LocalTime.of(9, 0)),
    TS_08_10(from = LocalTime.of(8, 0), to = LocalTime.of(10, 0)),
    TS_09_12(from = LocalTime.of(9, 0), to = LocalTime.of(12, 0)),
    TS_10_12(from = LocalTime.of(10, 0), to = LocalTime.of(12, 0)),
    TS_12_14(from = LocalTime.of(12, 0), to = LocalTime.of(14, 0)),
    TS_12_15(from = LocalTime.of(12, 0), to = LocalTime.of(15, 0)),
    TS_14_16(from = LocalTime.of(14, 0), to = LocalTime.of(16, 0)),
    TS_15_18(from = LocalTime.of(15, 0), to = LocalTime.of(18, 0)),
    TS_16_18(from = LocalTime.of(16, 0), to = LocalTime.of(18, 0)),
    TS_18_21(from = LocalTime.of(18, 0), to = LocalTime.of(21, 0)),
    TS_21_24(from = LocalTime.of(21, 0), to = LocalTime.of(0, 0));

    companion object {

        private fun openDaysTimeSlots(): Set<TimeSlot> = setOf(
            TS_00_08,
            TS_08_10,
            TS_10_12,
            TS_12_14,
            TS_14_16,
            TS_15_18,
            TS_16_18,
            TS_18_21,
            TS_21_24
        )

        private fun weekDaysTimeSlots(): Set<TimeSlot> = setOf(
            TS_00_09,
            TS_09_12,
            TS_12_15,
            TS_15_18,
            TS_18_21,
            TS_21_24
        )

        fun getDayTimeSlots(weekDay: WeekDay) = if (weekDay.open) openDaysTimeSlots() else weekDaysTimeSlots()

    }

}

enum class WeekDay(val open: Boolean) {
    MONDAY(true),
    TUESDAY(true),
    WEDNESDAY(true),
    THURSDAY(true),
    FRIDAY(true),
    SATURDAY(false),
    SUNDAY(false)
}

data class CampaignDiffusionSlots(
    val slots: Map<WeekDay, Map<TimeSlot, Boolean>> = WeekDay.values()
        .asIterable()
        .map { Pair(it, TimeSlot.getDayTimeSlots(it).map { ts -> Pair(ts, Random.nextBoolean()) }.toMap()) }
        .toMap()
)



