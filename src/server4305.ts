
const express = require('express')
import {handler4305} from "./handler4305";
const app = express()
app.get('/4305', handler4305)
app.listen(3000, () => {})
        