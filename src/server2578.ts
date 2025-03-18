
const express = require('express')
import {handler2578} from "./handler2578";
const app = express()
app.get('/2578', handler2578)
app.listen(3000, () => {})
        