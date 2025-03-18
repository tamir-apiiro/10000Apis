
const express = require('express')
import {handler4768} from "./handler4768";
const app = express()
app.get('/4768', handler4768)
app.listen(3000, () => {})
        