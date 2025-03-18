
const express = require('express')
import {handler9347} from "./handler9347";
const app = express()
app.get('/9347', handler9347)
app.listen(3000, () => {})
        