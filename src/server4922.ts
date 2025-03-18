
const express = require('express')
import {handler4922} from "./handler4922";
const app = express()
app.get('/4922', handler4922)
app.listen(3000, () => {})
        