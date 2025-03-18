
const express = require('express')
import {handler577} from "./handler577";
const app = express()
app.get('/577', handler577)
app.listen(3000, () => {})
        