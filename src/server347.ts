
const express = require('express')
import {handler347} from "./handler347";
const app = express()
app.get('/347', handler347)
app.listen(3000, () => {})
        