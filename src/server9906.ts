
const express = require('express')
import {handler9906} from "./handler9906";
const app = express()
app.get('/9906', handler9906)
app.listen(3000, () => {})
        