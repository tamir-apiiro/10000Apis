
const express = require('express')
import {handler4456} from "./handler4456";
const app = express()
app.get('/4456', handler4456)
app.listen(3000, () => {})
        