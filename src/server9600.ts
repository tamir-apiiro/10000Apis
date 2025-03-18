
const express = require('express')
import {handler9600} from "./handler9600";
const app = express()
app.get('/9600', handler9600)
app.listen(3000, () => {})
        