
const express = require('express')
import {handler4963} from "./handler4963";
const app = express()
app.get('/4963', handler4963)
app.listen(3000, () => {})
        