
const express = require('express')
import {handler2182} from "./handler2182";
const app = express()
app.get('/2182', handler2182)
app.listen(3000, () => {})
        