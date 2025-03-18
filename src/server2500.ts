
const express = require('express')
import {handler2500} from "./handler2500";
const app = express()
app.get('/2500', handler2500)
app.listen(3000, () => {})
        