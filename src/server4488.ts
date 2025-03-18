
const express = require('express')
import {handler4488} from "./handler4488";
const app = express()
app.get('/4488', handler4488)
app.listen(3000, () => {})
        