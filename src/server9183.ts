
const express = require('express')
import {handler9183} from "./handler9183";
const app = express()
app.get('/9183', handler9183)
app.listen(3000, () => {})
        