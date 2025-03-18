
const express = require('express')
import {handler9033} from "./handler9033";
const app = express()
app.get('/9033', handler9033)
app.listen(3000, () => {})
        