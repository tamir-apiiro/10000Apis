
const express = require('express')
import {handler9335} from "./handler9335";
const app = express()
app.get('/9335', handler9335)
app.listen(3000, () => {})
        