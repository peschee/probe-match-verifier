# How-to

1. Perform a probe match as described in the [Probe Matching documentation](https://www.lightillusion.com/probe_matching.html) on the LightIllusion website.

2. Use the «Manual Measure Tab» to measure the **same colours in the same range** as during the probe match. In oder to be able to save the profile, your patch sets need to contain the following values:

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
        222.16.16<br>
        16.222.16<br>
        16.16.222<br>
        222.222.222
        </td>
        <td>
        255.255.255<br>
        240.0.0<br>
        0.240.0<br>
        0.0.240<br>
        240.240.240
        </td>
        <td>
        16.16.16<br>
        235.235.235<br>
        222.16.16<br>
        16.222.16<br>
        16.16.222<br>
        222.222.222<br>
        255.255.255
        </td>
      </tr>
    </table>

   Use can download these patch sets for [FULL](./Probe-Matching-Verification_FULL.csv) or [LEGAL](./Probe-Matching-Verification_LEGAL.csv).

   When using this tool, we suggest not using Patch Scale Extended. Patch Scale Extended uses Legal Range values for matching `222` but requires additional `255` patch to save the profile.

3. Save this profile

4. Locate the reference meter profile (`.bpd`) as well as the profile saved from the manual measurements (`.bcs`).

   `.bcs` files are usually found in `C:\Users\USERNAME\AppData\Roaming\ColourSpace\ColourSpaces`

   `.bpd` files should be in `C:\Users\USERNAME\AppData\Roaming\ColourSpace\MCGD`.

5. Copy these files somewhere outside of Windows system folders (e.g. `Desktop`), otherwise you won't be able to select them in the web application.

6. Load both files in the UI. The probe match verifier will compute whether the measurements are within Maximum Accepted Tolerance Levels (`+/- 0.001` for `x,y` as well as `+/- 1.5%` for `Y`).
