
const express = require('express')
import {handler7740} from "./handler7740";
const app = express()
app.get('/7740', handler7740)
app.listen(3000, () => {})
        