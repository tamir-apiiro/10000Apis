
const express = require('express')
import {handler4421} from "./handler4421";
const app = express()
app.get('/4421', handler4421)
app.listen(3000, () => {})
        