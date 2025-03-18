
const express = require('express')
import {handler7761} from "./handler7761";
const app = express()
app.get('/7761', handler7761)
app.listen(3000, () => {})
        