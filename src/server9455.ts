
const express = require('express')
import {handler9455} from "./handler9455";
const app = express()
app.get('/9455', handler9455)
app.listen(3000, () => {})
        