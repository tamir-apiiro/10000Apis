
const express = require('express')
import {handler9634} from "./handler9634";
const app = express()
app.get('/9634', handler9634)
app.listen(3000, () => {})
        