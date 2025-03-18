
const express = require('express')
import {handler9808} from "./handler9808";
const app = express()
app.get('/9808', handler9808)
app.listen(3000, () => {})
        