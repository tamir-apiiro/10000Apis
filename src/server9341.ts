
const express = require('express')
import {handler9341} from "./handler9341";
const app = express()
app.get('/9341', handler9341)
app.listen(3000, () => {})
        