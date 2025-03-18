
const express = require('express')
import {handler4906} from "./handler4906";
const app = express()
app.get('/4906', handler4906)
app.listen(3000, () => {})
        