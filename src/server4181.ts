
const express = require('express')
import {handler4181} from "./handler4181";
const app = express()
app.get('/4181', handler4181)
app.listen(3000, () => {})
        