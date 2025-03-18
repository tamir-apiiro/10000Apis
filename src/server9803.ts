
const express = require('express')
import {handler9803} from "./handler9803";
const app = express()
app.get('/9803', handler9803)
app.listen(3000, () => {})
        