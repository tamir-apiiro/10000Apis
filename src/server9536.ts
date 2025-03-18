
const express = require('express')
import {handler9536} from "./handler9536";
const app = express()
app.get('/9536', handler9536)
app.listen(3000, () => {})
        