
const express = require('express')
import {handler9629} from "./handler9629";
const app = express()
app.get('/9629', handler9629)
app.listen(3000, () => {})
        