
const express = require('express')
import {handler348} from "./handler348";
const app = express()
app.get('/348', handler348)
app.listen(3000, () => {})
        