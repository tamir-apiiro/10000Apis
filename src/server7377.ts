
const express = require('express')
import {handler7377} from "./handler7377";
const app = express()
app.get('/7377', handler7377)
app.listen(3000, () => {})
        