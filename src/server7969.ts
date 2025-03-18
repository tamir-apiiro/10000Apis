
const express = require('express')
import {handler7969} from "./handler7969";
const app = express()
app.get('/7969', handler7969)
app.listen(3000, () => {})
        