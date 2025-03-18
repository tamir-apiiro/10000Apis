
const express = require('express')
import {handler7912} from "./handler7912";
const app = express()
app.get('/7912', handler7912)
app.listen(3000, () => {})
        