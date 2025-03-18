
const express = require('express')
import {handler433} from "./handler433";
const app = express()
app.get('/433', handler433)
app.listen(3000, () => {})
        