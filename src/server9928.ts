
const express = require('express')
import {handler9928} from "./handler9928";
const app = express()
app.get('/9928', handler9928)
app.listen(3000, () => {})
        