
const express = require('express')
import {handler7055} from "./handler7055";
const app = express()
app.get('/7055', handler7055)
app.listen(3000, () => {})
        