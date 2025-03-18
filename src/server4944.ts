
const express = require('express')
import {handler4944} from "./handler4944";
const app = express()
app.get('/4944', handler4944)
app.listen(3000, () => {})
        