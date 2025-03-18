
const express = require('express')
import {handler9774} from "./handler9774";
const app = express()
app.get('/9774', handler9774)
app.listen(3000, () => {})
        