<script>
  import FontTable from '$lib/components/FontTable.svelte';
</script>

<h1>Heading 1 <span class="c0 si">Heading 1</span></h1>
<h2>Heading 2 <span class="c1 si">Heading 2</span></h2>
<h3>Heading 3 <span class="c0 si">Heading 3</span></h3>
<h4>Heading 4 <span class="c1 si">Heading 4</span></h4>

<p>
  <span class="c0">color 1</span> <br>
  <span class="c1 sb">color 2 in bold</span> <br>
  <span class="c2 si">color 3 in italic</span> <br>
  <span class="f0">font 0</span> <br>
  <span class="f1">font 1</span> <br>
  <span class="f2">font 2</span> <br>
</p>

<FontTable></FontTable>
