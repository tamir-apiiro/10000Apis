
const express = require('express')
import {handler9764} from "./handler9764";
const app = express()
app.get('/9764', handler9764)
app.listen(3000, () => {})
        