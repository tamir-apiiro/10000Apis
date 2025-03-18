
const express = require('express')
import {handler9365} from "./handler9365";
const app = express()
app.get('/9365', handler9365)
app.listen(3000, () => {})
        