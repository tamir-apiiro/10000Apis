
const express = require('express')
import {handler820} from "./handler820";
const app = express()
app.get('/820', handler820)
app.listen(3000, () => {})
        