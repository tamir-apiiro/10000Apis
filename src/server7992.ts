
const express = require('express')
import {handler7992} from "./handler7992";
const app = express()
app.get('/7992', handler7992)
app.listen(3000, () => {})
        