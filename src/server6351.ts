
const express = require('express')
import {handler6351} from "./handler6351";
const app = express()
app.get('/6351', handler6351)
app.listen(3000, () => {})
        