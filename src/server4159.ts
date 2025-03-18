
const express = require('express')
import {handler4159} from "./handler4159";
const app = express()
app.get('/4159', handler4159)
app.listen(3000, () => {})
        