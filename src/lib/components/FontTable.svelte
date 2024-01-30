<table>
  <thead>
    <tr>
      <th class="c0 sr" scope="col">Style</th>
      <th class="c0 sr" scope="col">Default</th>
      <th class="c1 sr" scope="col">Primary</th>
      <th class="c2 sr" scope="col">Accent</th>
      <th class="c3 sr" scope="col">Panel Blue</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th class="f0 c0 sr" scope="rowgroup" colspan="5">Kanit</th>
    </tr>
    <tr>
      <th class="f0 sr" scope="row">Regular</th>
      <td class="f0 c0 sr">Lorem Ipsum</td>
      <td class="f0 c1 sr">Lorem Ipsum</td>
      <td class="f0 c2 sr">Lorem Ipsum</td>
      <td class="f0 c3 sr">Lorem Ipsum</td>
    </tr>
    <tr>
      <th class="f0 sr si" scope="row">Italic</th>
      <td class="f0 c0 sr si">Lorem Ipsum</td>
      <td class="f0 c1 sr si">Lorem Ipsum</td>
      <td class="f0 c2 sr si">Lorem Ipsum</td>
      <td class="f0 c3 sr si">Lorem Ipsum</td>
    </tr>
    <tr>
      <th class="f0 sr sb" scope="row">Bold</th>
      <td class="f0 c0 sr sb">Lorem Ipsum</td>
      <td class="f0 c1 sr sb">Lorem Ipsum</td>
      <td class="f0 c2 sr sb">Lorem Ipsum</td>
      <td class="f0 c3 sr sb">Lorem Ipsum</td>
    </tr>
    <tr>
      <th class="f1 c0 sr" scope="rowgroup" colspan="5">Overpass Mono</th>
    </tr>
    <tr>
      <th class="f1 sr" scope="row">Regular</th>
      <td class="f1 c0 sr">Lorem Ipsum</td>
      <td class="f1 c1 sr">Lorem Ipsum</td>
      <td class="f1 c2 sr">Lorem Ipsum</td>
      <td class="f1 c3 sr">Lorem Ipsum</td>
    </tr>
    <tr>
      <th class="f1 sr si" scope="row">Italic</th>
      <td class="f1 c0 sr si">Lorem Ipsum</td>
      <td class="f1 c1 sr si">Lorem Ipsum</td>
      <td class="f1 c2 sr si">Lorem Ipsum</td>
      <td class="f1 c3 sr si">Lorem Ipsum</td>
    </tr>
    <tr>
      <th class="f1 sr sb" scope="row">Bold</th>
      <td class="f1 c0 sr sb">Lorem Ipsum</td>
      <td class="f1 c1 sr sb">Lorem Ipsum</td>
      <td class="f1 c2 sr sb">Lorem Ipsum</td>
      <td class="f1 c3 sr sb">Lorem Ipsum</td>
    </tr>
    <tr>
      <th class="f2 c0 sr" scope="rowgroup" colspan="5">DM Serif Display</th>
    </tr>
    <tr>
      <th class="f2 sr" scope="row">Regular</th>
      <td class="f2 c0 sr">Lorem Ipsum</td>
      <td class="f2 c1 sr">Lorem Ipsum</td>
      <td class="f2 c2 sr">Lorem Ipsum</td>
      <td class="f2 c3 sr">Lorem Ipsum</td>
    </tr>
    <tr>
      <th class="f2 sr si" scope="row">Italic</th>
      <td class="f2 c0 sr si">Lorem Ipsum</td>
      <td class="f2 c1 sr si">Lorem Ipsum</td>
      <td class="f2 c2 sr si">Lorem Ipsum</td>
      <td class="f2 c3 sr si">Lorem Ipsum</td>
    </tr>
    <tr>
      <th class="f2 sr sb" scope="row">Bold</th>
      <td class="f2 c0 sr sb">Lorem Ipsum</td>
      <td class="f2 c1 sr sb">Lorem Ipsum</td>
      <td class="f2 c2 sr sb">Lorem Ipsum</td>
      <td class="f2 c3 sr sb">Lorem Ipsum</td>
    </tr>
  </tbody>
</table>

<style lang="scss">
  table {
    $border: 1px solid var(--text);
    border-spacing: 0;
    border: $border;
    tr {
      border: $border;
      th, td {
        border: $border;
        padding: 5px 8px;
      }
      th[colspan] {
        text-align: left;
        padding-left: 20px;
      }
    }
  }
</style>
