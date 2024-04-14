const { captureFugitive } = require('./server');

describe('captureFugitive', () => {
  it('should return "Fugitive was captured by Cop1" when fugitive is captured by Cop1', () => {
    const copChoices = [
      { copName: "Cop1", vehicle: { kind: "EV Car", range: 100 }, city: { name: "Yapkashnagar", distance: 60 } },
      { copName: "Cop2", vehicle: null, city: null },
      { copName: "Cop3", vehicle: null, city: null },
    ];
    const fugitiveLocation = { name: "Yapkashnagar" };
    const result = captureFugitive(copChoices, fugitiveLocation);
    expect(result).toBe("Fugitive was captured by Cop1");
  });

  it('should return "Fugitive was not captured" when fugitive is not captured', () => {
    const copChoices = [
      { copName: "Cop1", vehicle: null, city: null },
      { copName: "Cop2", vehicle: null, city: null },
      { copName: "Cop3", vehicle: null, city: null },
    ];
    const fugitiveLocation = { name: "Nuravgram" };
    const result = captureFugitive(copChoices, fugitiveLocation);
    expect(result).toBe("Fugitive was not captured");
  });
});
