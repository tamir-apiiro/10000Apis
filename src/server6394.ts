
const express = require('express')
import {handler6394} from "./handler6394";
const app = express()
app.get('/6394', handler6394)
app.listen(3000, () => {})
        