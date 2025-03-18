
const express = require('express')
import {handler7651} from "./handler7651";
const app = express()
app.get('/7651', handler7651)
app.listen(3000, () => {})
        