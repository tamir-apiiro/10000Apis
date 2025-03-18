
const express = require('express')
import {handler9249} from "./handler9249";
const app = express()
app.get('/9249', handler9249)
app.listen(3000, () => {})
        