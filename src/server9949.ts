
const express = require('express')
import {handler9949} from "./handler9949";
const app = express()
app.get('/9949', handler9949)
app.listen(3000, () => {})
        