
const express = require('express')
import {handler7605} from "./handler7605";
const app = express()
app.get('/7605', handler7605)
app.listen(3000, () => {})
        