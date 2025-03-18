
const express = require('express')
import {handler7791} from "./handler7791";
const app = express()
app.get('/7791', handler7791)
app.listen(3000, () => {})
        