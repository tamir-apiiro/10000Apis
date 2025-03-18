
const express = require('express')
import {handler8878} from "./handler8878";
const app = express()
app.get('/8878', handler8878)
app.listen(3000, () => {})
        