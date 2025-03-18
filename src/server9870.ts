
const express = require('express')
import {handler9870} from "./handler9870";
const app = express()
app.get('/9870', handler9870)
app.listen(3000, () => {})
        