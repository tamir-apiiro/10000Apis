
const express = require('express')
import {handler9037} from "./handler9037";
const app = express()
app.get('/9037', handler9037)
app.listen(3000, () => {})
        