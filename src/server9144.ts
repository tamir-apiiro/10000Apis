
const express = require('express')
import {handler9144} from "./handler9144";
const app = express()
app.get('/9144', handler9144)
app.listen(3000, () => {})
        