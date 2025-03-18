
const express = require('express')
import {handler3740} from "./handler3740";
const app = express()
app.get('/3740', handler3740)
app.listen(3000, () => {})
        