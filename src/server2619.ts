
const express = require('express')
import {handler2619} from "./handler2619";
const app = express()
app.get('/2619', handler2619)
app.listen(3000, () => {})
        