
const express = require('express')
import {handler9385} from "./handler9385";
const app = express()
app.get('/9385', handler9385)
app.listen(3000, () => {})
        