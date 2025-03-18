
const express = require('express')
import {handler9778} from "./handler9778";
const app = express()
app.get('/9778', handler9778)
app.listen(3000, () => {})
        