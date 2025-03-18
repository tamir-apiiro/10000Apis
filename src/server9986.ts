
const express = require('express')
import {handler9986} from "./handler9986";
const app = express()
app.get('/9986', handler9986)
app.listen(3000, () => {})
        