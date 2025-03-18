
const express = require('express')
import {handler6357} from "./handler6357";
const app = express()
app.get('/6357', handler6357)
app.listen(3000, () => {})
        