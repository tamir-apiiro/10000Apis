
const express = require('express')
import {handler9620} from "./handler9620";
const app = express()
app.get('/9620', handler9620)
app.listen(3000, () => {})
        