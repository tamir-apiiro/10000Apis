
const express = require('express')
import {handler806} from "./handler806";
const app = express()
app.get('/806', handler806)
app.listen(3000, () => {})
        