
const express = require('express')
import {handler9676} from "./handler9676";
const app = express()
app.get('/9676', handler9676)
app.listen(3000, () => {})
        