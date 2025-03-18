
const express = require('express')
import {handler2761} from "./handler2761";
const app = express()
app.get('/2761', handler2761)
app.listen(3000, () => {})
        