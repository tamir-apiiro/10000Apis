
const express = require('express')
import {handler4243} from "./handler4243";
const app = express()
app.get('/4243', handler4243)
app.listen(3000, () => {})
        