
const express = require('express')
import {handler4985} from "./handler4985";
const app = express()
app.get('/4985', handler4985)
app.listen(3000, () => {})
        