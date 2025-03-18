
const express = require('express')
import {handler6760} from "./handler6760";
const app = express()
app.get('/6760', handler6760)
app.listen(3000, () => {})
        