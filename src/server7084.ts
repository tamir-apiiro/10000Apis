
const express = require('express')
import {handler7084} from "./handler7084";
const app = express()
app.get('/7084', handler7084)
app.listen(3000, () => {})
        