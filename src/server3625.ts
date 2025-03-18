
const express = require('express')
import {handler3625} from "./handler3625";
const app = express()
app.get('/3625', handler3625)
app.listen(3000, () => {})
        