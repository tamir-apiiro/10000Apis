
const express = require('express')
import {handler9807} from "./handler9807";
const app = express()
app.get('/9807', handler9807)
app.listen(3000, () => {})
        