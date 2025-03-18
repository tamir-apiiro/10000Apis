
const express = require('express')
import {handler2708} from "./handler2708";
const app = express()
app.get('/2708', handler2708)
app.listen(3000, () => {})
        