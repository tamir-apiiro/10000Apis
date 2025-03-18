
const express = require('express')
import {handler2859} from "./handler2859";
const app = express()
app.get('/2859', handler2859)
app.listen(3000, () => {})
        