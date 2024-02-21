<script>
  import MultiPanel from "$lib/components/sections/MultiPanel/MultiPanel.svelte"
  import SinglePanel from "$lib/components/sections/SinglePanel/SinglePanel.svelte"
  import Saos from "saos"
</script>

<div id="page">
  <Saos once={true}><SinglePanel /></Saos>
  <!-- TODO: Fact check -->
  <!-- TODO: Re-add important info -->
  <!-- ? Add animation -->
  <div class="quote">
    <div class="wrap-around">
      Installing solar panels costs an average of <i>$25,000.</i>
    </div>
    <p>
      While the initial investment is quite steep, clean energy initiatives from the US government
      offer substantial tax breaks. In combination with the power savings from the panels
      themselves, returns on this investment usually appear within 2 to 4 years.
    </p>
  </div>
  <div class="arg-filler">
    <!-- I think this could flow a little better, but for now it's fine -->
    <p>
      Two to four years may sound like a long time to be non-returning, but considering there is little to no degredation over the first <i>twenty years</i>, there is a high likelyhood that this investment will actually <u><i>last</i></u>. Due to their tendency to last, companies also tend to offer comprehensive warranties for 15 to 25 years. If the panels do get damaged outside of that window, it can cost as little as $100, or as much as $3600 depending on the type or severity of the damage. The most common type of maintainance, though, is simply cleaning the panels of heavy snow and other major covers that can't wash off with rain or get blown off with wind. If time is not a concern, but money is, <a href="https://www.nerdwallet.com/article/finance/solar-panel-cost">nerdwallet.com</a> recomends shopping around for a better price, searching for local incentives for installing solar, or getting a loan. Alternatively, starting with just a few panels would still take a considerable amount off of each months power bill, and that excess could possibly go towards buying enough panels to fully power the home. 
    </p>
    <p class="source">sources: <a href=https://www.homeadvisor.com/cost/heating-and-cooling/repair-solar-panels>https://www.homeadvisor.com/cost/heating-and-cooling/repair-solar-panels/</a> and <a href=https://www.usatoday.com/money/homefront/solar/solar-panel-maintenance>https://www.usatoday.com/money/homefront/solar/solar-panel-maintenance/</a></p>
  </div>

  <!-- <p>
    While installing solar panels costs an average of $25,000, once that price is paid, you can get 30% of that bill back off of your taxes in addition to the money off of the power bill. If we use the averages across the U.S., if you had 15 panels, you could be saving <span class="c2">over $100 every month!</span> If you have more panels or use less power, you could even sell some of that energy back to the power company to <i>make</i> money rather than just <i>saving</i> it.
  </p> -->
  <Saos once={true}><MultiPanel /></Saos>
  <div class="quote">
    <div class="wrap-around right">Proident id veniam irure cillum irure nulla.</div>
    The average number of panels to power one home ranges from fifteen to twenty-five, which places this estimate at the low end of the scale. Assuming a home implements twenty-five, said home could generate over 45 kWh per day, which is enough to power a modern refrigerator for about <i class="c2">one full month</i>.
    <p class="source">source: <a href="https://wattsguide.com/how-many-watts-does-a-refrigerator-use/">https://wattsguide.com/how-many-watts-does-a-refrigerator-use/</a> and <i class="c2">math</i></p>
  </div>
  <div class="arg-filler-2">
    <p>
      The previous estimate of 45kWh per day, or nearly 1.3 MWh's per month, is enough to cover the average of 877 kWh per month used by each household, then sell the rest of that power back to the grid for around $65 per month if the power company buys excess power. This means that each month, a homeowner could earn $65 per month <i>passively</i> for the rest of the time they keep the panels maintained. Said passive money is in addition to saving an average of $140 per month on power bills. The excess power also allows for fluctuations in usage, extra time spent indoors like during the quarantine, and in extreme cases even living off grid entirely.
    </p>
  </div>
  <!-- <p>
    According to <a href="https://www.energysage.com/solar/solar-panel-output/">energysage.com</a>, 15 panels is on the lower end of the averages. If you use the higher range of said averages, you'd get 25 panels which could be generating a little over 45 kWh per day! That's enough that you realistically <i>could</i> start selling back electricity!
  </p> -->

  <!-- <p class="more-info">&emsp;&emsp;If you live somewhere that gets sun very often, like in L.A. or somewhere in Texas, solar power may pay itself off very quickly, either by tax incentives or just by offsetting the power bill. On average, solar power costs $25,000 to install and get running. There is, if eligible, a 30% federal tax credit that contributes to taxes for the next several years which comes out to $7,500 at that price. Assuming the national average price per Kilowatt-hour (kWh) of 16 cents1 and kWh per household per month of 8772, that brings the average electricity bill to $140.32. The average amount of energy generated by a single solar panel is 350 Watts per hour at peak efficiency3, but depending on the weather, temperature of the panel, etc. it will likely perform at around 22% efficiency4. Assuming a low-end average group of 15 panels needed to power a single household3, this comes out to a real world output of 776.16 kWh. That is a saving of 88.5% or $124.19 per month. This means that after tax reductions, it’ll pay itself off after about 12 years. Considering these panels tend to last 20 years with little degrading at all1, that’s a pretty good deal!</p> -->
</div>

<style lang="scss">
  .source{
    font-size: 12pt;
  }
</style>