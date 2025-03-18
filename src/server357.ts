
const express = require('express')
import {handler357} from "./handler357";
const app = express()
app.get('/357', handler357)
app.listen(3000, () => {})
        