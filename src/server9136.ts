
const express = require('express')
import {handler9136} from "./handler9136";
const app = express()
app.get('/9136', handler9136)
app.listen(3000, () => {})
        