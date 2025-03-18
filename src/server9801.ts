
const express = require('express')
import {handler9801} from "./handler9801";
const app = express()
app.get('/9801', handler9801)
app.listen(3000, () => {})
        