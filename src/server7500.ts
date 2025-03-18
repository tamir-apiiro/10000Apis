
const express = require('express')
import {handler7500} from "./handler7500";
const app = express()
app.get('/7500', handler7500)
app.listen(3000, () => {})
        