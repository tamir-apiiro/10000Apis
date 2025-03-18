
const express = require('express')
import {handler9032} from "./handler9032";
const app = express()
app.get('/9032', handler9032)
app.listen(3000, () => {})
        