
const express = require('express')
import {handler6849} from "./handler6849";
const app = express()
app.get('/6849', handler6849)
app.listen(3000, () => {})
        