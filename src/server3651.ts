
const express = require('express')
import {handler3651} from "./handler3651";
const app = express()
app.get('/3651', handler3651)
app.listen(3000, () => {})
        