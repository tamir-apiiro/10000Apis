
const express = require('express')
import {handler2740} from "./handler2740";
const app = express()
app.get('/2740', handler2740)
app.listen(3000, () => {})
        