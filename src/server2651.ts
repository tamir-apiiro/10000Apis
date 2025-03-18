
const express = require('express')
import {handler2651} from "./handler2651";
const app = express()
app.get('/2651', handler2651)
app.listen(3000, () => {})
        