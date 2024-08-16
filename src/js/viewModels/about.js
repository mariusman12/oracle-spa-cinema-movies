define([
  'ojs/ojcore',
  'knockout',
  'ojs/ojknockout',
  'ojs/ojinputtext',
  'ojs/ojlabel',
], function (oj, ko) {
  function AboutViewModel() {
    var self = this

    self.teamMembers = [
      {
        name: 'John Smith',
        jobTitle: 'CEO',
        imageSource:
          'https://media.istockphoto.com/id/1193290387/photo/portrait-of-young-businessman-standing-in-his-office-with-arms-crossed.jpg?s=612x612&w=0&k=20&c=DdgYzd4WTTtlhKMM2dBqUxSxobWs7MC-rZZxflyF6oY=',
      },
      {
        name: 'Jane Doe',
        jobTitle: 'CTO',
        imageSource:
          'https://media.istockphoto.com/id/1091058068/photo/businesswoman.jpg?b=1&s=612x612&w=0&k=20&c=Ie5QEmngAgsLZ2fsFQR8IMgpckPRmkjHH1bGBXJjZak=',
      },
      {
        name: 'Bob Johnson',
        jobTitle: 'Lead Developer',
        imageSource:
          'https://media.gettyimages.com/id/107430211/photo/businessman-standing-alone-in-conference-room.jpg?s=612x612&w=gi&k=20&c=dm5GExxjsifiBwXsnc0fAnqEOlIA2gvQc7HwJizLS1s=',
      },
    ]
  }

  return new AboutViewModel()
})
