
const express = require('express')
import {handler9400} from "./handler9400";
const app = express()
app.get('/9400', handler9400)
app.listen(3000, () => {})
        