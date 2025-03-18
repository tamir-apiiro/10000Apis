
const express = require('express')
import {handler9889} from "./handler9889";
const app = express()
app.get('/9889', handler9889)
app.listen(3000, () => {})
        