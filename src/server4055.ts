
const express = require('express')
import {handler4055} from "./handler4055";
const app = express()
app.get('/4055', handler4055)
app.listen(3000, () => {})
        