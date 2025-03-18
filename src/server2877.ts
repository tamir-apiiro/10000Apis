
const express = require('express')
import {handler2877} from "./handler2877";
const app = express()
app.get('/2877', handler2877)
app.listen(3000, () => {})
        