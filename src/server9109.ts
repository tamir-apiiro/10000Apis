
const express = require('express')
import {handler9109} from "./handler9109";
const app = express()
app.get('/9109', handler9109)
app.listen(3000, () => {})
        