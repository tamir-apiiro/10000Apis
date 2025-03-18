
const express = require('express')
import {handler9572} from "./handler9572";
const app = express()
app.get('/9572', handler9572)
app.listen(3000, () => {})
        