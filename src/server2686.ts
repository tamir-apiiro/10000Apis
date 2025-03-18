
const express = require('express')
import {handler2686} from "./handler2686";
const app = express()
app.get('/2686', handler2686)
app.listen(3000, () => {})
        