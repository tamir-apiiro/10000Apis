
const express = require('express')
import {handler2878} from "./handler2878";
const app = express()
app.get('/2878', handler2878)
app.listen(3000, () => {})
        