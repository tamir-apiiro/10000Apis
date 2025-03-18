
const express = require('express')
import {handler4099} from "./handler4099";
const app = express()
app.get('/4099', handler4099)
app.listen(3000, () => {})
        