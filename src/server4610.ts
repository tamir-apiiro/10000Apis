
const express = require('express')
import {handler4610} from "./handler4610";
const app = express()
app.get('/4610', handler4610)
app.listen(3000, () => {})
        