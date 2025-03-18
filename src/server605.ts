
const express = require('express')
import {handler605} from "./handler605";
const app = express()
app.get('/605', handler605)
app.listen(3000, () => {})
        