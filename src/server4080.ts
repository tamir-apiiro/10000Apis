
const express = require('express')
import {handler4080} from "./handler4080";
const app = express()
app.get('/4080', handler4080)
app.listen(3000, () => {})
        