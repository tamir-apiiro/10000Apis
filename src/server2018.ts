
const express = require('express')
import {handler2018} from "./handler2018";
const app = express()
app.get('/2018', handler2018)
app.listen(3000, () => {})
        