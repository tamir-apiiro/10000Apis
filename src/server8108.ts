
const express = require('express')
import {handler8108} from "./handler8108";
const app = express()
app.get('/8108', handler8108)
app.listen(3000, () => {})
        