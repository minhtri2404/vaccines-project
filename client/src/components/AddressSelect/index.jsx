import { Autocomplete, Grid, TextField } from '@mui/material';
import React, { useContext, useState } from 'react';
import addressApi from '../../apis/addressApi';
import { AddressContext } from '../../contexts/addressContext';

export default function AddressSelect({ onFullSelect }) {
  const { provinces } = useContext(AddressContext);
  const provinceOptions = provinces.map((p) => ({ ...p, label: p.name }));

  const [provinceId, setProvinceId] = useState(null);
  const [districtId, setDistrictId] = useState(null);
  const [districts, setDistricts] = useState([]);
  const [wards, setWards] = useState([]);

  const onProvinceChange = async (e, value) => {
    const id = value.provinceId;
    if (id) {
      const apiRes = await addressApi.getDistrictsByProvinceId(id);
      if (apiRes.status === 200) {
        const districtList = apiRes.data;
        const districtOptions = districtList.map((d) => ({
          ...d,
          label: `${d.prefix} ${d.name}`,
        }));
        setDistricts(districtOptions);
        setProvinceId(id);
        setDistrictId(null);
        onFullSelect({ provinceId: id, districtId: null, wardId: null });
      }
    }
  };

  const onDistrictChange = async (e, value) => {
    const id = value.districtId;
    if (id) {
      const apiRes = await addressApi.getWardsByDistrictId(id);
      if (apiRes.status === 200) {
        const wardList = apiRes.data;
        const wardOptions = wardList.map((w) => ({
          ...w,
          label: `${w.prefix} ${w.name}`,
        }));
        setWards(wardOptions);
        setDistrictId(id);
        onFullSelect({ provinceId, districtId: id, wardId: null });
      }
    }
  };

  const onWardChange = (e, value) => {
    const { wardId } = value;

    if (wardId) {
      onFullSelect({ provinceId, districtId, wardId });
    }
  };

  return (
    <Grid container>
      <Grid item xs={12} md={4}>
        <Autocomplete
          disablePortal
          disableClearable
          options={provinceOptions}
          size="small"
          fullWidth
          onChange={onProvinceChange}
          isOptionEqualToValue={(o, v) => o.provinceId === v.provinceId}
          renderInput={(params) => (
            <TextField {...params} placeholder="T???nh Th??nh" />
          )}
        />
      </Grid>
      <Grid item xs={12} md={4} sx={{ px: { md: 1 }, my: { md: 0, xs: 1 } }}>
        <Autocomplete
          disabled={!provinceId}
          disablePortal
          disableClearable
          options={districts}
          size="small"
          fullWidth
          onChange={onDistrictChange}
          isOptionEqualToValue={(o, v) => o.districtId === v.districtId}
          renderInput={(params) => (
            <TextField
              {...params}
              placeholder={provinceId ? 'Qu???n Huy???n' : 'Ch???n T???nh/Th??nh tr?????c'}
            />
          )}
        />
      </Grid>
      <Grid item xs={12} md={4}>
        <Autocomplete
          disabled={!districtId}
          disablePortal
          disableClearable
          options={wards}
          size="small"
          fullWidth
          onChange={onWardChange}
          isOptionEqualToValue={(o, v) => o.wardId === v.wardId}
          renderInput={(params) => (
            <TextField
              {...params}
              placeholder={districtId ? 'X?? ph?????ng' : 'Ch???n Qu???n/Huy???n tr?????c'}
            />
          )}
        />
      </Grid>
    </Grid>
  );
}
