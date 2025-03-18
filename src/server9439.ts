
const express = require('express')
import {handler9439} from "./handler9439";
const app = express()
app.get('/9439', handler9439)
app.listen(3000, () => {})
        