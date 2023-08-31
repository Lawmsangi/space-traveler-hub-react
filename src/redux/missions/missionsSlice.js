import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const initialState = {
  missions: [],
  isLoading: false,
};

const url = 'https://api.spacexdata.com/v3/missions';

export const fetchMissions = createAsyncThunk(
  'missions/fetchMissions',
  async (_, thunkAPI) => {
    try {
      const response = await fetch(url);
      return response.json();
    } catch (error) {
      return thunkAPI.rejectWithValue('Error fetching');
    }
  },
);

const missionsSlice = createSlice({
  name: 'missions',
  initialState,
  reducers: {
    joinMission: (state, action) => {
      const id = action.payload;
      const newState = state.missions.map((mission) => {
        if (mission.id !== id) return mission;
        return { ...mission, member: true };
      });
      state.missions = newState;
    },
    leaveMission: (state, action) => {
      const id = action.payload;
      const newState = state.missions.map((mission) => {
        if (mission.id !== id) return mission;
        return { ...mission, member: false };
      });
      state.missions = newState;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchMissions.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchMissions.fulfilled, (state, action) => {
        state.isLoading = false;
        const newMission = [];
        const getMissions = action.payload;
        getMissions.forEach((mission) => {
          newMission.push({
            id: mission.mission_id,
            name: mission.mission_name,
            description: mission.description,
          });
        });
        state.missions = newMission;
      })
      .addCase(fetchMissions.rejected, (state) => {
        state.isLoading = false;
      });
  },
});

export const { joinMission, leaveMission } = missionsSlice.actions;
export default missionsSlice.reducer;
