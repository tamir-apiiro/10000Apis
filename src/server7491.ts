
const express = require('express')
import {handler7491} from "./handler7491";
const app = express()
app.get('/7491', handler7491)
app.listen(3000, () => {})
        