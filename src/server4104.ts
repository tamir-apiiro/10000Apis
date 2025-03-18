
const express = require('express')
import {handler4104} from "./handler4104";
const app = express()
app.get('/4104', handler4104)
app.listen(3000, () => {})
        