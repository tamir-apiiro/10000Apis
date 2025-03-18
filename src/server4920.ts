
const express = require('express')
import {handler4920} from "./handler4920";
const app = express()
app.get('/4920', handler4920)
app.listen(3000, () => {})
        