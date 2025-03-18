
const express = require('express')
import {handler9938} from "./handler9938";
const app = express()
app.get('/9938', handler9938)
app.listen(3000, () => {})
        