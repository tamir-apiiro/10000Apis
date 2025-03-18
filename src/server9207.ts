
const express = require('express')
import {handler9207} from "./handler9207";
const app = express()
app.get('/9207', handler9207)
app.listen(3000, () => {})
        