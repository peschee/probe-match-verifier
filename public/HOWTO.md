# How-to

1. 📝 Perform a probe match as described in the [Probe Matching documentation](https://www.lightillusion.com/probe_matching.html) on the Light Illusion website.

2. 🧪 Use the **Manual Measure Tab** to measure the **same colours in the same range** as during the probe match. In order to save the profile, your patch sets need to contain the following values:

   <!-- prettier-ignore -->
   <table class='table-patches'>
      <tr>
        <th>LEGAL</th>
        <th>FULL</th>
        <th>EXTENDED</th>
      </tr>
      <tr>
        <td>
        16.16.16<br>
        235.235.235<br>
        224.16.16<br>
        16.224.16<br>
        16.16.224<br>
        224.224.224
        </td>
        <td>
        0.0.0<br>
        255.255.255<br>
        242.0.0<br>
        0.242.0<br>
        0.0.242<br>
        242.242.242
        </td>
        <td>
        16.16.16<br>
        235.235.235<br>
        224.16.16<br>
        16.224.16<br>
        16.16.224<br>
        224.224.224<br>
        255.255.255
        </td>
      </tr>
    </table>

3. 💾 Save this profile

4. 📁 Locate the reference meter profile (`.bpd`) as well as the profile saved from the manual measurements (`.bcs`).

   `.bcs` files are usually found in `C:\Users\USERNAME\AppData\Roaming\ColourSpace\ColourSpaces`

   `.bpd` files should be in `C:\Users\USERNAME\AppData\Roaming\ColourSpace\MCGD`.

   See [this post on AVS Forum](https://www.avsforum.com/threads/colourspace-cms-next-generation-calibration-thread.3049142/post-61311991) on how-to **export** these files directly from ColourSpace.

5. 📤 Copy these files somewhere outside of Windows system folders (e.g. `Desktop`), otherwise you won't be able to select them in the web application.

6. 📂 Load both files in the UI. The probe match verifier will compute whether the measurements are within Maximum Accepted Tolerance Levels (`+/- 0.001` for `xy` and `+/- 1.5%` for `Y`).

---

⚠️ **Usage Suggestion**

When using this tool, we suggest not using Patch Scale Extended. Patch Scale Extended uses Legal Range values for matching **`224`** but requires an additional **`255`** patch to save the profile.

---

📥 **Download Patch Sets**

**8-bit:**

- [16 - 235 (Legal)](./patches/Probe-Match%208b%20%28LEGAL%29.csv)
- [16 - 255 (Extended)](./patches/Probe-Match%208b%20(EXTENDED).csv)
- [0 - 255 (Full)](./patches/Probe-Match%208b%20%28FULL%29.csv) 

**10-bit:**

- [64 - 940 (Legal)](patches/Probe-Match%2010b%20(LEGAL).csv)
- [64 - 1023 (Extended)](/patches/Probe-Match%2010b%20(EXTENDED).csv)
- [0 - 1023 (Full)](/patches/Probe-Match%2010b%20(FULL).csv)
