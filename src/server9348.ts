
const express = require('express')
import {handler9348} from "./handler9348";
const app = express()
app.get('/9348', handler9348)
app.listen(3000, () => {})
        