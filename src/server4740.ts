
const express = require('express')
import {handler4740} from "./handler4740";
const app = express()
app.get('/4740', handler4740)
app.listen(3000, () => {})
        