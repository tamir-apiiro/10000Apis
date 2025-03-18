
const express = require('express')
import {handler2796} from "./handler2796";
const app = express()
app.get('/2796', handler2796)
app.listen(3000, () => {})
        