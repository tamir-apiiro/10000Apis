
const express = require('express')
import {handler9458} from "./handler9458";
const app = express()
app.get('/9458', handler9458)
app.listen(3000, () => {})
        