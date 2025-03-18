
const express = require('express')
import {handler9728} from "./handler9728";
const app = express()
app.get('/9728', handler9728)
app.listen(3000, () => {})
        