
const express = require('express')
import {handler9392} from "./handler9392";
const app = express()
app.get('/9392', handler9392)
app.listen(3000, () => {})
        