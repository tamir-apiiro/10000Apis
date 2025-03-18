
const express = require('express')
import {handler9241} from "./handler9241";
const app = express()
app.get('/9241', handler9241)
app.listen(3000, () => {})
        