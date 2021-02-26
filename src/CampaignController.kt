package be.proxistore.service.campaign.rest

import be.proxistore.service.campaign.api.*
import org.springframework.web.bind.annotation.*
import java.time.LocalDateTime
import java.util.*
import java.util.stream.Collectors
import kotlin.random.Random

@RestController
@RequestMapping("/campaigns")
class CampaignController() {

    val campaigns: Map<String, Campaign> =
        (1..100)
            .map { randomCampaign() }
            .map { Pair(it.id.value, it) }
            .toMap()


    @GetMapping("")
    fun listAll(
        @RequestParam("size", defaultValue = "10") size: Int = 10,
        @RequestParam("page", defaultValue = "1") page: Int = 1,
        @RequestParam("search") id: String? = null
    ): CampaignsPage {

        val campaigns = campaigns
            .values
            .filter { campaign -> id?.let { campaign.id.value.contains(it) } ?: true }

        val total = campaigns.size
        var from = if (page == 1) 0 else (page - 1) * size
        var to = from + size

        from = if (from > total) total else from
        to = if (to > total) total else to

        return CampaignsPage(
            result = campaigns.subList(from, to),
            pageable = Pageable(size = size, page = page),
            total = total / size
        )

    }

    @GetMapping("/{id}")
    fun getCampaignDetails(@PathVariable("id") campaignId: String): Campaign? {
        return campaigns[campaignId]
    }


    fun randomCampaign(): Campaign {

        val segments: Set<String> = setOf(
            "animal",
            "sport",
            "car",
            "food",
            "nightlife",
            "art",
            "culture",
            "technology",
        )

        fun randomCampaignId() = CampaignId(value = UUID.randomUUID().toString())

        fun randomCampaignDetails(id: CampaignId) = CampaignDetails(
            name = "Campaign ${id.value}",
            source = Source.values()[Random.nextInt(Source.values().size)],
            status = CampaignStatus.values()[Random.nextInt(CampaignStatus.values().size)],
            budget = Amount(value = Random.nextLong(10000, 1000000))
        )

        fun randomTimeSlots() = CampaignDiffusionSlots()

        fun randomPeriod(): Period {
            val random = Random.nextLong(10000, 100000)
            val from = LocalDateTime.now().minusHours(random)
            val to = LocalDateTime.now().minusHours(random).plusHours(Random.nextLong(10000, 100000))
            return Period(from, to)
        }

        fun randomTargets() = CampaignTargets(
            segments = segments.stream()
                .filter { Random.nextBoolean() }
                .map { Segment(it) }
                .collect(Collectors.toSet())
        )

        fun randomStatistics(): CampaignStatistics {

            fun randomClicks(): CampaignClicks {
                val count = Random.nextLong(1000, 10000)
                return CampaignClicks(
                    count = count,
                    unique = Random.nextLong(0, count)
                )
            }

            fun randomCounterByDevices(limit: CounterByDevices? = null) = CounterByDevices(
                counts =
                Device
                    .values()
                    .map { device -> Pair(device, Random.nextLong(0, limit?.let { limit.counts[device] } ?: 10000)) }
                    .toMap()
            )

            fun randomStats(): CampaignViewStatistics {
                val expected = randomCounterByDevices()
                val effective = randomCounterByDevices(expected)
                val unique = randomCounterByDevices(effective)
                return CampaignViewStatistics(
                    expected = expected,
                    effective = effective,
                    unique = unique
                )
            }

            return CampaignStatistics(
                clicks = randomClicks(),
                views = randomStats()
            )
        }

        val id = randomCampaignId()
        return Campaign(
            id = id,
            details = randomCampaignDetails(id),
            diffusion = Diffusion(
                period = randomPeriod(),
                slots = randomTimeSlots()
            ),
            targets = randomTargets(),
            statistics = randomStatistics()
        )

    }

}


interface Page<T> {
    val result: List<T>
    val total: Int
    val pageable: Pageable
}

data class CampaignsPage(
    override val result: List<Campaign>,
    override val total: Int,
    override val pageable: Pageable
) : Page<Campaign>

data class Pageable(
    val page: Int = 1,
    val size: Int = 10
)

