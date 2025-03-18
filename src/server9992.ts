
const express = require('express')
import {handler9992} from "./handler9992";
const app = express()
app.get('/9992', handler9992)
app.listen(3000, () => {})
        