
const express = require('express')
import {handler4455} from "./handler4455";
const app = express()
app.get('/4455', handler4455)
app.listen(3000, () => {})
        