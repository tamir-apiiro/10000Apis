
const express = require('express')
import {handler4152} from "./handler4152";
const app = express()
app.get('/4152', handler4152)
app.listen(3000, () => {})
        