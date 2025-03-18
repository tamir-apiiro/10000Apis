
const express = require('express')
import {handler7241} from "./handler7241";
const app = express()
app.get('/7241', handler7241)
app.listen(3000, () => {})
        