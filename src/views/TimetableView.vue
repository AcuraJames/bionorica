<template>
  <div>
    <div class="title">{{ $t('route.programm') }}</div>
    <div class="teambuilding">
      <data-table :items="timetables" />
    </div>
  </div>
</template>

<script>
import DataTable from '@/components/DataTable'

export default {
  name: 'TimetableView',
  components: {
    DataTable,
  },
  data() {
    return {
      timetables: [
        {
          title: this.$t('timetable.monday'),
          rows: [
            {
              subs: [
                {
                  start: '10:00',
                  end: '14:00',
                  event: this.$t('timetable.eventMonday1'),
                  speaker: this.$t('timetable.speaker2'),
                  location: this.$t('timetable.location1'),
                  dress: '',
                  isMarked: false
                }
              ]
            },
            {
              subs: [
                {
                  start: 'до 18:00',
                  end: '',
                  event: this.$t('timetable.eventMonday2'),
                  speaker: '',
                  location: '',
                  dress: '',
                  isMarked: false
                }
              ]
            },
            {
              subs: [
                {
                  start: '18:00',
                  end: '22:00',
                  event: this.$t('timetable.eventMonday3'),
                  speaker: '',
                  location: this.$t('timetable.location2'),
                  dress: this.$t('timetable.dress1'),
                  isMarked: true
                }
              ]
            },
            {
              subs: [
                {
                  start: '',
                  end: '',
                  event: this.$t('timetable.eventMonday4'),
                  speaker: '',
                  location: '',
                  dress: '',
                  isMarked: false
                }
              ]
            },
          ]
        },
        {
          title: this.$t('timetable.tuesday'),
          rows: [
            {
              subs: [
                {
                  start: '7:00',
                  end: '9:00',
                  event: this.$t('timetable.eventTuesday1'),
                  speaker: '',
                  location: this.$t('timetable.location3'),
                  dress: '',
                  isMarked: true
                }
              ]
            },
            {
              location: this.$t('timetable.location4'),
              dress: this.$t('timetable.dress2'),
              subs: [
                {
                  start: '9:00',
                  end: '9:20',
                  event: this.$t('timetable.eventTuesday2'),
                  speaker: this.$t('timetable.speaker2'),
                },
                {
                  start: '9:20',
                  end: '9:50',
                  event: this.$t('timetable.eventTuesday3'),
                  speaker: this.$t('timetable.speaker3'),
                },
                {
                  start: '9:50',
                  end: '10:30',
                  event: this.$t('timetable.eventTuesday3'),
                  speaker: this.$t('timetable.speaker4'),
                },
                {
                  start: '10:30',
                  end: '11:00',
                  event: this.$t('timetable.eventTuesday5'),
                  speaker: '',
                  isMarked: true
                },
                {
                  start: '11:00',
                  end: '12:00',
                  event: this.$t('timetable.eventTuesday3'),
                  speaker: this.$t('timetable.speaker5'),
                },
                {
                  start: '12:00',
                  end: '12:30',
                  event: this.$t('timetable.eventTuesday7'),
                  speaker: this.$t('timetable.speaker6'),
                },
                {
                  start: '12:30',
                  end: '13:00',
                  event: this.$t('timetable.eventTuesday8'),
                  speaker: this.$t('timetable.speaker7'),
                },
              ]
            },
            {
              subs: [
                {
                  start: '13:00',
                  end: '14:30',
                  event: this.$t('timetable.eventTuesday9'),
                  speaker: '',
                  location: this.$t('timetable.location5'),
                  dress: '',
                  isMarked: true
                }
              ]
            },
            {
              location: this.$t('timetable.location4'),
              dress: this.$t('timetable.dress2'),
              subs: [
                {
                  start: '14:30',
                  end: '16:15',
                  event: this.$t('timetable.eventTuesday10'),
                  speaker: this.$t('timetable.speaker8'),
                },
                {
                  start: '16:15',
                  end: '16:45',
                  event: this.$t('timetable.eventTuesday5'),
                  speaker: '',
                  isMarked: true
                },
                {
                  start: '16:45',
                  end: '17:30',
                  event: this.$t('timetable.eventTuesday12'),
                  speaker: this.$t('timetable.speaker1'),
                },
                {
                  start: '17:30',
                  end: '18:15',
                  event: this.$t('timetable.eventTuesday13'),
                  speaker: '',
                  isMarkedText: true
                },
                {
                  start: '18:15',
                  end: '19:00',
                  event: this.$t('timetable.eventTuesday14'),
                  speaker: '',
                  isMarkedText: true
                },
              ]
            },
            {
              subs: [
                {
                  start: '19:00',
                  end: '22:00',
                  event: this.$t('timetable.eventTuesday15'),
                  speaker: '',
                  location: this.$t('timetable.location6'),
                  dress: this.$t('timetable.dress1'),
                  isMarked: true
                }
              ]
            },
            {
              subs: [
                {
                  start: '22:00',
                  end: '22:30',
                  event: this.$t('timetable.eventTuesday16'),
                  speaker: '',
                  isMarkedText: true
                }
              ]
            },
            {
              subs: [
                {
                  event: this.$t('timetable.eventTuesday17'),
                }
              ]
            },
          ]
        },
        {
          title: this.$t('timetable.wednsday'),
          rows: [
            {
              subs: [
                {
                  start: '7:00',
                  end: '9:00',
                  event: this.$t('timetable.eventTuesday1'),
                  speaker: '',
                  location: this.$t('timetable.location3'),
                  dress: '',
                  isMarked: true
                }
              ]
            },
            {
              dress: this.$t('timetable.dress2'),
              subs: [
                {
                  start: '9:00',
                  end: '9:45',
                  event: this.$t('timetable.eventWednsday2'),
                  speaker: this.$t('timetable.speaker10'),
                  location: this.$t('timetable.location9'),
                },
                {
                  start: '9:45',
                  end: '11:00',
                  event: this.$t('timetable.eventWednsday3'),
                  speaker: this.$t('timetable.speaker11'),
                  location: this.$t('timetable.location10'),
                },
                {
                  start: '10:00',
                  end: '11:00',
                  event: this.$t('timetable.eventWednsday4'),
                  speaker: this.$t('timetable.speaker12'),
                  location: this.$t('timetable.location11'),
                },
                {
                  start: '11:00',
                  end: '11:30',
                  event: this.$t('timetable.eventWednsday5'),
                  isMarked: true
                },
                {
                  start: '11:30',
                  end: '12:30',
                  event: this.$t('timetable.eventWednsday6'),
                  speaker: this.$t('timetable.speaker13'),
                },
                {
                  start: '12:30',
                  end: '13:00',
                  event: this.$t('timetable.eventWednsday7'),
                  speaker: this.$t('timetable.speaker14'),
                  location: this.$t('timetable.location13'),
                },
                {
                  start: '13:00',
                  end: '14:00',
                  event: this.$t('timetable.eventWednsday8'),
                  location: this.$t('timetable.location3'),
                },
              ]
            },
            {
              dress: this.$t('timetable.dress2'),
              subs: [
                {
                  start: '14:00',
                  end: '16:45',
                  event: this.$t('timetable.eventWednsday9'),
                  speaker: this.$t('timetable.speaker15'),
                  location: this.$t('timetable.location15'),
                },
                {
                  start: '14:00',
                  end: '16:00',
                  event: this.$t('timetable.eventWednsday10'),
                  speaker: this.$t('timetable.speaker16'),
                  location: this.$t('timetable.location16'),
                },
                {
                  start: '15:45',
                  end: '16:15',
                  event: this.$t('timetable.eventWednsday11'),
                  isMarked: true
                },
                {
                  start: '16:15',
                  end: '16:45',
                  event: this.$t('timetable.eventWednsday12'),
                  speaker: this.$t('timetable.speaker17'),
                  location: this.$t('timetable.location17'),
                },
                {
                  start: '16:45',
                  end: '17:30',
                  event: this.$t('timetable.eventWednsday12'),
                  speaker: this.$t('timetable.speaker18'),
                  location: this.$t('timetable.location17'),
                },
                {
                  start: '17:30',
                  end: '18:00',
                  event: this.$t('timetable.eventWednsday14'),
                },
              ]
            },
            {
              subs: [
                {
                  event: this.$t('timetable.eventWednsday16'),
                }
              ]
            }
          ]
        },
        {
          title: this.$t('timetable.thursday'),
          rows: [
            {
              subs: [
                {
                  start: '7:00',
                  end: '9:00',
                  event: this.$t('timetable.eventThursday1'),
                  isMarked: true
                }
              ]
            },
            {
              dress: this.$t('timetable.dress4'),
              subs: [
                {
                  start: '9:00',
                  event: this.$t('timetable.eventThursday2'),
                  speaker: this.$t('timetable.speaker19'),
                  location: '⠀'
                },
                {
                  start: '9:00',
                  end: '13:00',
                  event: this.$t('timetable.eventThursday3'),
                },
                {
                  start: '13:00',
                  end: '16:00',
                  event: this.$t('timetable.eventThursday4'),
                  location: this.$t('timetable.location19')
                },
              ]
            },
            {
              subs: [
                {
                  start: '16:00',
                  end: '17:15',
                  event: this.$t('timetable.eventThursday5'),
                }
              ]
            },
            {
              dress: this.$t('timetable.dress5'),
              subs: [
                {
                  start: '17:15',
                  end: '18:00',
                  event: this.$t('timetable.eventThursday6'),
                  speaker: this.$t('timetable.speaker20'),
                  location: this.$t('timetable.location20'),
                },
                {
                  start: '18:00',
                  end: '18:15',
                  event: this.$t('timetable.eventThursday7'),
                  speaker: this.$t('timetable.speaker20'),
                  location: this.$t('timetable.location20'),
                },
                {
                  start: '18:30',
                  end: '19:00',
                  event: this.$t('timetable.eventThursday8'),
                  location: this.$t('timetable.location20'),
                },
                {
                  start: '19:00',
                  end: '0:00',
                  event: this.$t('timetable.eventThursday9'),
                  location: this.$t('timetable.location21'),
                  isMarked: true
                },
              ]
            },
            {
              subs: [
                {
                  start: '0:00',
                  event: this.$t('timetable.eventThursday10'),
                }
              ]
            },
            {
              subs: [
                {
                  event: this.$t('timetable.eventThursday11'),
                }
              ]
            },
          ]
        },
        {
          //
          title: this.$t('timetable.friday'),
          rows: [
            {
              subs: [
                {
                  start: '7:00',
                  end: '9:00',
                  event: this.$t('timetable.eventFriday1'),
                  isMarked: true
                }
              ]
            },
            {
              subs: [
                {
                  event: this.$t('timetable.eventFriday2'),
                }
              ]
            },
          ]
        }
      ]
    }
  }
}
</script>

<style>
.teambuilding {
  overflow-x: auto;
}
</style>