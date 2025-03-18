
const express = require('express')
import {handler2641} from "./handler2641";
const app = express()
app.get('/2641', handler2641)
app.listen(3000, () => {})
        