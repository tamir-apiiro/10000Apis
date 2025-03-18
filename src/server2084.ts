
const express = require('express')
import {handler2084} from "./handler2084";
const app = express()
app.get('/2084', handler2084)
app.listen(3000, () => {})
        