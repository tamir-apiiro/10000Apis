
const express = require('express')
import {handler651} from "./handler651";
const app = express()
app.get('/651', handler651)
app.listen(3000, () => {})
        