# Proxistore exercise

As frontend developer/designer, you should be able to create HTML/CSS pages and integrate some dynamic data thanks to Javascript.
As an exercise we ask to reinvent two pages which exist in our application:
- Campaign listing,
- Campaign details.

The exercise is quite open and feel free to go as further as you can/want.
We develop some mock endpoints in order to dynamize your pages.

Feel free to use anything you want:
- Framework: VueJs, React, Angular or VanillaJS
- CSS Framework or preprocessors: Sass, bootstrap, tailwind
- Docker based, codepen, heroku, whatever.

## Campaign listing

List all available campaigns.  
**Endpoint**: https://proxistore-campaign-qof7m4cq5q-ew.a.run.app/campaigns  
**Method**: GET.  

**HTTP Parameters**:  

| Name      | Description |
| ----------- | ----------- |
| search      | Filter campaign by id (default null)         |
| page   | Use for pagination. Define the page number to retrieve (default 1)         |
| size   | Use for pagination. Define the number of element by page. (default 10)         |

## Campaign details

Get a campaign according to its identifier.  
**Endpoint**: https://proxistore-campaign-qof7m4cq5q-ew.a.run.app/campaigns/:id   
**Method**: GET  

## Data  

JSON format is used as returned value. A campaign is defined by:
| Name | Description |
| ------- | ----------- |
| **id** | Unique idenfifier (UUID) |
| **details** | Common details about the campaign |
| **statistics** | Campaign statistics such as views and clicks |
| **diffusion** | Information about campaign diffusion. When is it live? |
| **targets** | Campaign could be specific (In our example, for segments) |

### Details
| Name | Description |
| ------- | ----------- |
| **name** | name |
| **source** | source (enum: ADVERTISER, RETAILER, MEDIA_AGENCY) |
| **status** | status (enum: DRAFT, RUNNING, CANCELLED, FINISHED) |
| **budget** | budget amount + currency (enum: EUR, USD) |

### statistics
| Name | Description |
| ------- | ----------- |
| **views** | Views by devices. (Expected = total, Effective = real, Unique = unique) |
| **clicks** | count + unique |

### diffusion
| Name | Description |
| ------- | ----------- |
| **period** | A campaign is under diffusion during a period of time (from / to) |
| **slots** | A campaign could be under diffusion a specific hours/days |

### Segments
Segments are hardcoded in our example:
```
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
```

## JSON example
```
{
    "id": {
        "value": "43746d72-6117-4778-a953-1b376a44eac0"
    },
    "details": {
        "name": "Campaign 43746d72-6117-4778-a953-1b376a44eac0",
        "source": "ADVERTISER",
        "status": "DRAFT",
        "budget": {
            "value": 38412,
            "currency": "EUR"
        }
    },
    "statistics": {
        "views": {
            "expected": {
                "counts": {
                    "MOBILE": 7855,
                    "DESKTOP": 6683,
                    "TABLET": 518,
                    "OTHER": 5911
                }
            },
            "effective": {
                "counts": {
                    "MOBILE": 7482,
                    "DESKTOP": 2886,
                    "TABLET": 196,
                    "OTHER": 4334
                }
            },
            "unique": {
                "counts": {
                    "MOBILE": 6090,
                    "DESKTOP": 2621,
                    "TABLET": 104,
                    "OTHER": 1951
                }
            }
        },
        "clicks": {
            "count": 7782,
            "unique": 1302
        }
    },
    "diffusion": {
        "period": {
            "from": "2009-12-31T00:40:16.796157056",
            "to": "2014-05-21T12:40:16.796161288"
        },
        "slots": {
            "slots": {
                "MONDAY": {
                    "TS_00_08": false,
                    "TS_08_10": true,
                    "TS_10_12": false,
                    "TS_12_14": true,
                    "TS_14_16": false,
                    "TS_15_18": true,
                    "TS_16_18": false,
                    "TS_18_21": true,
                    "TS_21_24": true
                },
                "TUESDAY": {
                    "TS_00_08": true,
                    "TS_08_10": false,
                    "TS_10_12": false,
                    "TS_12_14": true,
                    "TS_14_16": true,
                    "TS_15_18": true,
                    "TS_16_18": true,
                    "TS_18_21": true,
                    "TS_21_24": true
                },
                "WEDNESDAY": {
                    "TS_00_08": false,
                    "TS_08_10": false,
                    "TS_10_12": true,
                    "TS_12_14": true,
                    "TS_14_16": true,
                    "TS_15_18": false,
                    "TS_16_18": true,
                    "TS_18_21": false,
                    "TS_21_24": true
                },
                "THURSDAY": {
                    "TS_00_08": true,
                    "TS_08_10": false,
                    "TS_10_12": true,
                    "TS_12_14": true,
                    "TS_14_16": true,
                    "TS_15_18": false,
                    "TS_16_18": true,
                    "TS_18_21": true,
                    "TS_21_24": true
                },
                "FRIDAY": {
                    "TS_00_08": false,
                    "TS_08_10": true,
                    "TS_10_12": false,
                    "TS_12_14": true,
                    "TS_14_16": false,
                    "TS_15_18": false,
                    "TS_16_18": false,
                    "TS_18_21": true,
                    "TS_21_24": true
                },
                "SATURDAY": {
                    "TS_00_09": true,
                    "TS_09_12": false,
                    "TS_12_15": true,
                    "TS_15_18": false,
                    "TS_18_21": true,
                    "TS_21_24": true
                },
                "SUNDAY": {
                    "TS_00_09": true,
                    "TS_09_12": false,
                    "TS_12_15": false,
                    "TS_15_18": false,
                    "TS_18_21": false,
                    "TS_21_24": false
                }
            }
        }
    },
    "targets": {
        "segments": [
            {
                "value": "art"
            },
            {
                "value": "sport"
            }
        ]
    }
}
```

# Page to create

## Listing

- [ ] It should display information such as identifier, name, status.
- [ ] It should be pageable.
- [ ] It should be searchable.

## Details 

- [ ] It should display segments and a way to select/unselect them.
- [ ] It should display slots table and a way to modify it.
- [ ] It should display statistics and other information which were not available on the listing page.

# Inspiration


