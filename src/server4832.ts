
const express = require('express')
import {handler4832} from "./handler4832";
const app = express()
app.get('/4832', handler4832)
app.listen(3000, () => {})
        