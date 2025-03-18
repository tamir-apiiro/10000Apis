
const express = require('express')
import {handler4491} from "./handler4491";
const app = express()
app.get('/4491', handler4491)
app.listen(3000, () => {})
        