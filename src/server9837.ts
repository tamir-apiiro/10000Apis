
const express = require('express')
import {handler9837} from "./handler9837";
const app = express()
app.get('/9837', handler9837)
app.listen(3000, () => {})
        