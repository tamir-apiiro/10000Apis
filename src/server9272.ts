
const express = require('express')
import {handler9272} from "./handler9272";
const app = express()
app.get('/9272', handler9272)
app.listen(3000, () => {})
        