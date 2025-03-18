
const express = require('express')
import {handler7109} from "./handler7109";
const app = express()
app.get('/7109', handler7109)
app.listen(3000, () => {})
        