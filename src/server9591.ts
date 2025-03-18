
const express = require('express')
import {handler9591} from "./handler9591";
const app = express()
app.get('/9591', handler9591)
app.listen(3000, () => {})
        