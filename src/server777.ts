
const express = require('express')
import {handler777} from "./handler777";
const app = express()
app.get('/777', handler777)
app.listen(3000, () => {})
        