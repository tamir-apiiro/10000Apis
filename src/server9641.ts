
const express = require('express')
import {handler9641} from "./handler9641";
const app = express()
app.get('/9641', handler9641)
app.listen(3000, () => {})
        