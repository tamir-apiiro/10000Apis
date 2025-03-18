
const express = require('express')
import {handler7692} from "./handler7692";
const app = express()
app.get('/7692', handler7692)
app.listen(3000, () => {})
        