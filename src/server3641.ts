
const express = require('express')
import {handler3641} from "./handler3641";
const app = express()
app.get('/3641', handler3641)
app.listen(3000, () => {})
        