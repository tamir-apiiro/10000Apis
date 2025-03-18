
const express = require('express')
import {handler9316} from "./handler9316";
const app = express()
app.get('/9316', handler9316)
app.listen(3000, () => {})
        