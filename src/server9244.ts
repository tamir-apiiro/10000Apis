
const express = require('express')
import {handler9244} from "./handler9244";
const app = express()
app.get('/9244', handler9244)
app.listen(3000, () => {})
        