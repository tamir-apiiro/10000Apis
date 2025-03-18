
const express = require('express')
import {handler4174} from "./handler4174";
const app = express()
app.get('/4174', handler4174)
app.listen(3000, () => {})
        