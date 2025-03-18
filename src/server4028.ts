
const express = require('express')
import {handler4028} from "./handler4028";
const app = express()
app.get('/4028', handler4028)
app.listen(3000, () => {})
        