
const express = require('express')
import {handler9152} from "./handler9152";
const app = express()
app.get('/9152', handler9152)
app.listen(3000, () => {})
        