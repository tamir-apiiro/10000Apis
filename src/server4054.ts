
const express = require('express')
import {handler4054} from "./handler4054";
const app = express()
app.get('/4054', handler4054)
app.listen(3000, () => {})
        