
const express = require('express')
import {handler426} from "./handler426";
const app = express()
app.get('/426', handler426)
app.listen(3000, () => {})
        