
const express = require('express')
import {handler9867} from "./handler9867";
const app = express()
app.get('/9867', handler9867)
app.listen(3000, () => {})
        