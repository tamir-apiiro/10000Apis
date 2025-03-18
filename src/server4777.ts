
const express = require('express')
import {handler4777} from "./handler4777";
const app = express()
app.get('/4777', handler4777)
app.listen(3000, () => {})
        