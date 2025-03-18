
const express = require('express')
import {handler2092} from "./handler2092";
const app = express()
app.get('/2092', handler2092)
app.listen(3000, () => {})
        